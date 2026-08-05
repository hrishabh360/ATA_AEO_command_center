/* ── Theme ── */
function toggleTheme() {
  const html  = document.documentElement;
  const isLight = html.getAttribute('data-theme') === 'light';
  const next  = isLight ? 'dark' : 'light';
  document.body.classList.add('theme-switching');
  html.setAttribute('data-theme', next);
  localStorage.setItem('ata-theme', next);
  const icon = document.getElementById('theme-icon');
  if (icon) icon.className = next === 'light' ? 'ti ti-moon' : 'ti ti-sun';
  setTimeout(() => document.body.classList.remove('theme-switching'), 350);
}

/* ── Init on load ── */
document.addEventListener('DOMContentLoaded', () => {
  /* restore theme icon (theme itself set in <head> to avoid FOUC) */
  const theme = localStorage.getItem('ata-theme') || 'dark';
  const icon  = document.getElementById('theme-icon');
  if (icon) icon.className = theme === 'light' ? 'ti ti-moon' : 'ti ti-sun';

  /* restore API key: prefer config.js (private-host auto-load) over localStorage */
  const configKey = window.ATA_CONFIG && window.ATA_CONFIG.apiKey;
  const saved = (configKey && configKey.trim()) || localStorage.getItem('ata-api-key');
  if (saved) { document.getElementById('api-key').value = saved; checkKey(); }
});

function checkKey() {
  const k = document.getElementById('api-key').value.trim();
  const s = document.getElementById('key-status');
  if (!k) {
    s.textContent = 'No key'; s.className = 'key-status key-none';
    localStorage.removeItem('ata-api-key');
    return;
  }
  if (k.startsWith('sk-ant-')) {
    s.textContent = 'Key ready ✓'; s.className = 'key-status key-ok';
    localStorage.setItem('ata-api-key', k);
  } else {
    s.textContent = 'Check format'; s.className = 'key-status key-bad';
  }
}

function getKey() { return document.getElementById('api-key').value.trim(); }

/* ── Markdown → HTML ── */
function mdToHtml(md) {
  const lines = md.split('\n');
  const out = [];
  let inUl = false, inOl = false;

  function closeList() {
    if (inUl) { out.push('</ul>'); inUl = false; }
    if (inOl) { out.push('</ol>'); inOl = false; }
  }

  function inline(s) {
    return s
      .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>');
  }

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (/^### (.+)/.test(line))     { closeList(); out.push('<h3>' + inline(line.replace(/^### /, '')) + '</h3>'); continue; }
    if (/^## (.+)/.test(line))      { closeList(); out.push('<h2>' + inline(line.replace(/^## /, '')) + '</h2>'); continue; }
    if (/^# (.+)/.test(line))       { closeList(); out.push('<h1>' + inline(line.replace(/^# /, '')) + '</h1>'); continue; }
    if (/^\d+\. (.+)/.test(line))   { if (!inOl) { if (inUl) { out.push('</ul>'); inUl = false; } out.push('<ol>'); inOl = true; } out.push('<li>' + inline(line.replace(/^\d+\. /, '')) + '</li>'); continue; }
    if (/^[-*] (.+)/.test(line))    { if (!inUl) { if (inOl) { out.push('</ol>'); inOl = false; } out.push('<ul>'); inUl = true; } out.push('<li>' + inline(line.replace(/^[-*] /, '')) + '</li>'); continue; }
    if (/^---+$/.test(line.trim())) { closeList(); out.push('<hr>'); continue; }
    closeList();
    if (line === '') { out.push('<br>'); } else { out.push('<p>' + inline(line) + '</p>'); }
  }
  closeList();
  return out.join('');
}

/* ── Copy output ── */
let _rawOutput = '';

function copyOut() {
  navigator.clipboard.writeText(_rawOutput).then(() => {
    const btn = document.getElementById('copy-btn');
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="ti ti-check"></i> Copied ✓';
    setTimeout(() => { btn.innerHTML = orig; }, 2000);
  });
}

/* ── Run a tool ── */
async function run(system, promptFn) {
  const key = getKey();
  if (!key || !key.startsWith('sk-ant-')) {
    alert('Please paste a valid Anthropic API key (sk-ant-...) at the top first.');
    return;
  }
  const btn     = document.getElementById('run-btn');
  const out     = document.getElementById('out');
  const copyBtn = document.getElementById('copy-btn');
  const orig    = btn.innerHTML;

  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> Running…';
  out.className = 'output loading';
  out.innerHTML = '<span class="loading-text">Calling Claude API…</span>';
  copyBtn.classList.add('hidden');

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 2500,
        system,
        messages: [{ role: 'user', content: promptFn() }]
      })
    });
    const data = await res.json();
    if (data.error) {
      out.className = 'output empty';
      out.textContent = 'API error: ' + data.error.message;
    } else {
      const text = (data.content || []).map(b => b.text || '').join('');
      if (text) {
        _rawOutput = text;
        out.className = 'output rendered';
        out.innerHTML = mdToHtml(text);
        copyBtn.classList.remove('hidden');
      } else {
        out.className = 'output empty';
        out.textContent = 'No response received.';
      }
    }
  } catch (e) {
    out.className = 'output empty';
    out.textContent = 'Network error: ' + e.message + '\n\nMake sure your API key is correct and you have credits at console.anthropic.com';
  }

  btn.disabled = false;
  btn.innerHTML = orig;
}
