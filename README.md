# TikVault — TikTok Video Downloader

A fast, SEO-optimized TikTok downloader built with Next.js. Mobile-first, no watermark, free.

## 🚀 Deploy to Vercel (5 minutes)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. No environment variables needed
4. Click **Deploy** — done!

Update the domain references (`tikvault.app`) in these files once you have your real domain:
- `pages/index.js` → `SITE_URL` constant
- `public/sitemap.xml`
- `public/robots.txt`

---

## 💰 Monetization — Google AdSense

### Step 1: Apply for AdSense
- Go to [adsense.google.com](https://adsense.google.com)
- Add your Vercel domain
- Submit for approval (takes 1–14 days)

### Step 2: Add your AdSense script
In `pages/_document.js`, uncomment and fill in your publisher ID:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"></script>
```

### Step 3: Replace `<AdSlot>` components with real `<ins>` tags
The `AdSlot` component in `pages/index.js` has the real AdSense tag commented in.
Replace placeholders with your actual ad unit code from the AdSense dashboard.

### Alternative Ad Networks (easier approval)
- **Ezoic** — no minimum traffic, high RPM
- **Media.net** — good for search traffic
- **PropellerAds** — instant approval, push/pop formats
- **AdThrive / Mediavine** — premium, requires 50K/100K sessions/month

---

## 🔍 SEO Checklist

- [ ] Update `SITE_URL` in `pages/index.js` with your real domain
- [ ] Create a real `og-image.png` (1200×630) and put it in `/public/`
- [ ] Create a `favicon.ico` and `apple-touch-icon.png` in `/public/`
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Register on Google Search Console and verify your domain
- [ ] Add your site to Bing Webmaster Tools
- [ ] Build backlinks — list on Product Hunt, AlternativeTo, etc.

---

## 🛠 Tech Stack

- **Next.js 14** (Pages Router)
- **Tailwind CSS** — mobile-first styling
- **API route** → proxies to `tikwm.com` public API
- **Vercel** — zero-config deployment

## 📁 Structure

```
tikvault/
├── pages/
│   ├── index.js          # Main page (SEO + UI)
│   ├── _document.js      # HTML head (AdSense goes here)
│   ├── _app.js
│   └── api/
│       └── download.js   # Backend proxy to tikwm API
├── styles/globals.css    # Design system + animations
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── vercel.json           # Security headers
└── tailwind.config.js
```
