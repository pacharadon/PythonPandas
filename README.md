# PacharaDon's PythonPandasSQL Bootcamp

> **Live, in-browser SQL + Python trainer** modeled after the Alooba assessment used by Shopee, Lazada, and Agoda for analytics-role hiring. Real query execution. Real-world schemas. Concept-then-quiz flow with progressive hints and side-by-side answer diff.

**Built by [@PacharaDon](https://github.com/PacharaDon)** — for SEA data analyst interview prep.

---

## ⚡ Try it in 5 seconds

Open `index.html` in any modern browser. Done. No build. No install.

```bash
# macOS / Linux
open index.html

# Windows
start index.html
```

[**Live demo (GitHub Pages)**](https://pacharadon.github.io/SQLPandas/) ← *(replace `PacharaDon` with your GitHub username after pushing)*

---

## 🎯 What's inside

**19 sequential lessons** that take you from "what does `[[ ]]` mean?" to "I can build a pivot table from a SQL query and chart it in matplotlib".

**85 quiz questions** with progressive difficulty — easy SELECT/WHERE → hard window functions + recursive CTEs.

**3 research-grade schemas** based on the actual companies' product surfaces:
- **Shopee APAC** — `J&T/ShopeeXpress/NinjaVan/Kerry/Pos Laju` carriers, `MALL/STAR+/PREFERRED/NORMAL` seller tiers, `SPayLater/ShopeePay/SeaBank` payment channels, Shopee Live streaming, returns/refunds workflow
- **Lazada Group** — `LazMall` premium tier, `LazPlus` membership, `LazPay/Touch_n_Go/GCash/Boost` wallets, `LEX` (in-house) + `NinjaVan/JNT/PosLaju/SkyNet` couriers, RedMart grocery, LazLive streaming
- **Agoda OTA** — `ARI` (Availability/Rate/Inventory) feed, `AgodaCash` loyalty wallet, channel-level commission structure (`direct_app` vs `Trivago/Skyscanner/affiliate`), partner chains (Marriott/Accor/IHG/Hilton/Hyatt)

**Real query execution** via `sql.js` — your queries actually run against real data in the browser.

**On second wrong attempt** — side-by-side comparison of YOUR output vs EXPECTED output with cell-level red highlighting.

**Built-in AI Helper** (right side panel):
- **Direct Claude integration** — paste your Anthropic API key from [console.anthropic.com](https://console.anthropic.com/settings/keys) and chat live in the panel
- Model picker: Haiku 4.5 (cheap/fast) · Sonnet 4.6 (smart) · Opus 4.6 (smartest)
- One-click handoff to ChatGPT (copies a context-rich prompt + opens chatgpt.com)
- Quick-prompt buttons: Explain · Hint only · Why wrong? · Similar example

---

## 📚 Curriculum

### Foundations (Python + Pandas + Charts)
1. **Python Symbols & Syntax** — `()` `[]` `{}` `[[]]`, `=` vs `==`, `&` vs `and`, slicing, chaining
2. **Python: Functions & Errors** — `def`/`return`/`lambda`, `try/except`, common error types
3. **Pandas Essentials** — DataFrame vs Series, filtering, `.loc`/`.iloc`, groupby, merge
4. **Pandas: Missing Data** — NaN, `.isna()`, `.fillna()`, `.dropna()`, ffill/bfill
5. **Pandas: Modify Columns** — `.assign()`, `np.where`, `pd.cut`, `.map()`, `.apply()`
6. **Pandas: Dates & Strings** — `pd.to_datetime`, `.dt`/`.str` accessors, regex
7. **Pandas: Stats / Pivot / Concat** — `.describe()`, `.value_counts()`, `pivot_table`, `crosstab`, `concat`, `drop_duplicates`
8. **Setup (DB connect)** — `pip install pandas`, `pd.read_sql`, the bridge from SQL to Python
9. **Matplotlib (Charts)** — bar/line/scatter/hist — the basics
10. **Matplotlib Pro** — `df.plot()` shortcut, `plt.subplots()` dashboards, themes, annotations
11. **Python: in / for / comp** — loops, membership, list comprehensions

### SQL (Alooba-test focused)
12. **Foundations** — SELECT, FROM, WHERE, ORDER BY, LIMIT, IN, BETWEEN, LIKE, IS NULL
13. **Aggregation** — COUNT, SUM, AVG, GROUP BY, HAVING, COUNT(DISTINCT)
14. **Joins** — INNER / LEFT / RIGHT / FULL ± WHERE NULL, anti-joins, fan-out gotchas
15. **Window Functions** — ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, frames
16. **CTEs & Subqueries** — WITH, recursive CTEs, scalar/IN/EXISTS subqueries
17. **Conditional & Nulls** — CASE WHEN, COALESCE, NULLIF, conditional aggregation
18. **Strings & Dates** — SUBSTR/INSTR/LIKE/GLOB, strftime/julianday, date math
19. **Advanced Patterns** — UNION/UNION ALL, self-joins, gaps & islands

### Practice (85 questions)
- **Shopee** — 35 questions, easy → hard, all 8 SQL categories
- **Lazada** — 27 questions, easy → hard, all 8 SQL categories
- **Agoda** — 23 questions, easy → hard, all 8 SQL categories

---

## 🚀 How it works

1. **Read the lesson** — concept explanation, glossary, rules, plus a runnable example
2. **Click "Got it, start the quiz"** — moves to the next task
3. **Write your SQL** in the editor; click **Run Code** to preview your output
4. **Click Submit** — your output is compared to the reference. Right? Move on. Wrong? You see your output. Wrong twice? Side-by-side diff with the expected.
5. **Stuck?** Use the AI Helper panel: type your question + click **Ask Claude** for a contextual answer. Claude sees this exact question, your code, and the expected solution.

---

## 🔧 Tech stack

- **React 18** (UMD via CDN) — UI
- **Tailwind CSS** (CDN) — styling
- **Babel Standalone** — JSX in the browser
- **sql.js 1.10** — SQLite compiled to WASM, runs queries client-side
- **Anthropic Claude API** (optional, for in-app chat — Haiku 4.5 default)

**No build step. No backend. No install.** One HTML file, ~230 KB.

---

## 📂 Files

```
SQLPandas/
├── index.html       # The full app — open in any browser.
├── README.md             # You are here.
├── canvas.jsx            # React component extract for claude.ai artifacts / Canvas-style sandboxes.
├── .gitignore
└── 1-UPLOAD-TO-GITHUB.bat / 2-AUTO-PUSH-WITH-GH.bat   # Helper scripts (Windows)
```

---

## 🌐 Deploy your own (free, ~2 min)

### Option 1 — GitHub Pages (recommended for portfolio)

1. Push this repo to GitHub (any name, e.g. `SQLPandas`)
2. Go to **Settings → Pages**
3. **Source** = `Deploy from a branch` · **Branch** = `main` · **Folder** = `/ (root)`
4. Save. Wait 60 seconds.
5. Live at `https://pacharadon.github.io/SQLPandas/`

### Option 2 — Netlify (drag & drop)

1. Go to https://app.netlify.com/drop
2. Drag the `sql-master/` folder onto the page
3. Live at a `*.netlify.app` URL in seconds

### Option 3 — Vercel

1. https://vercel.com/new → import the GitHub repo → deploy

All three are free. GitHub Pages is the most "portfolio-credible" — it shows up on your GitHub profile.

---

## 💼 Use cases

- **Interview prep** — for Alooba SQL assessments at Shopee, Lazada, Agoda, and other SEA tech companies
- **Self-paced training** — full Python + pandas + matplotlib + SQL bootcamp in one HTML file
- **Teaching tool** — share with juniors, classmates, mentees
- **Portfolio piece** — link from your CV / LinkedIn to demonstrate end-to-end product thinking
- **Reference card** — keep the lessons section handy as a daily cheat sheet at work

---

## 📊 Why this approach works

Most SQL learning material has the same problem: **it teaches concepts in isolation, then tests on a generic schema you don't care about.** This bootcamp does the opposite:

1. **Concept first, in plain language** — every lesson explains _what / when / written-vs-execution-order / pandas equivalent / glossary / rules_ before any quiz.
2. **Realistic schemas** — three SEA companies you might actually interview at, with company-specific terminology (LazMall, AgodaCash, Shopee Live, etc.).
3. **Real execution** — your SQL hits actual SQLite running in your browser. No "guess the answer" — you see your real output.
4. **Progressive feedback** — first wrong attempt = nudge. Second wrong = side-by-side diff. Encourages real learning, not memorization.
5. **Pandas alongside SQL** — every concept lesson includes the pandas equivalent so you build both skills simultaneously.

---

## 🤝 Contributing

Spot a bug, a wrong column, a confusing explanation? Open an issue or PR. Especially welcome:
- More questions per schema
- Additional schemas (TikTok Shop SEA, Grab, etc.)
- More realistic seed data
- Translations of lessons (Thai, Bahasa, Vietnamese, etc.)

---

## 📜 License

**Paid personal license — not free, not MIT, not redistributable.**

This bootcamp is a paid resource maintained by [@pacharadon](https://github.com/pacharadon). Each purchase gets a personal license tied to your GitHub account and a unique access link.

**Pricing — one-time payment:**

| Region | Price | Payment method |
|---|---|---|
| 🇹🇭 Thailand | **600 THB** | PromptPay QR (sent on request) |
| 🌏 Southeast Asia (non-Thai) | **$25 USD** | QR (sent on request) |
| 🌐 Rest of world | **$25 USD** | PayPal |

**Your license covers:**
- Personal use of the trainer for interview prep
- Access to all 36 micro-lessons + 85 SQL questions + AI Helper
- Lifetime access to future updates

**Your license does NOT cover:**
- Redistribution, sharing, or republishing the file
- Reselling or sublicensing
- Commercial use (e.g. inside your own paid training product)

**To purchase / request access** — email **motherducker@leadflo.tech** with:
- Your name
- Your country (so I send the right pricing + payment method)
- Your GitHub username

I'll send the QR code (Thai/SEA) or PayPal link (global) and the access link + license within 24h.

If you're using this without a license, please get in touch and pay — it's the only thing keeping this project alive.

---

## 🙏 Credits

- **Schemas** inspired by the [Alooba](https://alooba.com) assessment platform's published examples and public-knowledge product surfaces of Shopee, Lazada, Agoda
- Built collaboratively with [Claude](https://claude.com) (Anthropic) — Sonnet 4.6
- SQL execution via [sql.js](https://github.com/sql-js/sql.js); Python via [Pyodide](https://pyodide.org)

---

**Built in 2026 by Pachara Don. For SEA analysts who want to break in.**
