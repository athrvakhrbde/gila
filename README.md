# gila — Doctor-led metabolic health

Conversion-focused landing page for gila: doctor-led weight loss and PCOS programmes in India.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS 3 · Framer Motion

## Setup

```bash
npm install
cp .env.example .env   # optional: booking URL or contact email
npm run dev
```

Open [http://127.0.0.1:5173](http://127.0.0.1:5173)

## Environment variables

Set in `.env` locally or in the Vercel project dashboard:

| Variable | Description |
|----------|-------------|
| `VITE_BOOKING_URL` | External booking link (Calendly, etc.) |
| `VITE_CONTACT_EMAIL` | Fallback mailto address if no booking URL |

At least one should be set for live consult CTAs.

## Scripts

```bash
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview production build
npm run lint     # ESLint
```

## Deploy (Vercel)

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com/new)
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add `VITE_BOOKING_URL` and/or `VITE_CONTACT_EMAIL` under Environment Variables

Or from CLI:

```bash
vercel --prod
```

## Page sections

Hero → Programmes → Why gila → How it works → Results → Experts → Comparison → Science → FAQ → Consult CTA

## Brand

- **Dark:** `#001317`
- **Accent:** `#00FCEE`
- **Font:** Aeonik
