# Abdelrahman Yousry — Developer Portfolio

A self-contained Next.js 14 (App Router) portfolio with a real backend: a
working contact form and a live visitor counter, both backed by a
file-based JSON store — no external database, no third-party API keys.

## 1. Quick start (local)

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## 2. Add your real photo

Replace the placeholder at `public/myimg.jpg` with your actual photo
(square-ish, at least 800×800px works best). Keep the filename exactly
`myimg.jpg` — the `Hero` component already points to it.

## 3. Deploy to Vercel

1. Push this project to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No build config needed.
4. Add one environment variable before deploying:
   - `ADMIN_KEY` → any strong random string. This unlocks `/admin`, where
     you can read messages submitted through the contact form.
5. Deploy. That's it — no database to provision, no API keys to wire up.

## 4. How the "backend" works (and its one honest limitation)

- `lib/db.ts` is a tiny JSON-file data layer — pure Node.js `fs`, zero
  native dependencies, so there's no risk of a native-binary build failure
  on Vercel (a common issue with packages like `better-sqlite3`).
- Locally, data persists in `.data/db.json` between restarts, like a real
  database file.
- **On Vercel**, serverless functions can only write to `/tmp`, and `/tmp`
  is cleared on cold starts and every new deployment. That means the
  contact form and visit counter work correctly, but stored data isn't
  guaranteed to survive indefinitely in production — it's fine for a
  portfolio, but don't rely on it as your only record of a client inquiry.
  If you want guaranteed persistence later, swap `lib/db.ts` for a hosted
  database (Vercel Postgres, Turso, Neon all have generous free tiers) —
  the API routes that call it (`/api/contact`, `/api/visits`,
  `/api/admin/messages`) don't need to change shape, only the
  implementation inside `lib/db.ts`.
