# Data Analyst Prep — Interactive Course Platform

**Built by Pachara Don Stewart (PDS / "Danny")** · github.com/pacharadon

A self-graded interactive learning platform for preparing for data analyst
assessments at **Shopee**, **Lazada**, and **Agoda** (Alooba).

The goal is not "learn Python." The goal is to pass these specific assessments,
which lean heavily on SQL + pandas + business metrics + light stats.

---

## What it is

- **6 modules / 72 topics** — Python foundations → Pandas → SQL → Business & Stats
- **Automated grading** — every submission is graded against the lesson
  context and a rubric, not by keyword matching
- **Live Python execution** — Run button executes your code against seeded
  `orders` and `customers` DataFrames in Pyodide, in-browser. Stdout/stderr +
  result head shown below the textarea. Submit forwards the run output to the
  grader so it sees what actually happened.
- **Live SQL execution** — same Run button on SQL topics fires a real
  in-browser SQLite (via sql.js) with `orders` / `customers` / `bookings`
  pre-seeded. Result sets render as proper HTML tables; the grader sees rows
  too, not just your query text.
- **Timed mock-assessment mode** — sidebar toggle into a full-screen
  45-min exam: 1 pandas + 3 SQL + 2 business questions, sampled fresh each
  session. Auto-submits at zero. Batch-graded with overall pass/fail estimate
  and an overall takeaway. Drafts stay isolated from Practice mode.
- **Hint button** — gives a one-sentence nudge without spoiling the answer
- **In-memory progress** — session-scoped state, with a Reset button
- **Single-file React component** — easy to drop into any host

---

## Run locally

```bash
npm install
cp .env.example .env.local
# add your Anthropic API key to .env.local
npm run dev
```

Open http://localhost:5173

### API key

The dev setup calls a hosted inference API **directly from the browser**.
That is fine for personal use during development. For anything user-facing,
route calls through a backend — see `ARCHITECTURE.md` for the proxy pattern.

---

## Files to know

| File | What it is |
|---|---|
| `CURRICULUM.md` | The master curriculum — every topic, content, exercise, rubric. Edit this if you want to change the course substance. |
| `ARCHITECTURE.md` | Component structure, grader prompts, state model, Pyodide / sql.js sandboxes, security notes. |
| `ROADMAP.md` | What's next — Phases 1–4 shipped; persistence/accounts only if multi-user demand emerges. |
| `src/CoursePlatform.jsx` | The single-file React component. UI only — pulls data from `courseData.js`, grading from `api/grader.js`, execution from `sandbox/pyodide.js` and `sandbox/sqljs.js`. |
| `src/courseData.js` | The 72-topic curriculum as a JS data structure. Mirror of CURRICULUM.md, kept in sync. |
| `src/api/grader.js` | Thin API wrapper for the grader + hint endpoints. |
| `src/sandbox/pyodide.js` | Lazy Pyodide loader + runner. Seeds the dataset on first init. |
| `src/sandbox/sqljs.js` | Lazy sql.js loader + runner. Creates the same dataset as SQLite tables. |
| `src/sandbox/data.js` | Seeded `orders`/`customers`/`bookings`/`sales` shared by both sandboxes. |
| `src/MockAssessment.jsx` | Full-screen 45-min mock exam. Owns its own drafts/runs so Practice mode stays clean. |
| `src/mock.js` | Question picker, verdict math, timer formatter. |

---

## Goal posture

This is a **prep tool**, not a textbook. Every exercise is calibrated against
what these companies actually test:

- **Shopee / Lazada** — SQL screens (joins, GROUP BY + HAVING, window functions),
  pandas data manipulation, e-commerce metric questions (GMV, CR, AOV, retention).
- **Agoda (Alooba)** — SQL-heavy (Alooba favours window functions and CTEs),
  statistics questions, business-case reasoning.

If an exercise doesn't push toward those, it doesn't belong here.

---

## How to extend

1. **Add a topic** — edit `src/courseData.js`, add a new entry under the right
   module with a `kind` of `python`, `sql`, or `concept`. Mirror in `CURRICULUM.md`.
2. **Change the grader's behaviour** — edit the prompt in `src/api/grader.js`.
3. **Add a module** — append to both files, add an icon mapping in
   `CoursePlatform.jsx` (`ICON_MAP`).
4. **Swap to a backend** — replace the body of `gradeSubmission` /
   `fetchHint` in `src/api/grader.js` with a `fetch('/api/grade', ...)` call.
   Nothing else changes.

---

## Author

Built by **Pachara Don Stewart** (PDS / "Danny")
github: [@pacharadon](https://github.com/pacharadon)

This is a personal prep tool I built while preparing for data analyst
screens at Shopee, Lazada, and Agoda. Open-sourced in case it helps
anyone else preparing for the same.
