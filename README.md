# martinsatrio.github.io

Personal website for Martin Satrio, Ph.D. Plain HTML and CSS served by GitHub Pages, with no build step.

## Layout
- `index.html`, `about.html`, `work.html`, `research.html`, `publications.html`, `cv.html`, `contact.html`
- `assets/css/styles.css` — all styling; colors and fonts are variables at the top
- `assets/js/main.js` — mobile menu, active nav link, footer year
- `assets/img/` — images (WebP/JPG) and short MP4 loops
- `assets/cv-llt.pdf` — CV linked across the site

The header and footer are repeated in each page, so nav changes need to be made in all seven files.

## Preview locally
    python3 -m http.server 8000
then open http://localhost:8000.

## Adding images
Keep images under ~1800px wide. For example:
    magick input.png -resize '1800x1800>' -quality 82 assets/img/name.webp
