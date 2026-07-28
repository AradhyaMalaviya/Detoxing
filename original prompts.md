# Elite Technical Implementation Prompt — One-Page Agency Website (NorthPeak Digital)

You are a **Senior Staff Frontend Engineer, UI/UX Designer, Accessibility Specialist, Responsive Design Expert, Performance Engineer, and Technical SEO Consultant** with extensive experience building production-quality marketing websites for modern SaaS and digital agencies.

Your objective is to design and build a **fully production-ready, enterprise-quality, responsive one-page agency website** for a fictional digital agency named **NorthPeak Digital**.

This is **not** a prototype, mockup, or proof of concept. The deliverable must resemble a website that could be deployed directly to production for a real business with minimal additional work.

---

# Primary Objective

Create a modern, visually compelling, high-performance, fully responsive one-page website that demonstrates excellent frontend engineering practices, clean architecture, accessibility compliance, responsive behavior, semantic HTML, maintainable code structure, and polished user experience.

The finished product should appear comparable to websites built by agencies such as:

* Stripe
* Linear
* Vercel
* Framer
* Webflow Enterprise
* GitHub
* Notion
* Figma
* Shopify
* Intercom

The design language should communicate professionalism, trust, innovation, and technical expertise.

---

# Technology Constraints

The implementation **must not** use:

* WordPress
* Webflow
* Wix
* Squarespace
* Bubble
* Page builders
* AI website generators

Allowed technologies include:

* HTML5
* CSS3
* JavaScript (ES2022+)
* TypeScript (optional)
* React
* Vue
* Svelte
* Next.js
* Astro
* Tailwind CSS
* Bootstrap (optional)
* CSS Grid
* Flexbox

No unnecessary dependencies.

Favor modern browser APIs.

---

# Code Quality Standards

Produce code equivalent to what would be expected during a senior frontend engineering interview.

The implementation must exhibit:

* modular architecture
* reusable components
* consistent naming conventions
* separation of concerns
* maintainable folder organization
* scalable styling methodology
* clean semantic markup
* readable source code
* zero dead code
* zero duplicated code
* descriptive comments only where appropriate
* no placeholder hacks
* no inline CSS unless absolutely necessary

---

# Required Sections

The page must contain the following sections in order.

---

## 1. Hero Section

Must include:

* compelling headline
* supporting paragraph
* primary CTA button
* secondary CTA
* visually engaging hero layout
* decorative background elements
* subtle animations
* trust indicators
* client/company badges
* modern typography hierarchy
* responsive image or illustration
* scroll indicator

Hero should immediately communicate:

* what NorthPeak Digital does
* who it serves
* why it is different

---

## 2. Services Section

Display exactly **6 services** using a responsive card grid.

Each service card should include:

* icon
* title
* concise description
* hover interaction
* consistent spacing
* accessible focus states

Cards should be arranged using CSS Grid.

Examples include:

* Web Development
* UI/UX Design
* Brand Identity
* SEO
* Performance Optimization
* Growth Marketing

---

## 3. Results / Testimonials

Include either:

* measurable business results

or

* customer testimonials

Recommended implementation:

Three testimonial cards containing:

* client avatar
* company name
* client title
* testimonial text
* rating
* success metrics

Cards should feel authentic rather than generic.

---

## 4. Pricing Section

Display three pricing tiers.

Recommended:

* Starter
* Professional
* Enterprise

Each pricing card should include:

* plan name
* monthly pricing
* feature list
* CTA button
* highlighted recommended plan
* hover animation

Pricing cards should remain aligned regardless of content length.

---

## 5. Contact Section

Include a professional contact form.

Required fields:

* Name
* Email
* Company
* Subject
* Message

Client-side validation must include:

* required fields
* email validation
* empty input detection
* invalid format detection
* inline validation messages
* accessible error announcements

Display:

* success message
* error state
* disabled submit button during processing

No backend is required.

---

# Responsive Design Requirements

The website **must intentionally adapt** to all viewport sizes.

Specifically optimize layouts for:

## Mobile (360px)

* single-column layout
* touch-friendly controls
* optimized spacing
* readable typography
* no horizontal scrolling
* collapsible navigation

---

## Tablet (768px)

* balanced spacing
* adaptive grids
* medium typography scale
* improved content density

---

## Desktop (1440px)

