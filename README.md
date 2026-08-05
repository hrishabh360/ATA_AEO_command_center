# AEO Command Center

A six-tool web application for getting **Spiral** (AI customer intelligence platform) and **AI Voice Agents** by [aitrustedadvisors.com](https://aitrustedadvisors.com) cited by AI engines — ChatGPT, Perplexity, Claude, and Google AI Overviews.

Built as a zero-dependency, single-origin browser app. No server, no build step, no framework. Open `index.html` and go.

---

## Background

An SEO/AEO audit found that Spiral appears in **0 of 13** category roundups that AI engines typically cite when answering buyer queries like "best conversation intelligence platforms." This app is the operational toolkit to fix that — helping the team identify content gaps, generate citable content, monitor Reddit conversations, and build out the four priority pages the audit identified.

---

## Quick Start

### Option A — Open directly (most features)
Double-click `index.html` or drag it into a browser. All AI tools work. The Reddit live-fetch feature will not work due to browser CORS restrictions on `file://` origins.

### Option B — Serve locally (recommended, enables Reddit)
```bash
npx serve .
# then open http://localhost:3000
```

Or use any static server: VS Code Live Server, Python `http.server`, etc.

### Get an API key
All AI features require an Anthropic API key:
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create an account and navigate to **API Keys**
3. Generate a key starting with `sk-ant-`
4. Paste it into the key bar at the top of any page — it's saved in `localStorage` for the session

---

## Project Structure

```
Reddit Project ATA/
├── index.html              # Dashboard — entry point
│
├── assets/
│   ├── css/styles.css      # All styles (dark + light mode, all components)
│   └── js/app.js           # Shared JS (theme, API calls, markdown renderer, copy)
│
├── pages/
│   ├── content-gap.html        # Tool 1: Content Gap Analyzer
│   ├── aeo-optimizer.html      # Tool 2: AEO Content Optimizer
│   ├── reddit-monitor.html     # Tool 3: Reddit Opportunity Monitor
│   ├── content-generator.html  # Tool 4: Citation-Worthy Content Generator
│   ├── citation-tracker.html   # Tool 5: Brand Citation Tracker
│   └── page-planner.html       # Tool 6: Page Planner
│
├── reviews/
│   ├── aitrustedadvisors-seo-audit.pdf
│   ├── Content-Brief-1-spiral.docx
│   ├── Content-Brief-2-spiral-conversation-analytics.docx
│   ├── Content-Brief-3-best-conversation-intelligence-platforms.docx
│   └── Content-Brief-4-homepage.docx
│
├── API KEY.txt             # Local key storage (do not commit)
├── README.md               # This file
└── GUIDE.md                # Detailed user guide
```

---

## The Six Tools

| # | Tool | Purpose |
|---|------|---------|
| 1 | **Content Gap Analyzer** | Finds questions enterprise CX buyers are asking that Spiral isn't answering — where competitors get cited instead |
| 2 | **AEO Content Optimizer** | Rewrites existing page content for AI citation: adds snippet-ready openings, FAQ blocks, key-facts bullets |
| 3 | **Reddit Opportunity Monitor** | Fetches live Reddit posts by keyword, then generates authentic reply angles grounded in real threads |
| 4 | **Citation-Worthy Content Generator** | Produces publish-ready FAQs, guides, definitions, and comparison articles in AI-citable structure |
| 5 | **Brand Citation Tracker** | Audits where Spiral appears in AI-generated answers and delivers a prioritized 90-day action plan |
| 6 | **Page Planner** | Generates complete, writer-ready content briefs for the four audit-identified priority pages |

---

## Audit-Identified Priority Pages

The SEO/AEO audit identified four pages with the highest citation impact, ranked by priority:

| Priority | Page | Why It Matters |
|----------|------|---------------|
| P1 | `/compare/best-conversation-intelligence-platforms` | AI engines quote roundups most frequently — fastest path to citations |
| P2 | `/spiral` | Primary product hub; currently ranks for no commercial keyword |
| P3 | `/spiral/conversation-analytics` | Does not exist yet; SERP rewards definition + product pivot pages |
| P4 | `/` (Homepage) | H1 still says "AI Receptionist" — Spiral must become primary product |

---

## Technology Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Language | Vanilla JS / HTML / CSS | Zero build step, zero dependencies, runs anywhere |
| AI model | `claude-sonnet-4-6` | Latest Anthropic model as of mid-2026; 2500 max tokens per call |
| API access | Direct browser fetch | `anthropic-dangerous-direct-browser-access: true` header enables browser-to-API calls |
| Fonts | DM Sans + DM Mono (Google Fonts) | Clean, modern, legible at all sizes |
| Icons | Tabler Icons v3.19 (webfont CDN) | 5000+ icons, consistent stroke weight |
| Theme | CSS custom properties + `data-theme` | FOUC-free dark/light switching via inline `<head>` script + localStorage |
| Reddit data | `reddit.com/search.json` (public API) | No auth required; CORS works from `https://` origins |

---

## Key Design Decisions

**No build system.** Every file is valid HTML/CSS/JS. Open in any browser, edit in any text editor.

**Key stored in localStorage.** The API key persists across page navigations within the session but is never sent to any server other than `api.anthropic.com`. Clearing browser data removes it.

**Optional auto-load via `config.js`.** For private/hosted deployments (e.g. a password-gated internal server), copy `assets/js/config.example.js` to `assets/js/config.js` and fill in the key — it's gitignored and loaded before `app.js`, which prefers `window.ATA_CONFIG.apiKey` over the manual-paste flow when present. Falls back to the manual paste + `localStorage` flow when `config.js` is absent (e.g. local dev). Never commit `config.js`.

**Shared `app.js`.** All pages import `../assets/js/app.js`. This file owns: theme switching, key validation, the `run()` API wrapper, the `mdToHtml()` markdown renderer, and the copy-to-clipboard function. Each page defines only its own `runTool()` and calls `run(system, prompt)`.

**Markdown rendering.** Claude responses are in Markdown. `mdToHtml()` converts them to HTML in-browser (headings, bold, italic, code, lists, paragraphs) so output is readable — not a monospace blob.

---

## Spiral Product Context (for prompt editing)

| Item | Detail |
|------|--------|
| Product | Spiral — AI customer intelligence platform |
| Key differentiator | Analyzes 100% of customer conversations vs. 2–5% QA sampling |
| Coverage | All channels: calls, chats, emails, surveys, NPS/CSAT, app reviews, social |
| Core capability | Autonomous root-cause discovery; cross-channel issue classification |
| Financial scoring | Quantifies revenue impact per issue (financial impact scoring) |
| Proof customers | Turo, Remitly, Owlet, Whitepages |
| Key stats | 74% revenue growth (Turo), $8M revenue boost, 86% QA efficiency, 60% faster resolution, 331% 3-year ROI, 40–90% cost reduction |
| Secondary product | AI Voice Agents (inbound + outbound; SOC 2 Type II, HIPAA, GDPR; 50+ languages; 99.9% uptime) |
| Competitors | CallMiner, Verint, Qualtrics, Medallia, Observe.AI, Sprinklr, Level AI |

---

## Development Notes

To add a new tool page:
1. Copy any existing page in `pages/` as a template
2. Update the `<title>`, `page-intro` section, and `class="nav-link active"` on the correct nav item
3. Write your `runTool()` function and call `run(system, prompt)`
4. Add a card to `index.html`'s `.tool-grid` with a unique `--c1`/`--c2` color pair

To update AI behavior, edit the `system` string and `prompt` template inside the page's `runTool()` function. The `run()` wrapper in `app.js` handles everything else.

To increase output length, change `max_tokens: 2500` in `assets/js/app.js` line 119 (Anthropic max is 8192 for Sonnet).
