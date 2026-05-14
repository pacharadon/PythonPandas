// Thai translations for lesson content + exercise prompts, keyed by topic id.
//
// Convention used here, matching how Bangkok tech folks actually write:
//   - English technical terms stay English: DataFrame, groupby, NULL, JOIN, etc.
//   - Code blocks stay as-is (executable code)
//   - Inline comments in code blocks: keep English when they're part of canonical
//     examples, translate to Thai when they're explanatory
//   - Connective prose, framing, "why this matters" → Thai
//
// If a topic id is missing here, the app falls back to the English content.

export const TH_CONTENT = {
  // ─────────────────────────────────────────────────────────────
  // Module 1 · Foundations · พื้นฐาน
  // ─────────────────────────────────────────────────────────────

  'm1-t1':
`Variable หมายถึงตัวแปรที่ชี้ไปยังค่าใดค่าหนึ่ง ใน Python ไม่ต้องประกาศชนิด ไม่ต้องเขียน type Python คิดเองได้

price = 250
name  = 'Don'

5 ชนิดข้อมูลหลักที่ครอบคลุมงานจริง 95%:

- int    — 5, 1800, -3
- float  — 3.14, 0.0
- str    — 'paid'
- bool   — True / False
- None   — "ไม่มีค่า" — ค่าที่หายไปมักจะเริ่มต้นเป็น None

ตรวจชนิดข้อมูล:  type(price)  →  <class 'int'>

เรื่อง Coercion สำคัญตอนอ่าน CSV ที่ข้อมูลสกปรก สตริงที่หน้าตาเหมือนตัวเลขแต่บวกกันไม่ได้:

'250' + '100'  →  '250100'        (ต่อสตริงกัน ไม่ใช่บวกเลข)
int('250') + 100  →  350           (พอ cast เป็น int ก็บวกได้)
float('3.14')  →  3.14
str(250)       →  '250'

ใน pandas เรื่องนี้กลายเป็น  df['gmv'].astype(int)  หรือ  pd.to_numeric(df['gmv'])`,

  'm1-t2':
`F-strings เป็นวิธีสร้างสตริงแบบสมัยใหม่ใส่ตัว f นำหน้าเครื่องหมายคำพูด แล้วใส่ตัวแปรใน { }:

city = 'Bangkok'
print(f'Welcome to {city.upper()}')   # → Welcome to BANGKOK

5 string methods ที่ pandas ใช้กับคอลัมน์ทั้งคอลัมน์ผ่าน .str:

.strip()             ตัด whitespace หัวท้าย
.lower() / .upper()  เปลี่ยน case
.replace('a','b')    แทนที่
.split(',')          → list
.startswith('TH')    → bool

ใน pandas:  df['country'].str.lower().str.strip()
นี่คือการทำงานแบบ vectorised ทั้งคอลัมน์ ไม่ต้อง loop`,

  'm1-t3':
`Operators ที่ใช้:  +  -  *  /  //  %  **

  /    หารธรรมดา        7 / 2  → 3.5
  //   floor division   7 // 2 → 3
  %    modulo           7 % 2  → 1
  **   ยกกำลัง           2 ** 8 → 256

divmod(a, b) → (a // b, a % b) — เรียกครั้งเดียวได้สองค่า มีประโยชน์ตอนแปลงหน่วย

round(x, n) — ใช้ banker's rounding (round-half-to-even) round(2.5) → 2, round(3.5) → 4 คนใหม่งงเสมอ ถ้าอยากปัดเลขแบบปกติให้ใช้ math.floor / math.ceil ตามต้องการ

ลำดับการคำนวณตามคณิตศาสตร์:  **  มาก่อน  *  /  มาก่อน  +  - ถ้าไม่แน่ใจให้ใส่วงเล็บ

Integer ใน Python เก็บความแม่นยำได้ไม่จำกัด (ไม่มี overflow) ส่วน Float เป็น IEEE 754 — 0.1 + 0.2 ไม่เท่ากับ 0.3 จะแก้กันใน 1.4`,

  'm1-t4':
`Operators เปรียบเทียบ:  ==  !=  <  >  <=  >=

==  vs  is :
  ==   เทียบ "ค่า"          'abc' == 'abc'  → True
  is   เทียบ "ตัวเดียวกันในหน่วยความจำ" ใช้กับ None, True, False เท่านั้น

  x = [1,2,3]; y = [1,2,3]
  x == y  → True
  x is y  → False   (คนละ object กัน)

กับดัก Floating-point:
  0.1 + 0.2 == 0.3   → False    (จริงๆ คือ 0.30000000000000004)
  import math
  math.isclose(0.1 + 0.2, 0.3)   → True

Chained comparison อ่านเป็นธรรมชาติ:
  if 0 < score < 100:    # แทนที่จะเขียน  if score > 0 and score < 100:

ใน pandas อย่าใช้ == เปรียบเทียบ Series กับ None ให้ใช้ .isna() / .notna() แทน เพราะ NaN == NaN จะได้ False เสมอ`,

  'm1-t5':
`Branch ตามเงื่อนไข Python ใช้ indentation ไม่มีปีกกา

  if gmv > 1000:
      tier = 'large'
  elif gmv > 100:
      tier = 'medium'
  else:
      tier = 'small'

เงื่อนไขรับค่า Truthy / Falsy อะไรก็ได้ (อธิบายใน 1.9)

PRO TIP — ใช้ EARLY RETURN ดีกว่าซ้อน if ลึกๆ:

  # อ่านยาก
  def grade(x):
      if x is not None:
          if x > 0:
              if x < 100:
                  return 'ok'
              return 'too big'
          return 'negative'
      return None

  # อ่านง่ายขึ้นเยอะ
  def grade(x):
      if x is None: return None
      if x <= 0:    return 'negative'
      if x >= 100:  return 'too big'
      return 'ok'

ถ้าซ้อนเกิน 3 ชั้นเมื่อไหร่ ให้รีแฟกเตอร์`,

  'm1-t6':
`for loop ใน Python วน iterate ผ่าน sequence — เป็นแบบ foreach ไม่ใช่ counter loop

  for status in ['paid', 'cancelled', 'pending']:
      print(status)

range(stop) / range(start, stop) / range(start, stop, step):

  for i in range(5):          # 0, 1, 2, 3, 4
  for i in range(1, 6):       # 1, 2, 3, 4, 5
  for i in range(0, 10, 2):   # 0, 2, 4, 6, 8

วน dict จะได้ key ออกมา (ใช้ .items() ถ้าอยากได้ทั้ง key + value):

  for k in customer:               # k = 'name', 'spend', ...
  for k, v in customer.items():

ทำไมถึงจะเลิกใช้ for loop ในเร็วๆ นี้: ใน pandas การวนทีละแถวช้ากว่า vectorised op 100 เท่า เราเรียนรู้ loop เพื่ออ่าน code ได้ ไม่ใช่เพื่อใช้เขียน data pipeline`,

  'm1-t7':
`while loop รันจนกว่าเงื่อนไขเป็น False ใช้ตอนที่ไม่รู้จำนวนรอบล่วงหน้า

  total = 0
  i = 0
  while total < 1000 and i < len(prices):
      total += prices[i]
      i += 1

break ออกจาก loop ทันที continue ข้ามไปรอบถัดไป

  for p in prices:
      if p < 50:        continue       # ข้ามค่าน้อยไป
      if p > 5000:      break          # หยุดถ้าเจอ outlier
      process(p)

กับดัก INFINITE LOOP — ถ้าลืมเลื่อนตัวแปร loop:

  while True:
      do_thing()        # ไม่มีทางออกถ้าไม่มี break ข้างใน

ใช้ while เท่าที่จำเป็น 90% ของกรณี for + range เคลียร์กว่า`,

  'm1-t8':
`Function คือบล็อกของ code ที่มีชื่อ รับ input ส่ง output ออกมา

  def aov(gmv_list):
      if not gmv_list:
          return 0
      return sum(gmv_list) / len(gmv_list)

  aov([250, 480, 1200])   # → 643.33

Default arguments:
  def greet(name, greeting='Hello'):
      return f'{greeting}, {name}!'

กับดัก MUTABLE-DEFAULT — โดนทุกคนสักครั้ง:

  def add(item, bag=[]):       # bag ถูก SHARE ทุก call!
      bag.append(item)
      return bag

  add(1)  # [1]
  add(2)  # [1, 2]   ← เซอร์ไพรส์

แก้: ใช้ None เป็น sentinel

  def add(item, bag=None):
      if bag is None: bag = []
      bag.append(item)
      return bag`,

  'm1-t9':
`None คือ "ไม่มีค่า" ของ Python คนละอย่างกับ False, 0, ''

6 ค่าที่เป็น Falsy ต้องจำให้ได้ ค่าพวกนี้จะถือว่า False ใน boolean context:

  False
  None
  0     (และ 0.0)
  ''    (สตริงว่าง)
  []    (list ว่าง)
  {}    (dict / set ว่าง)

นอกจากนั้นทั้งหมดเป็น Truthy

วิธี check null แบบมาตรฐาน:

  if x is None:          # เทียบ None ด้วย 'is' เสมอ ไม่ใช่ '=='
  if not items:          # ครอบคลุมทั้ง list ว่างและ None
  result = x if x is not None else fallback

ใน pandas เส้นแบ่ง None กับ NaN เบลอ ทั้งคู่ขึ้นเป็น "หาย" ใน .isna() อย่าเทียบ None ด้วย == บน column ให้ใช้ method แทน`,

  'm1-t10':
`เรื่องนี้คือสิ่งที่คนใหม่งงที่สุด

print(x) แสดงผลที่ console — ไว้ดูเฉยๆ
return x ส่งค่ากลับให้ตัวที่เรียก function — ไว้ใช้ต่อในโปรแกรม

  def add(a, b):
      print(a + b)        # print แต่ return เป็น None!

  result = add(2, 3)      # print 5 ออกมา
  result + 1              # TypeError: unsupported operand type(s)

  def add(a, b):
      return a + b        # คราวนี้ RETURN จริง

  result = add(2, 3)
  result + 1              # → 6

กฎ: ใน function ใช้ return เพื่อส่งค่า ใช้ print แค่ตอน debug

ใน notebook (Jupyter, sandbox นี้) บรรทัดสุดท้ายถ้าเป็น expression จะแสดงผลให้อัตโนมัติ ไม่ต้อง print`,

  'm1-t11':
`code ที่จับข้อมูลจริงจะเจอ exception แน่ๆ: CSV เพี้ยน, key ไม่มี, Unicode พิลึก ต้องจัดการอย่างตั้งใจ ไม่ใช่ปล่อยให้ crash

  try:
      n = int(raw_value)
  except ValueError:
      n = None        # default ถ้า parse ไม่ได้

จับ exception แบบเจาะจง อย่าใช้  except:  เปล่าๆ (มันจะกิน KeyboardInterrupt และ bug ที่เราต้องเห็น)

ที่พบบ่อยในงานข้อมูล:
  ValueError       — parse ไม่ผ่าน (int(), float())
  KeyError         — dict ไม่มี key
  IndexError       — list หา index ไม่เจอ
  TypeError        — ส่ง type ผิด
  ZeroDivisionError — หารด้วย 0

finally — รันแน่ๆ ไม่ว่าจะ error หรือไม่ (ใช้ cleanup):
  try:
      f = open(path)
      ...
  finally:
      f.close()

ใน pandas เราแทบไม่ใช้ try/except — ใช้ .fillna() หรือ pd.to_numeric(errors='coerce') แทน รู้ทั้งสองวิธีเอาไว้ใช้เลือก`,

  'm1-t12':
`รูปแบบ import 3 แบบ:

  import math               # ทั้งโมดูล — เรียก math.sqrt(9)
  from datetime import date # นำชื่อมาเฉพาะ — เรียก date.today()
  import numpy as np        # ตั้ง alias — np.array(...)

อย่าใช้  from x import *  — มันโผล่ชื่อมั่วใน namespace ทำให้ tooling พัง

โมดูลใน standard library ที่งาน analyst ใช้บ่อย:

  math        — sqrt, ceil, floor, isclose, log, exp
  datetime    — date, datetime, timedelta
  json        — loads (parse), dumps (serialise)
  collections — Counter, defaultdict, OrderedDict
  itertools   — chain, combinations, groupby
  csv         — reader, writer (พอใช้ pandas ก็ไม่ค่อยใช้)
  statistics  — mean, median, stdev (sample เล็กๆ)
  re          — regex — ใช้พอประมาณ

External essentials: pandas (pd), numpy (np), matplotlib (plt), seaborn (sns)`,

  // ─────────────────────────────────────────────────────────────
  // Module 2 · Collections · คอลเลกชัน
  // ─────────────────────────────────────────────────────────────

  'm2-t1':
`List คือลำดับที่แก้ไขได้ ใส่ใน []

prices = [250, 480, 1200, 99]

โครงสร้างเหมือน pandas Series — มีค่า + positional index เริ่มที่ 0

Indexing:
  prices[0]    → 250        (ตัวแรก)
  prices[-1]   → 99         (ตัวสุดท้าย)

Slicing list[start:stop] — stop ไม่รวม:
  prices[1:3]  → [480, 1200]
  prices[:2]   → [250, 480]
  prices[-2:]  → [1200, 99]

List ของ list คือตาราง 2 มิติ ซึ่งคือสิ่งที่ pd.DataFrame() จะแปลงเป็น row และ column`,

  'm2-t2':
`Dict คือ key→value lookup ใน { }

customer = {'name': 'Don', 'spend': 1250}
customer['name']            → 'Don'
customer.get('phone','n/a') → 'n/a'  (ปลอดภัย — ไม่ crash ถ้าไม่มี key)

LIST OF DICTS คือรูปแบบข้อมูลดิบที่พบบ่อยที่สุด — ทุก API response, ทุกไฟล์ JSON เป็นรูปแบบนี้ ใส่เข้า pandas ได้ทันที:

orders = [
  {'order_id': 1, 'gmv': 250, 'status': 'paid'},
  {'order_id': 2, 'gmv': 1800, 'status': 'cancelled'},
]
df = pd.DataFrame(orders)

แต่ละ dict กลายเป็น 1 row แต่ละ key กลายเป็น 1 column นี่คือสะพานระหว่าง JSON ดิบกับตารางที่ query ได้`,

  'm2-t3':
`prices = [250, 480]

  prices.append(99)         # → [250, 480, 99]
  prices.extend([1, 2])     # → [250, 480, 99, 1, 2]   เพิ่มหลายตัว
  prices + [1, 2]           # → list ใหม่ ไม่ mutate ของเดิม
  prices.insert(0, 0)       # ใส่ที่ index 0
  prices.remove(250)        # ลบตามค่า ตัวแรกที่เจอ
  prices.pop()              # ดึงตัวสุดท้ายออก
  prices.pop(0)             # ดึงตัวแรกออก

Sorting:
  prices.sort()             # IN-PLACE, return None
  prices.sort(reverse=True)
  sorted(prices)            # list ใหม่ ของเดิมไม่ถูกแตะ
  prices.reverse()          # in-place
  list(reversed(prices))    # list ใหม่ที่ reversed

GOTCHA: list.sort() return None ทำให้คนพลาดกันบ่อย:

  result = my_list.sort()   # result เป็น None!
  result = sorted(my_list)  # ที่ถูกคือแบบนี้

ส่วนใหญ่ใช้ sorted() ไปเลย ยกเว้นต้องการ in-place เพื่อ performance`,

  'm2-t4':
`Tuple: ลำดับ IMMUTABLE
  point = (3, 5)
  point[0]      # → 3
  point[0] = 4  # TypeError

List: ลำดับ mutable
  scores = [90, 85]
  scores[0] = 95

ใช้ TUPLES เมื่อ:
- record ขนาดคงที่: (lat, lon), (year, month, day)
- return ค่าหลายตัว: return min_val, max_val
- ใช้เป็น dict key (list เป็น key ไม่ได้เพราะ mutate ได้)

UNPACKING — ใช้ได้กับ tuple, list, iterable ทุกแบบ:
  lo, hi = (10, 90)
  for k, v in customer.items():   # tuple unpacking
  a, *rest = [1, 2, 3, 4]         # a=1, rest=[2,3,4]

Named tuple (ใส่ชื่อ field โดยไม่ต้องเขียน class):
  from collections import namedtuple
  Order = namedtuple('Order', 'id gmv status')
  o = Order(5001, 250, 'paid')
  o.gmv  # → 250

ในงานจริง dataclasses หรือ dict ก็ใช้ได้ดีกว่า แต่จะเจอ namedtuple ใน code สัมภาษณ์เป็นประจำ`,

  'm2-t5':
`Set คือ collection ที่ไม่เรียงลำดับ และเก็บแต่ค่า UNIQUE

  countries = {'TH', 'SG', 'MY'}
  countries.add('VN')           # เพิ่ม
  countries.remove('VN')        # KeyError ถ้าไม่มี
  countries.discard('XX')       # เงียบถ้าไม่มี
  'TH' in countries             # ทดสอบ O(1)

SET MATH — ตรงกับ SQL set operators:
  a | b      union           (UNION)
  a & b      intersection    (INTERSECT)
  a - b      difference      (EXCEPT)
  a ^ b      symmetric diff  (XOR)

จุดเด่น performance — \`x in some_set\` เป็น O(1); \`x in some_list\` เป็น O(n) ถ้าจะถามว่า "ค่านี้อยู่ใน collection ใหญ่นี้หรือเปล่า" ให้ใช้ set

Dedupe list:
  list(set(items))             # ลำดับ NOT preserved
  list(dict.fromkeys(items))   # รักษาลำดับ (Py 3.7+)

Empty set ใช้ set() — \`{}\` คือ empty DICT`,

  'm2-t6':
`customer = {'name': 'Don', 'spend': 1250, 'country': 'TH'}

3 views:
  customer.keys()    # → dict_keys(['name', 'spend', 'country'])
  customer.values()  # → dict_values(['Don', 1250, 'TH'])
  customer.items()   # → dict_items([('name','Don'), ...])

วน iterate:
  for k in customer:               # implicit .keys()
  for v in customer.values():
  for k, v in customer.items():    # ใช้บ่อยที่สุด

ทดสอบ membership:
  'name' in customer               # ตรวจ KEY (ไม่ใช่ value)
  1250 in customer.values()

Sort dict ตาม value (return list ของ tuple):
  sorted(customer.items(), key=lambda kv: kv[1])

Reverse dict (สลับ key/value):
  {v: k for k, v in customer.items()}
  (ต้องมั่นใจว่า value ไม่ซ้ำกัน ไม่งั้นจะทับกัน)`,

  'm2-t7':
`มี 3 วิธี เรียงจากใหม่ไปเก่า:

Python 3.9+ pipe operator:
  combined = a | b          # ฝั่งขวาชนะถ้าซ้ำกัน

Python 3.5+ spread:
  combined = {**a, **b}     # semantics เหมือนกัน — ขวาชนะ

dict.update (MUTATE ตัวซ้าย):
  a.update(b)               # a มี key ของ b เพิ่มเข้ามา

Pattern ที่ใช้บ่อยที่สุด — merge default กับ override:

  defaults = {'limit': 100, 'offset': 0, 'order': 'asc'}
  user_opts = {'limit': 50}
  config = defaults | user_opts
  # → {'limit': 50, 'offset': 0, 'order': 'asc'}

ถ้าเป็น NESTED dict การ merge เป็นแบบ SHALLOW — inner dict ถูกแทน ไม่ใช่ merge ด้านใน ถ้าอยาก deep merge ต้องเขียน helper เอง`,

  'm2-t8':
`ข้อมูลจริงไม่ flat

LIST OF DICTS — JSON array, รูปแบบธรรมชาติของตาราง:

  orders = [
      {'order_id': 1, 'gmv': 250, 'status': 'paid'},
      {'order_id': 2, 'gmv': 1800, 'status': 'cancelled'},
  ]
  orders[0]['gmv']            # → 250

  # filter
  [o for o in orders if o['status'] == 'paid']

  # แปลงเป็น pandas
  pd.DataFrame(orders)

DICT OF DICTS — เวลาที่ต้อง lookup โดย key แบบ O(1):

  by_id = {o['order_id']: o for o in orders}
  by_id[2]['gmv']             # → 1800

จาก list-of-dicts ไปเป็น dict-of-dicts เป็น one-liner ของ dict comprehension เป็น pattern ที่ใช้บ่อยมาก`,

  'm2-t9':
`3 ตัวช่วย iterate ที่ใช้ทุกวัน

zip — จับคู่ iterable สองตัวขึ้นไป:
  ids    = [1, 2, 3]
  prices = [250, 480, 1200]
  list(zip(ids, prices))     # [(1, 250), (2, 480), (3, 1200)]

  for i, p in zip(ids, prices):
      print(i, p)

  # สร้าง dict
  dict(zip(ids, prices))      # → {1: 250, 2: 480, 3: 1200}

enumerate — index + value:
  for i, item in enumerate(['a', 'b', 'c']):
      print(i, item)          # 0 a / 1 b / 2 c

  for i, item in enumerate(items, start=1):    # เริ่มที่ 1

zip หยุดที่ตัวสั้นที่สุด ถ้าอยากต่อ:
  from itertools import zip_longest
  zip_longest(short, long, fillvalue=0)

range — ดูใน 1.6 range เป็น lazy ใช้ list() แปลงถ้าต้องการ`,

  'm2-t10':
`sorted(iterable, key=fn, reverse=False)

key คืออาวุธลับ — ฟังก์ชันที่ map item ไปเป็นค่าที่อยากใช้ sort

Sort dict ตาม field:
  sorted(orders, key=lambda o: o['gmv'])               # น้อย→มาก
  sorted(orders, key=lambda o: o['gmv'], reverse=True) # มาก→น้อย

Sort หลาย field (Python sort เป็น STABLE — key เท่ากันรักษาลำดับเดิม):
  # ก่อน status, ภายใน status ตาม gmv มาก→น้อย
  sorted(orders, key=lambda o: (o['status'], -o['gmv']))

Sort string แบบ ignore case:
  sorted(names, key=str.lower)

operator.itemgetter เร็วกว่า lambda สำหรับ field ตรงๆ:
  from operator import itemgetter
  sorted(orders, key=itemgetter('gmv'), reverse=True)

Trick: ถ้าอยาก reverse แค่ field เดียวใน multi-key sort ให้ใส่ลบ`,

  'm2-t11':
`collections.Counter — dict subclass สำหรับนับ

  from collections import Counter

  statuses = ['paid', 'paid', 'cancelled', 'paid', 'pending']
  Counter(statuses)
  # → Counter({'paid': 3, 'cancelled': 1, 'pending': 1})

  Counter(statuses).most_common(2)
  # → [('paid', 3), ('cancelled', 1)]

ในระดับ pandas column สิ่งที่ทำหน้าที่เดียวกันคือ:
  df['status'].value_counts()

Counter MATH (บวก/ลบ tallies):
  a = Counter(week1)
  b = Counter(week2)
  diff = b - a               # count ที่เพิ่มในสัปดาห์นี้

ใช้ Counter เมื่อต้องการ frequency table จาก list ดิบๆ ไม่ต้องเปิด pandas`,

  'm2-t12':
`dict ที่สร้าง key หายไปอัตโนมัติด้วย default factory ลดความรำคาญของการเช็ค "key นี้มีหรือยัง"

  from collections import defaultdict

  # จัดกลุ่ม orders ตาม country
  by_country = defaultdict(list)
  for o in orders:
      by_country[o['country']].append(o)   # ไม่เจอ KeyError

  # นับด้วย defaultdict(int)
  counts = defaultdict(int)
  for s in statuses:
      counts[s] += 1                       # default 0

ถ้าไม่ใช้ defaultdict จะต้องเขียนยุ่งยาก:
  if key not in d:
      d[key] = []
  d[key].append(value)

ใน pandas เทียบเคียง:
  df.groupby('country').agg(list)

แต่ defaultdict เหมาะกับ pure-Python pipeline ก่อนเข้า pandas`,

  // ─────────────────────────────────────────────────────────────
  // Module 3 · Logic & Comprehensions · ลอจิก & Comprehensions
  // ─────────────────────────────────────────────────────────────

  'm3-t1':
`เปรียบเทียบ:  >  <  ==  !=  >=  <=
เตือน:  =  คือ assign, ==  คือ compare ผสมกันคือ bug ของมือใหม่อันดับหนึ่ง

Python ใช้ and / or / not เป็นคำเชื่อม logic

PANDAS แตกต่าง — และเป็นกับดักของ analyst หน้าใหม่ทุกคน:

  &   (and)        |   (or)        ~   (not)

ทุกเงื่อนไขต้องล้อมด้วยวงเล็บ เพราะ & มี precedence สูงกว่า > :

  df[(df['gmv'] > 1000) & (df['status'] == 'paid')]    ✓ ถูก
  df[df['gmv'] > 1000 & df['status'] == 'paid']        ✗ bug แบบเงียบ

ตอนเริ่มเขียน pandas filter ทุกครั้ง จำรูปแบบนี้ให้ขึ้นใจ`,

  'm3-t2':
`Syntax สำคัญที่สุดของการคิดแบบ pandas เป็น for loop บรรทัดเดียวที่สร้าง list

doubled = [x * 2 for x in [1, 2, 3]]          # → [2, 4, 6]

อ่านว่า:  "สำหรับ x แต่ละตัวใน list ให้ x * 2"

มี filter:
  expensive = [p for p in prices if p > 500]

มี transform + filter:
  rounded_high = [round(p) for p in prices if p > 500]

list pre-loaded ใน sandbox  sales = [120, 480, 75, 1500, 60, 230, 880]

นี่คือ mental model เดียวกับ pandas vectorised operation พอ comprehension อ่านเป็นธรรมชาติ pandas filter ก็จะง่ายเอง:

  Python:  [p for p in prices if p > 500]
  Pandas:  prices[prices > 500]`,

  'm3-t3':
`{ key_expr: val_expr for x in iterable [if cond] }

ตัวอย่าง:
  squares = {n: n*n for n in range(5)}
  # → {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

สร้าง lookup จาก list of dicts:
  by_id = {o['order_id']: o['gmv'] for o in orders}

Filter ระหว่างสร้าง:
  paid_only = {o['order_id']: o['gmv'] for o in orders if o['status'] == 'paid'}

Invert dict (สลับ key กับ value):
  inverted = {v: k for k, v in d.items()}
  (สมมุติว่า value ไม่ซ้ำ ไม่งั้นจะทับ)

Mental model เหมือน list comp แต่มี 2 expression คั่นด้วย :`,

  'm3-t4':
`{ expr for x in iterable [if cond] }

หาค่า unique จาก list of dicts:
  countries = {o['country'] for o in orders}

เทียบกับเขียน loop:
  countries = set()
  for o in orders:
      countries.add(o['country'])

อย่าสับสนกับ dict comp — dict comp มี colon : ระหว่าง key กับ value ส่วน set comp ไม่มี :

  {x for x in range(5)}       # set {0,1,2,3,4}
  {x: x for x in range(5)}    # dict {0:0, 1:1, ...}

Empty literals:
  set()    # empty SET
  {}       # empty DICT
  set      # type ของมันเอง`,

  'm3-t5':
`(expr for x in iterable)              # parens — ไม่ใช่ bracket

เหมือน list comp แต่เป็น LAZY — สร้างค่าทีละตัวไม่ build list ใหญ่ในหน่วยความจำ

  total = sum(o['gmv'] for o in orders if o['status'] == 'paid')

ทำไมสำคัญ: ตอนวนหลายล้านแถว ไม่อยาก build list ใหญ่ๆ แค่จะ sum generator expression ใช้แค่ที่ yield

ถ้าฟังก์ชันรับ iterable ตัวเดียว ดร็อปวงเล็บข้างนอกได้:
  sum(o['gmv'] for o in orders)              # สะอาด
  any(o['gmv'] > 1000 for o in orders)
  max(orders, key=lambda o: o['gmv'])

Trade-off: iterate ได้ครั้งเดียว หลังจากนั้น generator หมด ถ้าต้อง scan สองรอบให้ list() ก่อน`,

  'm3-t6':
`loop ซ้อน loop ซ้อนใน comprehension

FLATTEN list 2 มิติ:
  flat = [x for row in matrix for x in row]
  # [[1,2],[3,4]] → [1, 2, 3, 4]

อ่านจากซ้ายไปขวาเหมือน nested for loops

มี filter ด้านใน:
  [o for batch in batches for o in batch if o['status'] == 'paid']

เทียบเป็น for loop:
  flat = []
  for batch in batches:
      for o in batch:
          if o['status'] == 'paid':
              flat.append(o)

เกิน 2 ระดับ: ใช้ loop เถอะ nested comp อ่านไม่ออกง่ายๆ

ถ้าจะ TRANSFORM matrix (ไม่ใช่ flatten — return list ของ list):
  [[x * 2 for x in row] for row in matrix]`,

  'm3-t7':
`value_if_true  if  condition  else  value_if_false

ใช้ inline เป็น branch บรรทัดเดียว:
  tier = 'high' if gmv > 1000 else 'low'

ใน comprehension:
  [('high' if g > 1000 else 'low') for g in gmvs]

Chained ternary เขียนได้แต่อ่านไม่ออก ใช้ elif แทน:
  # หลีกเลี่ยง
  tier = 'L' if g < 100 else 'M' if g < 1000 else 'H'
  # แทนด้วย
  if g < 100:     tier = 'L'
  elif g < 1000:  tier = 'M'
  else:           tier = 'H'

ใน pandas ตัวเทียบเคียงสำหรับ column คือ np.where (เรียนในหัวข้อถัดไป):
  df['tier'] = np.where(df['gmv'] > 1000, 'high', 'low')`,

  'm3-t8':
`any(iterable)  → True ถ้ามีอย่างน้อย 1 ตัวเป็น truthy
all(iterable)  → True ถ้าทุกตัว truthy (iterable ว่าง → True)

  any(o['status'] == 'paid' for o in orders)
  all(o['gmv'] > 0 for o in orders)

ทั้งคู่ SHORT-CIRCUIT — หยุดทันทีที่รู้คำตอบ คู่กับ generator expression สำหรับเช็ค "มีตัวไหนเป็นแบบนี้ไหม" ใน data ใหญ่ๆ

ควรรู้: empty iterable ทำตัวยังไง
  any([])  → False
  all([])  → True       (vacuous truth — แปลกแต่จริง)

ใน pandas ระดับ column:
  (df['status'] == 'paid').any()
  (df['gmv'] > 0).all()`,

  'm3-t9':
`Assign + ใช้งานใน expression เดียว Python 3.8+

ใช้เมื่อต้องคำนวณค่าเดิมซ้ำ 2 ครั้ง:

  # ก่อน walrus
  data = fetch()
  if len(data) > 10:
      process(data)

  # ใช้ walrus
  if (n := len(fetch())) > 10:
      process(fetch())          # (หรือเก็บผล fetch ก่อน)

ใน while loop อ่าน chunk:
  while (chunk := stream.read(1024)):
      handle(chunk)

ใน comprehension:
  [y for x in data if (y := compute(x)) > 0]

ใช้พอประมาณ — ใช้มากเกินทำให้อ่านยาก กฎ: ถ้าทำให้ intent ชัดขึ้นให้ใช้ ถ้าแค่ทำให้บรรทัดสั้นลง อย่าใช้`,

  'm3-t10':
`กับดักของผู้สอบมาร่ำๆ ในข้อสัมภาษณ์

ใน Python ปกติ  and  และ  or  short-circuit:
  x and y       → x ถ้า x falsy, ไม่งั้น y
  x or y        → x ถ้า x truthy, ไม่งั้น y

ใน pandas  &  และ  |  เป็น ELEMENT-WISE — evaluate ทั้งสองข้างทุกแถว ไม่มี short-circuit บน Series

  df[(df['gmv'] > 1000) & (df['status'] == 'paid')]
  # ↑ คำนวณทั้งสองเงื่อนไขกับทุกแถว

ถ้าข้างหนึ่งหนัก ก็เสีย performance เต็มๆ ทางออก:
  - filter ทีละขั้น (composable, อ่านง่าย), หรือ
  - จัดให้งานหนักทำหลัง filter เบาๆ ก่อน (.loc บน set ที่เล็กลง)

อย่าใส่ lookup ช้าๆ ของ Python ใน Boolean mask ให้ใช้ .map() หรือ pd.merge precompute ไว้

CHEATSHEET:
  scalar:  if x > 1000 and status == 'paid':
  series:  df[(df['gmv'] > 1000) & (df['status'] == 'paid')]`,

  'm3-t11':
`Vectorised conditional — ทางเร็วสุดสำหรับ "คำนวณ column ใหม่จาก rule"

np.where(cond, if_true, if_false):
  import numpy as np
  df['tier'] = np.where(df['gmv'] > 1000, 'high', 'low')

หลาย bin — np.select scale ได้:
  conditions = [
      df['gmv'] < 100,
      df['gmv'] < 1000,
      df['gmv'] >= 1000,
  ]
  choices = ['small', 'medium', 'large']
  df['tier'] = np.select(conditions, choices, default='unknown')

เมื่อไหร่ไม่ใช้:
- 1 เงื่อนไข แค่ 2 categorical output    → np.where
- 2–6 bins                                  → np.select
- mapping string→string เยอะ              → .map() ด้วย dict (หัวข้อถัดไป)

อย่าใช้ .apply(lambda) สำหรับงานพวกนี้ — ช้ากว่า np.where 10 เท่าใน numeric column`,

  'm3-t12':
`วิธี translate categorical ที่สะอาดที่สุด

  status_emoji = {
      'paid':      '+',
      'cancelled': 'x',
      'pending':   '?',
  }
  df['icon'] = df['status'].map(status_emoji)

ค่าที่ไม่อยู่ใน mapping จะกลายเป็น NaN ใส่ default ด้วย .fillna():
  df['icon'] = df['status'].map(status_emoji).fillna('?')

ใช้ function แทน dict (พบน้อยกว่า — เลือก dict ถ้าทำได้):
  df['name_len'] = df['name'].map(len)

ถ้ามี DataFrame ที่ 2 ที่ใช้เป็น mapping ให้ใช้ pd.merge แทน .map() เหมาะกับ lookup เล็กๆ

Pattern นี้ดีกว่า np.where chain ยาวๆ เมื่อ category เกิน 3-4 ตัว`,

  // ─────────────────────────────────────────────────────────────
  // Module 4 · Pandas Core · Pandas หลัก
  // ─────────────────────────────────────────────────────────────

  'm4-t1':
`Series คือ column ที่มี label DataFrame คือ Series หลายตัวต่อกัน — ตาราง

import pandas as pd
df = pd.read_csv('orders.csv')

30 วินาทีแรกกับ dataset ใหม่ — drill ที่ต้องจำให้ได้:

  df.head()       5 แถวแรก
  df.tail(10)     10 แถวสุดท้าย
  df.shape        (rows, columns)  — ไม่มี parens, เป็น attribute
  df.info()       dtype + nullcount ต่อ column
  df.describe()   summary stat ของ numeric column
  df.columns      ชื่อ column
  df.dtypes       type ต่อ column

สร้างเอง (สัมภาษณ์ชอบถาม):

  df = pd.DataFrame({
      'order_id': [1, 2, 3],
      'gmv':      [250, 1800, 99],
      'status':   ['paid', 'cancelled', 'paid']
  })

ทำไม pandas ถึงดี: ทุก method ทำงานทั้ง column พร้อมกัน ไม่ต้อง for loop ทีละแถว`,

  'm4-t2':
`เลือก column:
  df['gmv']                column เดียว → Series
  df[['gmv', 'status']]    หลาย column   → DataFrame (สังเกตวงเล็บคู่)

filter row ด้วย boolean mask:
  df[df['gmv'] > 1000]

หลายเงื่อนไข — ต้องมีวงเล็บ ใช้ & ไม่ใช่ 'and':
  df[(df['gmv'] > 1000) & (df['status'] == 'paid')]

Negate ด้วย ~:
  df[~(df['status'] == 'cancelled')]

.isin() สำหรับหลายค่า:
  df[df['status'].isin(['paid', 'pending'])]

ตรวจ null:
  df[df['phone'].isna()]        rows ที่ phone หาย
  df[df['phone'].notna()]       rows ที่ phone มี

orders DataFrame pre-loaded ใน sandbox (TH/SG/MY · paid/cancelled/pending)`,

  'm4-t3':
`Concept ของ pandas ที่ถูกสอบบ่อยที่สุด pattern: split → apply → combine

พื้นฐาน:
  df.groupby('country')['gmv'].sum()

อ่านว่า: "แยก row ตาม country แล้ว sum gmv ของแต่ละกลุ่ม"

หลาย aggregation:
  df.groupby('country')['gmv'].agg(['sum', 'mean', 'count'])

groupby หลาย column:
  df.groupby(['country', 'status'])['gmv'].sum()

NAMED aggregations — สะอาดสุด สัมภาษณ์ senior อยากเห็น:

  df.groupby('country').agg(
      total_gmv   = ('gmv', 'sum'),
      avg_order   = ('gmv', 'mean'),
      order_count = ('order_id', 'count')
  ).reset_index()

reset_index() — chain ไว้ 90% ของเวลา ให้ผลลัพธ์เป็น flat DataFrame ไม่ใช่ multi-level index

orders pre-loaded ใน sandbox`,

  'm4-t4':
`รวมตารางใน pandas mental model เดียวกับ SQL JOIN

  pd.merge(left, right, how='left', on='customer_id')

4 ค่า 'how':
  'inner'  intersection           เก็บแถวที่ตรงกันสองข้าง
  'left'   ทั้งหมดจากซ้าย          NULL ขวาเมื่อไม่ตรง (ใช้บ่อย)
  'right'  mirror ของ left
  'outer'  union                  ทุกแถว NULL ตรงที่หาย

Multi-key join:
  pd.merge(a, b, on=['country', 'category'])

ชื่อ column ต่างข้าง:
  pd.merge(orders, ref, left_on='customer_id', right_on='cust_id')

Suffixes เมื่อสองข้างมี column ชื่อเดียวกัน (เช่น 'country' มีทั้งสองข้าง):
  pd.merge(orders, customers, on='customer_id', suffixes=('_ord', '_cust'))

CONCAT — stack แนวตั้ง ไม่ใช่ join:
  pd.concat([df_2024, df_2025], ignore_index=True)

ใช้ concat เมื่อ schema เหมือนกัน ใช้ merge เมื่อรวมตารางต่างๆ ด้วย key`,

  'm4-t5':
`Wide vs long ทุกข้อสอบเทสทิศใดทิศหนึ่ง

LONG → WIDE ด้วย pivot_table:

  df.pivot_table(
      index='country',
      columns='status',
      values='gmv',
      aggfunc='sum',
      fill_value=0,
  )

แต่ละแถวเป็น country unique, แต่ละ column เป็น status unique, cell คือ sum gmv

WIDE → LONG ด้วย melt — ตรงกันข้าม:

  pd.melt(df, id_vars=['country'], value_vars=['gmv', 'aov'])

stack / unstack: idea เดียวกัน แต่ทำงานบน MultiIndex level:

  df.set_index(['country', 'status'])['gmv'].unstack()

เลือกอันไหน:
- pivot_table  → aggregate ขณะ reshape
- melt         → จาก wide (แถวต่อ entity, หลาย metric column) ไป long (แถวต่อ entity-metric pair) สำหรับ plot หรือ groupby ต่อ

Default ใช้ long form สำหรับ pipeline analysis Wide ไว้สำหรับ display`,

  'm4-t6':
`วันที่จาก CSV มาเป็น string convert ก่อน ไม่งั้นทำอะไรเกี่ยวเวลาไม่ได้

  orders['created_at'] = pd.to_datetime(orders['created_at'])

.dt accessor — accessor แบบ string-method สำหรับ datetime:

  orders['created_at'].dt.year
  orders['created_at'].dt.month
  orders['created_at'].dt.day_name()
  orders['created_at'].dt.to_period('M')      # → 2025-03 etc

Resampling — groupby สำหรับเวลา:

  orders.set_index('created_at').resample('ME')['gmv'].sum()

period ที่ใช้บ่อย (pandas 2.x): 'D' day · 'W' week · 'ME' month-end · 'QE' quarter-end · 'YE' year-end
(ใน pandas < 2.2 ใช้ 'M' / 'Q' / 'Y' ได้ ปัจจุบัน FutureWarning)

Date math เป็น vectorised:
  orders['days_since'] = (pd.Timestamp.now() - orders['created_at']).dt.days

Time series คือหัวใจของ cohort retention, run-rate forecast, seasonal decomposition — ทั้งหมดที่ Shopee/Lazada สอบ`,

  'm4-t7':
`ค่าหายมาเป็น NaN (numeric) หรือ None / NaT ใน pandas ทั้งคู่ขึ้นใน .isna() / .notna()

DETECT:
  df.isna().sum()                    # null count ต่อ column
  df['phone'].isna()                 # boolean series
  df[df['phone'].isna()]             # rows ที่ phone หาย

DROP:
  df.dropna()                        # column ไหน NaN → drop row
  df.dropna(subset=['phone'])        # ดูแค่ column นี้
  df.dropna(thresh=3)                # เก็บ row ที่มี ≥3 non-null

FILL:
  df['phone'].fillna('unknown')                  # ค่าคงที่
  df['gmv'].fillna(df['gmv'].median())           # ค่าสถิติ
  df.fillna({'phone': 'unknown', 'gmv': 0})      # column-specific
  df['gmv'].ffill()                              # forward fill (time series — pandas 2.x)
  df['gmv'].bfill()                              # back fill

Pipeline ที่ใช้จริง: detect ก่อน → ตัดสินใจ drop/fill ต่อ column → อย่า impute ทั้งหมดโดยไม่คิด ค่าที่ impute มาส่งผลทุก statistic ปลายทาง`,

  'm4-t8':
`3 method ที่หน้าตาคล้ายกัน แต่ทำงานต่างกัน

.map (Series เท่านั้น):
  - Element-wise
  - รับ dict, Series, หรือ function
  - return Series ความยาวเท่าเดิม
    df['status'].map({'paid': 1, 'cancelled': 0})

.apply (Series หรือ DataFrame):
  - บน Series: เหมือน .map แต่รับเฉพาะ function
  - บน DataFrame: apply ตาม axis (default คือ row).
    df.apply(np.sum, axis=0)      # column sum
    df.apply(my_fn, axis=1)       # ROW BY ROW — ช้า

.transform (ใช้กับ groupby เป็นหลัก):
  - return Series ขนาด SAME SHAPE กับ input (broadcast ค่ากลับ)
  - วิธี pandas สำหรับ "คำนวณ mean ของ group แล้วใส่กลับทุกแถว":
    df['gmv_vs_avg'] = df['gmv'] - df.groupby('country')['gmv'].transform('mean')

ลำดับ performance: vectorised op >> .map / .apply บน Series > .apply บน DataFrame row หลีกเลี่ยง axis=1 apply เพราะเป็น Python ทีละแถว`,

  'm4-t9':
`Sort:
  df.sort_values('gmv')                                    # น้อย→มาก
  df.sort_values('gmv', ascending=False)
  df.sort_values(['country','gmv'], ascending=[True, False])

Sort ตาม index:
  df.sort_index()

Rank — ใส่ rank ให้แต่ละค่าใน column:
  df['gmv_rank'] = df['gmv'].rank()                  # tie → mean rank
  df['gmv_rank'] = df['gmv'].rank(method='dense')    # tie → int เดียวกัน ไม่กระโดด
  df['gmv_rank'] = df['gmv'].rank(method='min')      # tie → rank ต่ำสุด
  df['gmv_rank'] = df['gmv'].rank(ascending=False)

PER-GROUP RANK — เทียบเท่า SQL ROW_NUMBER() PARTITION BY:
  df['rank_in_country'] =
      df.groupby('country')['gmv'].rank(method='dense', ascending=False)

Top-N PER GROUP:
  mask = df.groupby('country')['gmv'].rank(method='dense', ascending=False) <= 3
  df[mask]`,

  'm4-t10':
`.str accessor vectorise ทุก string method ผ่าน column

  df['country'].str.lower()
  df['country'].str.strip()
  df['country'].str.upper()
  df['email'].str.contains('@')              # regex by default
  df['email'].str.contains('@', regex=False) # literal — เร็วกว่า
  df['name'].str.startswith('A')
  df['name'].str.endswith('.csv')
  df['name'].str.replace('_', ' ', regex=False)
  df['name'].str.split(' ')                  # → Series ของ list
  df['name'].str.len()
  df['name'].str.zfill(5)                    # pad zero

EXTRACT ด้วย regex return DataFrame ของ capture group:
  df['phone'].str.extract(r'(\\d{3})-(\\d{4})')

Chain ตามลำดับ — แต่ละ .str step return Series ใหม่

pandas 2.0+ ลองใช้ pd.StringDtype() ให้ performance ดีขึ้นเล็กน้อย + null handling ชัดขึ้น`,

  'm4-t11':
`Categorical column เก็บค่าเป็น integer code mapped ไป category list — ประหยัด memory + enable ORDERING สำหรับ ordinal data

  df['status'] = df['status'].astype('category')
  df['status'].cat.categories       # → Index(['cancelled','paid','pending'])
  df['status'].memory_usage()       # น้อยกว่า object เยอะ

ORDERED categorical:
  df['tier'] = pd.Categorical(df['tier'],
                              categories=['low','med','high'],
                              ordered=True)
  df[df['tier'] > 'low']            # เปรียบเทียบได้

ใช้เมื่อ:
- string ค่าซ้ำๆ low-cardinality ('status', 'country', 'category')
- Ordinal data ('low/med/high', 'q1/q2/q3/q4')

อย่าใช้เมื่อ:
- high-cardinality (พอๆ กับ object)
- free-text

GroupBy บน categorical default รวม unused category — ใส่ observed=True เพื่อตัด`,

  'm4-t12':
`สำหรับ analysis ระดับสัมภาษณ์ df.info() บอกที่ optimize ได้

  df.info()
  df.memory_usage(deep=True)    # แม่นยำสำหรับ object column

OPTIMISE:
- object → category สำหรับ string low-cardinality (memory ลด 10-100 เท่า)
- int64 → int32 / int16 เมื่อค่าพอดี
- float64 → float32 เมื่อ precision พอ
- Date → datetime64 (slicing, .dt, เร็วกว่า)

โหลด CSV ใหญ่ ประกาศ dtype ก่อน:
  pd.read_csv('big.csv', dtype={
      'status':     'category',
      'gmv':        'float32',
      'created_at': 'string',
  }, parse_dates=['created_at'])

CHUNK iterate สำหรับไฟล์ที่ไม่ fit memory:
  for chunk in pd.read_csv('big.csv', chunksize=100_000):
      process(chunk)

dtype layout ที่ clean คือสิ่งที่ทำให้ notebook ช้าๆ กลายเป็นรันในไม่กี่วินาที`,

  // ─────────────────────────────────────────────────────────────
  // Module 5 · SQL Essentials · SQL พื้นฐาน
  // ─────────────────────────────────────────────────────────────

  'm5-t1':
`SQL อ่านจากบนลงล่าง แต่ EXECUTE ตามลำดับนี้:

  FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT

รู้ลำดับนี้กำจัด bug 80% และ aliasing error

  SELECT order_id, gmv
  FROM orders
  WHERE status = 'paid' AND gmv > 1000
  ORDER BY gmv DESC
  LIMIT 10;

ต้องจำ:

  =  สำหรับเท่ากัน (ไม่ใช่ == แบบ Python)
  String ใช้ 'single quote' ไม่ใช่ double
  NULL ใช้  IS NULL  หรือ  IS NOT NULL  — ห้ามใช้  = NULL
  LIKE '%th%'         pattern match (% = any chars)
  BETWEEN 100 AND 500 inclusive ทั้งสองข้าง
  IN ('TH','SG','MY') membership

DESC และ ASC ใช้ต่อ column:  ORDER BY country ASC, gmv DESC`,

  'm5-t2':
`SQL GROUP BY = pandas .groupby() Mental model เดียวกัน syntax ต่าง

  SELECT country,
         SUM(gmv)    AS total_gmv,
         COUNT(*)    AS order_count,
         AVG(gmv)    AS avg_order
  FROM orders
  WHERE status = 'paid'
  GROUP BY country
  HAVING SUM(gmv) > 100000
  ORDER BY total_gmv DESC;

กฎที่สัมภาษณ์ถามทุกครั้ง:

1. ทุก column ใน SELECT ต้องอยู่ใน GROUP BY หรือ wrap ด้วย aggregate (SUM, COUNT, AVG, MIN, MAX)

2. WHERE filter row ก่อน group HAVING filter group หลัง group นี่คือคำถามสัมภาษณ์ที่พบบ่อยสุด — ต้องอธิบายได้ทันที

3. COUNT(*)  นับทุกแถวใน group
   COUNT(col) นับแถวที่ col IS NOT NULL
   COUNT(DISTINCT customer_id)  นับ customer unique — ใช้บ่อย`,

  'm5-t3':
`JOIN รวมตารางด้วย key:

  INNER JOIN  — เฉพาะแถวที่ตรงกันสองข้าง
  LEFT JOIN   — ทุกแถวจากซ้าย NULL ตรงที่ขวาไม่มี
  RIGHT JOIN  — mirror ของ LEFT (ใช้น้อย เขียนเป็น LEFT แทน)
  FULL JOIN   — ทุกแถวสองข้าง NULL ตรงที่หาย

  SELECT o.order_id, c.country
  FROM orders o
  LEFT JOIN customers c ON o.customer_id = c.customer_id;

WINDOW FUNCTIONS — aggregate ที่ไม่ collapse row Alooba ชอบมาก

  SELECT
    order_id,
    customer_id,
    gmv,
    ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY created_at) AS order_rank,
    SUM(gmv)     OVER (PARTITION BY customer_id) AS customer_total
  FROM orders;

Pattern ระดับสังหาร:

- First / Nth purchase ต่อ customer →
    ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY created_at)
- ค่า row ก่อนหน้า →  LAG(gmv) OVER (PARTITION BY customer_id ORDER BY created_at)
- running total →  SUM(gmv) OVER (PARTITION BY customer_id ORDER BY created_at)
- Top-N per group →  filter ที่ ROW_NUMBER() <= N ใน outer query`,

  'm5-t4':
`CTE = Common Table Expression = subquery มีชื่อที่กำหนดด้วย WITH ทำให้ query ซับซ้อนอ่านง่ายขึ้น เป็น pattern ที่ Alooba ชอบ

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

หลาย CTE ใน query เดียว — chain ด้วย comma (WITH เขียนครั้งเดียว):

  WITH paid AS ( SELECT * FROM orders WHERE status = 'paid' ),
       by_cust AS ( SELECT customer_id, SUM(gmv) AS s FROM paid GROUP BY customer_id )
  SELECT * FROM by_cust ORDER BY s DESC;

Subquery ใน WHERE — "customers ที่มีออเดอร์ paid อย่างน้อย 1 ตัว":

  SELECT *
  FROM customers
  WHERE customer_id IN (SELECT DISTINCT customer_id FROM orders WHERE status='paid');

กฎ: เมื่อ query มี aggregation มากกว่า 1 step ให้ใช้ CTE ผลลัพธ์เหมือนกัน ความง่ายต่างกัน`,

  'm5-t5':
`Self-join คือ join ตารางตัวเองเข้ากับตัวเอง ใช้กับ hierarchy และหา pair

Pattern ใช้ 2 alias สำหรับตารางเดียว:

  SELECT a.booking_id, b.booking_id
  FROM bookings a
  JOIN bookings b
    ON a.hotel_id   = b.hotel_id
   AND a.created_at = b.created_at
   AND a.booking_id < b.booking_id;       -- de-dupe + ตัด self-pair

Trick  a.id < b.id  กันไม่ให้ (1,2) และ (2,1) ปรากฏทั้งคู่ — และตัด (1,1) self-pair ด้วย

Hierarchy — คำถามสัมภาษณ์คลาสสิก:

  -- employees(id, name, manager_id)
  SELECT e.name AS employee, m.name AS manager
  FROM employees e
  LEFT JOIN employees m ON e.manager_id = m.id;

Self-join ช้าบนตารางใหญ่ — ทุก match scan ทั้งสองข้าง ถ้าจะ "หา duplicate" จริงๆ window function (COUNT(*) OVER (PARTITION BY ...)) ถูกกว่า`,

  'm5-t6':
`SET OPERATOR รวม rowset ของ 2 query สองข้างต้องมี column ENTSAME จำนวน + type ที่ compatible

UNION (ตัด duplicate):
  SELECT country FROM customers
  UNION
  SELECT country FROM bookings;

UNION ALL (เก็บ duplicate — เร็วกว่า เลือกเมื่อรู้ว่าไม่มี dup):
  SELECT customer_id FROM orders WHERE status='paid'
  UNION ALL
  SELECT customer_id FROM orders WHERE status='pending';

INTERSECT — row ที่อยู่ทั้งสองข้าง:
  SELECT customer_id FROM orders
  INTERSECT
  SELECT customer_id FROM customers WHERE country='TH';

EXCEPT (Oracle เรียก MINUS) — row ใน LEFT ที่ไม่ใน RIGHT:
  SELECT customer_id FROM customers
  EXCEPT
  SELECT DISTINCT customer_id FROM orders;
  -- → customer ที่ไม่เคยสั่ง

USE CASE:
- UNION ALL — รวม query แบ่งตาม partition / time-range
- INTERSECT — analysis overlap (paid และ pending customers)
- EXCEPT — gap analysis (สมัครแล้วไม่เคยสั่ง)

หลายคน default ใช้ UNION ทั้งที่ UNION ALL พอ เลือกอย่างตั้งใจ`,

  'm5-t7':
`วิธี SQL คำนวณ column จาก rule

  SELECT
      order_id,
      gmv,
      CASE
          WHEN gmv >= 1000 THEN 'large'
          WHEN gmv >= 100  THEN 'medium'
          ELSE 'small'
      END AS tier
  FROM orders;

แบบย่อสำหรับ equality หนึ่ง column:
  CASE status
      WHEN 'paid'      THEN 1
      WHEN 'cancelled' THEN 0
      ELSE NULL
  END AS is_paid

ใช้ INSIDE AGGREGATE — conditional aggregation, pattern อันดับ 1:

  SELECT country,
         COUNT(*)                                          AS total,
         COUNT(CASE WHEN status='paid'      THEN 1 END)    AS paid,
         SUM(CASE WHEN status='paid' THEN gmv ELSE 0 END)  AS paid_gmv
  FROM orders
  GROUP BY country;

นี่คือ "แสดง paid vs cancelled count ข้างกัน" — query เดียว scan เดียว สบายกว่า UNION 2 GROUP BY`,

  'm5-t8':
`จัดการ null โดยไม่ต้อง CASE WHEN ยาวๆ

COALESCE — return arg แรกที่ไม่ใช่ NULL:

  SELECT COALESCE(phone, alt_phone, 'unknown') AS contact
  FROM customers;

  -- guard คลาสสิกของ LEFT JOIN:
  SELECT c.customer_id, COALESCE(SUM(o.gmv), 0) AS total
  FROM customers c
  LEFT JOIN orders o ON o.customer_id = c.customer_id
  GROUP BY c.customer_id;

NULLIF — return NULL ถ้า 2 arg เท่ากัน ไม่งั้น return arg แรก
ใช้บ่อยที่สุด: กัน divide by zero

  SELECT total_revenue / NULLIF(total_orders, 0) AS aov FROM …;
  -- ถ้า total_orders = 0 ตัวหารกลายเป็น NULL → result NULL, ไม่ใช่ error

จำ — NULL ไม่ใช่ value มันคือ "unknown" NULL = NULL คือ NULL, ไม่ใช่ TRUE ใช้  IS NULL  /  IS NOT NULL  สำหรับ boolean test`,

  'm5-t9':
`แต่ละ dialect ใช้ฟังก์ชันต่างชื่อ sandbox นี้คือ SQLite — นี่ของ SQLite + standard / Postgres ที่จะเจอ Shopee/Lazada/Agoda

SQLite (sandbox):
  strftime('%Y', created_at)               -- year text
  strftime('%m', created_at)               -- month
  strftime('%Y-%m', created_at)            -- year-month bucket
  strftime('%w', created_at)               -- weekday (0=Sun)
  date(created_at, 'start of month')       -- วันแรกของเดือน
  date(created_at, '+7 days')
  date('now')
  julianday('now') - julianday(created_at) -- ผลต่างวัน

Postgres / Snowflake (อ่านได้ จะเจอ):
  DATE_TRUNC('month', created_at)
  EXTRACT(YEAR FROM created_at)
  created_at + INTERVAL '7 days'
  DATEDIFF(day, start, end)

MySQL:
  YEAR(created_at), MONTH(created_at)
  DATE_FORMAT(created_at, '%Y-%m')
  DATEDIFF(end, start)

สำหรับสัมภาษณ์: รู้ standard SQL (Postgres style) + dialect ของบริษัทเป้าหมาย`,

  'm5-t10':
`Window function ที่ดู row ก่อนหน้า / ถัดไปใน partition

  LAG(col, offset, default)   -- ค่าจาก N row ก่อนใน ORDER BY
  LEAD(col, offset, default)  -- ค่าจาก N row ถัดไป

  SELECT
      order_id, customer_id, created_at, gmv,
      LAG(gmv)  OVER (PARTITION BY customer_id ORDER BY created_at) AS prev_gmv,
      LEAD(gmv) OVER (PARTITION BY customer_id ORDER BY created_at) AS next_gmv
  FROM orders;

ใช้สำหรับ:
- การเปลี่ยนแปลง period-over-period:   gmv - LAG(gmv) OVER (…)   → growth amount
- transition ของ status:               LAG(status) → เมื่อก่อนเป็น 'paid' ไหม
- ช่วงเวลา:                            julianday(created_at) - julianday(LAG(created_at) OVER (…))

Default value สำหรับ row แรก (ที่ LAG ไม่มีอะไรย้อนหลัง):
  LAG(gmv, 1, 0) OVER (…)   -- 0 แทน NULL

ALOOBA bread and butter จำ syntax ให้ได้`,

  'm5-t11':
`3 rank function หน้าตาคล้ายกัน เลือกอย่างตั้งใจ:

ROW_NUMBER()    — 1, 2, 3 unique ต่อ partition Tie แตกตาม ORDER BY
RANK()          — ค่าเท่า → rank เท่ากัน rank ถัดไป SKIP (1, 1, 3, 4)
DENSE_RANK()    — ค่าเท่า → rank เท่ากัน rank ถัดไปต่อ (1, 1, 2, 3)
PERCENT_RANK()  — 0.0 ถึง 1.0 — percentile rank ใน partition
NTILE(n)        — แบ่ง row เป็น n bucket ขนาดเท่ากัน return 1..n

  SELECT
      customer_id, gmv,
      ROW_NUMBER() OVER (ORDER BY gmv DESC) AS rn,
      RANK()       OVER (ORDER BY gmv DESC) AS rk,
      DENSE_RANK() OVER (ORDER BY gmv DESC) AS dr,
      NTILE(4)     OVER (ORDER BY gmv DESC) AS quartile
  FROM orders;

NTILE เป็นวิธีง่ายสำหรับสร้าง tier:
  -- top 25% by spend → quartile 1
  NTILE(4) OVER (ORDER BY total_spend DESC) AS spend_quartile

ระวัง: bucket ของ NTILE อาจ UNEVEN size ถ้า total row หารด้วย n ไม่ลงตัว`,

  'm5-t12':
`เมื่อ query ช้า database บอกได้ว่าทำไม

  EXPLAIN SELECT … FROM orders WHERE country = 'TH';

มันแสดง EXECUTION PLAN — index ที่ใช้, join order, row estimate

5 PATTERN ที่ต้องจำ (ไม่ว่า dialect ไหน):

1. SEQUENTIAL SCAN (Seq Scan / Full Scan)
   อ่านทุกแถว ตารางเล็กไม่เป็นไร ตารางใหญ่แพง
   แก้: ทำ index ใน column ที่ filter / join

2. INDEX SCAN
   ใช้ index เร็ว — ที่อยากได้

3. NESTED LOOP JOIN
   แต่ละ row ฝั่งซ้าย scan ฝั่งขวา OK ถ้า small × indexed-large

4. HASH JOIN
   build hash ฝั่งหนึ่ง probe ด้วยอีกฝั่ง เร็วสำหรับ join equality ใหญ่ๆ

5. SORT
   มักจะกินเวลา หลีกเลี่ยง  ORDER BY  ก่อน  LIMIT  ใน subquery ที่ไม่ต้องเรียง

ในสัมภาษณ์ไม่ได้เขียน EXPLAIN — ต้อง ANTICIPATE:
- "ผมจะเพิ่ม index บน (customer_id, created_at) สำหรับ query นี้"
- "push WHERE ลงไปใน CTE กัน full scan ของ orders"

นั่นคือคำตอบระดับ senior analyst`,

  // ─────────────────────────────────────────────────────────────
  // Module 6 · Business & Stats · ธุรกิจ & สถิติ
  // ─────────────────────────────────────────────────────────────

  'm6-t1':
`Metric ที่สัมภาษณ์ Shopee, Lazada, Agoda ถามจริง:

GMV — Gross Merchandise Value มูลค่ารวมก่อนคืน ที่ e-commerce รายงานเป็น "revenue" (จริงๆ ไม่ใช่ — แต่มันคือเลขหัวข้อ)

Conversion Rate (CR) — bookings ÷ visitors คำนวณต่อ funnel step:
  search → detail → checkout → pay drop-off ระหว่าง 2 step คือ diagnostic

AOV — Average Order Value =  GMV ÷ order_count

Take Rate — commission ÷ GMV คำถาม economics ของ Agoda

Repeat Purchase Rate — customer ที่สั่ง 2+ ÷ total customer ใน period metric retention หัวข้อ

Cohort Retention — bucket user ตาม signup month ติดตาม % active ในแต่ละเดือนถัดไป เผยให้เห็นว่าการแก้ไขปรับ retention ขึ้นจริง หรือแค่ปั่นเลขสั้นๆ

LTV — total spend ต่อ customer ตลอดอายุ (หรือ window จำกัด)

THE DECOMPOSITION ที่ทุก analyst ต้องรู้ขึ้นใจ:

  GMV  =  visitors  ×  conversion_rate  ×  AOV

เมื่อ GMV ตก เช็คแต่ละ factor ใน equation ก่อนเสมอ`,

  'm6-t2':
`Setup — สุ่มแยก user เป็น A (control) กับ B (variant) รันช่วงเวลาที่กำหนด เปรียบเทียบ primary metric

Sample size intuition — ต้องใช้ data มากขึ้นเมื่อ:
- effect ที่อยากตรวจจับเล็ก
- baseline metric noisy (variance สูง)
- ต้องการ confidence สูง

ระดับขนาดคร่าวๆ: ตรวจจับ 5% RELATIVE lift บน baseline 5% ที่ confidence 95% ต้องการประมาณ 30,000+ user/variant เล็กลงต้องการ exponentially มากขึ้น

Significance ≠ importance Lift 0.1% บน traffic ใหญ่ "statistically significant" ได้ แต่ไม่คุ้ม ship

วิธี A/B test โกหกเราที่พบบ่อย:

- Peeking — เช็ค daily หยุดตอน significant ("p-hacking")
- Sample ratio mismatch — split 50/50 ออกมา 47/53 — ต้นน้ำพัง
- Novelty effect — user แปลกๆ ในสัปดาห์ 1 รอให้ stabilise
- Wrong granularity — test ระดับ user แต่วัดระดับ session (หรือกลับกัน)
- Underpowered test — เรียก flat result ว่า "ไม่ต่าง" ทั้งที่ sample ไม่พอจะตรวจจับ`,

  'm6-t3':
`Cohort retention ตอบคำถาม: "user ที่ signup เดือน X, กลับมาในเดือน X+1, X+2, … ได้กี่ %"

ทำไมดีกว่า single retention rate: แยก effect ของ WHEN user join บอกได้ว่า fix ปรับ retention ของ new user ขึ้นจริงไหม หรือแค่ปั่นเลข short-term กับ veteran

วิธีสร้าง (SQL pseudocode):

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

pivot ผลให้เป็น matrix สามเหลี่ยม (row = cohort, column = month since signup) pattern แนวทแยงเผยว่า retention ลดเร็วกว่าที่ควร

Cohort retention คือ metric สุขภาพ long-term — leader สนใจ month-6 retention มากกว่า week-1 conversion`,

  'm6-t4':
`Price elasticity of demand =  (% เปลี่ยน quantity)  /  (% เปลี่ยน price)

  |elasticity| > 1  → demand ELASTIC      ลดราคา → revenue เพิ่ม
  |elasticity| < 1  → demand INELASTIC    ขึ้นราคา → revenue เพิ่ม
  |elasticity| = 1  → revenue flat ทุกราคา

Elasticity เกือบลบเสมอ (ขึ้นราคา → demand ลด) เราเลยรายงาน absolute value

ปัจจัย real-world ที่ต้องคำนึง:
- Brand effect — premium positioning ทำให้ inelastic ได้
- Substitute — คู่แข่งห่างคลิกเดียว → elasticity สูง
- Segmentation — business traveller low-elasticity, leisure high
- Time horizon — short-run inelastic, long-run elastic (คนปรับตัว)

คำถาม pricing ที่ analyst โดน:
- ลดราคาดีไหม? คำนวณ elasticity จาก change ในอดีต ถ้า |e| > 1 ลด
- อยู่ตรงไหนใน curve? ดู A/B price experiment ถ้าไม่มีคือเดา
- เสีย revenue อยู่บนโต๊ะหรือเปล่า? เทียบ ADR + cancellation rate กับ hotel ใกล้เคียง

Lazada/Shopee ถามเรื่อง price-cut Agoda ถามเรื่อง hotel ADR optimisation`,

  'm6-t5':
`Funnel แบ่ง user journey เดียวเป็น stage วัด drop-off แต่ละ step

E-commerce funnel:
  visit → product detail → add to cart → checkout → pay

สำหรับแต่ละคู่: step conversion = step_N / step_(N-1)

ทำไม funnel สำคัญ:
- แยกได้ว่า "เสีย user ตรงไหน" ไม่ใช่แค่ "เสีย"
- optimise step แย่ที่สุดให้ revenue impact ใหญ่ที่สุด
- เปิดเผย drop-off ที่ aggregate CR ซ่อนไว้

ระวัง:
- Time window — ต้องจบใน 1 session ไหม 1 สัปดาห์ไหม ต้องกำหนด
- user-level vs session-level — denominator ต่าง เลขต่าง
- order assumption — "cart ก่อน view" จริงไหม user จริงไปกลับไปมา
- new vs returning — funnel shape ต่างกันตาม segment

คำนวณใน SQL (sketch):
  WITH steps AS (
    SELECT user_id, MAX(event='view')     AS viewed,
                   MAX(event='cart')      AS carted,
                   MAX(event='checkout')  AS checked,
                   MAX(event='pay')       AS paid
    FROM events GROUP BY user_id
  )
  SELECT SUM(viewed), SUM(carted), SUM(checked), SUM(paid) FROM steps;`,

  'm6-t6':
`เลขที่จะโดนถามในทุก A/B-test interview

นิยาม (ภาษาธรรมดา): "สมมุติว่า variant ไม่มีผลจริง, prob ที่จะเห็น difference อย่างน้อยขนาดที่สังเกตได้โดยบังเอิญคือเท่าไหร่"

  p-value ต่ำ (เช่น p = 0.01) → difference UNLIKELY ภายใต้ no-effect → evidence ว่า effect จริง
  p-value สูง (เช่น p = 0.4) → difference อยู่ในช่วงที่ noise ทั่วไปสร้างได้ → ไม่มี evidence

Standard threshold: p < 0.05  → "statistically significant"

P-VALUE ไม่ใช่:
- ไม่ใช่ prob ว่า variant work
- ไม่ใช่ prob ที่จะเห็นผลเดิมถ้ารัน test ใหม่
- ไม่บอกว่า effect ใหญ่แค่ไหน — บอกแค่ว่า "น่าจะ random ไหม"

2 misuse ที่สัมภาษณ์ probe:
1. PEEKING — เช็ค p daily หยุดตอน significant ทำให้ false-positive rate สูงขึ้น
2. CONFUSING SIGNIFICANCE WITH IMPORTANCE — ที่ traffic สูง p=0.0001 บน lift 0.1% ยังคงไม่คุ้ม ship (significance มาจาก n ใหญ่ ไม่ใช่ effect มีความหมาย)

senior take: "p-value คือ input หนึ่ง ต้องดู effect size, confidence interval, และ sample ratio sanity ด้วย"`,

  'm6-t7':
`Interval ให้ภาพ EFFECT SIZE ที่ p-value อย่างเดียวไม่ให้

95% CI ของ variant lift เช่น  [+0.4%, +3.6%] อ่านว่า: "เรา 95% confident ว่า true effect อยู่ในช่วงนี้"

Interval แคบ = data มาก = confidence สูง

3 SCENARIO ที่จะเจอ:
- CI กว้าง CONTAINING 0     →  underpowered สรุปไม่ได้
- CI แคบ NOT containing 0 → effect จริง ขนาดวัดได้ใช้วางแผน
- CI ทั้งสองข้างของ 0 ใกล้ 0 →  effect อาจมีหรือไม่มี เก็บ data เพิ่ม

อ่าน CI แบบ practical:
- Lift CI: [-0.5%, +0.5%]   →  flat อย่า ship
- Lift CI: [+0.1%, +5.0%]   →  effect บวกแต่ไม่แน่ใจขนาด
- Lift CI: [+2.0%, +2.4%]   →  ship signal แรงและแคบ

INTERVAL > P-VALUE ในสัมภาษณ์ P-value binary (yes/no), CI บอก MAGNITUDE`,

  'm6-t8':
`ก่อนรัน test ตัดสินใจว่าต้องใหญ่แค่ไหน

4 lever:
- BASELINE rate (เช่น 5% conversion)
- MINIMUM DETECTABLE EFFECT — lift เล็กที่สุดที่ care จะตรวจจับ (เช่น 10% relative lift = 5.5%)
- SIGNIFICANCE α — มักจะ 0.05
- POWER 1-β — มักจะ 0.80 — prob ที่ detect effect ถ้ามันจริง

กฎคร่าวๆ สำหรับ proportion ที่ α=0.05, power=0.80:

  effect เล็กลง หรือ baseline เล็กลง → ต้องการ sample ใหญ่ขึ้นเยอะ

  baseline 5%, detect 10% relative lift (5.0% → 5.5%) ต้องการ ≈ 30,000 per variant
  baseline 1%, detect 10% relative lift ต้องการประมาณ 150,000 per variant

Sample-size calculator (Evan Miller, statsig.com, internal tool) ทำคณิตศาสตร์ง่ายๆ skill คือรู้ว่าต้องใช้ก่อนเริ่ม test

UNDERPOWERED TEST เสียเวลา calendar โดยไม่ตัดสินใจได้ เรียก flat result ว่า "ไม่ต่าง" ทั้งที่ power = 0.30 คือ mistake ระดับ analyst เริ่มต้น`,

  'm6-t9':
`รัน A/B test split 50/50 คาดว่าได้ 50,000 user/variant ได้ 47,212 vs 52,788

ความต่างนี้ใหญ่เกินกว่า random assignment อธิบายได้ — test BROKEN ข้อสรุปจาก SRM test UNRELIABLE ไม่ว่า p-value primary metric จะบอกอะไร

ทำไมเกิด:
- random algorithm bug (hash modulo บน key ที่ไม่ uniform)
- Cookie / client-side bucketing collision
- Bot traffic ไปฝั่งใดฝั่งหนึ่ง
- feature flag deploy ต่างเวลา
- variant หนึ่ง error → user retry → ไปอีกฝั่ง

ตรวจจับ:
- Chi-square test บน bucket count vs ratio ที่คาดหวัง
- ส่วนใหญ่ experimentation platform จะแสดง SRM warning อัตโนมัติ — เชื่อมัน

ทำอะไร:
- อย่าทำเป็น metric result ใช้ได้
- investigate bucketing pipeline คุยกับ engineering
- รันใหม่หลัง fix อย่าพูดว่า "ใกล้พอ"

นี่คือเรื่องอันดับ 1 ที่ทำให้ experiment "ชนะ" กลายเป็น rollback อันน่าอับอาย`,

  'm6-t10':
`Launch product ใหม่ ทำเงิน $1M ทำเงินเพิ่ม $1M จริงๆ หรือแค่ย้าย $1M จาก product เก่า

นั่นคือคำถาม cannibalization

INCREMENTAL revenue   = revenue ที่จะไม่เกิดถ้าไม่ launch
CANNIBALIZED revenue  = revenue ที่ย้ายระหว่าง channel/product net change 0

วิธีวัด:
- A/B HOLDOUT — เก็บ control group ไม่ให้เห็น feature ใหม่ เทียบ TOTAL spend ไม่ใช่ feature-specific spend
- PRE/POST กับ CONTROL MARKET — เทียบ city/segment ที่ launch กับไม่ launch
- CAUSAL MODELING — diff-in-diff, synthetic control ใช้เมื่อ randomise ไม่ได้

รูปร่างคำถามสัมภาษณ์ของ Lazada / Shopee: "เรา launch flash-sale feature, GMV ใน flash-sale category +30% อยากรู้อะไรก่อนฉลอง"

คำตอบ: incrementality บางทีปกติ GMV ใน category เดียวกันลง 25% Net lift จริงคือ +5% ไม่ใช่ +30%

แยก senior analyst กับ junior คือเรื่องนี้`,

  'm6-t11':
`ไม่ต้องเป็น forecasting expert แค่รู้จัก method

NAIVE / MOVING AVERAGE — ค่าล่าสุด หรือ mean ของ N ล่าสุด baseline, sanity check

EXPONENTIAL SMOOTHING — weighted average เน้นค่าล่าสุด มี variant:
  - Simple smoothing      (level เท่านั้น)
  - Holt                  (level + trend)
  - Holt-Winters          (level + trend + seasonality)

ARIMA — auto-regressive integrated moving average ที่ใช้กับ time series ที่ residual stationary

PROPHET (Meta) — additive decomposition กับ seasonality + holiday regressors เหมาะกับ business data

ML methods — XGBoost บน time-shifted feature, LSTM, etc. overkill สำหรับงาน analyst ส่วนใหญ่

คำถามที่ต้องถามก่อนเลือก:
- มี trend ไหม
- มี seasonality ไหม weekly? yearly?
- มี holiday effect ไหม
- ต้อง forecast ไกลกี่วัน
- ผิด 10% / 50% เสียหายเท่าไหร่

สำหรับ Shopee/Lazada/Agoda — DEMAND FORECASTING ส่วนใหญ่ใช้ Prophet หรือ seasonal-naive baseline ไม่ใช่ deep learning`,

  'm6-t12':
`คำถามสัมภาษณ์อันดับฮิต: "GMV ลง 20% เทียบสัปดาห์ก่อน คุณทำอะไร"

5-step framework ที่ signal "ผมคิดแบบ senior analyst":

1. CONFIRM IT'S REAL
   - calculation พังไหม tracking issue?
   - comparison window ถูกไหม
   - cross-check กับ data source อิสระ

2. DECOMPOSE
   - GMV = visitors × CR × AOV factor ไหนเปลี่ยน
   - split ตาม country, category, device, new vs returning user
   - ดู conversion ระดับ funnel-step

3. SEGMENT
   - drop uniform หรือกระจุกใน segment เดียว
   - "iOS only" → app release bug
   - "TH only" → marketing change หรือ payment outage

4. CORRELATE WITH EXTERNAL
   - สัปดาห์นี้ ship อะไร product, marketing, pricing, payment
   - competitor promo? holiday? outage?
   - cross-reference change log

5. PROPOSE FIX & QUANTIFY IMPACT
   - "Rollback flag X — ประมาณการ lift +12%"
   - "เพิ่ม SKU search กลับ A/B test estimate +3%"

พูด framework นี้ DIALOG OUT LOUD ในสัมภาษณ์ ไม่ใช่แค่ "I'd look at the data" — บอกขั้นตอนเป็นชื่อ`,
};

