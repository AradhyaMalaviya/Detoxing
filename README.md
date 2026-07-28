# DetoxWithBagga — Enterprise Emotional Wellness Platform

> **"Detox your mind. Reclaim your peace."**
> A safe, non-clinical space offering judgment-free 1-on-1 conversations, self-growth guidance, and evidence-informed mental wellness tools.

---

## 🌿 Overview

**DetoxWithBagga** is an enterprise-grade digital emotional wellness platform built using Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons. Designed with an empathetic, calming aesthetic adapted directly from brand visual standards, the platform empowers individuals experiencing overthinking, stress, relationship confusion, imposter syndrome, and burnout.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15+ (App Router)](https://nextjs.org/)
- **Language**: [TypeScript (Strict Mode)](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with CSS Custom Variables
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Brand Components
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: Integrated Google Form & Native Validation Workflow
- **Accessibility**: WCAG 2.2 Level AA Compliant
- **SEO & Schemas**: OpenGraph, Twitter Cards, JSON-LD (`FAQPage`, `EducationalOrganization`)

---

## 📁 Repository Architecture

```
detox-with-bagga/
├── public/
│   └── 30590.jpg                 # Reference brand visual asset
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css           # Design tokens, variables & animations
│   │   ├── layout.tsx            # Root layout, metadata & JSON-LD schemas
│   │   ├── page.tsx              # Single-page application orchestrator
│   │   ├── robots.ts             # SEO robots rules generator
│   │   └── sitemap.ts            # Dynamic sitemap generator
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx        # Sticky header, scrollspy & theme toggle
│   │   │   └── Footer.tsx        # Multi-column footer & crisis hotlines
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Hero section with trust badges & CTAs
│   │   │   ├── About.tsx         # Mission, story & conversation pillars
│   │   │   ├── WhoWeHelp.tsx     # Audience selector cards (Students, Professionals, etc.)
│   │   │   ├── ProcessTimeline.tsx # 5-step animated process timeline
│   │   │   ├── TopicsGrid.tsx    # 16-topic grid with category filters & modals
│   │   │   ├── WhyDetox.tsx      # 10 value propositions breakdown
│   │   │   ├── CommunityImpact.tsx # Ethical social proof & live metrics
│   │   │   ├── FAQAccordion.tsx  # 11+ FAQs with instant search
│   │   │   ├── BookingSection.tsx# Session request form & Google Form bridge
│   │   │   ├── SafetyTransparency.tsx # Non-therapy disclosure & crisis hotlines
│   │   │   ├── EducationalResources.tsx # Article hub & reflection guides
│   │   │   ├── InstagramIntegration.tsx # Profile card replicated from 30590.jpg
│   │   │   ├── Newsletter.tsx    # Weekly Mental Clarity newsletter signup
│   │   │   └── FinalCTA.tsx      # Reassuring final call-to-action
│   │   ├── modals/
│   │   │   ├── ResourceDetailModal.tsx # Article reading modal
│   │   │   ├── PrivacyModal.tsx        # Privacy policy modal
│   │   │   ├── TermsModal.tsx          # Terms of service modal
│   │   │   └── DisclaimerModal.tsx     # Non-therapy disclosure modal
│   │   └── ui/
│   │       ├── Badge.tsx         # Pill badge component
│   │       ├── Button.tsx        # Multi-variant accessible button
│   │       ├── Icons.tsx         # SVG icons (InstagramIcon)
│   │       ├── SkipLink.tsx      # Keyboard accessibility skip link
│   │       └── Toast.tsx         # Toast notification container
│   ├── constants/
│   │   ├── audience.ts           # Audience categories data
│   │   ├── brand.ts              # Core brand constants & emergency numbers
│   │   ├── faq.ts                # FAQ entries data
│   │   ├── resources.ts          # Educational articles data
│   │   ├── topics.ts             # 16 discussion topics data
│   │   └── valueProps.ts         # 10 value propositions data
│   ├── hooks/
│   │   ├── useScrollSpy.ts       # Active section scroll spy hook
│   │   └── useTheme.ts           # Dark/Light theme state hook
│   └── types/
│       └── index.ts              # Global TypeScript interfaces
├── ARCHITECTURE.md               # Technical architecture document
├── COMPONENTS.md                 # UI component catalog & documentation
├── DEPLOYMENT_GUIDE.md           # Production deployment instructions
├── GOOGLE_FORM_GUIDE.md          # Google Form integration & workflow guide
├── PERFORMANCE_ACCESSIBILITY_REPORT.md # Lighthouse & WCAG 2.2 AA audit
├── CHANGELOG.md                  # Engineering changelog & optimizations
├── SCALABILITY_ROADMAP.md        # V2.0 product roadmap
└── WALKTHROUGH.md                # Technical walkthrough script
```

---

## ⚡ Getting Started Locally

### Prerequisites

- **Node.js**: v18.0.0 or higher (v22 recommended)
- **npm**: v9.0.0 or higher

### Installation

```bash
# Clone or navigate to directory
cd "Mental Health and Wellness Project"

# Install dependencies
npm install

# Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

```bash
# Build for production
npm run build

# Start local production server
npm run start
```

---

## 🚀 Key Platform Features

1. **Complimentary Sessions**: Highlighted 2 free 1-on-1 sessions offer for new members.
2. **Google Form Integration**: Seamless bridge between native request form and official Google Form URL.
3. **16 Topic Explorations**: Interactive topic grid with takeaways and direct booking selection.
4. **Instant Searchable FAQ**: Search 11+ questions with category filters and emergency highlights.
5. **Non-Therapy Transparency**: Explicit distinction between non-clinical emotional support and licensed therapy, plus international emergency crisis hotline links.
6. **Educational Hub**: In-depth articles with actionable reflection exercises and modal reading experience.
7. **Accessibility (WCAG 2.2 AA)**: Skip links, keyboard focus rings, ARIA landmarks, prefers-reduced-motion support.

---

## 📄 License

This project is proprietary software for **DetoxWithBagga**. All rights reserved.