- A pragmatic middle ground: keep this file store *and* add an email step
  (e.g. Resend's free tier) inside `app/api/contact/route.ts` so every
  message also lands in your inbox regardless of storage.

## 5. Project structure

```
app/
  page.tsx              → composes all homepage sections
  admin/page.tsx         → password-gated view of contact messages
  api/contact/route.ts   → validates + stores contact form submissions
  api/visits/route.ts    → increments/reads the live visit counter
  api/admin/messages/    → protected read endpoint for /admin
components/              → Navbar, Hero, About, Projects, Skills, etc.
data/projects.ts          → all 5 project case studies (edit copy here)
lib/db.ts                 → the file-based data layer described above
```

## 6. Editing your content

- **Projects & case studies** → `data/projects.ts`. Each project has
  `pitch`, `problem`, `role`, `stack`, `features`, `design`, `challenges`,
  `results`, and `selling` — all rendered automatically in the project
  modal, so you only ever edit this one file.
- **About / Skills / Experience / Services copy** → each lives in its own
  component file under `components/`.
- **Contact details** → `components/Contact.tsx` and `components/Footer.tsx`.

---

## 7. Portfolio strategy notes (from the original brief)

### Project ranking (strongest → weakest, as currently built)

1. **SaaS Admin Dashboard** — highest business value. Admin/dashboard UI is
   exactly what B2B and Toptal/Upwork Enterprise clients search for.
2. **Bassem Furniture (bilingual)** — real i18n/RTL experience is rare and
   valuable, especially for MENA-region clients.
3. **TailorCraft** — solid component-architecture proof, more niche market.
4. **Saudi German Hospital** — strong enterprise-CMS proof, but you didn't
   own the full build, only landing pages inside an existing system.
5. **TRA Egypt** — weakest as a *portfolio* piece (it's maintenance, not a
   build), but valuable in interviews as your "handled a live institutional
   codebase responsibly" story — mention it in conversation more than as a
   flagship case study.

**Recommended homepage order:** SaaS Dashboard → Furniture → TailorCraft →
Hospital → TRA. That's what `data/projects.ts` currently reflects.

### Honest scoring (1–10, self-assessed against current live builds)

| Project | Visual | UX | Tech Complexity | Business Value | Frontend | Backend | Responsiveness | Portfolio Value |
|---|---|---|---|---|---|---|---|---|
| SaaS Dashboard | 7 | 7 | 7 | 8 | 8 | 4 | 7 | 9 |
| Furniture (bilingual) | 7 | 7 | 6 | 7 | 7 | 3 | 7 | 8 |
| TailorCraft | 6 | 6 | 5 | 6 | 6 | 2 | 6 | 6 |
| Hospital pages | 6 | 6 | 4 | 6 | 5 | 2 | 6 | 5 |
| TRA Egypt | 5 | 5 | 3 | 6 | 4 | 2 | 5 | 4 |

Backend scores are low across the board because these five projects are
frontend/CMS-focused — which is exactly the gap this new portfolio site
closes, since it ships a real (if intentionally lightweight) backend:
validated API routes, a data layer, and an authenticated admin view.

### 10 future projects, ranked by likely impact on hiring/client conversion

1. **A real full-stack app with auth + a proper hosted database** (e.g. a
   task manager or booking app using Next.js + Postgres + NextAuth). This
   is the single highest-leverage gap in your current lineup.
2. **An AI-powered feature inside a real app** (e.g. AI content generation,
   a support chatbot, or semantic search) — directly supports your AI
   positioning with working code, not just a claim.
3. **An open-source contribution or public GitHub project** with real stars/
   usage — strong trust signal for Toptal/enterprise screening.
4. **A polished e-commerce build with real cart + checkout logic** (Stripe
   test mode is fine) — extremely common client ask.
5. **A performance case study**: take one existing project, profile it, and
   document concrete before/after Lighthouse improvements.
6. **A multi-tenant SaaS demo** (organizations, roles, billing UI) — shows
   you understand real product architecture, not just pages.
7. **A design-to-code exercise**: implement a well-known Dribbble/Figma
   design pixel-accurately, to prove visual precision independent of your
   own design taste.
8. **A CMS-agnostic component library** published to npm — shows you can
   ship reusable, documented code, not just app-specific UI.
9. **A real-time feature** (WebSockets/Server-Sent Events — live chat,
   live dashboard updates) — a commonly-missing skill signal.
10. **A written case study / blog post** walking through your technical
    decisions on one project in depth — recruiters and clients read these,
    and they compound your SEO and credibility over time.

### Final review — five perspectives (brutally honest)

**Google recruiter** — No hire (for a new-grad SWE role) as-is; your
projects are strong for freelance/agency work but don't show algorithms,
systems design, or large-codebase collaboration signals Google screens
for. *Score: 4/10 for FAANG-style hiring specifically.*

**Microsoft recruiter** — Similar read to Google, though Microsoft weighs
practical product experience slightly more. Your CMS + full-stack breadth
helps here. Missing: any evidence of testing, CI/CD, or working in a team
codebase. *Score: 5/10.*

**Toptal screener** — Favorable. Toptal cares about client-facing
professionalism and delivered, live work — you have five live URLs and
real client contexts (hospital, government, retail). Missing: client
testimonials/references and a case study showing measurable business
impact. *Score: 6.5/10*, likely to pass initial screening with a strong
technical interview.

**Upwork Enterprise client** — Favorable. This portfolio site itself (a
working dashboard-quality build with a real backend) is a strong trust
signal. They'll want to see the SaaS Dashboard and ask for
testimonials/references next. *Score: 7/10.*

**Startup CTO** — Cautiously favorable. A CTO will value that you can ship
end-to-end (frontend + basic backend + deployment) fast, but will probe
on testing, error handling, and whether you've worked with a real database
under load. Bring this portfolio's `lib/db.ts` design trade-off explanation
to the conversation — it shows you understand production constraints, not
just how to make a demo work. *Score: 6/10.*

**What would take any of these to a clear "hire"/10-out-of-10:** one real
full-stack project with a hosted database and authentication, one
AI-integrated feature you can explain the architecture of end-to-end, and
2–3 real client testimonials replacing the honest placeholder in this site.
