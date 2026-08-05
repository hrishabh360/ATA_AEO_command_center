# AEO Command Center — User Guide

Complete guide for using the six tools to get Spiral cited by AI engines.

---

## Table of Contents

1. [What Is AEO and Why It Matters](#1-what-is-aeo-and-why-it-matters)
2. [Getting Started — API Key Setup](#2-getting-started--api-key-setup)
3. [Recommended Workflow](#3-recommended-workflow)
4. [Tool 1: Content Gap Analyzer](#4-tool-1-content-gap-analyzer)
5. [Tool 2: AEO Content Optimizer](#5-tool-2-aeo-content-optimizer)
6. [Tool 3: Reddit Opportunity Monitor](#6-tool-3-reddit-opportunity-monitor)
7. [Tool 4: Citation-Worthy Content Generator](#7-tool-4-citation-worthy-content-generator)
8. [Tool 5: Brand Citation Tracker](#8-tool-5-brand-citation-tracker)
9. [Tool 6: Page Planner](#9-tool-6-page-planner)
10. [Understanding Output Quality](#10-understanding-output-quality)
11. [Troubleshooting](#11-troubleshooting)
12. [AEO Quick Reference](#12-aeo-quick-reference)

---

## 1. What Is AEO and Why It Matters

**AEO (Answer Engine Optimization)** is the practice of structuring web content so that AI engines — ChatGPT, Perplexity, Claude, Google AI Overviews — cite your pages when answering buyer questions.

Traditional SEO gets you ranked on page 1. AEO gets your words quoted directly inside AI-generated answers that millions of buyers see before they even open a browser tab.

### The Problem This App Solves

When a VP of Customer Experience asks ChatGPT *"What are the best conversation intelligence platforms?"*, AI engines scan the web and cite the 10–15 sources they consider most authoritative. Right now, Spiral appears in **0 of 13** category roundups that these engines draw from. That means every buyer asking AI for a recommendation gets directed to competitors — CallMiner, Verint, Qualtrics — without Spiral ever appearing.

This app gives you the tools to close that gap systematically.

### How AI Engines Decide What to Cite

AI engines favor content that:
- Directly answers a question in the first 1–2 sentences (snippet-ready)
- Uses factual, specific data (stats, named customers, percentages)
- Follows a structured format (headings, Q&A blocks, bullet facts)
- Comes from a domain with topical authority in its niche
- Appears in comparison roundups and definition pages, not just product pages

---

## 2. Getting Started — API Key Setup

All AI features require an Anthropic API key. This is a personal key tied to your Anthropic account — the app never stores it on a server.

### Step-by-Step

1. Go to **[console.anthropic.com](https://console.anthropic.com)**
2. Sign up or log in
3. Click **API Keys** in the left sidebar
4. Click **Create Key** — copy the key (starts with `sk-ant-`)
5. Open the AEO Command Center (`index.html`)
6. Paste the key into the key bar at the top of the dashboard

The key bar turns green and shows **"Key ready ✓"** when the format is valid. The key is saved to your browser's `localStorage` — it persists across all six tool pages without needing to re-enter it.

### Cost

Each tool run makes one API call. Claude Sonnet 4.6 costs roughly **$0.003–$0.008 per run** depending on output length (max 2500 tokens). Running all six tools daily for a week costs under $0.50.

### Privacy

Your key is stored only in your browser's localStorage. It is sent directly to `api.anthropic.com` — no proxy, no third-party server. Closing or clearing your browser removes it.

### Auto-load for private/hosted deployments

If the app is hosted somewhere access-gated (e.g. a password-protected internal server), you can skip manual pasting entirely: copy `assets/js/config.example.js` to `assets/js/config.js` and set `apiKey` there. It's gitignored — never commit it. Each page loads `config.js` before `app.js`, and the key bar auto-populates and shows "Key ready ✓" on load. This is the same key, still sent only to `api.anthropic.com`; the only difference is where it's read from.

---

## 3. Recommended Workflow

Run the tools in this order for maximum efficiency:

```
Week 1 — Audit & Prioritize
  ① Citation Tracker    → understand where Spiral stands today
  ② Content Gap         → find what questions to answer first

Week 1–2 — Plan
  ③ Page Planner        → generate briefs for the 4 priority pages

Week 2–4 — Create
  ④ Content Generator   → draft the actual page content
  ⑤ AEO Optimizer       → polish existing pages for citation

Ongoing — Monitor & Engage
  ⑥ Reddit Monitor      → find conversations to participate in weekly
```

This order ensures you understand the gap before creating content, and create content before engaging in communities.

---

## 4. Tool 1: Content Gap Analyzer

**What it does:** Identifies the questions your target buyers ask on Reddit, LinkedIn, and Quora that aitrustedadvisors.com isn't currently answering — the exact topics where competitors get cited by AI engines instead.

### When to Use It

- At the start of any content planning cycle
- When you want to discover new keyword/topic clusters
- Before deciding what to write next

### How to Use

1. Open **Content Gap Analyzer** from the dashboard
2. **Niche field** — describes your market. The default (`customer intelligence platform, conversation analytics, AI voice agents, contact center CX`) is pre-filled from the audit. Adjust if you're exploring a new segment.
3. **Topics your site already covers** — tells the AI what NOT to suggest (to avoid duplicates). Update this as you publish new content.
4. Click **Analyze**

### Reading the Output

The tool returns 8 gaps, each with:
- **The exact question** buyers ask (e.g., "how do I know if my contact center AI is actually working?")
- **Where they ask it** (subreddit or platform)
- **Why AI engines cite a good answer** (the citation trigger)
- **A content angle** specific to Spiral's proof points

### What to Do With Results

- Pick the 2–3 gaps that align with the four priority pages
- Use **Tool 4 (Content Generator)** or **Tool 6 (Page Planner)** to create content for them
- Use **Tool 3 (Reddit Monitor)** to find live threads on those exact questions

### Pro Tips

- Run it twice with different niche descriptions to surface different angles (e.g., try `"voice of customer, customer feedback analysis"` vs. the default)
- The output is strongest for commercial/informational queries — it's less useful for pure brand queries

---

## 5. Tool 2: AEO Content Optimizer

**What it does:** Takes any existing page — homepage copy, product description, blog post — and rewrites it for maximum AI citation potential. Adds a snippet-ready opening, FAQ blocks, a key-facts section, and authoritative language AI engines extract verbatim.

### When to Use It

- Before publishing or updating any page on aitrustedadvisors.com
- When a page is live but getting no citations
- After content gaps are identified, to upgrade related existing pages

### How to Use

1. Open **AEO Content Optimizer**
2. **Paste your existing page content** into the textarea. This can be:
   - Raw copy-pasted text from your CMS or website
   - A Google Doc export
   - Existing HTML body text (HTML tags are OK — the AI handles them)
3. **Page type / goal** — tell the AI what this page is for. Examples:
   - `/spiral — product hub page`
   - `/compare/best-conversation-intelligence-platforms — comparison article`
   - `Homepage — reframe Spiral as primary product`
4. Click **Optimize**

### What the Output Includes

1. **Authoritative definition / direct answer** at the top — this is what AI engines pull as a snippet
2. **3–5 FAQ-style Q&A blocks** — structured for featured snippets and AI citations
3. **Key facts bullet section** — specific stats and proof points AI engines extract as citations
4. **Inline authoritative claims** — language calibrated to sound like an industry analyst (not marketing copy)

### What to Do With Results

- Copy the output (click the **Copy** button)
- Use it as the new draft in your CMS — it's publish-ready
- Review proof points for accuracy (AI may interpolate; verify Turo/Remitly stats before publishing)
- The FAQ section can be turned into JSON-LD FAQ schema for additional SEO benefit

### Pro Tips

- Paste long-form content (500–2000 words) for best results; very short inputs get thin rewrites
- Include your current page's H1 and meta description in the textarea — the optimizer will improve them too
- Run it once for the full rewrite, then run it again with the output to tighten further

---

## 6. Tool 3: Reddit Opportunity Monitor

**What it does:** Fetches real, live Reddit posts matching your keywords, then generates specific reply angles your team can use to participate authentically in those conversations — building brand presence where AI engines index discussion.

This is a **two-step tool**:
- **Step 1:** Fetch live posts (pulls real Reddit data)
- **Step 2:** Generate reply angles (sends those real posts to Claude for analysis)

### Why Reddit Matters for AEO

AI engines — especially Perplexity and Google AI Overviews — heavily index Reddit. A well-placed, high-upvote comment that mentions Spiral in context of a genuine answer gets indexed and can appear in AI-generated responses. Reddit engagement is one of the fastest ways to start appearing in AI answers without waiting for a new page to rank.

### How to Use

**Step 1 — Fetch live posts:**
1. Open **Reddit Opportunity Monitor**
2. Enter keywords in the search field. Default: `conversation analytics customer intelligence contact center AI`
3. Choose sort order:
   - **Relevance** — best keyword match (best for finding new threads)
   - **Hot** — trending now (best for high-visibility engagement)
   - **New** — most recent (best for being first to reply)
   - **Top** — highest score (best for understanding what resonates)
4. Set time range (Past month recommended for active threads)
5. Choose how many posts to fetch (15 is the sweet spot)
6. Click **Fetch live posts**

Posts appear as clickable cards showing subreddit, title, upvotes, comment count, and age. Click any card to open the actual Reddit thread in a new tab.

**Step 2 — Generate reply angles:**
1. After posts load, click **Generate reply angles**
2. Claude analyzes each real post and returns:
   - The poster's actual pain point
   - A specific 3–5 sentence reply your team can adapt and post
   - Why this exchange would earn an AI citation

### Running Without Live Posts

If you click **Generate reply angles** before fetching, the tool generates 8 *simulated* Reddit thread types (realistic but not real). This is useful for brainstorming when you're offline or testing. But real-post mode is always better.

### What to Do With Results

- Open the Reddit thread directly from the card
- Adapt the reply angle (don't paste it verbatim — Reddit communities detect copy-paste patterns)
- Add genuine value first; only mention Spiral if it directly solves the stated problem
- Target threads with 50–500 comments — enough visibility, not so large your reply gets buried

### CORS Note

If you get a "Could not reach Reddit's API" error, you're opening the file as `file://`. Run a local server instead:
```bash
npx serve .
```
Then open `http://localhost:3000`.

### Best Subreddits for Spiral

| Subreddit | Why |
|-----------|-----|
| r/CustomerSuccess | VPs and managers evaluating tools |
| r/callcenter | Frontline and ops buyers |
| r/businessanalysis | Analytical buyers who respond to data |
| r/SaaS | Evaluators comparing platforms |
| r/artificial | AI-curious buyers asking tool questions |
| r/CXtoday | CX professionals — direct target audience |
| r/MachineLearning | Credibility with technical evaluators |

---

## 7. Tool 4: Citation-Worthy Content Generator

**What it does:** Generates publish-ready articles, FAQs, guides, definitions, and comparison pieces structured the way AI engines prefer — snippet summary up top, direct answers, specific stats, clear headings.

### When to Use It

- Drafting new content for the four priority pages
- Creating supporting content (definitions, explainers) that earns citations
- Building out the comparison article (`/compare/best-conversation-intelligence-platforms`)

### How to Use

1. Open **Citation-Worthy Content Generator**
2. **Topic / question to answer** — enter the specific question your content should answer. Be specific:
   - Good: `"What is a customer intelligence platform and how does it differ from a CRM?"`
   - Too broad: `"customer intelligence"`
3. **Format** — choose the structure that matches your intent:

| Format | Best For |
|--------|----------|
| **FAQ page** | Pages that answer multiple buyer questions at once; great for citation |
| **Authoritative definition** | Establishing topical authority for a term (e.g., "conversation analytics") |
| **Step-by-step guide** | How-to content with practical value — indexed heavily by AI |
| **Comparison article** | The `/compare/` page; must be balanced to be citable |
| **Stat-rich reference article** | Data-heavy pieces AI engines love to quote |

4. **Target audience** — describe who will read this. The default (`enterprise CX directors, contact center managers, VP of Customer Experience`) is correct for most Spiral content. Adjust for niche pieces.
5. Click **Generate**

### What the Output Includes

- **2-sentence snippet summary** at the top (formatted for AI extraction)
- Full content in the chosen format with clear H2/H3 headings
- Spiral proof points woven in naturally (Turo, Remitly, specific stats)
- **3 related questions** at the end (for internal linking and FAQ schema)

### What to Do With Results

- Copy and paste into your CMS as a first draft
- The snippet summary at the top can become your meta description
- The related questions at the end are your next content ideas
- For comparison articles: verify competitor descriptions are accurate before publishing

### Pro Tips for Each Format

**Comparison article** — specify competitors in the topic field: `"Spiral vs CallMiner vs Verint — best conversation intelligence platform for enterprise CX"`. The AI will structure a balanced comparison. Balanced = citable; promotional = not cited.

**Authoritative definition** — these rank and get cited long-term. Write definitions for: `conversation analytics`, `customer intelligence platform`, `voice of customer`, `contact center AI`. These become evergreen citation assets.

**FAQ page** — ask the AI for 10 questions, then split them into individual FAQ schema items on your page for maximum snippet capture.

---

## 8. Tool 5: Brand Citation Tracker

**What it does:** Simulates what Perplexity or ChatGPT returns for any buyer query, assesses where Spiral currently stands, scores citability (1–10), and delivers a specific action plan tied to the three priority content pages.

### When to Use It

- At the start of a content sprint to establish baseline
- After publishing new content — test whether it's moving the needle
- To identify which competitor is winning citations for a specific query
- Before a client presentation to show current citation gap

### How to Use

1. Open **Brand Citation Tracker**
2. **Query to audit** — enter the query exactly as a buyer would type it into ChatGPT:
   - `"best conversation intelligence platforms 2026"`
   - `"how does Spiral customer intelligence work"`
   - `"Spiral vs CallMiner"`
   - `"what is conversation analytics software"`
3. Click **Audit**

### Reading the Output

The audit returns five sections:

**1. Likely Citation Landscape** — What types of sources and brands AI engines are currently citing for this query. This tells you who you're competing against for citations.

**2. Why Spiral Is NOT Cited** — Specific content and authority gaps. This is the most actionable section. Common reasons:
- No comparison article exists
- Product page lacks definition-first structure
- No third-party roundups mention Spiral
- No FAQ or Q&A content on the topic

**3. Citability Score (1–10)** — A rating with explanation. Current baseline is around 2–3/10 for most queries. Target: 7+/10 within 90 days of executing the priority page plan.

**4. Top 3 Action Items** — Specific content to publish, mapped directly to the three priority pages (`/spiral`, `/spiral/conversation-analytics`, `/compare/`).

**5. Quick Win** — The single highest-leverage thing to publish this week to start appearing in AI answers.

### How to Use Results

- Run the same query once a month to track progress
- Screenshot or copy the citability score as a baseline metric
- Feed the "Why Spiral Is NOT Cited" section directly into Tool 6 (Page Planner) as context

### Key Queries to Track Regularly

| Query | Why It Matters |
|-------|---------------|
| `best conversation intelligence platforms 2026` | Primary commercial intent query |
| `what is conversation analytics software` | Definition query — high AI citation frequency |
| `Spiral customer intelligence` | Brand query — should always return Spiral first |
| `Spiral vs CallMiner` | Comparison query — competitive battleground |
| `best AI for contact center analytics` | Buyer shortlisting query |

---

## 9. Tool 6: Page Planner

**What it does:** Generates a complete, writer-ready content brief for any of the four audit-identified priority pages. The brief tells a writer exactly what to write — target keyword, recommended title/meta/H1, section outline, snippet opportunities, proof points, FAQ items, and internal link plan.

### When to Use It

- Before assigning a page to a writer or starting to write yourself
- To align the team on what each priority page should contain
- As a structured alternative to a lengthy planning meeting

### The Four Priority Pages

| Page | Primary Keyword | Why It's Priority |
|------|----------------|-------------------|
| `/` (Homepage) | AI Trusted Advisors (brand) | H1 still says "AI Receptionist" — must reframe Spiral as primary |
| `/spiral` | customer intelligence platform | Currently ranks for no commercial keyword |
| `/spiral/conversation-analytics` | conversation analytics | Page doesn't exist; AI engines reward definition + product pivot |
| `/compare/best-conversation-intelligence-platforms` | best conversation intelligence platforms | Doesn't exist; AI engines cite roundups most — highest citation leverage |

### How to Use

1. Open **Page Planner**
2. **Priority page** — select the page you're planning from the dropdown
3. **Extra context / notes** — add any specifics:
   - `"use Turo as the primary proof case"`
   - `"target enterprise CX buyers, not SMB"`
   - `"must include a vendor comparison table"`
   - `"launching in Q3, competitor is CallMiner"`
4. Click **Generate brief**

### What the Brief Includes

```
## Page Brief: /[page-path]

Primary keyword + search volume
Page type
Recommended title tag (under 60 chars)
Recommended meta description (under 155 chars)
Recommended H1

### SERP Structure
What top-ranking pages do that earns them their position

### Section Outline
Numbered list of H2s with one-line descriptions

### Snippet Opportunities
2–3 specific answers Spiral should own, written in snippet form

### Proof Points
3–4 specific stats or customers to include

### FAQ (3 items)
Q + 2-sentence answer for each

### Internal Links
Which other priority pages to link to, with anchor text
```

### What to Do With Results

- Copy the brief into a Google Doc or Notion page
- Share with the writer alongside this guide and the Spiral product context
- The recommended H1, title, and meta can be used directly — they are SEO-calibrated
- Snippet opportunities are the most important section: these are the exact passages that AI engines will quote if the page is well-structured

### Start Here: The Comparison Article

The `/compare/best-conversation-intelligence-platforms` brief should be written first. It has the highest citation leverage because:
- AI engines cite comparison roundups in nearly every commercial intent query
- Spiral appearing in 0 of 13 existing roundups means this page is an uncontested new entry
- One well-written, balanced comparison article can move the citability score from 2/10 to 6/10 alone

Run the Page Planner for this page, then use Tool 4 (Content Generator, comparison format) to draft the full article.

---

## 10. Understanding Output Quality

### Why Results Vary

Claude generates responses based on its training data and the prompt. Output quality depends on:
- **How specific your inputs are** — vague inputs produce generic output
- **Context provided** — the tools are pre-loaded with Spiral's proof points; if you clear the default inputs, you lose that grounding
- **Query complexity** — Citation Tracker simulates AI engine behavior based on training data, not real-time web crawling

### Always Verify Before Publishing

- **Statistics** — Check that Turo 74% revenue growth, $8M boost, 86% QA efficiency, etc. are cited accurately. Do not publish AI-generated stats without verification.
- **Competitor claims** — In comparison articles, verify that any claims about CallMiner, Verint, etc. are accurate and fair. Inaccurate comparisons are not citable.
- **URLs and features** — If the AI references specific Spiral features or page URLs, confirm they exist on the live site.

### Getting Better Output

| If the output is... | Try... |
|---------------------|--------|
| Too generic | Add more specific context in the notes/input fields |
| Too short | The tool has a 2500 token limit; ask for one section at a time |
| Too promotional | Add "must be balanced and objective, like an industry analyst" to the notes |
| Missing proof points | Explicitly name the proof point in the notes field |
| Wrong audience | Edit the audience field to be more specific |

---

## 11. Troubleshooting

### "No key" / Key not saving
- Make sure the key starts with `sk-ant-` exactly
- Check that your browser allows localStorage (some privacy browsers block it)
- If using incognito/private mode, the key won't persist between pages — re-enter it on each page

### "Network error" on API calls
- Your Anthropic account may be out of credits — check [console.anthropic.com](https://console.anthropic.com)
- You may have hit rate limits — wait 60 seconds and retry
- Check that you copied the full key (they are long — about 100 characters)

### Reddit "Could not reach Reddit's API"
- You're opening the file as `file://` — use a local server instead:
  ```bash
  npx serve .
  # open http://localhost:3000
  ```
- Alternatively, click the fallback link in the error message to search Reddit directly

### Output cuts off mid-sentence
- The response hit the 2500 token limit
- For long pieces, run the tool again requesting just one section at a time
- A developer can increase `max_tokens` in `assets/js/app.js` (line 119) up to 8192

### Posts not loading / 0 results on Reddit
- Try broader keywords (fewer words, more common terms)
- Switch the time range from "Past week" to "Past month" or "Past year"
- Some queries genuinely have few Reddit discussions — this itself is insight (there's an opportunity to create the authoritative content)

### Theme not switching correctly
- Click the sun/moon icon in the top right
- If the icon is wrong, hard-reload the page (Ctrl+Shift+R / Cmd+Shift+R)

---

## 12. AEO Quick Reference

### What AI Engines Want to Cite

| Signal | What to Do |
|--------|-----------|
| Direct answer first | Put the answer in sentence 1–2, not paragraph 5 |
| Specificity | Use exact numbers: "74% revenue growth" not "significant growth" |
| Named entities | Name customers (Turo, Remitly) and competitors |
| FAQ structure | Use Q&A format with the question as an H3 |
| Topical authority | Cover a topic deeply, not superficially |
| Freshness | Include the current year in titles and content |

### The Three Priority Content Assets (in order)

1. **`/compare/best-conversation-intelligence-platforms`** — One balanced, comprehensive roundup that includes Spiral alongside 5–7 competitors. This is the single highest-leverage piece of content.

2. **`/spiral/conversation-analytics`** — A new page that defines "conversation analytics" authoritatively, then pivots to Spiral's specific approach. Definition pages get cited constantly.

3. **`/spiral`** — Rewrite the product hub to lead with "customer intelligence platform," use the FAQ structure from Tool 2, and include Turo's $8M revenue boost as the lede proof point.

### Citability Checklist for Any Page

Before publishing, check that the page has:
- [ ] A direct, 1–2 sentence answer to the target question in the first paragraph
- [ ] The primary keyword in the H1
- [ ] At least one specific statistic with a named source
- [ ] An FAQ section with at least 3 Q&A pairs
- [ ] Clear H2/H3 structure (no walls of text)
- [ ] At least one named customer proof point
- [ ] Internal links to the other three priority pages
- [ ] Meta description under 155 characters that starts with a direct claim

### Glossary

**AEO** — Answer Engine Optimization. Optimizing content to appear in AI-generated answers, not just traditional search results.

**GEO** — Generative Engine Optimization. Another term for AEO, emphasizing the generative AI aspect.

**Citation** — When an AI engine quotes or links to your content in its response to a user query.

**Snippet** — A short, self-contained passage (1–3 sentences) that directly answers a question. AI engines extract these verbatim.

**Citability score** — A measure (1–10) of how likely an AI engine is to cite a brand's content for a given query. Spiral's current baseline is ~2/10 for most commercial queries.

**Topical authority** — When a website is recognized by search and AI engines as an expert on a specific topic, because it covers that topic comprehensively and accurately.

**Roundup** — A comparison or listicle article covering multiple vendors in a category (e.g., "Best conversation intelligence platforms"). AI engines cite roundups for every commercial intent query — being in roundups is the fastest path to citations.
