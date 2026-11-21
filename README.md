# Solutions That Work — website

Next.js 15 · TypeScript · Tailwind CSS · Lucide icons. Fully static, no database, no cookies.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

## Updating content

**All copy lives in `content/site.ts`**: hero, services, about, experience, selected work, approach and contact details. Edit the text and redeploy. There's no need to touch any components.

- **Photo:** add `public/artyom.jpg` (portrait, about 1200×1500) and set `about.photo: "/artyom.jpg"`.
- **Email:** change `site.email` once your domain email is set up.
- **Logo:** the mark is in `components/Logo.tsx`, `app/icon.svg` and `public/logo-mark.svg`.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. At vercel.com, choose **Add New → Project** and import the repo. Vercel detects Next.js automatically.
3. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL` = `https://solutionsthatwork.online` (used for SEO, the sitemap and social previews)
   - `NEXT_PUBLIC_FORM_ENDPOINT` = your Formspree URL (optional, see below)
4. Deploy.

## Connect your domain

1. In Vercel, open the project and go to **Settings → Domains**. Add both `solutionsthatwork.online` and `www.solutionsthatwork.online` (set the bare domain as primary; Vercel will redirect www to it).
2. Vercel shows the DNS records to add at your registrar (wherever you bought solutionsthatwork.online). Typically:
   - `A` record, host `@` → `76.76.21.21`
   - `CNAME` record, host `www` → `cname.vercel-dns.com`

   Use whatever values Vercel displays, since they can change.
3. Remove any old A/CNAME records for `@` and `www` that point elsewhere.
4. HTTPS is issued automatically once DNS propagates, usually within an hour.

## Alternative: host on GitHub Pages (free)

The repo includes `.github/workflows/pages.yml` and `public/CNAME`.

1. Push the code to a GitHub repo. GitHub Pages is free on public repos, and needs a paid plan for private ones.
2. In the repo, go to **Settings → Pages → Source** and choose **GitHub Actions**. Every push to `main` then builds and deploys the site.
3. Under **Settings → Pages → Custom domain**, enter `solutionsthatwork.online`, then tick **Enforce HTTPS** once it's available.
4. At your registrar, add:
   - four `A` records for host `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for host `www` → `<your-github-username>.github.io`
5. Optional: to connect the form, add a repository variable `FORM_ENDPOINT` (Settings → Secrets and variables → Actions → Variables).

## Contact form

The form works honestly in two modes:

- **No endpoint set (default):** "Continue in email" opens the visitor's email app with the message pre-filled.
- **Endpoint set:** messages are sent directly to your inbox.
  1. Create a free form at formspree.io and verify your email.
  2. Copy the endpoint (`https://formspree.io/f/xxxxxxx`).
  3. Set `NEXT_PUBLIC_FORM_ENDPOINT` in Vercel and redeploy.

The button switches to "Send message" automatically, with success and error states. A hidden honeypot field filters basic spam.

## Privacy

`/privacy` contains a UK GDPR-style notice. The site sets no cookies and runs no analytics. If you later add analytics (Vercel Analytics is cookie-free), update the notice. Review the wording before launch, because it's a starting point, not legal advice.

## Also included

Open Graph image (`app/opengraph-image.tsx`), sitemap, robots.txt, JSON-LD structured data, skip link, keyboard-accessible mobile menu and reduced-motion support.
