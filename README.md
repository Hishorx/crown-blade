# Crown & Blade Barbers — website demo

A premium, mobile-first barbershop website built as a **portfolio demo**. Every business detail, price and
review is a placeholder, and the WhatsApp number is not live.

Built with **Vite**, **React** and **Tailwind CSS v4**. No backend, no paid dependencies, no tracking.

## What's inside

- Hero with an animated barber-pole motif and a single orchestrated entrance sequence
- Services and prices laid out like a printed price list (sample prices, durations)
- Gallery with illustrated placeholder tiles, ready to swap for real photos
- About section with a "your visit" walkthrough
- Testimonials, clearly labelled on the page as **fictional demo reviews**
- Contact section with address, directions link, phone, email and opening hours
- WhatsApp appointment **enquiry** links with a pre-filled message (no live booking system)
- Accessible navigation: skip link, keyboard-friendly mobile menu (Escape to close, focus handling,
  background made inert), visible focus styles, `prefers-reduced-motion` support
- SEO: title, description, canonical, Open Graph / Twitter tags, social share image, `HairSalon`
  structured data, `robots.txt`
- GitHub Pages deployment through GitHub Actions

## Local setup

Requires **Node.js 20.19+** (Node 22 recommended).

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

After the first `npm install`, commit the generated `package-lock.json` so builds are reproducible
(the deploy workflow then uses `npm ci` automatically).

## Replacing placeholders

Almost everything lives in **`src/config/site.js`**:

| What | Where in `site.js` |
| --- | --- |
| Demo notice on/off | `isDemo` — set to `false` for a real client (also hides the "placeholder" notes) |
| Name, intro line | `name`, `shortName`, `intro` |
| Phone, email, address | `phoneDisplay`, `phoneHref`, `email`, `address`, `mapsQuery` |
| **WhatsApp number** | `whatsappNumber` — digits only, with country code, no `+` (e.g. `447700900123`) |
| WhatsApp pre-filled text | `whatsappMessage` |
| Opening hours | `hours`, `hoursShort` |
| Services and prices | `services` (and `currency`) |
| Gallery | `gallery` — see photos below |
| Testimonials | `testimonials` — replace with **real, verified** reviews used with permission, then remove the "Fictional demo reviews" note in `src/components/Testimonials.jsx` and the "fictional client" suffix |
| Social links | `social` |
| Your credit in the footer | `credit` |

Then update the parts of **`index.html`** that search engines read before JavaScript runs:

- `<title>` and `meta name="description"` (replace "Your City")
- every `https://your-username.github.io/crown-and-blade-barbers/` URL (canonical, `og:url`, `og:image`,
  and the JSON-LD block) — use your real deployed URL
- the JSON-LD business details (phone, address, opening hours) so they match `site.js`

Also worth replacing for a real client: `public/og-image.png` (1200×630 share image),
`public/favicon.svg` and `public/apple-touch-icon.png`.

### Adding real photos

1. Put images in `public/images/` (JPG or WebP, ~1200px on the long edge, ideally under 300 KB).
2. In `site.js → gallery`, set `src: 'images/your-photo.jpg'` and write a meaningful `alt`.

Paths are resolved against the Vite base path automatically, so they work on GitHub Pages.
Only use photos the shop owns or that are licensed for commercial use.

### Fonts

Bodoni Moda and Hanken Grotesk load free from Google Fonts in `index.html`. If you'd rather self-host
(for privacy rules such as GDPR), download them and replace the `<link>` tags with local `@font-face` rules.

## Deploying to GitHub Pages

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).
   `.github/workflows/deploy.yml` installs, builds and publishes `dist/`.
4. The site appears at `https://<your-username>.github.io/<repository-name>/`.

### How the base path works

GitHub Pages serves project sites from a sub-path, so Vite must know it. The workflow sets
`BASE_PATH=/<repository-name>/` automatically, so the repo can have any name.

- Building locally for Pages: `vite.config.js` falls back to `/crown-and-blade-barbers/`. Change
  `REPO_BASE_FALLBACK` if your repo name differs, or run `BASE_PATH=/my-repo/ npm run build`.
- Custom domain or a `<username>.github.io` repository: set `BASE_PATH: /` in the workflow.
  For a custom domain, also add a `public/CNAME` file containing the domain.
- `npm run dev` always uses `/`.

## Project structure

```
index.html                  SEO tags, fonts, structured data
vite.config.js              Vite + React + Tailwind plugins, base path
src/config/site.js          All editable content and placeholders
src/lib/links.js            WhatsApp, maps and asset URL helpers
src/index.css               Tailwind import, design tokens, custom styles
src/components/             Page sections (Header, Hero, Services, Gallery, …)
public/                     Favicon, share image, robots.txt, images/
.github/workflows/deploy.yml  GitHub Pages deployment
```

## Design notes

- Palette: black `#000000`, charcoal `#1c1c1e`, graphite `#2c2c2f`, ivory `#f2ecdf`,
  muted gold `#b39a62` (with `#cdb886` for hover and `#6f5c2e` for text on ivory).
- Type: Bodoni Moda for display and prices, Hanken Grotesk for body text.
- Motion: one entrance sequence in the hero and the turning barber pole; everything else responds only
  to interaction. All of it is switched off for visitors who prefer reduced motion.

## License and content

The code is yours to adapt for client work. The business, prices, story and testimonials are fictional
placeholders and must be replaced with real, accurate information before any site goes live.
