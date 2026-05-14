// Curriculum data — keep in sync with CURRICULUM.md.
//
// kind:
//   'python'  → Run executes the snippet in the Pyodide sandbox
//   'sql'     → Run executes the query against in-browser SQLite (sql.js)
//   'concept' → Run is hidden (text-only reasoning question)

export const COURSE_DATA = [
  {
    id: 'm1',
    title: 'Foundations',
    icon: 'Code2',
    topics: [
      {
        id: 'm1-t1',
        title: '1.1 Variables, Types & Coercion',
        kind: 'python',
        content:
`A variable points to a value. No declaration. No type written. Python figures it out.

price = 250
name  = 'Don'

The 5 types that cover 95% of real work:

- int    — 5, 1800, -3
- float  — 3.14, 0.0
- str    — 'paid'
- bool   — True / False
- None   — "nothing here" — what missing values often start life as

Check a type:  type(price)  →  <class 'int'>

Coercion matters when CSVs arrive dirty. Strings that look like numbers won't math:

'250' + '100'  →  '250100'        (concatenation, not addition)
int('250') + 100  →  350           (now it adds)
float('3.14')  →  3.14
str(250)       →  '250'

In pandas this becomes  df['gmv'].astype(int)  or  pd.to_numeric(df['gmv']).`,
        exercisePrompt:
`Create a variable customer_age set to the integer 35. Then write the one-liner that prints its type.`,
      },
      {
        id: 'm1-t2',
        title: '1.2 F-strings & String Methods',
        kind: 'python',
        content:
`F-strings are the modern way to build strings. Prefix the quote with f, drop variables in { }:

city = 'Bangkok'
print(f'Welcome to {city.upper()}')   # → Welcome to BANGKOK

Five string methods pandas applies across whole columns via .str:

.strip()             remove leading/trailing whitespace
.lower() / .upper()  change case
.replace('a','b')    substitute
.split(',')          → list
.startswith('TH')    → bool

In pandas:  df['country'].str.lower().str.strip()
This is column-wide vectorised work. No loops.`,
        exercisePrompt:
`Using an f-string, build the string 'Welcome to BANGKOK' from a variable city = 'bangkok'. Use .upper() inside the f-string.`,
      },
      {
        id: 'm1-t3',
        title: '1.3 Numbers & Arithmetic',
        kind: 'python',
        content:
`The operators:  +  -  *  /  //  %  **

  /    true division     7 / 2  → 3.5
  //   floor division    7 // 2 → 3
  %    modulo            7 % 2  → 1
  **   exponent          2 ** 8 → 256

divmod(a, b) → (a // b, a % b) — one call for both. Useful for unit conversion.

round(x, n) — banker's rounding (round-half-to-even). round(2.5) → 2, round(3.5) → 4. Surprises people. For ordinary rounding use math.floor / math.ceil when you mean it specifically.

Order of operations follows maths:  **  before  *  /  before  +  -. When in doubt, parens.

Integers are arbitrary-precision in Python (no overflow). Floats are IEEE 754 — 0.1 + 0.2 != 0.3. We'll fix that in 1.4.`,
        exercisePrompt:
`Compute the total number of seconds in 2 hr 15 min 7 sec using arithmetic (no string parsing). End with the expression to print it.`,
      },
      {
        id: 'm1-t4',
        title: '1.4 Comparison & Equality',
        kind: 'python',
        content:
`Operators:  ==  !=  <  >  <=  >=

==  vs  is :
  ==   compares VALUES.   'abc' == 'abc'  → True
  is   compares IDENTITY (same object in memory). Use only for None, True, False.

  x = [1,2,3]; y = [1,2,3]
  x == y  → True
  x is y  → False   (different objects)

Floating-point trap:
  0.1 + 0.2 == 0.3   → False    (it's 0.30000000000000004)
  import math
  math.isclose(0.1 + 0.2, 0.3)   → True

Chained comparisons read naturally:
  if 0 < score < 100:    # instead of:  if score > 0 and score < 100:

In pandas you never use == on series for missing values — use .isna() / .notna(). NaN == NaN is False, always.`,
        exercisePrompt:
`In one expression, check whether (0.1 + 0.2) and 0.3 are "equal enough". Use math.isclose. End with the expression.`,
      },
      {
        id: 'm1-t5',
        title: '1.5 if / elif / else',
        kind: 'python',
        content:
`Branch on a condition. Python uses indentation, no braces.

  if gmv > 1000:
      tier = 'large'
  elif gmv > 100:
      tier = 'medium'
  else:
      tier = 'small'

Conditions are anything Truthy / Falsy (covered in 1.9).

PROFESSIONAL TIP — prefer EARLY RETURNS over deeply nested ifs:

  # painful
  def grade(x):
      if x is not None:
          if x > 0:
              if x < 100:
                  return 'ok'
              return 'too big'
          return 'negative'
      return None

  # readable
  def grade(x):
      if x is None: return None
      if x <= 0:    return 'negative'
      if x >= 100:  return 'too big'
      return 'ok'

When you find yourself 3+ levels deep, refactor.`,
        exercisePrompt:
`Write a function tier(gmv) that returns 'small' if gmv < 100, 'medium' if 100 <= gmv < 1000, and 'large' if gmv >= 1000. Then call tier(750) at the end so Run shows the result.`,
      },
      {
        id: 'm1-t6',
        title: '1.6 for Loops & range',
        kind: 'python',
        content:
`The Python for loop iterates over a sequence — it's a foreach, not a counter loop.

  for status in ['paid', 'cancelled', 'pending']:
      print(status)

range(stop) / range(start, stop) / range(start, stop, step):

  for i in range(5):          # 0, 1, 2, 3, 4
  for i in range(1, 6):       # 1, 2, 3, 4, 5
  for i in range(0, 10, 2):   # 0, 2, 4, 6, 8

Looping a dict yields keys (use .items() for key + value):

  for k in customer:           # k = 'name', 'spend', ...
  for k, v in customer.items():

WHY YOU'LL ABANDON FOR LOOPS LATER: in pandas, iterating row-by-row is 100× slower than vectorised ops. We learn loops to read code, not to write data pipelines.`,
        exercisePrompt:
`Given  prices = [250, 480, 1200, 99], compute the total using a for loop and end with that total. (Yes — vectorised is better; this is the for-loop drill.)`,
      },
      {
        id: 'm1-t7',
        title: '1.7 while + break / continue',
        kind: 'python',
        content:
`A while loop runs until its condition is False. Use when you don't know the iteration count in advance.

  total = 0
  i = 0
  while total < 1000 and i < len(prices):
      total += prices[i]
      i += 1

break exits the loop entirely. continue skips to the next iteration.

  for p in prices:
      if p < 50:        continue       # skip small ones
      if p > 5000:      break          # stop if outlier
      process(p)

INFINITE LOOP HAZARD — if you forget to advance the loop variable:

  while True:
      do_thing()        # never exits without break inside

Use while sparingly. 90% of the time a for + range is clearer.`,
        exercisePrompt:
`Given  prices = [250, 480, 1200, 99, 1500]: use a while loop to find the FIRST INDEX where the running total exceeds 1000. End with that index.`,
      },
      {
        id: 'm1-t8',
        title: '1.8 Functions: def, return, defaults',
        kind: 'python',
        content:
`A function is a named block of code that takes inputs and returns an output.

  def aov(gmv_list):
      if not gmv_list:
          return 0
      return sum(gmv_list) / len(gmv_list)

  aov([250, 480, 1200])   # → 643.33

Default arguments:
  def greet(name, greeting='Hello'):
      return f'{greeting}, {name}!'

THE MUTABLE-DEFAULT TRAP — bites every beginner once:

  def add(item, bag=[]):       # SHARED across all calls!
      bag.append(item)
      return bag

  add(1)  # [1]
  add(2)  # [1, 2]   ← surprise

Fix: use None as the sentinel.

  def add(item, bag=None):
      if bag is None: bag = []
      bag.append(item)
      return bag`,
        exercisePrompt:
`Write a function aov(gmv_list) that returns the mean of the list, or 0 if the list is empty. Then call  aov([250, 480, 1200])  at the end so Run shows the result.`,
      },
      {
        id: 'm1-t9',
        title: '1.9 None, Truthiness & Falsy Values',
        kind: 'python',
        content:
`None is Python's "no value." Different from False, 0, and ''.

The SIX FALSY values you should memorise — these are False in a boolean context:

  False
  None
  0     (and 0.0)
  ''    (empty string)
  []    (empty list)
  {}    (empty dict / set)

Everything else is Truthy.

Idiomatic null checks:

  if x is None:          # always use 'is' for None, not '=='
  if not items:          # empty list/None — both handled
  result = x if x is not None else fallback

In pandas, None-vs-NaN distinction blurs — both register as missing via .isna(). Don't compare to None with == on a column; use the methods.`,
        exercisePrompt:
`Write a function  first_present(values)  that returns the first non-None value, or None if all are None. Call it with  [None, None, 42, None]  so Run shows the result.`,
      },
      {
        id: 'm1-t10',
        title: '1.10 print vs return — Debugging Right',
        kind: 'python',
        content:
`THIS IS THE #1 BEGINNER CONFUSION.

print(x) puts a string on the console — it's for humans looking at output.
return x hands a value back to whoever called the function — it's for the program.

  def add(a, b):
      print(a + b)        # prints — but returns None!

  result = add(2, 3)      # prints 5
  result + 1              # TypeError: unsupported operand type(s)

  def add(a, b):
      return a + b        # now it RETURNS

  result = add(2, 3)
  result + 1              # → 6

Rule of thumb: in a function body, use return for values, print only for ad-hoc debugging.

In notebooks (Jupyter, this sandbox), the LAST expression is auto-displayed — no print needed for inspection.`,
        exercisePrompt:
`Here is broken code:  def gmv_sum(x, y): print(x + y) . In one sentence, why is it wrong? Then write the fixed version and end with  gmv_sum(250, 480) + 100 .`,
      },
      {
        id: 'm1-t11',
        title: '1.11 try / except — Handling Dirty Data',
        kind: 'python',
        content:
`Code that touches real-world data WILL hit exceptions: malformed CSVs, missing keys, weird Unicode. Handle them on purpose, not by crashing.

  try:
      n = int(raw_value)
  except ValueError:
      n = None        # default for un-parseable input

Catch SPECIFIC exceptions — never  except:  bare (it eats KeyboardInterrupt and bugs).

The common ones for data work:
  ValueError       — parse failures (int(), float())
  KeyError         — dict missing key
  IndexError       — list out of range
  TypeError        — wrong type passed
  ZeroDivisionError — denom is 0

finally — runs no matter what (cleanup):
  try:
      f = open(path)
      ...
  finally:
      f.close()

In pandas you rarely write try/except — you use .fillna() or pd.to_numeric(errors='coerce') instead. Knowing both gives you options.`,
        exercisePrompt:
`Write a function  safe_int(x)  that returns int(x) on success and None on ValueError. Call  safe_int('250')  and  safe_int('oops')  and end with  [safe_int('250'), safe_int('oops')] .`,
      },
      {
        id: 'm1-t12',
        title: "1.12 Imports & the Stdlib You'll Actually Use",
        kind: 'python',
        content:
`Three import forms:

  import math               # full module — call as math.sqrt(9)
  from datetime import date # named import — call as date.today()
  import numpy as np        # aliased — np.array(...)

NEVER  from x import *  — pollutes your namespace, breaks tooling.

The standard-library modules that show up in analyst work:

  math        — sqrt, ceil, floor, isclose, log, exp
  datetime    — date, datetime, timedelta
  json        — loads (parse), dumps (serialise)
  collections — Counter, defaultdict, OrderedDict
  itertools   — chain, combinations, groupby
  csv         — reader, writer (rarely needed once you have pandas)
  statistics  — mean, median, stdev (small samples)
  re          — regex — sparingly

External essentials: pandas (pd), numpy (np), matplotlib (plt), seaborn (sns).`,
        exercisePrompt:
`Using only the standard library (datetime), compute the number of days between  date(2025, 1, 1)  and  date(2025, 5, 14) . End with that integer.`,
      },
    ],
  },
  {
    id: 'm2',
    title: 'Collections',
    icon: 'Layers',
    topics: [
      {
        id: 'm2-t1',
        title: '2.1 Lists & Slicing',
        kind: 'python',
        content:
`A list is an ordered, mutable sequence in square brackets.

prices = [250, 480, 1200, 99]

This is structurally a pandas Series — values + positional index starting at 0.

Indexing:
  prices[0]    → 250        (first)
  prices[-1]   → 99         (last)

Slicing  list[start:stop]  — stop is EXCLUSIVE:
  prices[1:3]  → [480, 1200]
  prices[:2]   → [250, 480]
  prices[-2:]  → [1200, 99]

A list of lists is a 2D table — which is exactly what pd.DataFrame() will turn into rows and columns.`,
        exercisePrompt:
`Given  nums = [10, 20, 30, 40, 50]  — write the slice expression that returns [20, 30, 40]. (Define nums first so Run works.)`,
      },
      {
        id: 'm2-t2',
        title: '2.2 Dictionaries → DataFrames',
        kind: 'concept',
        content:
`A dict is a key→value lookup in curly braces.

customer = {'name': 'Don', 'spend': 1250}
customer['name']            → 'Don'
customer.get('phone','n/a') → 'n/a'  (safe — no crash if key missing)

A LIST OF DICTS is the most common raw-data shape — every API response, every JSON file. It feeds straight into pandas:

orders = [
  {'order_id': 1, 'gmv': 250, 'status': 'paid'},
  {'order_id': 2, 'gmv': 1800, 'status': 'cancelled'},
]
df = pd.DataFrame(orders)

Each dict becomes a row. Each key becomes a column. This is the bridge from raw JSON to a queryable table.`,
        exercisePrompt:
`In your own words: what's the difference between  customer['email']  and  customer.get('email')  when the key 'email' doesn't exist? Which one is safer and why?`,
      },
      {
        id: 'm2-t3',
        title: '2.3 List Methods: append, extend, sort, reverse',
        kind: 'python',
        content:
`prices = [250, 480]

  prices.append(99)         # → [250, 480, 99]
  prices.extend([1, 2])     # → [250, 480, 99, 1, 2]   adds elements
  prices + [1, 2]           # → new list, doesn't mutate
  prices.insert(0, 0)       # at index 0
  prices.remove(250)        # by value, first match (ValueError if absent)
  prices.pop()              # remove + return last
  prices.pop(0)             # remove + return first

Sorting:
  prices.sort()             # IN-PLACE, returns None
  prices.sort(reverse=True)
  sorted(prices)            # NEW list, leaves original alone
  prices.reverse()          # in-place
  list(reversed(prices))    # new reversed list

GOTCHA: list.sort() returns None. This bites people:

  result = my_list.sort()   # result is None!
  result = sorted(my_list)  # correct

Default to sorted() unless you specifically need in-place for performance.`,
        exercisePrompt:
`Given  prices = [250, 480, 1200, 99] , return a NEW list sorted DESCENDING without modifying  prices . End with the sorted-descending list.`,
      },
      {
        id: 'm2-t4',
        title: '2.4 Tuples vs Lists',
        kind: 'python',
        content:
`Tuple: ordered, IMMUTABLE.
  point = (3, 5)
  point[0]      # → 3
  point[0] = 4  # TypeError

List: ordered, mutable.
  scores = [90, 85]
  scores[0] = 95

When to use TUPLES:
- Fixed-size records: (lat, lon), (year, month, day)
- Multiple return values: return min_val, max_val
- Dict keys (lists can't be dict keys — they're mutable)

UNPACKING — works on tuples, lists, any iterable:
  lo, hi = (10, 90)
  for k, v in customer.items():   # tuple unpacking
  a, *rest = [1, 2, 3, 4]         # a=1, rest=[2,3,4]

Named tuples (when you want field names without writing a class):
  from collections import namedtuple
  Order = namedtuple('Order', 'id gmv status')
  o = Order(5001, 250, 'paid')
  o.gmv  # → 250

In real work, dataclasses or just dicts often beat namedtuples — but you'll see them in interview code.`,
        exercisePrompt:
`Write a function  minmax(values)  that returns  (min, max)  as a tuple. Call it on  [3, 1, 4, 1, 5, 9, 2, 6]  and end with the result.`,
      },
      {
        id: 'm2-t5',
        title: '2.5 Sets — Uniqueness Operations',
        kind: 'python',
        content:
`A set is an unordered collection of UNIQUE items.

  countries = {'TH', 'SG', 'MY'}
  countries.add('VN')           # add one
  countries.remove('VN')        # KeyError if missing
  countries.discard('XX')       # silent if missing
  'TH' in countries             # O(1) membership test

SET MATH — mirrors SQL set operators:
  a | b      union           (UNION)
  a & b      intersection    (INTERSECT)
  a - b      difference      (EXCEPT)
  a ^ b      symmetric diff  (XOR)

PERFORMANCE WIN — \`x in some_set\` is O(1); \`x in some_list\` is O(n). For "is this value in this big collection?" use a set.

Dedupe a list:
  list(set(items))             # order NOT preserved
  list(dict.fromkeys(items))   # order-preserving dedupe (Py 3.7+)

Empty set literal is  set()  — \`{}\` is an empty DICT.`,
        exercisePrompt:
`Given  a = [1, 2, 3, 4, 5]  and  b = [4, 5, 6, 7] , return a list of values that appear in BOTH (intersection). Use sets. End with the result.`,
      },
      {
        id: 'm2-t6',
        title: '2.6 Dict Iteration: keys / values / items',
        kind: 'python',
        content:
`customer = {'name': 'Don', 'spend': 1250, 'country': 'TH'}

Three views:
  customer.keys()    # → dict_keys(['name', 'spend', 'country'])
  customer.values()  # → dict_values(['Don', 1250, 'TH'])
  customer.items()   # → dict_items([('name','Don'), ...])

Iteration:
  for k in customer:               # implicit .keys()
  for v in customer.values():
  for k, v in customer.items():    # most common

Membership:
  'name' in customer               # checks KEYS (not values)
  1250 in customer.values()

Sort a dict by value (returns list of tuples):
  sorted(customer.items(), key=lambda kv: kv[1])

Reverse a dict (swap keys/values):
  {v: k for k, v in customer.items()}

(Assumes values are unique — duplicates silently overwrite.)`,
        exercisePrompt:
`Given  orders_by_status = {'paid': 12, 'cancelled': 3, 'pending': 7} , return the status with the HIGHEST count. End with the status string.`,
      },
      {
        id: 'm2-t7',
        title: '2.7 Dict Merging',
        kind: 'python',
        content:
`Three ways, modern-first:

Python 3.9+ pipe operator:
  combined = a | b          # right wins on conflicts

Python 3.5+ spread:
  combined = {**a, **b}     # same semantics — right wins

dict.update (MUTATES left):
  a.update(b)               # a now also contains b's keys

The bread-and-butter pattern — merge a defaults dict with overrides:

  defaults = {'limit': 100, 'offset': 0, 'order': 'asc'}
  user_opts = {'limit': 50}
  config = defaults | user_opts
  # → {'limit': 50, 'offset': 0, 'order': 'asc'}

For NESTED dicts, the merge is SHALLOW — inner dicts get replaced, not merged. Use a recursive helper if you need deep merge.`,
        exercisePrompt:
`Define  defaults = {'limit': 100, 'offset': 0}  and  overrides = {'limit': 50, 'sort': 'gmv'} . Merge so overrides win, without mutating either. End with the merged dict.`,
      },
      {
        id: 'm2-t8',
        title: '2.8 Nested Data: lists of dicts, dicts of dicts',
        kind: 'python',
        content:
`Real-world data is rarely flat.

LIST OF DICTS — JSON arrays, the natural shape for tables:

  orders = [
      {'order_id': 1, 'gmv': 250, 'status': 'paid'},
      {'order_id': 2, 'gmv': 1800, 'status': 'cancelled'},
  ]
  orders[0]['gmv']            # → 250

  # filter
  [o for o in orders if o['status'] == 'paid']

  # convert to pandas
  pd.DataFrame(orders)

DICT OF DICTS — when you want O(1) lookup by a key:

  by_id = {o['order_id']: o for o in orders}
  by_id[2]['gmv']             # → 1800

Going from list-of-dicts to dict-of-dicts is a one-liner with a dict comprehension — a pattern you'll use constantly.`,
        exercisePrompt:
`Define  records = [{'order_id': 1, 'gmv': 250}, {'order_id': 2, 'gmv': 1800}, {'order_id': 3, 'gmv': 99}] . Build a dict keyed by order_id with the full record as value. End with the dict.`,
      },
      {
        id: 'm2-t9',
        title: '2.9 zip, enumerate, range',
        kind: 'python',
        content:
`The three iteration helpers you use every day.

zip — pair up two (or more) iterables:
  ids    = [1, 2, 3]
  prices = [250, 480, 1200]
  list(zip(ids, prices))     # [(1, 250), (2, 480), (3, 1200)]

  for i, p in zip(ids, prices):
      print(i, p)

  # build a dict
  dict(zip(ids, prices))      # → {1: 250, 2: 480, 3: 1200}

enumerate — index + value:
  for i, item in enumerate(['a', 'b', 'c']):
      print(i, item)          # 0 a / 1 b / 2 c

  for i, item in enumerate(items, start=1):    # 1-indexed

zip STOPS AT THE SHORTEST input. Need otherwise:
  from itertools import zip_longest
  zip_longest(short, long, fillvalue=0)

range — covered in 1.6. range is lazy; convert with list() if needed.`,
        exercisePrompt:
`Given  names = ['Don', 'Ali', 'Mei']  and  spends = [1250, 800, 1900] , build a list of dicts of the form  {'name': ..., 'spend': ...}  using zip. End with the list.`,
      },
      {
        id: 'm2-t10',
        title: '2.10 sorted() with key=',
        kind: 'python',
        content:
`sorted(iterable, key=fn, reverse=False)

key is the SECRET WEAPON — a function that maps each item to the value you want to sort by.

Sort dicts by a field:
  sorted(orders, key=lambda o: o['gmv'])               # ascending
  sorted(orders, key=lambda o: o['gmv'], reverse=True) # descending

Sort by MULTIPLE fields (Python sort is STABLE — equal keys keep their original order):
  # first by status, within status by gmv descending
  sorted(orders, key=lambda o: (o['status'], -o['gmv']))

Sort strings case-insensitively:
  sorted(names, key=str.lower)

operator.itemgetter is faster than a lambda for simple field-by-field:
  from operator import itemgetter
  sorted(orders, key=itemgetter('gmv'), reverse=True)

Trick: to reverse on one column only in a multi-key sort, negate numeric values.`,
        exercisePrompt:
`Define  records = [{'id': 1, 'gmv': 250}, {'id': 2, 'gmv': 1800}, {'id': 3, 'gmv': 99}] . Return them sorted by gmv DESCENDING. End with the sorted list.`,
      },
      {
        id: 'm2-t11',
        title: '2.11 Counter — Counting Frequencies',
        kind: 'python',
        content:
`collections.Counter — a dict subclass tuned for tallies.

  from collections import Counter

  statuses = ['paid', 'paid', 'cancelled', 'paid', 'pending']
  Counter(statuses)
  # → Counter({'paid': 3, 'cancelled': 1, 'pending': 1})

  Counter(statuses).most_common(2)
  # → [('paid', 3), ('cancelled', 1)]

For a pandas column, the moral equivalent is:
  df['status'].value_counts()

Counter MATH (add or subtract tallies):
  a = Counter(week1)
  b = Counter(week2)
  diff = b - a               # what counts increased this week

Use Counter when you need a frequency table off a plain list and don't want to spin up pandas just to count.`,
        exercisePrompt:
`Given  statuses = ['paid','paid','cancelled','paid','pending','cancelled','paid'] , use Counter to return the 2 most common statuses with their counts (a list of tuples). End with the list.`,
      },
      {
        id: 'm2-t12',
        title: '2.12 defaultdict — When KeyError Hurts',
        kind: 'python',
        content:
`A dict that auto-creates missing keys with a default factory. Skips the "is this key here yet?" boilerplate.

  from collections import defaultdict

  # group orders by country
  by_country = defaultdict(list)
  for o in orders:
      by_country[o['country']].append(o)   # no KeyError on first sight

  # tally with defaultdict(int)
  counts = defaultdict(int)
  for s in statuses:
      counts[s] += 1                       # 0 default

Without defaultdict you'd write the awkward:
  if key not in d:
      d[key] = []
  d[key].append(value)

In pandas, the equivalent is:
  df.groupby('country').agg(list)

But defaultdict is the right tool for pure-Python pipelines before pandas is in play.`,
        exercisePrompt:
`Define  orders = [{'country': 'TH', 'gmv': 250}, {'country': 'SG', 'gmv': 480}, {'country': 'TH', 'gmv': 1200}, {'country': 'MY', 'gmv': 99}, {'country': 'TH', 'gmv': 80}] . Use  defaultdict(list)  to group orders by country. End with the resulting dict.`,
      },
    ],
  },
  {
    id: 'm3',
    title: 'Logic & Comprehensions',
    icon: 'GitBranch',
    topics: [
      {
        id: 'm3-t1',
        title: '3.1 Booleans + The Pandas Operator Trap',
        kind: 'python',
        content:
`Comparisons:  >  <  ==  !=  >=  <=
Reminder:  =  assigns,  ==  compares. Mixing them is the #1 beginner bug.

Plain Python combines logic with the words and / or / not.

PANDAS IS DIFFERENT — and this trips up every new analyst:

  &   (and)        |   (or)        ~   (not)

Every condition must be wrapped in parentheses, because & has higher precedence than > :

  df[(df['gmv'] > 1000) & (df['status'] == 'paid')]    ✓ correct
  df[df['gmv'] > 1000 & df['status'] == 'paid']        ✗ silent bug

A seeded  orders  DataFrame is pre-loaded in the sandbox (columns: order_id, customer_id, gmv, status, country, created_at, category) so your filter will actually run.`,
        exercisePrompt:
`Using the pre-loaded  orders  DataFrame: write the filter that returns rows where  gmv > 500  AND  country == 'TH'. End your snippet with the filter expression itself so Run shows the result.`,
      },
      {
        id: 'm3-t2',
        title: '3.2 List Comprehensions',
        kind: 'python',
        content:
`The single most important syntax for thinking like pandas. A one-line for-loop that builds a list.

doubled = [x * 2 for x in [1, 2, 3]]          # → [2, 4, 6]

Read as:  "for each x in the list, give me x * 2."

With a filter:
  expensive = [p for p in prices if p > 500]

With a transform AND a filter:
  rounded_high = [round(p) for p in prices if p > 500]

A pre-loaded  sales = [120, 480, 75, 1500, 60, 230, 880]  is in the sandbox.

This is the same mental model as a pandas vectorised operation:

  Python:  [p for p in prices if p > 500]
  Pandas:  prices[prices > 500]`,
        exercisePrompt:
`Write a list comprehension over the pre-loaded  sales  list that returns 10% of each value (s * 0.10) for every s in sales. End with the expression so Run shows the result.`,
      },
      {
        id: 'm3-t3',
        title: '3.3 Dict Comprehensions',
        kind: 'python',
        content:
`{ key_expr: val_expr for x in iterable [if cond] }

Examples:
  squares = {n: n*n for n in range(5)}
  # → {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

Build a lookup from a list of dicts:
  by_id = {o['order_id']: o['gmv'] for o in orders}

Filter while building:
  paid_only = {o['order_id']: o['gmv'] for o in orders if o['status'] == 'paid'}

Invert a dict (swap keys and values):
  inverted = {v: k for k, v in d.items()}
  # (assumes values are unique — duplicates silently overwrite)

Same mental model as list comp, but two expressions separated by  : .`,
        exercisePrompt:
`Define  orders = [{'order_id': 1, 'gmv': 250}, {'order_id': 2, 'gmv': 1800}, {'order_id': 3, 'gmv': 99}] . Build a dict  {order_id: gmv}  using a dict comprehension. End with the dict.`,
      },
      {
        id: 'm3-t4',
        title: '3.4 Set Comprehensions',
        kind: 'python',
        content:
`{ expr for x in iterable [if cond] }

Get unique values from a list of dicts:
  countries = {o['country'] for o in orders}

vs. the loop version:
  countries = set()
  for o in orders:
      countries.add(o['country'])

DON'T confuse with dict comp — a dict comp has a colon  :  between key and value. A set comp has no colon.

  {x for x in range(5)}       # set {0,1,2,3,4}
  {x: x for x in range(5)}    # dict {0:0, 1:1, ...}

Empty literals:
  set()    # empty SET
  {}       # empty DICT
  set       # the type itself`,
        exercisePrompt:
`Define  orders = [{'country': 'TH'}, {'country': 'SG'}, {'country': 'TH'}, {'country': 'MY'}, {'country': 'SG'}] . Build a SET of unique countries using a set comp. End with the set.`,
      },
      {
        id: 'm3-t5',
        title: '3.5 Generator Expressions',
        kind: 'python',
        content:
`(expr for x in iterable)              # parens — not brackets

Like a list comp but LAZY — yields one value at a time instead of materialising a whole list in memory.

  total = sum(o['gmv'] for o in orders if o['status'] == 'paid')

Why this matters: when iterating over millions of rows, you don't want to build a giant list just to sum it. Generator expressions consume only what they yield.

When functions take a single iterable arg, you can drop the outer parens:
  sum(o['gmv'] for o in orders)              # clean
  any(o['gmv'] > 1000 for o in orders)
  max(orders, key=lambda o: o['gmv'])

Trade-off: you can iterate only ONCE. After that the generator is exhausted — convert to list() if you need to scan twice.`,
        exercisePrompt:
`Define  orders = [{'gmv': 250, 'status': 'paid'}, {'gmv': 1800, 'status': 'cancelled'}, {'gmv': 480, 'status': 'paid'}, {'gmv': 99, 'status': 'pending'}] . Use a generator expression with sum() to total gmv of PAID orders only. End with the sum.`,
      },
      {
        id: 'm3-t6',
        title: '3.6 Nested Comprehensions',
        kind: 'python',
        content:
`Looping inside looping inside a comp.

FLATTEN a 2-D list:
  flat = [x for row in matrix for x in row]
  # [[1,2],[3,4]] → [1, 2, 3, 4]

Read left-to-right as nested for loops.

With a filter on the inner:
  [o for batch in batches for o in batch if o['status'] == 'paid']

The for-loop equivalent:
  flat = []
  for batch in batches:
      for o in batch:
          if o['status'] == 'paid':
              flat.append(o)

Beyond 2 levels: USE A LOOP. Nested comps become unreadable fast.

A matrix TRANSFORM (NOT a flatten — returns a list of lists):
  [[x * 2 for x in row] for row in matrix]`,
        exercisePrompt:
`Given  matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] , use a nested list comp to flatten it into [1,2,3,4,5,6,7,8,9]. End with the flat list.`,
      },
      {
        id: 'm3-t7',
        title: '3.7 Conditional Expressions (Ternary)',
        kind: 'python',
        content:
`value_if_true  if  condition  else  value_if_false

Used inline for a one-line branch:
  tier = 'high' if gmv > 1000 else 'low'

In a comprehension:
  [('high' if g > 1000 else 'low') for g in gmvs]

CHAINED ternaries are legal but UNREADABLE — use elif instead:
  # avoid
  tier = 'L' if g < 100 else 'M' if g < 1000 else 'H'
  # prefer
  if g < 100:     tier = 'L'
  elif g < 1000:  tier = 'M'
  else:           tier = 'H'

In pandas, the column-wide equivalent is np.where (next topics):
  df['tier'] = np.where(df['gmv'] > 1000, 'high', 'low')`,
        exercisePrompt:
`Given  gmvs = [250, 1200, 99, 1800, 480] , use a list comprehension with a ternary to build a list of 'high' (>1000) or 'low' tags. End with the list.`,
      },
      {
        id: 'm3-t8',
        title: '3.8 any() and all()',
        kind: 'python',
        content:
`any(iterable)  → True if AT LEAST ONE element is truthy
all(iterable)  → True if EVERY element is truthy (empty iterable → True)

  any(o['status'] == 'paid' for o in orders)
  all(o['gmv'] > 0 for o in orders)

Both SHORT-CIRCUIT — they stop as soon as the answer is known. Pair with a generator expression for cheap "is any of these true?" checks over millions of rows.

Empty-case quirk:
  any([])  → False
  all([])  → True       (vacuous truth — a quirk worth remembering)

In pandas the column-wise equivalents:
  (df['status'] == 'paid').any()
  (df['gmv'] > 0).all()`,
        exercisePrompt:
`Define  orders = [{'status': 'paid'}, {'status': 'paid'}, {'status': 'cancelled'}, {'status': 'pending'}] . Use any() with a generator to check whether ANY order has status == 'cancelled'. End with the boolean.`,
      },
      {
        id: 'm3-t9',
        title: '3.9 Walrus Operator :=',
        kind: 'python',
        content:
`Assign + use in the same expression. Python 3.8+.

Useful when you'd otherwise compute the same value twice:

  # before
  data = fetch()
  if len(data) > 10:
      process(data)

  # with walrus
  if (n := len(fetch())) > 10:
      process(fetch())          # (or store fetch result first)

In a while loop reading chunks:
  while (chunk := stream.read(1024)):
      handle(chunk)

In a comprehension:
  [y for x in data if (y := compute(x)) > 0]

USE SPARINGLY — overuse makes code hard to read. Rule of thumb: if it makes the intent CLEARER, use it. If it just makes the line shorter, don't.`,
        exercisePrompt:
`Define  orders = [{'status': 'paid'}, {'status': 'paid'}, {'status': 'cancelled'}] . Use the walrus operator inside an if to count paid orders into  n  and print  f'{n} paid' . End with the print statement's effect (just call it).`,
      },
      {
        id: 'm3-t10',
        title: '3.10 Short-Circuit in Pandas Masks',
        kind: 'python',
        content:
`THIS IS A CLASSIC EXAM TRAP.

In plain Python,  and  and  or  short-circuit:
  x and y       → x if x is falsy, else y
  x or y        → x if x is truthy, else y

In pandas,  &  and  |  are ELEMENT-WISE — they evaluate BOTH sides for EVERY row. There is no short-circuit on a Series.

  df[(df['gmv'] > 1000) & (df['status'] == 'paid')]
  # ↑ both conditions computed for every row

If one side is expensive, that cost is paid in full. Either:
  - filter once, then filter again (composable, more readable), or
  - rearrange to do the expensive work AFTER the cheap filter (df.loc on the smaller set)

Don't put a slow Python lookup inside a Boolean mask — use  .map()  or  pd.merge  to precompute.

CHEATSHEET:
  scalar:  if x > 1000 and status == 'paid':
  series:  df[(df['gmv'] > 1000) & (df['status'] == 'paid')]`,
        exercisePrompt:
`In one or two sentences: why does pandas use  &  instead of  and  for combining row-level conditions? Hint — think about element-wise vs scalar evaluation.`,
      },
      {
        id: 'm3-t11',
        title: '3.11 np.where & np.select',
        kind: 'python',
        content:
`Vectorised conditionals — the fastest path to "compute a new column from rules."

np.where(cond, if_true, if_false):
  import numpy as np
  df['tier'] = np.where(df['gmv'] > 1000, 'high', 'low')

Multiple bins — np.select scales:
  conditions = [
      df['gmv'] < 100,
      df['gmv'] < 1000,
      df['gmv'] >= 1000,
  ]
  choices = ['small', 'medium', 'large']
  df['tier'] = np.select(conditions, choices, default='unknown')

When NOT to use them:
- Single condition with categorical output    → np.where
- 2–6 buckets                                  → np.select
- Many arbitrary string-to-string mappings     → .map() with a dict (next topic)

Avoid  .apply(lambda)  for these — 10× slower than np.where on numeric columns.`,
        exercisePrompt:
`Using the pre-loaded  orders  DataFrame, add a column  tier  that is 'large' when  gmv > 1000  else 'small'. Use np.where. End with  orders[['gmv','tier']].head() .`,
      },
      {
        id: 'm3-t12',
        title: '3.12 Dict-as-Mapper + .map()',
        kind: 'python',
        content:
`The cleanest way to translate categorical values.

  status_emoji = {
      'paid':      '+',
      'cancelled': 'x',
      'pending':   '?',
  }
  df['icon'] = df['status'].map(status_emoji)

Values not in the mapping become NaN. Add a default with .fillna():
  df['icon'] = df['status'].map(status_emoji).fillna('?')

For functions instead of dicts (less common — prefer dicts when possible):
  df['name_len'] = df['name'].map(len)

When you have a SECOND dataframe with the mapping, use  pd.merge  instead.  .map()  is the lightweight option for small key→value lookups.

This pattern beats nested np.where chains when you have more than 3-4 categories.`,
        exercisePrompt:
`Using the pre-loaded  orders  DataFrame, define a dict  {'paid': 1, 'cancelled': 0, 'pending': 0}  and use  .map  to make a new column  is_paid . End with  orders[['status', 'is_paid']].head() .`,
      },
    ],
  },
  {
    id: 'm4',
    title: 'Pandas Core',
    icon: 'BarChart3',
    topics: [
      {
        id: 'm4-t1',
        title: '4.1 Series, DataFrames & First Inspection',
        kind: 'python',
        content:
`A Series is one labelled column. A DataFrame is many Series glued together — a table.

import pandas as pd
df = pd.read_csv('orders.csv')

The first 30 seconds with any new dataset — memorise this drill:

  df.head()       first 5 rows
  df.tail(10)     last 10 rows
  df.shape        (rows, columns)  — no parens, it's an attribute
  df.info()       dtypes + null counts per column
  df.describe()   summary stats for numeric columns
  df.columns      list of column names
  df.dtypes       type per column

Building one by hand (interview favourite):

  df = pd.DataFrame({
      'order_id': [1, 2, 3],
      'gmv':      [250, 1800, 99],
      'status':   ['paid', 'cancelled', 'paid']
  })

Why pandas wins: every method works on the whole column at once. Never write a for-loop over rows.`,
        exercisePrompt:
`Build a DataFrame called bookings with two columns:  hotel_id = [101, 102, 103]  and  nights = [3, 1, 7].  Then end your snippet with  bookings.shape  so Run shows it.`,
      },
      {
        id: 'm4-t2',
        title: '4.2 Selecting & Boolean Masking',
        kind: 'python',
        content:
`Selecting columns:
  df['gmv']                one column → Series
  df[['gmv', 'status']]    multiple   → DataFrame (note: double brackets)

Filtering rows with a boolean mask:
  df[df['gmv'] > 1000]

Multiple conditions — parentheses MANDATORY, & not 'and':
  df[(df['gmv'] > 1000) & (df['status'] == 'paid')]

Negation with ~ :
  df[~(df['status'] == 'cancelled')]

.isin() for many values:
  df[df['status'].isin(['paid', 'pending'])]

Null checks:
  df[df['phone'].isna()]        rows where phone is missing
  df[df['phone'].notna()]       rows where phone exists

A pre-loaded  orders  DataFrame is in the sandbox (TH/SG/MY · paid/cancelled/pending).`,
        exercisePrompt:
`Filter the pre-loaded  orders  DataFrame to rows where  country == 'TH'  AND  gmv > 500. End your snippet with the filter expression so Run shows it.`,
      },
      {
        id: 'm4-t3',
        title: '4.3 GroupBy & Aggregation',
        kind: 'python',
        content:
`The single most-tested pandas concept. Pattern:  split → apply → combine.

Basic:
  df.groupby('country')['gmv'].sum()

Read as: "split rows by country, then sum gmv within each group."

Multiple aggregations:
  df.groupby('country')['gmv'].agg(['sum', 'mean', 'count'])

Grouping by multiple columns:
  df.groupby(['country', 'status'])['gmv'].sum()

NAMED aggregations — cleanest, what senior interviewers want to see:

  df.groupby('country').agg(
      total_gmv   = ('gmv', 'sum'),
      avg_order   = ('gmv', 'mean'),
      order_count = ('order_id', 'count')
  ).reset_index()

reset_index() — chain it 90% of the time so the result is a flat DataFrame, not a multi-level index.

Pre-loaded  orders  in the sandbox.`,
        exercisePrompt:
`Using the pre-loaded  orders  DataFrame: get the TOTAL gmv per customer, counting ONLY rows where status == 'paid'. End with the result expression so Run shows it.`,
      },
      {
        id: 'm4-t4',
        title: '4.4 Merge & Concat',
        kind: 'python',
        content:
`Combining tables in pandas. Same mental model as SQL JOINs.

  pd.merge(left, right, how='left', on='customer_id')

Four 'how' values:
  'inner'  intersection           keeps rows with a match in both
  'left'   keep all from left     NULL on right where no match (most common)
  'right'  mirror of left
  'outer'  union                  rows from either, NULL on missing side

Multi-key join:
  pd.merge(a, b, on=['country', 'category'])

Different column names per side:
  pd.merge(orders, ref, left_on='customer_id', right_on='cust_id')

Suffixes when both sides share a column name (e.g. 'country' appears in both):
  pd.merge(orders, customers, on='customer_id', suffixes=('_ord', '_cust'))

CONCAT — vertical stack, not a join:
  pd.concat([df_2024, df_2025], ignore_index=True)

Use concat when schemas line up. Use merge when combining different tables on a key.`,
        exercisePrompt:
`Using the pre-loaded  orders  and  customers  DataFrames: LEFT MERGE them on customer_id (use suffixes ('_ord', '_cust') since both have a 'country' column), then end with  .head()  on the merged frame so Run shows the first 5 rows.`,
      },
      {
        id: 'm4-t5',
        title: '4.5 Reshape — pivot, melt, stack',
        kind: 'python',
        content:
`Wide vs long. Every assessment tests one direction.

LONG → WIDE with pivot_table:

  df.pivot_table(
      index='country',
      columns='status',
      values='gmv',
      aggfunc='sum',
      fill_value=0,
  )

Rows are unique countries, columns are unique statuses, cells are sum of gmv.

WIDE → LONG with melt — the inverse:

  pd.melt(df, id_vars=['country'], value_vars=['gmv', 'aov'])

stack / unstack: same idea but operates on MultiIndex levels:

  df.set_index(['country', 'status'])['gmv'].unstack()

When to use which:
- pivot_table  → aggregate while reshaping
- melt         → from wide form (one row per entity, many metric columns) to long (one row per entity-metric pair) for plotting or further groupby

Default to long form for analysis pipelines. Wide is for display.`,
        exercisePrompt:
`Pivot the pre-loaded  orders  DataFrame into a country × status matrix of TOTAL gmv. Use  pivot_table  with index='country', columns='status', values='gmv', aggfunc='sum', fill_value=0. End with the expression so Run shows it.`,
      },
      {
        id: 'm4-t6',
        title: '4.6 Time Series — dates & resampling',
        kind: 'python',
        content:
`Dates from a CSV arrive as strings. Convert them or nothing time-related works.

  orders['created_at'] = pd.to_datetime(orders['created_at'])

The .dt accessor — string-method-style accessors for datetimes:

  orders['created_at'].dt.year
  orders['created_at'].dt.month
  orders['created_at'].dt.day_name()
  orders['created_at'].dt.to_period('M')      # → 2025-03 etc

Resampling — groupby for time:

  orders.set_index('created_at').resample('ME')['gmv'].sum()

Common periods (pandas 2.x): 'D' day · 'W' week · 'ME' month-end · 'QE' quarter-end · 'YE' year-end.
(In pandas < 2.2, plain 'M' / 'Q' / 'Y' worked — now they emit a FutureWarning.)

Date math is vectorised:
  orders['days_since'] = (pd.Timestamp.now() - orders['created_at']).dt.days

Time series sits at the heart of cohort retention, run-rate forecasts, and seasonal decomposition — all of which Shopee/Lazada test.`,
        exercisePrompt:
`Convert  orders['created_at']  to datetime, then return the count of PAID orders per month (use  .dt.to_period('M')  or  resample('ME')). End with the result expression so Run shows it.`,
      },
      {
        id: 'm4-t7',
        title: '4.7 Missing Data: dropna, fillna, isna',
        kind: 'python',
        content:
`Missing values arrive as NaN (for numeric) or None / NaT in pandas. Both register via .isna() / .notna().

DETECT:
  df.isna().sum()                    # null count per column
  df['phone'].isna()                 # boolean series
  df[df['phone'].isna()]             # rows where phone is missing

DROP:
  df.dropna()                        # any column NaN → drop row
  df.dropna(subset=['phone'])        # only consider these cols
  df.dropna(thresh=3)                # keep rows with ≥3 non-null values

FILL:
  df['phone'].fillna('unknown')                  # constant
  df['gmv'].fillna(df['gmv'].median())           # statistic
  df.fillna({'phone': 'unknown', 'gmv': 0})      # column-specific
  df['gmv'].ffill()                              # forward fill (time series — pandas 2.x)
  df['gmv'].bfill()                              # back fill

A SENSIBLE PIPELINE: detect missing first → decide drop or fill per column → never blanket-impute without thinking. Imputed values affect every downstream statistic.`,
        exercisePrompt:
`Using the pre-loaded  orders  DataFrame, return a Series of null counts per column. Use  .isna().sum() . End with that expression.`,
      },
      {
        id: 'm4-t8',
        title: '4.8 apply vs map vs transform',
        kind: 'python',
        content:
`Three methods that LOOK similar but behave differently.

.map (Series only):
  - Element-wise.
  - Takes a dict, Series, or function.
  - Returns a Series of the same length.
    df['status'].map({'paid': 1, 'cancelled': 0})

.apply (Series OR DataFrame):
  - On a Series: like .map but accepts a function only.
  - On a DataFrame: applies along an axis (rows by default).
    df.apply(np.sum, axis=0)      # column sums
    df.apply(my_fn, axis=1)       # ROW BY ROW — slow

.transform (mostly with groupby):
  - Returns a Series the SAME SHAPE as input (broadcasts group result back).
  - The pandas way to "compute group mean and assign back to each row":
    df['gmv_vs_avg'] = df['gmv'] - df.groupby('country')['gmv'].transform('mean')

PERF order: vectorised ops >> .map / .apply on Series > .apply on DataFrame rows. Avoid  axis=1  apply where you can — it's row-by-row Python.`,
        exercisePrompt:
`Using the pre-loaded  orders , add a column  gmv_vs_country_mean  equal to  gmv  minus the country's mean  gmv  via  groupby('country')['gmv'].transform('mean') . End with  orders[['country','gmv','gmv_vs_country_mean']].head() .`,
      },
      {
        id: 'm4-t9',
        title: '4.9 Sorting & Ranking',
        kind: 'python',
        content:
`Sort:
  df.sort_values('gmv')                                    # ascending
  df.sort_values('gmv', ascending=False)
  df.sort_values(['country','gmv'], ascending=[True, False])

Sort by index:
  df.sort_index()

Rank — assign rank to each value within a column:
  df['gmv_rank'] = df['gmv'].rank()                  # ties → mean rank
  df['gmv_rank'] = df['gmv'].rank(method='dense')    # ties same int, no gaps
  df['gmv_rank'] = df['gmv'].rank(method='min')      # ties → lowest rank
  df['gmv_rank'] = df['gmv'].rank(ascending=False)

PER-GROUP RANK — the pandas equivalent of SQL  ROW_NUMBER() PARTITION BY :
  df['rank_in_country'] =
      df.groupby('country')['gmv'].rank(method='dense', ascending=False)

Top-N PER GROUP:
  mask = df.groupby('country')['gmv'].rank(method='dense', ascending=False) <= 3
  df[mask]`,
        exercisePrompt:
`Using the pre-loaded  orders , return the rows where each order is in its country's TOP 3 by gmv. Use  groupby('country')['gmv'].rank(method='dense', ascending=False) <= 3 . End with that filtered frame's  .head(10) .`,
      },
      {
        id: 'm4-t10',
        title: '4.10 String Columns — .str Deep Dive',
        kind: 'python',
        content:
`The .str accessor vectorises every string method across a column.

  df['country'].str.lower()
  df['country'].str.strip()
  df['country'].str.upper()
  df['email'].str.contains('@')              # regex by default
  df['email'].str.contains('@', regex=False) # literal — faster
  df['name'].str.startswith('A')
  df['name'].str.endswith('.csv')
  df['name'].str.replace('_', ' ', regex=False)
  df['name'].str.split(' ')                  # → Series of lists
  df['name'].str.len()
  df['name'].str.zfill(5)                    # pad with zeros

EXTRACTION via regex returns a DataFrame of capture groups:
  df['phone'].str.extract(r'(\\d{3})-(\\d{4})')

Chain in order — each .str step returns a new Series.

For pandas 2.0+, consider  pd.StringDtype()  for marginally better perf + clearer null handling.`,
        exercisePrompt:
`Using the pre-loaded  orders , count how many  category  values start with 'b' (case-insensitive). Use  orders['category'].str.lower().str.startswith('b').sum() . End with the count.`,
      },
      {
        id: 'm4-t11',
        title: '4.11 Categorical dtype',
        kind: 'python',
        content:
`A Categorical column stores values as integer codes against a category list — saves memory and enables ORDERING for ordinal data.

  df['status'] = df['status'].astype('category')
  df['status'].cat.categories       # → Index(['cancelled','paid','pending'])
  df['status'].memory_usage()       # much less than object dtype

ORDERED categoricals:
  df['tier'] = pd.Categorical(df['tier'],
                              categories=['low','med','high'],
                              ordered=True)
  df[df['tier'] > 'low']            # comparison now meaningful

When to use:
- Repeated low-cardinality strings ('status', 'country', 'category')
- Ordinal data ('low/med/high', 'q1/q2/q3/q4')

When NOT to:
- High-cardinality (basically as bad as object)
- Free-text fields

GroupBy on categoricals defaults to including unused categories — set  observed=True  to suppress.`,
        exercisePrompt:
`Using the pre-loaded  orders , cast the  status  column to a Categorical and end with  orders['status'].astype('category').cat.categories  so Run displays the category index.`,
      },
      {
        id: 'm4-t12',
        title: '4.12 Memory & dtype Optimization',
        kind: 'python',
        content:
`For interview-grade analysis, df.info() reveals the cheap wins.

  df.info()
  df.memory_usage(deep=True)    # accurate for object columns

OPTIMISATIONS:
- object → category for low-cardinality strings (10×–100× memory win)
- int64 → int32 / int16 when values fit
- float64 → float32 when precision tolerable
- Dates → datetime64 (slicing, .dt accessor, faster)

When loading large CSVs, pre-declare dtypes:
  pd.read_csv('big.csv', dtype={
      'status':     'category',
      'gmv':        'float32',
      'created_at': 'string',
  }, parse_dates=['created_at'])

CHUNKED iteration for files that won't fit in memory:
  for chunk in pd.read_csv('big.csv', chunksize=100_000):
      process(chunk)

A clean dtype layout is THE THING that turns a sluggish notebook into one that runs in seconds.`,
        exercisePrompt:
`Using the pre-loaded  orders , return the memory usage PER COLUMN with deep counting. Use  orders.memory_usage(deep=True) . End with that Series.`,
      },
    ],
  },
  {
    id: 'm5',
    title: 'SQL Essentials',
    icon: 'Database',
    topics: [
      {
        id: 'm5-t1',
        title: '5.1 SELECT, WHERE, ORDER BY',
        kind: 'sql',
        content:
`SQL is READ top-to-bottom but EXECUTED in this order:

  FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT

Knowing this kills 80% of bugs and aliasing errors.

  SELECT order_id, gmv
  FROM orders
  WHERE status = 'paid' AND gmv > 1000
  ORDER BY gmv DESC
  LIMIT 10;

Things to internalise:

  =  for equality (NOT == like Python)
  Strings in 'single quotes', not double
  NULL is checked with  IS NULL  or  IS NOT NULL  — never  = NULL
  LIKE '%th%'         pattern match (% = any chars)
  BETWEEN 100 AND 500 inclusive both ends
  IN ('TH','SG','MY') membership

DESC and ASC apply per column:  ORDER BY country ASC, gmv DESC.`,
        exercisePrompt:
`Write a SQL query that returns the top 5 bookings — ordered by nights descending — from a table 'bookings' where country = 'TH'. Show only the booking_id and nights columns.`,
      },
      {
        id: 'm5-t2',
        title: '5.2 GROUP BY & HAVING',
        kind: 'sql',
        content:
`SQL GROUP BY = pandas .groupby(). Same mental model, different syntax.

  SELECT country,
         SUM(gmv)    AS total_gmv,
         COUNT(*)    AS order_count,
         AVG(gmv)    AS avg_order
  FROM orders
  WHERE status = 'paid'
  GROUP BY country
  HAVING SUM(gmv) > 100000
  ORDER BY total_gmv DESC;

The rules every interviewer probes:

1. Every column in SELECT must be either in GROUP BY or wrapped in an aggregate (SUM, COUNT, AVG, MIN, MAX).

2. WHERE filters rows BEFORE grouping. HAVING filters groups AFTER. This is the most common interview question — be able to explain it cold.

3. COUNT(*)  counts all rows in the group.
   COUNT(col) counts rows where col IS NOT NULL.
   COUNT(DISTINCT customer_id)  counts unique customers — used constantly.`,
        exercisePrompt:
`Write SQL against an orders(customer_id, gmv, status) table that returns each customer's order count and average gmv, but only shows customers with MORE THAN 5 orders. Sort by avg gmv descending.`,
      },
      {
        id: 'm5-t3',
        title: '5.3 JOINs & Window Functions',
        kind: 'sql',
        content:
`JOINs combine tables on a key:

  INNER JOIN  — only rows that match in both
  LEFT JOIN   — all rows from left, NULL where right has no match
  RIGHT JOIN  — mirror of LEFT (rarely used; rewrite as LEFT)
  FULL JOIN   — everything from both, NULL where missing

  SELECT o.order_id, c.country
  FROM orders o
  LEFT JOIN customers c ON o.customer_id = c.customer_id;

WINDOW FUNCTIONS — aggregations that do NOT collapse rows. Alooba loves these.

  SELECT
    order_id,
    customer_id,
    gmv,
    ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY created_at) AS order_rank,
    SUM(gmv)     OVER (PARTITION BY customer_id) AS customer_total
  FROM orders;

The killer patterns:

- First / Nth purchase per customer →
    ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY created_at)
- Previous row's value →  LAG(gmv) OVER (PARTITION BY customer_id ORDER BY created_at)
- Running total →  SUM(gmv) OVER (PARTITION BY customer_id ORDER BY created_at)
- Top-N per group →  filter on ROW_NUMBER() <= N in an outer query`,
        exercisePrompt:
`Using the seeded  orders  table, write a SQL query that returns each customer's FIRST order (earliest created_at). Show  customer_id, order_id, gmv. Use  ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY created_at)  in a subquery or CTE and filter to rank = 1.`,
      },
      {
        id: 'm5-t4',
        title: '5.4 CTEs & Subqueries',
        kind: 'sql',
        content:
`A CTE — Common Table Expression — is a named subquery defined with WITH. It makes complex queries readable and is Alooba's favourite pattern.

  WITH top_customers AS (
    SELECT customer_id, SUM(gmv) AS total_gmv
    FROM orders
    WHERE status = 'paid'
    GROUP BY customer_id
  )
  SELECT t.customer_id, t.total_gmv, c.country
  FROM top_customers t
  JOIN customers c USING (customer_id)
  ORDER BY t.total_gmv DESC
  LIMIT 10;

Multiple CTEs in one query — chain with commas (only one WITH keyword):

  WITH paid AS ( SELECT * FROM orders WHERE status = 'paid' ),
       by_cust AS ( SELECT customer_id, SUM(gmv) AS s FROM paid GROUP BY customer_id )
  SELECT * FROM by_cust ORDER BY s DESC;

Subquery in WHERE — "customers who have at least one paid order":

  SELECT *
  FROM customers
  WHERE customer_id IN (SELECT DISTINCT customer_id FROM orders WHERE status='paid');

Rule of thumb: when a query has more than one aggregation step, reach for a CTE. The result is the same; the readability isn't.`,
        exercisePrompt:
`Using a CTE, find the top 3 customers by total PAID gmv. Return  customer_id, total_gmv, country  (joining from the  customers  table). Sort by total_gmv descending and limit to 3.`,
      },
      {
        id: 'm5-t5',
        title: '5.5 Self-Joins',
        kind: 'sql',
        content:
`A self-join joins a table to itself — used for hierarchies and pair-finding.

The pattern always uses TWO aliases for the same table:

  SELECT a.booking_id, b.booking_id
  FROM bookings a
  JOIN bookings b
    ON a.hotel_id   = b.hotel_id
   AND a.created_at = b.created_at
   AND a.booking_id < b.booking_id;       -- de-dupe + drop self-pairs

The  a.id < b.id  trick stops (1,2) and (2,1) from both appearing — and also drops the (1,1) self-pair.

Hierarchies — classic interview question:

  -- employees(id, name, manager_id)
  SELECT e.name AS employee, m.name AS manager
  FROM employees e
  LEFT JOIN employees m ON e.manager_id = m.id;

Self-joins are slow on big tables — every match scans both sides. If the question is really "find duplicates", a window function (COUNT(*) OVER (PARTITION BY ...)) is usually cheaper.`,
        exercisePrompt:
`Find pairs of bookings at the SAME hotel_id on the SAME created_at, returning  a.booking_id, b.booking_id, a.hotel_id, a.created_at. Use the  a.booking_id < b.booking_id  trick so each pair appears once. (May return zero rows — that's a valid result if no collisions.)`,
      },
      {
        id: 'm5-t6',
        title: '5.6 UNION, INTERSECT, EXCEPT',
        kind: 'sql',
        content:
`SET OPERATORS combine the rowsets of two queries. Both sides must have the SAME number of columns with COMPATIBLE types.

UNION (remove duplicates):
  SELECT country FROM customers
  UNION
  SELECT country FROM bookings;

UNION ALL (keep duplicates — usually faster, prefer when you know there are no dups):
  SELECT customer_id FROM orders WHERE status='paid'
  UNION ALL
  SELECT customer_id FROM orders WHERE status='pending';

INTERSECT — rows in BOTH:
  SELECT customer_id FROM orders
  INTERSECT
  SELECT customer_id FROM customers WHERE country='TH';

EXCEPT (a.k.a. MINUS in Oracle) — rows in LEFT, not in RIGHT:
  SELECT customer_id FROM customers
  EXCEPT
  SELECT DISTINCT customer_id FROM orders;
  -- → customers who have never ordered

USE CASES:
- UNION ALL — concatenate partition / time-range queries
- INTERSECT — overlap analysis (paid AND pending customers)
- EXCEPT — gap analysis (signed up, never ordered)

Most analysts default to UNION when UNION ALL would be cheaper. Pick deliberately.`,
        exercisePrompt:
`Using  customers  and  orders , return the customer_ids that exist in  customers  but have NO orders. Use EXCEPT.`,
      },
      {
        id: 'm5-t7',
        title: '5.7 CASE WHEN — Branching in SELECT',
        kind: 'sql',
        content:
`The SQL way to compute a column from rules.

  SELECT
      order_id,
      gmv,
      CASE
          WHEN gmv >= 1000 THEN 'large'
          WHEN gmv >= 100  THEN 'medium'
          ELSE 'small'
      END AS tier
  FROM orders;

Shorthand for equality on one column:
  CASE status
      WHEN 'paid'      THEN 1
      WHEN 'cancelled' THEN 0
      ELSE NULL
  END AS is_paid

USE INSIDE AGGREGATES — conditional aggregation, the #1 SQL pattern:

  SELECT country,
         COUNT(*)                                          AS total,
         COUNT(CASE WHEN status='paid'      THEN 1 END)    AS paid,
         SUM(CASE WHEN status='paid' THEN gmv ELSE 0 END)  AS paid_gmv
  FROM orders
  GROUP BY country;

That's "show paid vs cancelled counts side by side" — one query, one scan. Easier on the database than UNIONing two GROUP BYs.`,
        exercisePrompt:
`Write a SQL query that returns each country's TOTAL order count, PAID order count, and PAID GMV in one row. Use CASE WHEN inside COUNT and SUM. Group by country.`,
      },
      {
        id: 'm5-t8',
        title: '5.8 COALESCE & NULLIF',
        kind: 'sql',
        content:
`Null handling without verbose CASE WHEN.

COALESCE — returns the FIRST non-NULL argument:

  SELECT COALESCE(phone, alt_phone, 'unknown') AS contact
  FROM customers;

  -- The classic LEFT JOIN guard:
  SELECT c.customer_id, COALESCE(SUM(o.gmv), 0) AS total
  FROM customers c
  LEFT JOIN orders o ON o.customer_id = c.customer_id
  GROUP BY c.customer_id;

NULLIF — returns NULL when two args are EQUAL, else the first arg.
Most common use: avoid division by zero.

  SELECT total_revenue / NULLIF(total_orders, 0) AS aov FROM …;
  -- if total_orders is 0, the divisor becomes NULL → result is NULL, not an error

REMEMBER — NULL is not a value, it's "unknown."  NULL = NULL  is NULL, not TRUE. Use  IS NULL  /  IS NOT NULL  for boolean tests.`,
        exercisePrompt:
`Write a SQL query that returns AOV (avg gmv among PAID orders) per country, using  SUM(gmv) / NULLIF(COUNT(*), 0)  to guard against division by zero. Group by country.`,
      },
      {
        id: 'm5-t9',
        title: '5.9 Date Functions',
        kind: 'sql',
        content:
`Every dialect has slightly different names. The sandbox is SQLite — here's its flavour, plus the standard / Postgres equivalents you'll see at Shopee/Lazada/Agoda.

SQLite (this sandbox):
  strftime('%Y', created_at)               -- year as text
  strftime('%m', created_at)               -- month
  strftime('%Y-%m', created_at)            -- year-month bucket
  strftime('%w', created_at)               -- weekday (0=Sun)
  date(created_at, 'start of month')       -- first day of month
  date(created_at, '+7 days')
  date('now')
  julianday('now') - julianday(created_at) -- days difference

Postgres / Snowflake (read these, you'll see them):
  DATE_TRUNC('month', created_at)
  EXTRACT(YEAR FROM created_at)
  created_at + INTERVAL '7 days'
  DATEDIFF(day, start, end)

MySQL:
  YEAR(created_at), MONTH(created_at)
  DATE_FORMAT(created_at, '%Y-%m')
  DATEDIFF(end, start)

For interviews: know the standard SQL (Postgres style) + your target's dialect.`,
        exercisePrompt:
`Using the sandbox  orders , return the count of PAID orders per MONTH using  strftime('%Y-%m', created_at) . Group by that month bucket, sort ascending.`,
      },
      {
        id: 'm5-t10',
        title: '5.10 LAG / LEAD',
        kind: 'sql',
        content:
`Window functions that peek at the PREVIOUS or NEXT row within a partition.

  LAG(col, offset, default)   -- value from N rows BEFORE in the ORDER BY
  LEAD(col, offset, default)  -- value from N rows AFTER

  SELECT
      order_id, customer_id, created_at, gmv,
      LAG(gmv)  OVER (PARTITION BY customer_id ORDER BY created_at) AS prev_gmv,
      LEAD(gmv) OVER (PARTITION BY customer_id ORDER BY created_at) AS next_gmv
  FROM orders;

WHAT YOU USE THEM FOR:
- Period-over-period change:   gmv - LAG(gmv) OVER (…)   → growth amount
- Status transitions:          LAG(status) → was it 'paid' last time?
- Time gaps:                   julianday(created_at) - julianday(LAG(created_at) OVER (…))

Default value for the first row (where LAG has nothing to look back to):
  LAG(gmv, 1, 0) OVER (…)   -- 0 instead of NULL

ALOOBA bread and butter. Memorise the syntax.`,
        exercisePrompt:
`Write a SQL query that for each customer's orders (ordered by created_at) shows  customer_id, order_id, gmv, prev_gmv  where  prev_gmv  is the previous order's gmv (NULL on first). Limit to 20 rows.`,
      },
      {
        id: 'm5-t11',
        title: '5.11 NTILE & Rank Variants',
        kind: 'sql',
        content:
`Three rank functions that look similar — pick deliberately:

ROW_NUMBER()    — unique 1, 2, 3 per partition. Ties broken by ORDER BY order.
RANK()          — same value → same rank. Next rank SKIPS ahead. (1, 1, 3, 4)
DENSE_RANK()    — same value → same rank. Next rank continues. (1, 1, 2, 3)
PERCENT_RANK()  — 0.0 to 1.0 — percentile rank within the partition.
NTILE(n)        — splits rows into n equal-sized buckets, returns 1..n.

  SELECT
      customer_id, gmv,
      ROW_NUMBER() OVER (ORDER BY gmv DESC) AS rn,
      RANK()       OVER (ORDER BY gmv DESC) AS rk,
      DENSE_RANK() OVER (ORDER BY gmv DESC) AS dr,
      NTILE(4)     OVER (ORDER BY gmv DESC) AS quartile
  FROM orders;

NTILE is the lazy way to make tiers:
  -- top 25% by spend become quartile 1
  NTILE(4) OVER (ORDER BY total_spend DESC) AS spend_quartile

Heads-up: NTILE buckets may have UNEVEN sizes when total_rows isn't divisible by n.`,
        exercisePrompt:
`Write a SQL query that assigns each order to a quartile (1–4) by gmv DESC using NTILE(4). Return order_id, gmv, quartile. Limit to 20 rows.`,
      },
      {
        id: 'm5-t12',
        title: '5.12 Query Plans & EXPLAIN',
        kind: 'sql',
        content:
`When a query is slow, the database can tell you why.

  EXPLAIN SELECT … FROM orders WHERE country = 'TH';

It shows the EXECUTION PLAN — what indexes are used, what joins happen, in what order, with row estimates.

THE 5 PATTERNS TO RECOGNISE (regardless of dialect):

1. SEQUENTIAL SCAN (Seq Scan / Full Scan)
   Reading every row. Fine for tiny tables, expensive for big ones.
   FIX: add an index on the column you filter / join on.

2. INDEX SCAN
   Using an index. Fast — what you want.

3. NESTED LOOP JOIN
   For each row on the left, scan the right. OK for small × indexed-large.

4. HASH JOIN
   Build a hash of one side, probe with the other. Great for big joins on equality.

5. SORT
   Often dominates runtime. Avoid  ORDER BY  before  LIMIT  in subqueries you don't actually need ordered.

In interviews you don't write EXPLAIN — you ANTICIPATE it:
- "I'd add an index on (customer_id, created_at) for this query."
- "Pushing the WHERE down into the CTE prevents a full scan of orders."

That's the senior-analyst answer.`,
        exercisePrompt:
`In 2–3 sentences, explain why adding an INDEX on  orders.customer_id  could speed up  SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id . Think about scan vs index lookup, and whether the grouping needs all rows.`,
      },
    ],
  },
  {
    id: 'm6',
    title: 'Business & Stats',
    icon: 'Briefcase',
    topics: [
      {
        id: 'm6-t1',
        title: '6.1 E-commerce & Travel Metrics',
        kind: 'concept',
        content:
`The metrics interviewers at Shopee, Lazada and Agoda actually test:

GMV — Gross Merchandise Value. Total order value before refunds. What e-commerce reports as "revenue" (it isn't really — but it's the headline number).

Conversion Rate (CR) — bookings ÷ visitors. Computed per funnel step:
  search → detail → checkout → pay.  Drop-off between any two steps is the diagnostic.

AOV — Average Order Value =  GMV ÷ order_count.

Take Rate — platform commission ÷ GMV.  Agoda's economics question.

Repeat Purchase Rate — customers with 2+ orders ÷ total customers in period. The headline retention metric.

Cohort Retention — bucket users by signup month, track % still active each subsequent month. Reveals whether a fix actually improved retention or just inflated short-term numbers.

LTV — total spend per customer over their lifetime (or capped window).

THE decomposition every analyst should know cold:

  GMV  =  visitors  ×  conversion_rate  ×  AOV

When GMV drops, check each factor in that equation first.`,
        exercisePrompt:
`Last week GMV dropped 15% on a Shopee category page. Traffic was flat week-over-week. Which two metrics from the GMV decomposition would you investigate first, and why? One or two sentences.`,
      },
      {
        id: 'm6-t2',
        title: '6.2 A/B Testing Foundations',
        kind: 'concept',
        content:
`Setup — split users randomly into A (control) and B (variant). Run for a fixed period. Compare a primary metric.

Sample size intuition — you need MORE data when:
- The effect you want to detect is small
- The baseline metric is noisy (high variance)
- You demand higher confidence

Rough order-of-magnitude: detecting a 5% RELATIVE lift on a 5% baseline conversion at 95% confidence needs roughly 30,000+ users per variant. Smaller effects → exponentially more data.

Significance ≠ importance. A 0.1% lift on huge traffic can be "statistically significant" and still worthless to ship.

Common ways A/B tests lie to you:

- Peeking — checking results daily then stopping when significant ("p-hacking")
- Sample ratio mismatch — your 50/50 split came out 47/53; something is broken upstream
- Novelty effect — users behave oddly in week 1; let it stabilise
- Wrong granularity — running a user-level test but measuring at session-level (or vice versa)
- Underpowered test — calling a flat result a "no difference" when you didn't have enough samples to detect one`,
        exercisePrompt:
`Variant B shows 3.0% conversion vs control at 2.8%, with n = 2,000 per variant. Would you ship B? Give your reasoning in 2–3 sentences — think about effect size, sample size, and what could be wrong here.`,
      },
      {
        id: 'm6-t3',
        title: '6.3 Cohort Retention',
        kind: 'concept',
        content:
`A retention cohort answers: "of the users who signed up in month X, how many came back in month X+1, X+2, …"

Why it beats a single retention rate: it isolates the effect of WHEN a user joined, so you can tell whether a fix improved retention for new users or just inflated short-term numbers with returning veterans.

How to build it (SQL pseudocode):

  WITH cohort AS (
    SELECT customer_id,
           DATE_TRUNC('month', signup_date) AS cohort_month
    FROM customers
  ),
  activity AS (
    SELECT c.customer_id, c.cohort_month,
           DATE_TRUNC('month', o.created_at) AS active_month
    FROM cohort c
    JOIN orders o USING (customer_id)
  )
  SELECT cohort_month,
         active_month,
         COUNT(DISTINCT customer_id) AS active_users
  FROM activity
  GROUP BY 1, 2;

Pivot the result to a triangular matrix (rows = cohorts, columns = months since signup). The diagonal pattern reveals whether retention is decaying faster than it should.

Cohort retention is THE long-term health metric — leaders care more about month-6 retention than week-1 conversion.`,
        exercisePrompt:
`Walk through, in plain English: what columns and aggregations would you need to build a monthly cohort retention table from  customers  and  orders? Mention the cohort definition, the active-month calculation, and the final shape (rows × columns × cell value). 3–5 sentences.`,
      },
      {
        id: 'm6-t4',
        title: '6.4 Pricing & Elasticity',
        kind: 'concept',
        content:
`Price elasticity of demand =  (% change in quantity)  /  (% change in price).

  |elasticity| > 1  → demand is ELASTIC.    Lowering price boosts revenue.
  |elasticity| < 1  → demand is INELASTIC.  Raising price boosts revenue.
  |elasticity| = 1  → revenue is flat across price changes.

Elasticity is nearly always negative (raise price → demand drops) so we report the absolute value.

Real-world wrinkles:
- Brand effect — premium positioning lets you stay inelastic
- Substitutes — a competitor one click away pushes elasticity up
- Segmentation — business travellers low-elasticity, leisure high
- Time horizon — short-run inelastic, long-run elastic (people adjust)

Pricing decisions analysts get asked:
- Should we cut price? Compute elasticity from past changes. If |e| > 1, yes.
- Where on the curve are we? Look at A/B price experiments — without one you're guessing.
- Are we leaving money on the table? Compare ADR + cancellation rate to comparable hotels.

Lazada/Shopee ask price-cut reasoning. Agoda asks hotel ADR optimisation.`,
        exercisePrompt:
`A hotel raises ADR (average daily rate) by 10% and bookings drop 8% the following month. What is the (absolute) price elasticity here, is demand elastic or inelastic, and would you recommend they hold the higher price? 2–3 sentences.`,
      },
      {
        id: 'm6-t5',
        title: '6.5 Funnel Analysis',
        kind: 'concept',
        content:
`A funnel splits a single user journey into stages and measures drop-off at each step.

E-commerce funnel:
  visit → product detail → add to cart → checkout → pay

For each adjacent pair: step conversion = step_N / step_(N-1).

Why funnels matter:
- They isolate WHERE you're losing users, not just THAT you are.
- Optimising the worst step has the biggest revenue impact.
- They expose drop-off cliffs that an aggregate CR hides.

PITFALLS:
- Time window — does the user need to complete in one session? a week? define it.
- User-level vs session-level — different denominators, different numbers.
- Order assumption — "did they cart THEN view"? Real users back-and-forth.
- New vs returning — funnel shape differs by segment.

Computing it in SQL (sketch):
  WITH steps AS (
    SELECT user_id, MAX(event='view')     AS viewed,
                   MAX(event='cart')      AS carted,
                   MAX(event='checkout')  AS checked,
                   MAX(event='pay')       AS paid
    FROM events GROUP BY user_id
  )
  SELECT SUM(viewed), SUM(carted), SUM(checked), SUM(paid) FROM steps;`,
        exercisePrompt:
`A Shopee funnel last week: 10,000 visits → 4,000 product views → 800 carts → 600 checkouts → 400 paid. Where is the biggest drop-off in ABSOLUTE users, and where is the worst step-conversion in PERCENTAGE terms? 2–3 sentences.`,
      },
      {
        id: 'm6-t6',
        title: '6.6 P-values — Intuition without the Maths',
        kind: 'concept',
        content:
`The number you'll be asked about in every A/B-test interview.

DEFINITION (plain English): "Assuming the variant has NO real effect, what's the probability we'd see a difference at least as large as the one we observed, just by chance?"

  Low p-value (e.g. p = 0.01) → observed difference is UNLIKELY under no-effect → evidence the effect is real.
  High p-value (e.g. p = 0.4) → difference is well within what random noise produces → no evidence of an effect.

Standard threshold: p < 0.05  → "statistically significant."

WHAT P-VALUES ARE NOT:
- NOT the probability the variant works.
- NOT the probability you'd see this result if you re-ran the test.
- They do NOT tell you HOW BIG the effect is — they only address "is it likely random?"

THE TWO MISUSES INTERVIEWERS PROBE:
1. PEEKING — checking p daily, stopping when significant. Inflates the false-positive rate.
2. CONFUSING SIGNIFICANCE WITH IMPORTANCE — at high traffic, p=0.0001 on a 0.1% lift is still a worthless lift (significance comes from huge n, not from the effect being meaningful).

Senior take: "p-value is one input. I also want effect size, confidence interval, and a sanity check on sample ratio."`,
        exercisePrompt:
`A test shows variant B with a 7% relative lift, p = 0.02, but only 500 users per arm. In 2–3 sentences, would you ship and why or why not? Consider what a p-value addresses vs what it ignores.`,
      },
      {
        id: 'm6-t7',
        title: '6.7 Confidence Intervals',
        kind: 'concept',
        content:
`The interval gives you the EFFECT SIZE picture a p-value alone doesn't.

A 95% CI for the variant lift, like  [+0.4%, +3.6%] , reads as: "We're 95% confident the true effect is somewhere in this range."

Tighter intervals = more data = more confidence.

THE 3 SCENARIOS YOU'LL SEE:
- Wide CI CONTAINING 0     →  underpowered, can't conclude anything
- Narrow CI NOT containing 0 → real effect, with size you can plan around
- CI on BOTH sides of 0 close to it →  effect may exist or may not — collect more data

PRACTICAL READING:
- Lift CI: [-0.5%, +0.5%]   →  flat. Don't ship.
- Lift CI: [+0.1%, +5.0%]   →  effect positive but uncertain how big.
- Lift CI: [+2.0%, +2.4%]   →  ship it. Strong, narrow signal.

INTERVAL > P-VALUE in interviews. P-value is binary (yes/no); CI shows MAGNITUDE.`,
        exercisePrompt:
`A test reports a +1.2% lift with 95% CI of [-0.3%, +2.7%], p = 0.08. The PM wants to ship. In 2–3 sentences, what do you recommend and why?`,
      },
      {
        id: 'm6-t8',
        title: '6.8 Power & Sample Size',
        kind: 'concept',
        content:
`Before you run a test, decide how big it needs to be.

The 4 levers:
- BASELINE rate (e.g. 5% conversion)
- MINIMUM DETECTABLE EFFECT — the smallest lift you'd care to catch (e.g. detect a 10% relative lift = 5.5%)
- SIGNIFICANCE α — usually 0.05
- POWER 1-β — usually 0.80 — the prob you'd detect the effect if it's real

Rough rule for proportions at α=0.05, power=0.80:

  Smaller effect or smaller baseline → MUCH bigger sample required.

  For a 5% baseline, detecting a 10% relative lift (5.0% → 5.5%) needs ≈ 30,000 per variant.
  For a 1% baseline, detecting a 10% relative lift needs closer to 150,000 per variant.

Sample-size calculators (Evan Miller, statsig.com, your internal tool) make the maths trivial. The skill is knowing to USE one before the test starts.

UNDERPOWERED TESTS waste calendar time without producing decisions. Calling a flat result "no difference" when you only had power 0.30 is the canonical analyst mistake.`,
        exercisePrompt:
`Your team wants to detect a 5% RELATIVE lift on a 3% baseline conversion (so 3.0% → 3.15%). Are 5,000 users per variant enough? In 2–3 sentences, what's your answer and what would you tell the PM?`,
      },
      {
        id: 'm6-t9',
        title: '6.9 Sample Ratio Mismatch (SRM)',
        kind: 'concept',
        content:
`You ran a 50/50 A/B test. You expected 50,000 users per variant. You got 47,212 vs 52,788.

That difference is too large for random assignment alone to explain — your test is BROKEN. Conclusions from an SRM test are UNRELIABLE no matter what the p-value says on the primary metric.

WHY IT HAPPENS:
- Buggy randomisation (hash modulo on a non-uniform key)
- Cookie / client-side bucketing collisions
- Bot traffic landing predominantly on one variant
- Different feature flags shipping at different times
- One variant errors out → user retries → ends up in the other

HOW TO DETECT:
- Chi-square test on the bucket counts vs expected ratio.
- Most experimentation platforms surface SRM automatically — TRUST THE WARNING.

WHAT TO DO:
- DON'T pretend the metric result is valid.
- Investigate the bucketing pipeline. Talk to engineering.
- Re-run after fix. Don't slip and say "close enough."

This is the #1 thing that turns a "winning" experiment into an embarrassing rollback.`,
        exercisePrompt:
`An A/B test with 50/50 design shows a 48% / 52% split with 100,000 total users. Should you trust the conversion comparison? In 2–3 sentences, justify your answer.`,
      },
      {
        id: 'm6-t10',
        title: '6.10 Cannibalization vs Incrementality',
        kind: 'concept',
        content:
`You launched a new product. It made $1M. Did you make $1M MORE, or did you shift $1M from your existing products?

That's the cannibalization question.

INCREMENTAL revenue   = revenue that wouldn't have happened otherwise.
CANNIBALIZED revenue  = revenue that shifted between channels/products with no net change.

HOW YOU MEASURE IT:
- A/B HOLDOUT — keep a control group from seeing the new feature. Compare TOTAL spend, not feature-specific spend.
- PRE/POST with CONTROL MARKET — compare cities or segments that did vs didn't get the rollout.
- CAUSAL MODELING — diff-in-diff, synthetic control. Used when randomisation isn't possible.

A LAZADA / SHOPEE INTERVIEW QUESTION SHAPE: "We launched a flash-sale feature. GMV in the flash-sale category went up 30%. What do you want to know before celebrating?"

Right answer: incrementality. Maybe regular-price GMV in the same category dropped 25%. Net lift is +5%, not +30%.

This separates senior analysts from junior ones.`,
        exercisePrompt:
`Lazada launched a "flash sale" feature. Category GMV rose 30% in flash-sale weeks. In 2–3 sentences, what additional data do you need to know if this was real growth or just cannibalization of existing demand?`,
      },
      {
        id: 'm6-t11',
        title: '6.11 Forecasting Methods at a Glance',
        kind: 'concept',
        content:
`You don't need to be a forecasting expert. You need to RECOGNISE the methods.

NAIVE / MOVING AVERAGE — last value, or mean of last N. Baseline; useful sanity check.

EXPONENTIAL SMOOTHING — weighted average giving recent values more weight. Variants:
  - Simple smoothing      (level only)
  - Holt                  (level + trend)
  - Holt-Winters          (level + trend + seasonality)

ARIMA — auto-regressive integrated moving average. Time-series workhorse when residuals are stationary.

PROPHET (Meta) — additive decomposition with seasonality + holiday regressors. Good for business data.

ML methods — XGBoost on time-shifted features, LSTM, etc. Overkill for most analyst work.

THE QUESTIONS TO ASK BEFORE PICKING:
- Is there a trend?
- Is there seasonality? Weekly? Yearly?
- Is there a holiday effect?
- How far ahead do I need to forecast?
- What's the cost of being wrong by 10%? 50%?

For Shopee/Lazada/Agoda — DEMAND FORECASTING usually means Prophet or seasonal-naive baselines, not deep learning.`,
        exercisePrompt:
`You're forecasting hotel bookings 30 days out for Agoda. Bookings have strong weekly seasonality (weekends > weekdays) and rise around holidays. In 2–3 sentences, which method would you start with and why?`,
      },
      {
        id: 'm6-t12',
        title: '6.12 Diagnosing a Metric Drop — Case Study',
        kind: 'concept',
        content:
`THE INTERVIEW STAPLE. "GMV dropped 20% week-over-week. What do you do?"

A 5-step framework that signals "I think like a senior analyst":

1. CONFIRM IT'S REAL
   - Is the metric calculation broken? Tracking issue?
   - Is the comparison window correct?
   - Cross-check against an independent data source.

2. DECOMPOSE
   - GMV = visitors × CR × AOV. Which factor changed?
   - Split by country, category, device, new vs returning users.
   - Look at funnel-step-level conversion.

3. SEGMENT
   - Is the drop uniform, or concentrated in one segment?
   - "iOS only" → an app release bug.
   - "TH only" → marketing change or payment outage.

4. CORRELATE WITH EXTERNAL
   - What shipped this week? Product, marketing, pricing, payments.
   - Competitor promo? Holiday? Outage?
   - Cross-reference against the change log.

5. PROPOSE FIX & QUANTIFY IMPACT
   - "Rollback flag X — estimated lift +12%."
   - "Add SKU search results back; A/B test estimates +3%."

SAY THIS FRAMEWORK OUT LOUD in the interview. Don't just "I'd look at the data" — name the steps.`,
        exercisePrompt:
`GMV dropped 20% week-over-week. Traffic was flat. AOV was flat. In 3–4 sentences, what's your hypothesis and which specific data would you pull next?`,
      },
    ],
  },
];
