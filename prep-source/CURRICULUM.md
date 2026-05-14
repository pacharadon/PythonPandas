# Curriculum

Built by **danny_pachara_DS** · [@pacharadon](https://github.com/pacharadon)

The complete prep curriculum. `src/courseData.js` is the runtime source of
truth — this file is a high-level index. If you change one, change both.

## Targets

| Company | Assessment style | What it tests heaviest |
|---|---|---|
| **Shopee** (data analyst) | Take-home / live SQL screen | SQL joins + group-by, pandas cleanups, e-commerce metric reasoning |
| **Lazada** (data analyst) | SQL + business case | SQL aggregations, funnel decomposition, retention |
| **Agoda** (analyst, via **Alooba**) | Timed Alooba assessment | SQL window functions, CTEs, statistics, A/B reasoning |

The curriculum is reverse-engineered from these. Topics not relevant to these
assessments are excluded on purpose.

---

## Structure

**6 modules · 72 topics.** Each topic has:

- **Lesson content** — the text the student reads
- **Exercise** — the prompt the student answers
- **Pass criteria** — what the grader looks for to mark it `passed`
- **Kind** — `python` (Run executes against pandas in Pyodide), `sql` (Run
  executes against in-browser SQLite via sql.js), or `concept` (text-only
  reasoning — no Run).

---

# Part 1 · Foundations · 12 topics

| # | Title | Kind |
|---|---|---|
| 1.1 | Variables, Types & Coercion | python |
| 1.2 | F-strings & String Methods | python |
| 1.3 | Numbers & Arithmetic | python |
| 1.4 | Comparison & Equality | python |
| 1.5 | if / elif / else | python |
| 1.6 | for Loops & range | python |
| 1.7 | while + break / continue | python |
| 1.8 | Functions: def, return, defaults | python |
| 1.9 | None, Truthiness & Falsy Values | python |
| 1.10 | print vs return — Debugging Right | python |
| 1.11 | try / except — Handling Dirty Data | python |
| 1.12 | Imports & the Stdlib You'll Actually Use | python |

# Part 2 · Collections · 12 topics

| # | Title | Kind |
|---|---|---|
| 2.1 | Lists & Slicing | python |
| 2.2 | Dictionaries → DataFrames | concept |
| 2.3 | List Methods: append, extend, sort, reverse | python |
| 2.4 | Tuples vs Lists | python |
| 2.5 | Sets — Uniqueness Operations | python |
| 2.6 | Dict Iteration: keys / values / items | python |
| 2.7 | Dict Merging | python |
| 2.8 | Nested Data: lists of dicts, dicts of dicts | python |
| 2.9 | zip, enumerate, range | python |
| 2.10 | sorted() with key= | python |
| 2.11 | Counter — Counting Frequencies | python |
| 2.12 | defaultdict — When KeyError Hurts | python |

# Part 3 · Logic & Comprehensions · 12 topics

| # | Title | Kind |
|---|---|---|
| 3.1 | Booleans + The Pandas Operator Trap | python |
| 3.2 | List Comprehensions | python |
| 3.3 | Dict Comprehensions | python |
| 3.4 | Set Comprehensions | python |
| 3.5 | Generator Expressions | python |
| 3.6 | Nested Comprehensions | python |
| 3.7 | Conditional Expressions (Ternary) | python |
| 3.8 | any() and all() | python |
| 3.9 | Walrus Operator := | python |
| 3.10 | Short-Circuit in Pandas Masks | concept |
| 3.11 | np.where & np.select | python |
| 3.12 | Dict-as-Mapper + .map() | python |

# Part 4 · Pandas Core · 12 topics

| # | Title | Kind |
|---|---|---|
| 4.1 | Series, DataFrames & First Inspection | python |
| 4.2 | Selecting & Boolean Masking | python |
| 4.3 | GroupBy & Aggregation | python |
| 4.4 | Merge & Concat | python |
| 4.5 | Reshape — pivot, melt, stack | python |
| 4.6 | Time Series — dates & resampling | python |
| 4.7 | Missing Data: dropna, fillna, isna | python |
| 4.8 | apply vs map vs transform | python |
| 4.9 | Sorting & Ranking | python |
| 4.10 | String Columns — .str Deep Dive | python |
| 4.11 | Categorical dtype | python |
| 4.12 | Memory & dtype Optimization | python |

# Part 5 · SQL Essentials · 12 topics

| # | Title | Kind |
|---|---|---|
| 5.1 | SELECT, WHERE, ORDER BY | sql |
| 5.2 | GROUP BY & HAVING | sql |
| 5.3 | JOINs & Window Functions | sql |
| 5.4 | CTEs & Subqueries | sql |
| 5.5 | Self-Joins | sql |
| 5.6 | UNION, INTERSECT, EXCEPT | sql |
| 5.7 | CASE WHEN — Branching in SELECT | sql |
| 5.8 | COALESCE & NULLIF | sql |
| 5.9 | Date Functions | sql |
| 5.10 | LAG / LEAD | sql |
| 5.11 | NTILE & Rank Variants | sql |
| 5.12 | Query Plans & EXPLAIN | sql |

# Part 6 · Business & Stats · 12 topics

| # | Title | Kind |
|---|---|---|
| 6.1 | E-commerce & Travel Metrics | concept |
| 6.2 | A/B Testing Foundations | concept |
| 6.3 | Cohort Retention | concept |
| 6.4 | Pricing & Elasticity | concept |
| 6.5 | Funnel Analysis | concept |
| 6.6 | P-values — Intuition without the Maths | concept |
| 6.7 | Confidence Intervals | concept |
| 6.8 | Power & Sample Size | concept |
| 6.9 | Sample Ratio Mismatch (SRM) | concept |
| 6.10 | Cannibalization vs Incrementality | concept |
| 6.11 | Forecasting Methods at a Glance | concept |
| 6.12 | Diagnosing a Metric Drop — Case Study | concept |

---

# Mock-assessment composition

The 45-min mock samples freshly from the curriculum:

- **1 pandas** from Module 4 (12 to choose from)
- **3 SQL** from Module 5 (12 to choose from)
- **2 business** from Module 6 (12 to choose from)

That's 6 questions in 45 min. Pass threshold: 4/6.

---

# Grading philosophy

The grader is told to be **lenient on syntax, strict on concept**. A
missing semicolon shouldn't fail anyone. Confusing `WHERE` with `HAVING` should.

For Python and SQL topics, the grader also receives the run output (stdout,
errors, result-head, or returned rows) when the student ran their code before
submitting. A passing exercise should both demonstrate the concept *and*
produce sensible output — but the grader still leads with concept, not
exact-match output diffing.

For conceptual questions, the rubric is "did they demonstrate the idea the
lesson taught" — not "did they use specific words."