* generous whitespace
* multi-column layouts
* larger typography
* visually balanced composition

Every breakpoint should appear intentionally designed rather than merely shrinking desktop content.

---

# Navigation

Include a sticky navigation bar.

Navigation should include:

* logo
* section links
* CTA button
* smooth scrolling
* active section highlighting
* mobile hamburger menu
* keyboard accessibility

---

# UI / UX Requirements

Implement:

* smooth scrolling
* hover animations
* subtle transitions
* button micro-interactions
* card elevation
* focus indicators
* loading-friendly interactions
* consistent spacing rhythm
* visual hierarchy
* intuitive layout flow

Avoid distracting animations.

---

# Accessibility Requirements

Meet WCAG 2.1 AA standards wherever practical.

Include:

* semantic HTML
* landmark elements
* ARIA labels where necessary
* keyboard navigation
* focus management
* visible focus rings
* accessible form validation
* sufficient color contrast
* screen-reader compatibility
* alt text for images
* logical heading hierarchy

Website should remain fully usable without a mouse.

---

# Performance Requirements

Optimize for:

* Lighthouse Performance ≥95
* Accessibility ≥95
* Best Practices ≥95
* SEO ≥95

Minimize:

* render-blocking resources
* layout shifts
* unused CSS
* unnecessary JavaScript

Optimize:

* images
* fonts
* animations
* bundle size
* paint performance

---

# SEO Requirements

Include:

* meaningful page title
* meta description
* Open Graph metadata
* Twitter metadata
* canonical URL placeholder
* semantic heading hierarchy
* descriptive link text
* favicon placeholder
* structured content organization

---

# Design System

Establish a consistent design system including:

Typography

* heading scale
* body text scale
* line heights
* font weights

Spacing

* 4px or 8px spacing system
* consistent margins
* responsive padding

Colors

* primary
* secondary
* accent
* neutral palette
* success
* warning
* error

Components

* buttons
* cards
* forms
* navigation
* pricing cards
* badges
* chips
* icons

---

# Animation Guidelines

Use tasteful motion only.

Recommended:

* fade-in
* slide-up
* hover elevation
* button ripple
* staggered card reveals
* smooth menu transitions

Animations should respect:

`prefers-reduced-motion`

---

# JavaScript Requirements

Implement only meaningful interactions.

Examples:

* mobile navigation
* smooth scrolling
* active navigation state
* contact form validation
* success/error messaging
* scroll animations
* CTA interactions

Avoid unnecessary libraries.

---

# Browser Compatibility

Support modern versions of:

* Chrome
* Edge
* Firefox
* Safari

Website should gracefully degrade where advanced features are unavailable.

---

# Code Deliverables

Produce complete production-ready source code including:

* HTML
* CSS
* JavaScript (or framework equivalent)

Ensure all code is fully functional with no placeholders, TODOs, incomplete sections, mock implementations, or broken functionality.

---

# Final Quality Checklist

Before considering the task complete, verify that:

* Every required section is fully implemented.
* The website is fully responsive at **360px**, **768px**, and **1440px**.
* Navigation works correctly across all devices.
* The contact form performs complete client-side validation.
* HTML is semantic and accessible.
* CSS is clean, scalable, and maintainable.
* JavaScript is modular and error-free.
* Typography and spacing are visually consistent.
* Interactive states are polished.
* Accessibility best practices are followed.
* Performance has been optimized.
* SEO fundamentals are implemented.
* The website is visually refined and production-ready.
* The final result resembles a premium digital agency website that could confidently be showcased in a professional portfolio or delivered to a paying client without requiring significant refactoring.

# Elite Performance Optimization & Accessibility Engineering Prompt — Task B

You are operating as a **Principal Frontend Performance Engineer, Senior Accessibility Engineer (WCAG Specialist), Web Performance Consultant, Chrome Lighthouse Expert, Core Web Vitals Specialist, Technical SEO Engineer, UX Performance Analyst, and Production Readiness Auditor**.

Your responsibility is **not merely to improve Lighthouse scores**, but to perform a **systematic, engineering-grade optimization pass** on the website developed in **Task A**, ensuring it meets or exceeds modern production standards.

Treat this task exactly as if the website were about to be deployed to production for a high-traffic SaaS company where performance, accessibility, maintainability, and user experience directly impact business metrics.

