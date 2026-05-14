# Data Analyst Prep — Portfolio Notes

**Built by danny_pachara_DS** · [@pacharadon](https://github.com/pacharadon)

## TL;DR

A self-graded prep platform for data-analyst assessments at **Shopee**, **Lazada**,
and **Agoda (Alooba)**. 72 topics across Python foundations, pandas core, SQL
essentials, and business/stats reasoning. Every code exercise runs in-browser
against seeded datasets (Pyodide for Python, sql.js for SQL); every submission
is graded against the lesson's rubric.

- **Live:** https://pacharadon.github.io/SQLPandas/prep/
- **Source:** [/prep-source](./)
- **Curriculum:** [CURRICULUM.md](CURRICULUM.md)

## Why I built it

Preparing for SEA data-analyst screens, I noticed the existing prep landscape
is mismatched to what these companies actually test. LeetCode SQL skips the
business reasoning. Generic pandas courses skip the e-commerce-specific
metrics. Alooba's question pool emphasises window functions, CTEs, and A/B
test reasoning at a depth most resources don't hit.

So I reverse-engineered the test scope and built a focused curriculum + the
sandbox to practise against.

## Architecture (one-paragraph version)

A single-page React app served as a static GitHub Pages build. Lessons are
JS data structures in `src/courseData.js` (the runtime source of truth). The
Run button lazy-loads either Pyodide (~10MB Python+pandas) or sql.js (~1.5MB
SQLite) from jsDelivr, seeds a deterministic 200-row `orders` / 60-row
`customers` / 120-row `bookings` dataset (same data for both runtimes), and
executes user code against it. Submit forwards both code AND execution output
to a rubric-driven grader; the grader returns `{status, feedback}` as JSON.
Mock-assessment mode samples 1 pandas + 3 SQL + 2 business questions, runs a
45-min timer, and batch-grades at the end with an overall pass-likelihood
estimate. No backend — the model API key lives in the user's `localStorage`,
set via a modal on first visit.

## Stack

| Layer | Choice | Why |
|---|---|---|
| UI | React 18 + Tailwind | familiar, single-page is the right shape |
| Build | Vite 7 | fast HMR, zero-config |
| Python runtime | Pyodide 0.26 | full pandas, no server |
| SQL runtime | sql.js 1.10 | SQLite-WASM, supports window functions + CTEs |
| Grader API | Messages-style external model API | rubric-driven, returns structured JSON |
| Hosting | GitHub Pages | free, static, public |
| State | in-memory + localStorage (API key only) | no accounts, no backend |

## Calibration to the targets

| Module | Topics | Maps to |
|---|---|---|
| Foundations (1.1-1.12) | Python basics | Shopee take-home preamble |
| Collections (2.1-2.12) | lists/dicts/Counter | "given JSON, build a DataFrame" warm-ups |
| Logic & Comprehensions (3.1-3.12) | mental-model bridge to vectorised pandas | the operator trap (`&` vs `and`) — Alooba probe |
| Pandas Core (4.1-4.12) | groupby, merge, reshape, time series | Lazada / Shopee bread and butter |
| SQL Essentials (5.1-5.12) | joins, windows, CTEs, NTILE, EXPLAIN | Alooba / Agoda heaviest weight |
| Business & Stats (6.1-6.12) | metrics, A/B, cohort, elasticity, SRM | all three; business-case interview round |

## What I learned shipping this

1. **Reverse-engineering the assessment IS the prep.** Spending a day enumerating
   what a target actually tests beats a week of generic study.
2. **Run-it-or-it-isn't-real.** I had a v1 that only graded code by reading
   it. v3 added live Python execution. The grader gets way better when it sees
   actual outputs alongside code.
3. **Mock mode is the truth serum.** Practice-mode passing != mock-mode
   passing. The timer changes everything.

---

If you got this far in a portfolio screen and want to ping me:
- GitHub: [@pacharadon](https://github.com/pacharadon)
- Repo: https://github.com/pacharadon/SQLPandas
