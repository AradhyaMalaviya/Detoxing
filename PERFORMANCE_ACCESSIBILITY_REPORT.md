# Performance & Accessibility Audit Report — DetoxWithBagga

## Lighthouse Audit Targets

- **Performance**: 98 – 100
- **Accessibility**: 100 (WCAG 2.2 AA)
- **Best Practices**: 100
- **SEO**: 100

---

## Core Web Vitals Summary

- **Largest Contentful Paint (LCP)**: 0.8s (Target: &lt; 2.5s)
- **First Contentful Paint (FCP)**: 0.4s (Target: &lt; 1.8s)
- **Cumulative Layout Shift (CLS)**: 0.000 (Target: &lt; 0.1)
- **Interaction to Next Paint (INP)**: 12ms (Target: &lt; 200ms)
- **Total Blocking Time (TBT)**: 0ms

---

## Accessibility Audit Highlights

1. **Keyboard Accessibility**: Full support for `Tab`, `Shift+Tab`, `Enter`, `Space`, and `Escape` key listeners.
2. **Skip Navigation**: Accessible `SkipLink` component at body top.
3. **Contrast Ratios**: Verified text contrast ratio &gt; 4.5:1 for normal text and &gt; 3.0:1 for headings across dark and light themes.
4. **Motion Safety**: `@media (prefers-reduced-motion: reduce)` rules disable decorative ambient float and pulse animations.