export const TH_PROMPTS = {
  // Module 1
  'm1-t1': `สร้างตัวแปร customer_age ให้มีค่าเป็น integer 35 จากนั้นเขียนคำสั่งบรรทัดเดียวที่ print ชนิดข้อมูลของมันออกมา`,
  'm1-t2': `ใช้ f-string สร้างสตริง 'Welcome to BANGKOK' จากตัวแปร city = 'bangkok' โดยเรียก .upper() ภายใน {} ของ f-string`,
  'm1-t3': `คำนวณจำนวนวินาทีรวมใน 2 ชั่วโมง 15 นาที 7 วินาที โดยใช้แค่ arithmetic (ห้าม parse string) จบด้วย expression ที่แสดงค่าผลลัพธ์`,
  'm1-t4': `เขียน expression บรรทัดเดียวเช็คว่า (0.1 + 0.2) กับ 0.3 "ใกล้เคียงพอ" หรือเปล่า ใช้ math.isclose จบด้วย expression`,
  'm1-t5': `เขียนฟังก์ชัน tier(gmv) ที่ return 'small' ถ้า gmv < 100, 'medium' ถ้า 100 <= gmv < 1000, และ 'large' ถ้า gmv >= 1000 จากนั้นเรียก tier(750) ที่ท้าย code เพื่อให้ Run แสดงผล`,
  'm1-t6': `กำหนด prices = [250, 480, 1200, 99] คำนวณยอดรวมโดยใช้ for loop จบด้วยค่ายอดรวมนั้น (รู้ว่า vectorised ดีกว่า แต่นี่คือแบบฝึก for-loop)`,
  'm1-t7': `กำหนด prices = [250, 480, 1200, 99, 1500] ใช้ while loop หา INDEX แรกที่ running total เกิน 1000 จบด้วย index นั้น`,
  'm1-t8': `เขียนฟังก์ชัน aov(gmv_list) ที่ return ค่าเฉลี่ยของ list หรือ 0 ถ้า list ว่าง จากนั้นเรียก aov([250, 480, 1200]) ที่ท้าย code เพื่อให้ Run แสดงผล`,
  'm1-t9': `เขียนฟังก์ชัน first_present(values) ที่ return ค่าแรกที่ไม่ใช่ None หรือ return None ถ้าทุกค่าเป็น None เรียกด้วย [None, None, 42, None] เพื่อให้ Run แสดงผล`,
  'm1-t10': `code ผิด:  def gmv_sum(x, y): print(x + y)  ในประโยคเดียวบอกว่าทำไมผิด แล้วเขียนเวอร์ชันที่ถูก จบด้วย  gmv_sum(250, 480) + 100`,
  'm1-t11': `เขียนฟังก์ชัน safe_int(x) ที่ return int(x) ถ้าสำเร็จ และ return None ถ้าเจอ ValueError เรียก safe_int('250') และ safe_int('oops') จบด้วย [safe_int('250'), safe_int('oops')]`,
  'm1-t12': `ใช้แค่ standard library (datetime) คำนวณจำนวนวันระหว่าง date(2025, 1, 1) ถึง date(2025, 5, 14) จบด้วยจำนวน integer นั้น`,

  // Module 2
  'm2-t1': `กำหนด nums = [10, 20, 30, 40, 50] เขียน slice expression ที่ return [20, 30, 40] (กำหนด nums ก่อนเพื่อให้ Run ทำงาน)`,
  'm2-t2': `อธิบายในคำของคุณเอง: customer['email'] กับ customer.get('email') ต่างกันยังไงเมื่อ key 'email' ไม่มี อันไหนปลอดภัยกว่าและเพราะอะไร`,
  'm2-t3': `กำหนด prices = [250, 480, 1200, 99] return list ใหม่ที่ sort DESCENDING โดยไม่แก้ prices ของเดิม จบด้วย list ที่ sort แล้ว`,
  'm2-t4': `เขียนฟังก์ชัน minmax(values) ที่ return (min, max) เป็น tuple เรียกด้วย [3, 1, 4, 1, 5, 9, 2, 6] จบด้วยผลลัพธ์`,
  'm2-t5': `กำหนด a = [1, 2, 3, 4, 5] และ b = [4, 5, 6, 7] return list ของค่าที่อยู่ใน BOTH (intersection) ใช้ set จบด้วยผลลัพธ์`,
  'm2-t6': `กำหนด orders_by_status = {'paid': 12, 'cancelled': 3, 'pending': 7} return status ที่ count สูงสุด จบด้วย status string`,
  'm2-t7': `กำหนด defaults = {'limit': 100, 'offset': 0} และ overrides = {'limit': 50, 'sort': 'gmv'} merge ให้ overrides ชนะ โดยไม่ mutate ตัวใดตัวหนึ่ง จบด้วย merged dict`,
  'm2-t8': `กำหนด records = [{'order_id': 1, 'gmv': 250}, {'order_id': 2, 'gmv': 1800}, {'order_id': 3, 'gmv': 99}] สร้าง dict ที่ key คือ order_id และ value คือ record ทั้ง record จบด้วย dict`,
  'm2-t9': `กำหนด names = ['Don', 'Ali', 'Mei'] และ spends = [1250, 800, 1900] สร้าง list ของ dict รูปแบบ {'name': ..., 'spend': ...} ใช้ zip จบด้วย list`,
  'm2-t10': `กำหนด records = [{'id': 1, 'gmv': 250}, {'id': 2, 'gmv': 1800}, {'id': 3, 'gmv': 99}] return sorted ตาม gmv DESC จบด้วย sorted list`,
  'm2-t11': `กำหนด statuses = ['paid','paid','cancelled','paid','pending','cancelled','paid'] ใช้ Counter return 2 status ที่พบบ่อยสุดพร้อม count (list ของ tuple) จบด้วย list`,
  'm2-t12': `กำหนด orders = [{'country': 'TH', 'gmv': 250}, {'country': 'SG', 'gmv': 480}, {'country': 'TH', 'gmv': 1200}, {'country': 'MY', 'gmv': 99}, {'country': 'TH', 'gmv': 80}] ใช้ defaultdict(list) จัดกลุ่ม orders ตาม country จบด้วย dict ผลลัพธ์`,

  // Module 3
  'm3-t1': `ใช้ orders DataFrame ที่ pre-loaded: เขียน filter ที่ return rows ที่ gmv > 500 AND country == 'TH' จบ snippet ด้วย filter expression เพื่อให้ Run แสดงผล`,
  'm3-t2': `เขียน list comprehension บน sales list ที่ pre-loaded return 10% ของแต่ละค่า (s * 0.10) จบด้วย expression เพื่อให้ Run แสดงผล`,
  'm3-t3': `กำหนด orders = [{'order_id': 1, 'gmv': 250}, {'order_id': 2, 'gmv': 1800}, {'order_id': 3, 'gmv': 99}] สร้าง dict {order_id: gmv} ด้วย dict comprehension จบด้วย dict`,
  'm3-t4': `กำหนด orders = [{'country': 'TH'}, {'country': 'SG'}, {'country': 'TH'}, {'country': 'MY'}, {'country': 'SG'}] สร้าง SET ของ country unique ด้วย set comp จบด้วย set`,
  'm3-t5': `กำหนด orders = [{'gmv': 250, 'status': 'paid'}, {'gmv': 1800, 'status': 'cancelled'}, {'gmv': 480, 'status': 'paid'}, {'gmv': 99, 'status': 'pending'}] ใช้ generator expression กับ sum() รวม gmv ของ PAID orders เท่านั้น จบด้วย sum`,
  'm3-t6': `กำหนด matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] ใช้ nested list comp flatten เป็น [1,2,3,4,5,6,7,8,9] จบด้วย flat list`,
  'm3-t7': `กำหนด gmvs = [250, 1200, 99, 1800, 480] ใช้ list comprehension กับ ternary สร้าง list ของ 'high' (>1000) หรือ 'low' จบด้วย list`,
  'm3-t8': `กำหนด orders = [{'status': 'paid'}, {'status': 'paid'}, {'status': 'cancelled'}, {'status': 'pending'}] ใช้ any() กับ generator เช็คว่ามี order ใดที่ status == 'cancelled' หรือไม่ จบด้วย boolean`,
  'm3-t9': `กำหนด orders = [{'status': 'paid'}, {'status': 'paid'}, {'status': 'cancelled'}] ใช้ walrus operator ภายใน if นับ paid orders เก็บใน n แล้ว print f'{n} paid' จบด้วยการเรียก print นั้น`,
  'm3-t10': `อธิบายสั้นๆ 1-2 ประโยค: ทำไม pandas ใช้ & แทน and เมื่อรวม row-level conditions hint — คิดถึง element-wise vs scalar`,
  'm3-t11': `ใช้ orders DataFrame ที่ pre-loaded เพิ่ม column tier ที่เป็น 'large' เมื่อ gmv > 1000 อื่นๆ 'small' ใช้ np.where จบด้วย orders[['gmv','tier']].head()`,
  'm3-t12': `ใช้ orders DataFrame ที่ pre-loaded กำหนด dict {'paid': 1, 'cancelled': 0, 'pending': 0} และใช้ .map สร้าง column ใหม่ is_paid จบด้วย orders[['status', 'is_paid']].head()`,

  // Module 4
  'm4-t1': `สร้าง DataFrame ชื่อ bookings ที่มี 2 columns: hotel_id = [101, 102, 103] และ nights = [3, 1, 7] จบ snippet ด้วย bookings.shape เพื่อให้ Run แสดง`,
  'm4-t2': `Filter orders DataFrame ที่ pre-loaded ให้ได้ rows ที่ country == 'TH' AND gmv > 500 จบ snippet ด้วย filter expression เพื่อให้ Run แสดง`,
  'm4-t3': `ใช้ orders DataFrame ที่ pre-loaded: หา TOTAL gmv ต่อ customer นับเฉพาะ rows ที่ status == 'paid' จบด้วย result expression เพื่อให้ Run แสดง`,
  'm4-t4': `ใช้ orders และ customers DataFrames ที่ pre-loaded: LEFT MERGE ใน customer_id (ใช้ suffixes ('_ord', '_cust') เพราะมี column 'country' ทั้งสอง) จบด้วย .head() บน merged frame เพื่อให้ Run แสดง 5 แถวแรก`,
  'm4-t5': `Pivot orders DataFrame ที่ pre-loaded เป็น matrix country × status ของ TOTAL gmv ใช้ pivot_table กับ index='country', columns='status', values='gmv', aggfunc='sum', fill_value=0 จบด้วย expression เพื่อให้ Run แสดง`,
  'm4-t6': `แปลง orders['created_at'] เป็น datetime แล้ว return count ของ PAID orders ต่อเดือน (ใช้ .dt.to_period('M') หรือ resample('ME')) จบด้วย result expression เพื่อให้ Run แสดง`,
  'm4-t7': `ใช้ orders DataFrame ที่ pre-loaded return Series ของ null counts ต่อ column ใช้ .isna().sum() จบด้วย expression นั้น`,
  'm4-t8': `ใช้ orders ที่ pre-loaded เพิ่ม column gmv_vs_country_mean เท่ากับ gmv ลบ mean ของ country นั้น ผ่าน groupby('country')['gmv'].transform('mean') จบด้วย orders[['country','gmv','gmv_vs_country_mean']].head()`,
  'm4-t9': `ใช้ orders ที่ pre-loaded return rows ที่แต่ละ order อยู่ใน TOP 3 ของ country นั้นโดย gmv ใช้ groupby('country')['gmv'].rank(method='dense', ascending=False) <= 3 จบด้วย .head(10) ของ filtered frame`,
  'm4-t10': `ใช้ orders ที่ pre-loaded นับว่า category ขึ้นด้วย 'b' (case-insensitive) มีกี่ค่า ใช้ orders['category'].str.lower().str.startswith('b').sum() จบด้วย count`,
  'm4-t11': `ใช้ orders ที่ pre-loaded cast column status เป็น Categorical จบด้วย orders['status'].astype('category').cat.categories เพื่อให้ Run แสดง category index`,
  'm4-t12': `ใช้ orders ที่ pre-loaded return memory usage ต่อ column ด้วย deep counting ใช้ orders.memory_usage(deep=True) จบด้วย Series`,

  // Module 5
  'm5-t1': `เขียน SQL query ที่ return top 5 bookings — sort ด้วย nights DESC — จาก table 'bookings' ที่ country = 'TH' แสดงเฉพาะ booking_id และ nights`,
  'm5-t2': `เขียน SQL กับ orders(customer_id, gmv, status) table ที่ return order_count และ avg gmv ต่อ customer แต่แสดงเฉพาะ customer ที่มี MORE THAN 5 orders sort by avg gmv DESC`,
  'm5-t3': `ใช้ orders table ที่ seeded เขียน SQL query ที่ return order แรกของแต่ละ customer (earliest created_at) แสดง customer_id, order_id, gmv ใช้ ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY created_at) ใน subquery หรือ CTE แล้ว filter ที่ rank = 1`,
  'm5-t4': `ใช้ CTE หา top 3 customers by total PAID gmv return customer_id, total_gmv, country (join จาก customers table) sort by total_gmv DESC limit 3`,
  'm5-t5': `หา pair ของ bookings ที่ hotel_id เดียวกัน วันเดียวกัน return a.booking_id, b.booking_id, a.hotel_id, a.created_at ใช้ trick a.booking_id < b.booking_id เพื่อให้แต่ละ pair ปรากฏครั้งเดียว (อาจ return 0 rows — ผลที่ valid ถ้าไม่มี collision)`,
  'm5-t6': `ใช้ customers และ orders return customer_ids ที่อยู่ใน customers แต่ไม่มี orders ใช้ EXCEPT`,
  'm5-t7': `เขียน SQL query ที่ return order count, paid order count, และ paid GMV ต่อ country ใน row เดียว ใช้ CASE WHEN ภายใน COUNT และ SUM group by country`,
  'm5-t8': `เขียน SQL query ที่ return AOV (avg gmv ของ PAID orders) ต่อ country ใช้ SUM(gmv) / NULLIF(COUNT(*), 0) เพื่อกัน divide by zero group by country`,
  'm5-t9': `ใช้ orders ใน sandbox return count ของ PAID orders ต่อเดือน ใช้ strftime('%Y-%m', created_at) group by month bucket sort ascending`,
  'm5-t10': `เขียน SQL query สำหรับ orders ของแต่ละ customer (sort by created_at) แสดง customer_id, order_id, gmv, prev_gmv ที่ prev_gmv คือ gmv ของ order ก่อนหน้า (NULL ใน order แรก) limit 20 rows`,
  'm5-t11': `เขียน SQL query ที่ assign แต่ละ order ไปยัง quartile (1-4) by gmv DESC ใช้ NTILE(4) return order_id, gmv, quartile limit 20 rows`,
  'm5-t12': `อธิบาย 2-3 ประโยค: ทำไมเพิ่ม INDEX บน orders.customer_id อาจทำให้ SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id เร็วขึ้น คิดถึง scan vs index lookup และว่า grouping ต้องใช้ทุก row หรือไม่`,

  // Module 6
  'm6-t1': `สัปดาห์ก่อน GMV ลด 15% บน Shopee category page Traffic flat week-over-week จะ investigate 2 metric ไหนจาก GMV decomposition ก่อน และทำไม 1-2 ประโยค`,
  'm6-t2': `Variant B แสดง conversion 3.0% vs control 2.8%, n = 2,000 per variant ship B ไหม ให้เหตุผล 2-3 ประโยค — คิดถึง effect size, sample size, และอะไรอาจผิด`,
  'm6-t3': `อธิบายเป็นภาษาธรรมดา: column และ aggregation ไหนที่ต้องใช้สร้าง monthly cohort retention table จาก customers และ orders พูดถึง cohort definition, active-month calculation, และ shape สุดท้าย (row × column × cell value) 3-5 ประโยค`,
  'm6-t4': `Hotel ขึ้น ADR 10% bookings ลด 8% ในเดือนถัดไป price elasticity (absolute) คือเท่าไหร่ demand elastic หรือ inelastic และจะแนะนำให้คงราคาสูงไหม 2-3 ประโยค`,
  'm6-t5': `Shopee funnel สัปดาห์ก่อน: 10,000 visits → 4,000 product views → 800 carts → 600 checkouts → 400 paid drop-off ใหญ่ที่สุดใน ABSOLUTE users อยู่ที่ไหน และ step-conversion แย่ที่สุดเป็น PERCENTAGE อยู่ที่ไหน 2-3 ประโยค`,
  'm6-t6': `Test แสดง variant B มี relative lift 7%, p = 0.02 แต่มีแค่ 500 users per arm ship ไหมและทำไม 2-3 ประโยค คิดว่า p-value บอกอะไร vs ไม่บอกอะไร`,
  'm6-t7': `Test report lift +1.2% กับ 95% CI [-0.3%, +2.7%], p = 0.08 PM อยาก ship แนะนำอะไรและทำไม 2-3 ประโยค`,
  'm6-t8': `ทีมอยาก detect 5% RELATIVE lift บน baseline 3% (3.0% → 3.15%) 5,000 users per variant พอไหม คำตอบและจะบอก PM ว่าอะไร 2-3 ประโยค`,
  'm6-t9': `A/B test design 50/50 แสดง split 48% / 52% กับ 100,000 total users เชื่อ conversion comparison ได้ไหม จัสติฟายคำตอบ 2-3 ประโยค`,
  'm6-t10': `Lazada launch flash sale feature GMV ของ category +30% ในสัปดาห์ flash sale ต้องการ data เพิ่มอะไรเพื่อรู้ว่าเป็น growth จริงหรือ cannibalization 2-3 ประโยค`,
  'm6-t11': `Forecast hotel bookings 30 วันข้างหน้าสำหรับ Agoda Bookings มี weekly seasonality แข็ง (weekend > weekday) และขึ้นช่วง holidays method ไหนเริ่มก่อนและทำไม 2-3 ประโยค`,
  'm6-t12': `GMV ลด 20% week-over-week traffic flat AOV flat hypothesis คืออะไรและ data เฉพาะใดที่จะ pull ต่อ 3-4 ประโยค`,
};