---

# Primary Objective

Starting from the completed **NorthPeak Digital** website created in **Task A**, perform a comprehensive optimization, audit, refactoring, and validation process to maximize:

* Performance
* Accessibility
* Core Web Vitals
* UX responsiveness
* SEO fundamentals
* Maintainability
* Production readiness

The optimization should be **real and measurable**, not superficial.

Do **not** artificially inflate Lighthouse scores through unrealistic techniques. Every optimization must represent a legitimate engineering improvement that would be appropriate for a production deployment.

---

# Engineering Mindset

Approach the project as if conducting an enterprise frontend performance review.

Before making changes:

1. Analyze the entire codebase.
2. Identify all performance bottlenecks.
3. Identify all accessibility issues.
4. Detect redundant rendering.
5. Detect layout shifts.
6. Detect expensive JavaScript.
7. Detect unnecessary CSS.
8. Detect oversized assets.
9. Detect semantic HTML issues.
10. Detect SEO deficiencies.
11. Detect maintainability problems.

Only after the complete audit should optimization begin.

---

# Performance Optimization Requirements

Perform comprehensive optimization across every layer of the application.

## HTML Optimization

Improve:

* semantic structure
* DOM simplicity
* heading hierarchy
* unnecessary wrappers
* duplicate elements
* accessibility attributes
* metadata
* lazy loading support
* image semantics

---

## CSS Optimization

Refactor CSS for:

* reduced specificity
* elimination of unused styles
* reusable utility patterns
* optimized selectors
* reduced paint complexity
* responsive efficiency
* scalable architecture

Minimize:

* unused declarations
* duplicate rules
* excessive nesting
* expensive visual effects

Maintain visual fidelity while reducing rendering cost.

---

## JavaScript Optimization

Review every script.

Optimize:

* event listeners
* DOM queries
* rendering performance
* unnecessary reflows
* layout thrashing
* memory usage
* animation performance

Avoid:

* blocking scripts
* duplicate logic
* unnecessary calculations
* excessive DOM manipulation

Defer or asynchronously load non-critical JavaScript where appropriate.

---

## Asset Optimization

Ensure all assets are optimized.

Examples include:

* compressed images
* modern image formats
* responsive images
* SVG optimization
* font optimization
* favicon optimization
* minimized icons

Reduce total transfer size wherever possible.

---

## Font Optimization

Optimize typography loading.

Include:

* preload critical fonts
* font-display: swap
* reduce font variants
* eliminate unused font weights
* avoid layout shifts

---

## Critical Rendering Path

Improve:

* render-blocking CSS
* JavaScript execution order
* initial paint
* critical content visibility
* resource prioritization

Aim for:

* minimal blocking time
* fast First Contentful Paint
* excellent Largest Contentful Paint

---

## Core Web Vitals Optimization

Specifically optimize:

### LCP

Improve:

* hero rendering
* image loading
* critical resources

---

### CLS

Eliminate layout shifts by:

* reserving image dimensions
* stable typography
* predictable spacing
* avoiding late DOM insertion

---

### INP

Reduce interaction latency.

Optimize:

* event handlers
* animations
* JavaScript execution
* rendering efficiency

---

# Accessibility Engineering Requirements

Audit the site against **WCAG 2.1 AA** (or newer best practices where applicable).

Ensure compliance for:

## Semantic HTML

Use proper:

* header
* nav
* main
* section
* article
* footer
* form
* button
* label

Avoid div soup.

---

## Keyboard Accessibility

Verify:

* full keyboard navigation
* visible focus indicators
* logical tab order
* accessible skip links
* menu navigation
* form usability

No interaction should require a mouse.

---

## Screen Reader Compatibility

Ensure:

* descriptive labels
* accessible names
* ARIA only where appropriate
* meaningful landmark regions
* informative button labels
* logical reading order

---

## Color Accessibility

Validate:

* text contrast
* button contrast
* link visibility
* hover contrast
* disabled state visibility

Meet or exceed WCAG AA contrast ratios.

---

## Form Accessibility

Ensure:

* associated labels
* accessible validation
* descriptive error messages
* screen-reader announcements
* keyboard-friendly interactions

---

## Motion Accessibility

Respect:

prefers-reduced-motion

Animations should gracefully reduce or disable where appropriate.

