# Roadmap

Built by **danny_pachara_DS** · [@pacharadon](https://github.com/pacharadon)

What's next. Pick one phase, finish it, ship, move on.

## ~~Phase 1 — Live Python execution~~ ✅ SHIPPED v3

Run button executes against a seeded `orders` / `customers` / `sales` sandbox
in Pyodide. Output is shown beneath the textarea and forwarded to the AI
grader on submit. See `src/sandbox/pyodide.js`.

## ~~Phase 2 — Live SQL execution~~ ✅ SHIPPED v4

`sql.js` from jsDelivr, lazy-loaded on first SQL Run. Seeded with `orders`
(200) + `customers` (60) + `bookings` (120) — built from the same `data.js`
as the Pyodide sandbox so the two stay in sync. Result sets render as
proper HTML tables under the textarea, capped at 50 rows. Grader receives
columns + rows and can reason about plausibility. See
`src/sandbox/sqljs.js`.

## ~~Phase 3 — Module expansion~~ ✅ SHIPPED v4.1

7 topics added in one batch, taking the curriculum from 14 → 21 topics:

| Topic | Kind |
|---|---|
| **4.4 Merge & Concat** | python · runnable |
| **4.5 Reshape — pivot, melt, stack** | python · runnable |
| **4.6 Time Series — dates & resampling** | python · runnable |
| **5.4 CTEs & Subqueries** | sql · runnable |
| **5.5 Self-Joins** | sql · runnable |
| **6.3 Cohort Retention** | concept |
| **6.4 Pricing & Elasticity** | concept |

Next round of topics should follow the design principle: add one at a time
based on where students actually get stuck.

## ~~Phase 4 — Timed mock-assessment mode~~ ✅ SHIPPED v4.2

Sidebar **Practice / Mock** toggle. Mock mode is full-screen:

- 6 questions sampled fresh each session: 1 pandas (module 4) + 3 SQL (module 5) + 2 business/stats (module 6)
- 45-minute countdown — auto-submits at zero, turns red under 5 min
- Run is enabled (mirrors Alooba); hints are off
- All 6 questions visible simultaneously on one scroll page
- Submit all → sequential batch grading with per-question status + LLM-generated overall takeaway + pass/fail estimate (threshold 4/6)
- Drafts and runs are mock-local — don't pollute Practice progress
- Results page persists until "New mock" or "Back to Practice"

See `src/MockAssessment.jsx`, `src/mock.js`, `summarizeMockResults()` in `src/api/grader.js`.

## Phase 5 — Persistence & accounts (only if multi-user · next up)

- Anonymous progress saved to backend keyed by client UUID
- Optional email to claim across devices
- Proxy endpoints from ARCHITECTURE become real

**Don't build accounts before there's clear demand.**

## Not on the roadmap

- Video content — text + practice beats video for assessment prep
- Mobile-first redesign — people study at laptops
- Gamification (XP, streaks, leaderboards) — distracting
- Spaced repetition — one thorough pass + mock assessments suffices

## How to pick what's next

1. Does it directly affect whether someone passes a Shopee/Lazada/Agoda assessment? If no, deprioritise.
2. Can you ship it in under a week? If no, break it down.

With Phases 1–4 shipped, the platform is feature-complete for a solo learner.
Phase 5 (accounts/persistence) is only worth doing if multiple humans need it.
Otherwise the right next step is to **actually study and ship some prep**.
