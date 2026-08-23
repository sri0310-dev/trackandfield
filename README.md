# Track & Field Team Site

A static website for the school Track & Field team: team overview, upcoming
competitions, a sign-up form, and FAQ.

## Structure

```
index.html        Page markup
styles.css        Styles
script.js         Sign-up form behavior
assets/favicon.svg
```

No build step or dependencies — it's plain HTML/CSS/JS.

## Running locally

Open `index.html` directly in a browser, or serve it so relative paths and
`fetch` behave the same as in production:

```
npx serve .
```

## Customize before going live

- **Photos** — the hero, team cards, and gallery currently hotlink free
  stock photos from Unsplash (real track & field action shots, not the
  actual team). Swap them for real photos of your athletes as soon as you
  have them: replace each `src`/background `url()` in `index.html`/`styles.css`
  with a path into `assets/`, and add real team photos there.
- **Contact email** — replace `athletics@yourschool.edu` in `index.html`
  (footer) with the real coach/coordinator address.
- **Competition dates** — update the `#events` section with real fixtures.
- **Sign-up form** — the form currently only shows a client-side "submitted"
  message; it does not send data anywhere. To actually collect
  registrations, point the `<form>` at a backend, for example:
  - [Formspree](https://formspree.io) — add `action="https://formspree.io/f/your-id"`
    and `method="POST"` to the `<form id="signupForm">` tag, and remove the
    `event.preventDefault()` call in `script.js` (or keep it and `fetch()`
    the endpoint manually to keep the custom success message).
  - A Google Form embedded or linked from the Sign Up section.

## Deploying to Vercel

This repo is a static site, so Vercel needs no build configuration.

1. Go to [vercel.com/new](https://vercel.com/new) and sign in (GitHub login
   is easiest since this repo is on GitHub).
2. Click **Import Git Repository**, authorize Vercel to access your GitHub
   account/org if prompted, and select `sri0310-dev/trackandfield`.
3. Framework Preset: choose **Other** (or leave it — Vercel auto-detects a
   plain static site). Leave Build Command and Output Directory blank.
4. Click **Deploy**. Vercel builds and hosts the site, and gives you a
   `*.vercel.app` URL immediately.
5. Every push to the repo's production branch (usually `main`) auto-deploys;
   pushes to other branches get their own preview URL.
6. Optional: in the project's **Settings → Domains**, add your school's
   custom domain if you have one.
