# Portfolio

Modern, responsive personal portfolio built with Next.js (App Router), Tailwind CSS, and DaisyUI. It showcases an introduction/landing area, an experience timeline, skills, projects with a masonry layout, GitHub contributions, and a contact section with an email form.

## Live preview

- Deployed on Vercel (recommended). If you fork this repo, you can deploy with one click using Vercel.

## Tech stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 3 + DaisyUI components
- next-intl for localization (locales: `en`, `it`, `de`)
- Framer Motion for small animations
- tsParticles for the landing background
- react-github-calendar for contributions heatmap
- Resend (email provider) for the contact form

## Getting started

Prerequisites:
- Node.js 18+ (LTS recommended)

Install dependencies and run locally:

```bash
npm install
npm run dev
```

Build and start production server:

```bash
npm run build
npm start
```

Lint:

```bash
npm run lint
```

## Environment variables

Create a `.env.local` in the project root for local development.

Required for contact form (Resend):

```
RESEND_API_KEY=your_resend_api_key
CONTACT_TO=your_destination_email@example.com
CONTACT_FROM=no-reply@your-domain.com
```

Other environment notes:
- `NEXT_PUBLIC_LASTMOD` is injected at build time by `next.config.mjs` (used for sitemaps/metadata freshness).

## Project structure

```
src/
	app/
		page.js                 # Main homepage composition
		[locale]/               # Locale routing (next-intl)
			layout.js
			page.js
		api/contact/            # Contact form API route (uses Resend)
		robots.txt/route.js     # Robots
		sitemap.xml/route.js    # Sitemap
	components/
		layout/                 # Navbar, masonry
		logic/                  # Helpers (e.g., section metadata)
		motion/                 # Reveal on scroll
		ui/                     # UI pieces
	features/
		landingPage/
		experience/
		skills/
		projects/
		contact/
	styles/
		global.css              # Tailwind layers and small utilities
```

Public assets live in `public/` (images, icons, PDFs).

## Key features

- Landing page with animated background (tsParticles)
- Experience timeline (DaisyUI timeline component)
- Skills grid with category grouping
- Projects masonry layout with badges and external links
- GitHub contributions heatmap
- Contact form with client-side validation and Resend email delivery
- i18n-ready routing with next-intl

## Customization guide

### Branding and content
- Logo and icons: `public/`
- Intro content: `src/features/landingPage/components/landing.jsx`
- CV button file path: `src/features/landingPage/components/cvBtn.jsx`

### Experience timeline
- Data driven via i18n: `src/features/experience/experience.constants.js` keys + `messages/*.json`
- Renderer: `src/features/experience/components/experience.jsx`
- Item layout: `src/features/experience/components/timelineElement.jsx`

To add a new entry:
1) Add keys and messages (title, description, time) to `messages/en.json` (and other locales if used).
2) Append the key to the `keys` array in `experience.jsx` with `isWork` and `company` when relevant.

### Projects
- Edit list in `src/features/projects/components/projects.jsx` (`m` array)
- Card UI in `src/features/projects/components/projectCard.jsx`

### Skills
- Update icons/names in `src/features/skills/components/techSkills.jsx`
	(icons are read from `/public/skills/`)

### Contact form
- UI: `src/features/contact/components/contactForm.jsx`
- API route: `src/app/api/contact/`
- Email template: `mail/contactTemplate.js`
- Configure `.env.local` with Resend keys as above.

## Styling

- Tailwind utility classes are used inline in components.
- DaisyUI provides the timeline and common component styles.
- Global utilities and layout helpers live in `src/styles/global.css`.

If you prefer more centralized styling, you can extract frequently used class combinations into small CSS modules and replace long `className` strings with semantic classes.

## Internationalization (next-intl)

- Localized routes live under `src/app/[locale]/`.
- Messages are stored in `/messages/*.json`.
- The Next.js config wraps the app with the next-intl plugin (`next.config.mjs`).

To add/remove locales, update:
- `messages/<locale>.json`
- routing helpers in `src/i18n/`
- any UI that switches locales (e.g., language dropdown if enabled)

## Accessibility & SEO

- Semantic sections and accessible labels on nav links/buttons
- Open Graph/Twitter meta handled in `src/app/layout.js` and via `components/logic/sectionMetadata.jsx`
- `robots.txt` and `sitemap.xml` routes are configured in `src/app/`

## Deployment

Vercel is the recommended platform:
- Create a new project and link this repo
- Set environment variables in the Vercel dashboard
- Deploy; preview/production URLs are created automatically

Alternatively, you can self-host with `npm run build` and `npm start` behind a reverse proxy.

## Scripts

- `npm run dev` – start dev server with Turbopack
- `npm run build` – production build
- `npm run start` – start production server
- `npm run lint` – run ESLint

## License

MIT — see `LICENSE` if present, or add one for your fork.

