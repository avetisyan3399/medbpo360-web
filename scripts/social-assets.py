#!/usr/bin/env python3
"""Generate the brand image assets that social profiles need for upload.

The site itself renders every image it serves on the fly through `next/og`
(app/icon.tsx, app/apple-icon.tsx, app/opengraph-image.tsx), so the repo has no
image files at all. Social profiles can't consume a route — they need a file to
upload — which is what this script produces.

    python3 scripts/social-assets.py

Writes to brand/. Both outputs are baseline sRGB JPEG on purpose: LinkedIn
silently rejected a PNG cover upload and accepted the identical image as JPEG,
and Meta's uploaders have the same reputation. Keep it JPEG.

Colors and wording track the site's own tokens — see components/Footer.tsx and
app/opengraph-image.tsx. If the brand palette moves, it moves here too.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

# Brand tokens, mirrored from app/opengraph-image.tsx and components/Footer.tsx.
INK = (10, 10, 15)  # #0a0a0f — footer background
DEEP = (15, 43, 70)  # #0f2b46 — brand navy
GREEN = (23, 166, 115)  # #17a673 — brand green
WHITE = (255, 255, 255)
MUTED = (185, 198, 211)  # #b9c6d3

OUT_DIR = Path(__file__).resolve().parent.parent / "brand"

# Facebook renders a Page cover at 820x312 on desktop and crops to a narrower
# slice on mobile, so this is 2x the desktop box and everything stays centered.
COVER = (1640, 624)
SQUARE = (1080, 1080)

FONT_CANDIDATES = {
    "bold": [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial Bold.ttf",
    ],
    "regular": [
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial.ttf",
    ],
}


def load_font(weight: str, size: int) -> ImageFont.FreeTypeFont:
    for path in FONT_CANDIDATES[weight]:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    raise RuntimeError(f"no {weight} font found; add one to FONT_CANDIDATES")


def backdrop(size: tuple[int, int], focus: tuple[float, float]) -> Image.Image:
    """Radial wash from brand navy down to near-black, echoing the OG image."""
    w, h = size
    mask = Image.radial_gradient("L").resize((w * 2, h * 2))
    # radial_gradient is black in the middle; invert so the glow is centered.
    mask = Image.eval(mask, lambda v: 255 - v)
    cx, cy = int(focus[0] * w), int(focus[1] * h)
    mask = mask.crop((w - cx, h - cy, 2 * w - cx, 2 * h - cy))

    base = Image.new("RGB", size, INK)
    glow = Image.new("RGB", size, DEEP)
    return Image.composite(glow, base, mask)


def draw_wordmark(draw: ImageDraw.ImageDraw, center_x: int, top: int, size: int) -> int:
    """'MedBPO360' with BPO360 in brand green. Returns the bottom y."""
    font = load_font("bold", size)
    left, right = "Med", "BPO360"
    lw = draw.textlength(left, font=font)
    rw = draw.textlength(right, font=font)
    x = center_x - (lw + rw) / 2

    draw.text((x, top), left, font=font, fill=WHITE)
    draw.text((x + lw, top), right, font=font, fill=GREEN)
    return top + size


def build_cover(path: Path) -> None:
    w, h = COVER
    img = backdrop(COVER, focus=(0.22, 0.28))
    draw = ImageDraw.Draw(img)
    cx = w // 2

    bottom = draw_wordmark(draw, cx, top=int(h * 0.26), size=96)

    tagline = "Revenue cycle sized to fit you."
    tag_font = load_font("bold", 52)
    draw.text(
        (cx, bottom + 46), tagline, font=tag_font, fill=WHITE, anchor="ma"
    )

    services = "Medical Billing & RCM   ·   Credentialing   ·   Call Center   ·   Back Office"
    svc_font = load_font("regular", 30)
    draw.text(
        (cx, bottom + 124), services, font=svc_font, fill=MUTED, anchor="ma"
    )

    save_jpeg(img, path)


def build_square(path: Path) -> None:
    """Profile picture / reusable square logo. Facebook crops it to a circle.

    The wordmark stacks as Med / BPO360 rather than shrinking onto one line: at
    profile-picture sizes a single line is unreadable, and the two-line stack
    still reads as the brand name. A lone 'M' is the favicon's job (app/icon.tsx),
    not this file's.
    """
    w, h = SQUARE
    img = backdrop(SQUARE, focus=(0.5, 0.42))
    draw = ImageDraw.Draw(img)

    # Circle-safe: Facebook masks to the inscribed circle, so keep the stack
    # inside roughly the middle 65% and vertically centered.
    draw.text(
        (w // 2, int(h * 0.30)), "Med", font=load_font("bold", 210), fill=WHITE,
        anchor="ma",
    )
    draw.text(
        (w // 2, int(h * 0.52)), "BPO360", font=load_font("bold", 168), fill=GREEN,
        anchor="ma",
    )

    save_jpeg(img, path)


def save_jpeg(img: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    # progressive=False keeps it baseline, which is the variant uploaders accept.
    img.convert("RGB").save(
        path, "JPEG", quality=92, subsampling=0, progressive=False, optimize=True
    )
    print(f"wrote {path.relative_to(Path.cwd())} ({img.width}x{img.height})")


# ---------------------------------------------------------------------------
# Per-post squares
#
# Instagram rejects text-only posts, so the account cannot publish at all
# without an image per post. These also give Facebook a native-image option to
# test against link posts, which Facebook downranks.
#
# Unlike the web card in lib/og-card.tsx — Satori can't measure text, so that
# one steps font size by character count — Pillow measures, so these wrap
# properly and shrink only when a title genuinely needs it.
# ---------------------------------------------------------------------------

POST_SQUARE = (1080, 1080)
BLOG_DIR = Path(__file__).resolve().parent.parent / "content" / "blog"


def read_frontmatter(path: Path) -> dict[str, str]:
    """Minimal YAML-ish reader for the flat `key: "value"` frontmatter used here."""
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        return {}
    _, fm, *_ = text.split("---", 2)
    out = {}
    for line in fm.splitlines():
        if ":" not in line:
            continue
        k, v = line.split(":", 1)
        out[k.strip()] = v.strip().strip('"')
    return out


def wrap(draw, text: str, font, max_width: int) -> list[str]:
    words, lines, cur = text.split(), [], ""
    for w in words:
        trial = f"{cur} {w}".strip()
        if draw.textlength(trial, font=font) <= max_width or not cur:
            cur = trial
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def draw_tracked(draw, xy, text: str, font, fill, tracking: int = 0) -> None:
    """Pillow has no letter-spacing, so step per character."""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking


def build_post_square(path: Path, title: str, category: str) -> None:
    w, h = POST_SQUARE
    pad = 90
    usable = w - pad * 2
    img = backdrop(POST_SQUARE, focus=(0.5, 0.3))
    draw = ImageDraw.Draw(img)

    draw.text((pad, pad), "Med", font=load_font("bold", 44), fill=WHITE)
    off = draw.textlength("Med", font=load_font("bold", 44))
    draw.text((pad + off, pad), "BPO360", font=load_font("bold", 44), fill=GREEN)

    draw_tracked(draw, (pad, 330), category.upper(), load_font("bold", 26), GREEN, 3)

    # Largest size whose wrap fits the title box.
    box_h, top = 470, 400
    for size in (68, 62, 56, 50, 44, 40):
        font = load_font("bold", size)
        lines = wrap(draw, title, font, usable)
        lh = int(size * 1.22)
        if len(lines) * lh <= box_h:
            break
    y = top
    for line in lines:
        draw.text((pad, y), line, font=font, fill=WHITE)
        y += lh

    draw.text((pad, h - pad - 34), "medbpo360.com/blog",
              font=load_font("regular", 30), fill=MUTED)
    save_jpeg(img, path)


def build_all_post_squares() -> None:
    out = OUT_DIR / "squares"
    posts = sorted(BLOG_DIR.glob("*.md"))
    for f in posts:
        fm = read_frontmatter(f)
        title, category = fm.get("title"), fm.get("category")
        if not title or not category:
            print(f"  skipped {f.name} — missing title or category")
            continue
        build_post_square(out / f"{f.stem}.jpg", title, category)
    print(f"{len(posts)} posts processed")


if __name__ == "__main__":
    build_cover(OUT_DIR / "facebook-cover.jpg")
    build_square(OUT_DIR / "logo-square.jpg")
    build_all_post_squares()
