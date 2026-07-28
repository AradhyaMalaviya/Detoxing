# Component Documentation Catalog — DetoxWithBagga

This document details the purpose, props, accessibility features, and responsiveness of every core component in DetoxWithBagga.

---

## 1. `Header.tsx`
- **Purpose**: Sticky navigation bar with backdrop blur, active section highlighting, theme toggle, and mobile menu drawer.
- **Props**: `onOpenBookingModal?: () => void`
- **Accessibility**: ARIA labels on menu toggles, keyboard trap prevention on mobile menu, `Escape` key close listener.
- **Responsiveness**: Collapses desktop nav into an animated hamburger menu on screens `< 1024px`.

---

## 2. `Hero.tsx`
- **Purpose**: First-view section establishing emotional safety, brand trust, complimentary sessions offer, and primary CTAs.
- **Props**: `onOpenBookingModal: () => void`
- **Accessibility**: High contrast text ratios (`#FFFFFF` on `#0B0F17`), semantic `<h1>` tag.
- **Responsiveness**: Multi-column grid on desktop (`lg:grid-cols-12`), single column stacked layout on mobile.

---

## 3. `WhoWeHelp.tsx`
- **Purpose**: Interactive audience cards showcasing common struggles and outcomes for Students, Young Professionals, Relationships, Personal Growth, and Emotional Wellness.
- **Props**: `onOpenBookingModal: () => void`
- **Responsiveness**: Horizontal pill tab selector on mobile, grid layout on desktop.

---

## 4. `ProcessTimeline.tsx`
- **Purpose**: 5-step animated timeline explaining session request, review SLA (&lt;12h), scheduling, conversation, and post-session reflection guide.
- **Props**: `onOpenBookingModal: () => void`
- **Responsiveness**: Alternating left-right desktop nodes, simplified left-aligned vertical timeline on mobile.

---

## 5. `TopicsGrid.tsx`
- **Purpose**: Displays 16 core discussion topics with category tabs, detail preview modal, and direct booking trigger.
- **Props**: `onSelectTopicForBooking: (topicTitle: string) => void`

---

## 6. `BookingSection.tsx`
- **Purpose**: Integrated session request form collecting name, email, age, instagram, country, timezone, language, topics, situation, duration, time slot, urgency, consent, and non-therapy emergency checkboxes.
- **Props**: `initialTopic?: string`, `onSuccessToast?: (msg: string) => void`

---

## 7. `SafetyTransparency.tsx`
- **Purpose**: Non-therapy scope comparison table and international emergency crisis hotline cards.
- **Hotlines**: USA/Canada (988), India (14416 / 9999 666 555), UK (116 123), Befrienders Worldwide.

---

## 8. `EducationalResources.tsx` & `ResourceDetailModal.tsx`
- **Purpose**: Essay hub with filter tags and full modal reader featuring actionable reflection exercises.
