# B.A.R.T. — Biomimetic Autonomous Robotics & Technologies

> **Adrishya. Achook. Atmanirbhar.**
> *Invisible. Infallible. Self-Reliant.*

Official corporate website for **B.A.R.T.** — India's indigenous biomimetic aerial defence systems organization. Built with React + Vite + Tailwind CSS v4.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Icons | lucide-react |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Add video assets (see note below)

# 3. Start dev server
npm run dev

# 4. Build for production
npm run build
```

---

## Video Assets (Not in Repo)

Video files are **excluded from git** due to size. After cloning, manually place these files:

```
public/assets/uluka-n1/videos/uluka-nightops-flight.mp4
public/assets/shyena-d1/videos/shyena-apex-flight.mp4
public/assets/shyena-d1/videos/shyena-mountain-recon.mp4
public/assets/project-chaya/videos/chaya-demonstration.mp4
```

The site works without them — video sections degrade gracefully.

---

## Project Structure

```
bart/
+-- public/assets/
¦   +-- logo/              # B.A.R.T. brand assets
¦   +-- uluka-n1/          # ULUKA-N1 images & videos
¦   +-- shyena-d1/         # SHYENA-D1 images & videos
¦   +-- project-chaya/     # Project CHAYA images & videos
¦   +-- virtus-eye/        # VIRTUS-EYE images
+-- src/
¦   +-- components/        # All 23 site sections
¦   +-- data/content.js    # Single source of truth
¦   +-- App.jsx
¦   +-- index.css          # Tailwind v4 + aerospace dark theme
+-- index.html
+-- vite.config.js
+-- package.json
```

---

## License

Proprietary — B.A.R.T. / GarudAstra Defence Systems. All rights reserved.