---

# Lighthouse Target Scores

The optimized website **must achieve**:

| Category       | Target     |
| -------------- | ---------- |
| Performance    | **90–100** |
| Accessibility  | **90–100** |
| Best Practices | **95–100** |
| SEO            | **95–100** |

If any category scores below target:

Continue optimizing until improvements are exhausted.

---

# Lighthouse Audit Procedure

Run Lighthouse using production settings.

Audit:

* Mobile
* Desktop (optional but recommended)

Capture **high-resolution screenshots** of the final Lighthouse reports showing:

* Performance
* Accessibility
* Best Practices
* SEO

Screenshots should clearly display:

* overall score
* audit summary
* timestamp (if available)

---

# Optimization Changelog

Create a concise but technically meaningful changelog.

For every optimization include:

## Change

Exactly what was modified.

## Reason

Why the optimization was necessary.

## Benefit

Explain the measurable improvement.

For example:

---

### Optimized hero image loading

**Reason**

Largest Contentful Paint was delayed by a large image.

**Benefit**

Reduced LCP by approximately 400 ms and improved Performance score.

---

### Reduced unused CSS

**Reason**

Large portions of CSS were never applied.

**Benefit**

Reduced stylesheet size, improving render speed and reducing blocking time.

---

### Added semantic landmarks

**Reason**

Improved accessibility and screen-reader navigation.

**Benefit**

Increased Accessibility score while improving keyboard usability.

---

Repeat this format for every significant optimization.

---

# Code Quality Requirements

Ensure the optimized codebase demonstrates:

* modularity
* maintainability
* readability
* scalability
* consistency
* production readiness

Avoid introducing unnecessary complexity solely to increase Lighthouse scores.

---

# Visual Integrity

Optimization must **not** noticeably degrade the visual quality of the website.

Maintain:

* layout
* spacing
* typography
* branding
* animations
* responsiveness
* polish

Performance improvements should be invisible to the user except through faster loading and smoother interaction.

---

# Loom Walkthrough Requirements

Record a professional Loom walkthrough of approximately **3–5 minutes**.

During the recording:

Briefly introduce the project.

Then explain **three implementation details you are most proud of**.

Possible examples:

* responsive layout architecture
* accessibility improvements
* CSS architecture
* performance optimizations
* animation implementation
* semantic HTML
* design system consistency

For each point explain:

* what it is
* why it matters
* how it improves the website

Finally discuss:

## One thing you would do differently

Provide an honest engineering reflection.

Examples:

* migrate to component architecture
* introduce automated testing
* implement image CDN
* add dark mode
* improve animations
* further optimize bundle splitting
* improve maintainability

Explain:

* why you would change it
* expected engineering benefits
* potential future improvements

Speak clearly and professionally, as though presenting the project during a technical interview or client handoff.

---

# Final Deliverables

Produce the following deliverables:

## 1. Lighthouse Reports

Provide high-quality screenshots demonstrating:

* Performance score
* Accessibility score
* Best Practices score
* SEO score

---

## 2. Optimization Changelog

Provide a structured changelog documenting:

* every meaningful optimization
* engineering rationale
* measurable benefit
* impact on Lighthouse or user experience

---

## 3. Loom Walkthrough

Record and provide a Loom video that includes:

* a concise overview of the website
* three implementation details you are most proud of
* one engineering improvement you would make in a future iteration

---

# Final Validation Checklist

Before considering the task complete, verify that:

* The website from **Task A** remains fully functional after optimization.
* Lighthouse **Performance** score is **90 or higher**.
* Lighthouse **Accessibility** score is **90 or higher**.
* Best Practices score is **95 or higher**.
* SEO score is **95 or higher**.
* Core Web Vitals have been meaningfully improved.
* No regressions have been introduced.
* Responsive behavior remains intact at **360px**, **768px**, and **1440px**.
* Accessibility improvements conform to WCAG 2.1 AA wherever practical.
* Code remains clean, modular, and production-ready.
* Lighthouse screenshots clearly document the achieved scores.
* The optimization changelog accurately reflects all engineering work performed.
* The Loom walkthrough communicates the implementation professionally and demonstrates thoughtful engineering decisions and self-review.

The final submission should resemble the work of an experienced frontend performance engineer delivering a production-ready optimization report for a real client or technical assessment.

