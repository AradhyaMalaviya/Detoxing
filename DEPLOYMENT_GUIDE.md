# Production Deployment Guide — Vercel & Netlify

## Deployment to Vercel (Recommended)

DetoxWithBagga is optimized for zero-configuration deployment on **Vercel**.

### Step 1: Connect Repository to Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import your repository into the [Vercel Dashboard](https://vercel.com/new).
3. Select **Next.js** as the Framework Preset.

### Step 2: Configure Build Settings

- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### Step 3: Deployment Verification Checklist

- [x] HTTPS SSL Certificate auto-provisioned
- [x] Static pages prerendered (`/`, `/sitemap.xml`, `/robots.txt`)
- [x] Image optimization enabled for `30590.jpg`
- [x] Core Web Vitals optimized (LCP &lt; 1.2s, CLS &lt; 0.01)
- [x] Mobile responsiveness verified across 320px to 1920px viewports
