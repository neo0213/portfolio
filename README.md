# portfolio-neo

Personal portfolio of **Neo Olinar** — design-engineer building fast, thoughtful products at the intersection of AI, interfaces, and infrastructure.

Live at → *(add your URL here once deployed)*

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) + Turbopack |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Hosting | Vercel |

---

## Features

- Dark / light mode — system preference with manual toggle
- Project detail pages at `/work/[slug]` with full write-up and image gallery
- Lightbox image viewer with keyboard navigation (arrow keys, Esc)
- Auto image discovery — drop images into `public/projects/<slug>/` and they appear automatically, no code changes needed
- Responsive, mobile-first layout

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home (Hero, Work, About, Contact)
│   └── work/[slug]/page.tsx  # Project detail page
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Work.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Gallery.tsx           # Lightbox image gallery
│   └── ThemeToggle.tsx
└── lib/
    ├── projects.ts           # Project data (title, tags, summary, etc.)
    └── projectImages.ts      # Auto-reads public/projects/<slug>/ at build time
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Adding Project Images

1. Place images inside `public/projects/<slug>/`
   e.g. `public/projects/esl-video/01.jpg`
2. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`, `.gif`
3. Files are sorted alphabetically — name them to control display order
4. No code changes required

Current slugs: `esl-video` · `neo-english-app` · `pcm-infosystems`

---

## Adding a New Project

Edit `src/lib/projects.ts` and append to the `projects` array:

```ts
{
  slug: "your-project",
  title: "Your Project",
  blurb: "Short description shown on the home card.",
  summary: [
    "First paragraph on the detail page.",
    "Second paragraph.",
  ],
  tags: ["React", "TypeScript"],
  href: "https://yourproject.com",
  accent: "from-orange-500/30 to-amber-500/10",
  role: "Full-stack developer",
  year: "2025",
}
```

Then create the image folder: `public/projects/your-project/`

---

## Deploy

Push to GitHub and import the repo at [vercel.com](https://vercel.com) — zero config required.

---

## License

MIT
