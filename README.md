# Align — Landing Page

**Live at [https://tryalign.app](https://tryalign.app)**

Landing page for the Align relationship agreements app. Includes the marketing site, privacy policy, terms of service, and universal link handler for partner invites.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing page — hero, how-it-works, sample agreement, safety, download CTAs |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/invite` | Universal link landing for partner invites (app store redirect) |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 (`@theme inline` syntax) |
| Typography | Fraunces (display serif) + DM Sans (body) via Google Fonts |
| Hosting | Vercel (static export) |
| Domain | tryalign.app (Vercel nameservers) |

## Design System

Colors and design tokens match the mobile app's theme (`src/lib/theme.ts` in the app repo):

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#2A9D8F` | Warm teal — buttons, accents, logo |
| `--color-accent` | `#E07A5F` | Soft coral — highlights, CTAs |
| `--color-cream` | `#FFFAF5` | Background |
| `--color-ink` | `#2D2926` | Primary text |
| `--color-ink-secondary` | `#6B5E57` | Secondary text |
| `--color-linen` | `#F7F1EB` | Card backgrounds |
| `--color-sand` | `#EDE6DE` | Subtle borders |
| `--color-border` | `#E4DCD4` | Borders |

## Universal Links

The `public/.well-known/` directory contains:

- **`apple-app-site-association`** — Apple Universal Links config for `/invite/*`
- **`assetlinks.json`** — Android App Links config

### Placeholders needing real values:
- `TEAM_ID` in `apple-app-site-association` — replace with Apple Developer Team ID
- `TODO:ADD_YOUR_SHA256_FINGERPRINT` in `assetlinks.json` — replace with Android signing cert fingerprint
- App Store / Google Play download button `href="#"` — replace with real store URLs

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Static export
```

## Deployment

Deployed automatically via Vercel on push to `main`. Vercel project scope: `matt-kilmers-projects-e07ccc14`.

```bash
vercel --prod --scope matt-kilmers-projects-e07ccc14
```

## Project Structure

```
src/
  app/
    page.tsx              # Home (composes all section components)
    layout.tsx            # Root layout (fonts, SEO metadata)
    globals.css           # Theme system (CSS variables, animations)
    privacy/page.tsx      # Privacy policy
    terms/page.tsx        # Terms of service
    invite/page.tsx       # Universal link landing
  components/
    Nav.tsx               # Sticky nav with scroll-aware blur
    Hero.tsx              # Full-height hero with parallax orbs
    HowItWorks.tsx        # 4-step grid with scroll reveal
    SampleAgreement.tsx   # Mock agreement card mirroring app UI
    Safety.tsx            # Trust principles grid
    Download.tsx          # App store CTA section
    Footer.tsx            # Footer with link columns
public/
  .well-known/
    apple-app-site-association
    assetlinks.json
```

## Related

- **Mobile app:** [MattKilmer/relationship-agreements](https://github.com/MattKilmer/relationship-agreements)
- **Support:** support@tryalign.app
