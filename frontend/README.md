# Arisha Firoz — Portfolio (Swiss Editorial / Neo-Brutalist Dossier)

Single-page personal portfolio for **Arisha Firoz** — Software Engineer & AI Integrator.
Built with **React + Vite + Tailwind CSS v4 + Framer Motion + React Icons**.
Warm-cream editorial light mode by default, with a dark-mode toggle. All copy lives in one
typed file: `src/data/portfolio.ts`.

## Style

- Warm cream background (`#F5F2EA`) with faint dot-grid texture, near-black text, one strong
  blue accent (`#0B4FD6`-ish); small red accent reserved for Security-Audit/AI highlights.
- White cards with 1.5px black borders and hard offset shadows; black-fill / white-fill
  brutalist buttons with pressed states.
- Archivo Black + Space Grotesk headings, Inter body, JetBrains Mono labels/tags.

## Run locally

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

## Build & preview

```bash
cd frontend
npm run build
npm run preview
```

## Editing content

Edit **`src/data/portfolio.ts`** — profile/manifest, nav links, social placeholders,
skill matrix, experience, projects, degrees, honors, contact email/location, and the
Formspree endpoint. Social, Live Demo, and GitHub links are `"#"` placeholders by design.
To receive contact-form messages directly, set `contact.formspreeEndpoint` to your
Formspree URL; otherwise the form opens a pre-filled `mailto:` draft.

Replace `public/resume.pdf` with the real resume (same filename keeps the RESUME /
DOWNLOAD RESUME buttons working).

## Deploy on Vercel

Option A — dashboard:

1. Push this repo to GitHub.
2. In Vercel, **New Project → Import** the repo.
3. Set **Root Directory** to `frontend`.
4. Framework preset: **Vite**. Build command `npm run build`, output `dist`.
5. Deploy.

Option B — CLI:

```bash
cd frontend
npx vercel
```

`vercel.json` in `frontend/` already pins the build command and output directory.

## Accessibility & performance notes

- Semantic landmarks (`header`, `main`, `footer`, labelled `section`s), skip-to-content link,
  visible focus states, aria labels on icon links, `prefers-reduced-motion` respected.
- System-feel fonts via Google Fonts with preconnect; images have dimensions + alt text.
- Lighthouse target: 90+ across Performance, Accessibility, Best Practices, SEO.
