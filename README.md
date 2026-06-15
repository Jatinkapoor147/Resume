# Preeti Kapoor — Portfolio

A single-page personal site for **Preeti Kapoor — AI-Ops & Quality Leader**. Static, dependency-free, and built to deploy on GitHub Pages with zero build step.

> Bridging AI engineering and CX quality — turning AI into measurable gains.

## ✨ Features

- **Light / dark theme** with an animated toggle; the choice is remembered (`localStorage`) and applied before first paint (no flash).
- **Energetic, purposeful motion** — animated gradient mesh, an "AI-core" orb, floating particles, scroll-progress bar, count-up metrics, animated bars, scroll reveals, and hover micro-interactions.
- **Accessible** — semantic landmarks, skip link, visible focus states, `aria` labels, and a full `prefers-reduced-motion` path that disables looping motion.
- **Resilient** — every section renders fully **without JavaScript** (motion is enhancement, real numbers live in the HTML).
- **Responsive** — composes cleanly from mobile to desktop.

## 🗂 Structure

```
.
├── index.html        # Markup (semantic, content)
├── styles.css        # Design tokens, layout, components, motion
├── script.js         # Theme toggle, scroll progress, reveals, count-ups
├── assets/
│   └── favicon.svg    # PK monogram favicon
├── design/           # Internal design + motion reference docs (not part of the live page)
├── .nojekyll         # Tell GitHub Pages to serve files as-is (skip Jekyll)
└── README.md
```

All asset paths are **relative**, so the site works whether it's served from a user site (`username.github.io`) or a project subpath (`username.github.io/repo/`).

## 🧰 Tech

Plain HTML, CSS and vanilla JS. Fonts (Geist / Geist Mono) load from Google Fonts. No framework, no bundler, no install.

## ▶️ Run locally

Just open `index.html` in a browser. Or serve it (any static server), e.g.:

```bash
python -m http.server 8080
# then visit http://localhost:8080
```

## 🚀 Deploy to GitHub Pages

1. Create a new GitHub repository and push these files to the **`main`** branch:
   ```bash
   git init
   git add .
   git commit -m "Preeti Kapoor portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Set **Branch** to `main` and the folder to **`/ (root)`**, then **Save**.
5. Wait ~1 minute. Your site goes live at:
   - `https://<your-username>.github.io/<your-repo>/` for a project repo, or
   - `https://<your-username>.github.io/` if the repo is named `<your-username>.github.io`.

## ✏️ Customize

- **LinkedIn / contact** — edit the links in the `#contact` section of `index.html` (email `mailto:`, phone `tel:`, LinkedIn URL).
- **Default theme** — the site defaults to light. To default to dark, add `class="dark"` to the `<html>` tag.
- **Content** — all copy lives in `index.html`; metric values are the `data-target` attributes in the `#metrics` block.
- **Colors / spacing / type** — every value is a CSS custom property in the `:root` (light) and `html.dark` (dark) blocks at the top of `styles.css`.

## 📄 License

Personal portfolio content © Preeti Kapoor. Code is free to reference and adapt.
