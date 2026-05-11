"""
Cover Letter Generator - Danny (Pachara Don) - Shopee
Generates a professional PDF cover letter with Thai text support.

Requirements: pip install reportlab
Thai fonts: Uses Sarabun (Google Fonts) if available, falls back to system Thai fonts.
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm, cm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os
import sys
import glob

# --- Colors ---
ACCENT = HexColor("#EE4D2D")       # Shopee orange-red
DARK   = HexColor("#222222")
GRAY   = HexColor("#666666")
LIGHT_BG = HexColor("#FFF7F5")     # Very subtle warm tint
WHITE  = HexColor("#FFFFFF")

# --- Page setup ---
WIDTH, HEIGHT = A4  # 595 x 842 pts
MARGIN_LEFT = 55
MARGIN_RIGHT = 55
TEXT_WIDTH = WIDTH - MARGIN_LEFT - MARGIN_RIGHT

# --- Font Registration ---
def find_thai_font():
    """Search for a Thai-capable font on the system."""
    font_names = [
        "Sarabun-Regular.ttf", "Sarabun-Bold.ttf",
        "leelawui.ttf", "LeelawUI.ttf",
        "leelUIsl.ttf",
        "cordia.ttf", "cordiab.ttf",
        "angsau.ttf", "angsaub.ttf",
        "browaliu.ttf",
        "tahomabd.ttf", "tahoma.ttf",
        "segoeui.ttf", "segoeuib.ttf",
        "arial.ttf", "arialbd.ttf",
        "arialuni.ttf",
        "Garuda.ttf", "Garuda-Bold.ttf",
        "Loma.ttf", "Loma-Bold.ttf",
        "NotoSansThai-Regular.ttf", "NotoSansThai-Bold.ttf",
    ]

    search_dirs = []
    if sys.platform == "win32":
        windir = os.environ.get("WINDIR", "C:\\Windows")
        search_dirs = [
            os.path.join(windir, "Fonts"),
            os.path.join(os.environ.get("LOCALAPPDATA", ""), "Microsoft", "Windows", "Fonts"),
            os.path.join(os.environ.get("USERPROFILE", ""), "AppData", "Local", "Microsoft", "Windows", "Fonts"),
        ]
    elif sys.platform == "darwin":
        search_dirs = ["/Library/Fonts", "/System/Library/Fonts", os.path.expanduser("~/Library/Fonts")]
    else:
        search_dirs = ["/usr/share/fonts", "/usr/local/share/fonts", os.path.expanduser("~/.fonts")]

    found = {"regular": None, "bold": None}

    for search_dir in search_dirs:
        if not os.path.isdir(search_dir):
            continue
        for root, dirs, files in os.walk(search_dir):
            for fname in files:
                fname_lower = fname.lower()
                full_path = os.path.join(root, fname)

                if "sarabun" in fname_lower and fname_lower.endswith(".ttf"):
                    if "bold" in fname_lower and not found["bold"]:
                        found["bold"] = full_path
                    elif "regular" in fname_lower and not found["regular"]:
                        found["regular"] = full_path

                elif ("leelawui" in fname_lower or "leelawadee" in fname_lower) and fname_lower.endswith(".ttf"):
                    if ("bold" in fname_lower or "b.ttf" in fname_lower) and not found["bold"]:
                        found["bold"] = full_path
                    elif not found["regular"] and "bold" not in fname_lower:
                        found["regular"] = full_path

                elif "segoeui" in fname_lower and fname_lower.endswith(".ttf"):
                    if "b" in fname_lower and "bold" not in fname_lower.replace("segoeuib", "") and not found["bold"]:
                        found["bold"] = full_path
                    elif fname_lower == "segoeui.ttf" and not found["regular"]:
                        found["regular"] = full_path

    if not found["regular"]:
        for search_dir in search_dirs:
            for pattern in ["**/*.ttf", "**/*.TTF"]:
                for fp in glob.glob(os.path.join(search_dir, pattern), recursive=True):
                    try:
                        from fontTools.ttLib import TTFont as FTFont
                        font = FTFont(fp)
                        cmap = font['cmap'].getBestCmap()
                        if cmap and 0x0E01 in cmap and 0x0E2A in cmap:
                            if not found["regular"]:
                                found["regular"] = fp
                            if not found["bold"]:
                                found["bold"] = fp
                            break
                    except:
                        continue
            if found["regular"]:
                break

    return found


def register_fonts():
    """Register Thai-capable fonts with ReportLab."""
    thai_fonts = find_thai_font()
    font_regular = "Helvetica"
    font_bold = "Helvetica-Bold"

    if thai_fonts["regular"]:
        try:
            pdfmetrics.registerFont(TTFont('ThaiRegular', thai_fonts["regular"]))
            font_regular = 'ThaiRegular'
            print(f"  Regular font: {thai_fonts['regular']}")
        except Exception as e:
            print(f"  Warning: Could not register regular font: {e}")

    if thai_fonts["bold"]:
        try:
            pdfmetrics.registerFont(TTFont('ThaiBold', thai_fonts["bold"]))
            font_bold = 'ThaiBold'
            print(f"  Bold font: {thai_fonts['bold']}")
        except Exception as e:
            print(f"  Warning: Could not register bold font: {e}")
    elif thai_fonts["regular"]:
        font_bold = font_regular

    if font_regular == "Helvetica":
        print("  WARNING: No Thai font found! Thai text may appear as boxes.")
        print("  Install Sarabun from https://fonts.google.com/specimen/Sarabun")

    return font_regular, font_bold


# ============================================================
# BUILD PDF
# ============================================================
def build_cover_letter(output_path=None):
    if output_path is None:
        output_path = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                    "Danny_Pachara_Cover_Letter_Shopee.pdf")

    print("Registering fonts...")
    font_regular, font_bold = register_fonts()
    print(f"Building PDF: {output_path}")

    c = canvas.Canvas(output_path, pagesize=A4)
    c.setTitle("Cover Letter - Danny (Pachara Don) - Shopee")
    c.setAuthor("Pachara Don Satiwat")

    # ============================================================
    # HEADER BAND
    # ============================================================
    band_height = 105
    c.setFillColor(ACCENT)
    c.rect(0, HEIGHT - band_height, WIDTH, band_height, fill=1, stroke=0)

    c.setFillColor(WHITE)
    c.setFont(font_bold, 26)
    c.drawString(MARGIN_LEFT, HEIGHT - 45, "DANNY (PACHARA DON)")

    c.setFont(font_regular, 11)
    c.drawString(MARGIN_LEFT, HEIGHT - 65, "Strategic Project Management (Regional BD)  |  12 Years Commercial Experience")

    c.setFont(font_regular, 9.5)
    c.drawString(MARGIN_LEFT, HEIGHT - 82, "krumilano@gmail.com")

    c.setStrokeColor(HexColor("#FF8A70"))
    c.setLineWidth(0.5)
    c.line(MARGIN_LEFT, HEIGHT - band_height + 8, WIDTH - MARGIN_RIGHT, HEIGHT - band_height + 8)

    # ============================================================
    # BODY
    # ============================================================
    y = HEIGHT - band_height - 35

    def draw_paragraph(text, x, y, width, font=font_regular, size=10.5, leading=16, color=DARK):
        style = ParagraphStyle(
            'custom', fontName=font, fontSize=size,
            leading=leading, textColor=color, alignment=0,
        )
        p = Paragraph(text, style)
        w, h = p.wrap(width, 9999)
        p.drawOn(c, x, y - h)
        return y - h

    def draw_section_label(label, y):
        c.setFillColor(ACCENT)
        c.setFont(font_bold, 8)
        c.drawString(MARGIN_LEFT, y, label.upper())
        c.setFillColor(DARK)
        return y - 16

    # --- Date ---
    c.setFillColor(GRAY)
    c.setFont(font_regular, 9.5)
    c.drawString(MARGIN_LEFT, y, "12 May 2026")
    y -= 28

    # --- Opening ---
    y = draw_section_label("Dear Hiring Team", y)

    thai_open = (
        f'<font name="{font_bold}" color="#EE4D2D">สวัสดีครับ</font> '
        f'— Allow me to briefly introduce myself. My name is Pachara Don Satiwat, '
        f'but please call me Danny.'
    )
    y = draw_paragraph(thai_open, MARGIN_LEFT, y, TEXT_WIDTH)
    y -= 12

    # --- Purpose ---
    purpose = (
        f'I am writing to apply for the <font name="{font_bold}"><b>Strategic Project Management (Regional BD)</b></font> role at Shopee. '
        f'I bring <font name="{font_bold}"><b>12 years of commercial experience</b></font> in fast-paced, high-pressure environments '
        f'across Southeast Asia.'
    )
    y = draw_paragraph(purpose, MARGIN_LEFT, y, TEXT_WIDTH)
    y -= 12

    # --- Growth story ---
    y = draw_section_label("Why Shopee — Again", y)

    growth = (
        f'A few years ago I interviewed with Shopee and was not selected. That experience stayed with me. '
        f'Since then, I have invested consistently in building my technical skill set — what started as '
        f'a weekend hobby has grown into hands-on proficiency in <font name="{font_bold}"><b>SQL</b></font> and '
        f'<font name="{font_bold}"><b>Python (Pandas)</b></font> for '
        f'data analysis. This has sharpened how I approach data-driven decisions and business strategy. '
        f'I may not get everything right every time, but I always push to deliver the best possible outcome.'
    )
    y = draw_paragraph(growth, MARGIN_LEFT, y, TEXT_WIDTH)
    y -= 12

    # --- What I bring ---
    y = draw_section_label("What I Bring", y)

    bring = (
        f'I enjoy solving real business problems. I bring structure to ambiguity, align stakeholders, '
        f'and stay relentlessly focused on execution. My core strengths lie in developing <font name="{font_bold}"><b>upsell and '
        f'cross-sell strategies</b></font>, identifying growth opportunities, and translating them into results.'
    )
    y = draw_paragraph(bring, MARGIN_LEFT, y, TEXT_WIDTH)
    y -= 10

    bring2 = (
        f'I take a hands-on approach: I work directly with vendors to build relationships and uncover '
        f'opportunities on the ground. I also invest in developing junior team members — often working '
        f'alongside them in the field to coach and guide them toward results.'
    )
    y = draw_paragraph(bring2, MARGIN_LEFT, y, TEXT_WIDTH)
    y -= 10

    bring3 = (
        f'Over the years I have taken ownership of initiatives end-to-end, delivering measurable improvements '
        f'in growth and operational performance. I stay accountable, keep improving, and focus on what truly '
        f'moves the business.'
    )
    y = draw_paragraph(bring3, MARGIN_LEFT, y, TEXT_WIDTH)
    y -= 12

    # --- Portfolio callout box ---
    box_height = 48
    box_y = y - box_height
    c.setFillColor(LIGHT_BG)
    c.roundRect(MARGIN_LEFT, box_y, TEXT_WIDTH, box_height, 6, fill=1, stroke=0)

    c.setFillColor(ACCENT)
    c.setFont(font_bold, 9)
    c.drawString(MARGIN_LEFT + 12, box_y + box_height - 18, "PORTFOLIO")
    c.setFillColor(DARK)
    c.setFont(font_regular, 9.5)
    c.drawString(MARGIN_LEFT + 80, box_y + box_height - 18,
                 "Recent SQL & Python (Pandas) projects with Shopee, Lazada & Agoda case studies:")

    url = "https://pacharadon.github.io/SQLPandas/"
    c.setFillColor(ACCENT)
    c.setFont(font_bold, 9.5)
    link_y = box_y + box_height - 35
    c.drawString(MARGIN_LEFT + 12, link_y, url)
    c.linkURL(url, (MARGIN_LEFT + 12, link_y - 2,
              MARGIN_LEFT + 12 + c.stringWidth(url, font_bold, 9.5), link_y + 10))

    y = box_y - 18

    # --- Closing ---
    y = draw_section_label("Looking Ahead", y)

    closing = (
        f'Shopee stands out to me for its scale and ambition in Southeast Asia. I would value the opportunity '
        f'to contribute with a stronger, more complete skill set than I had before.'
    )
    y = draw_paragraph(closing, MARGIN_LEFT, y, TEXT_WIDTH)
    y -= 12

    thai_close = (
        f'<font name="{font_regular}" color="#EE4D2D">ขอบคุณที่สละเวลาอ่านจดหมายของผมนะครับ</font>'
    )
    y = draw_paragraph(thai_close, MARGIN_LEFT, y, TEXT_WIDTH)
    y -= 24

    # --- Signature ---
    c.setFont(font_regular, 10.5)
    c.setFillColor(DARK)
    c.drawString(MARGIN_LEFT, y, "Sincerely,")
    y -= 20
    c.setFont(font_bold, 12)
    c.drawString(MARGIN_LEFT, y, "Danny (Pachara Don)")

    # ============================================================
    # FOOTER ACCENT LINE
    # ============================================================
    c.setStrokeColor(ACCENT)
    c.setLineWidth(2)
    c.line(MARGIN_LEFT, 35, WIDTH - MARGIN_RIGHT, 35)

    c.save()
    size = os.path.getsize(output_path)
    print(f"PDF created: {output_path}")
    print(f"Size: {size:,} bytes")
    return output_path


if __name__ == "__main__":
    output = sys.argv[1] if len(sys.argv) > 1 else None
    build_cover_letter(output)
