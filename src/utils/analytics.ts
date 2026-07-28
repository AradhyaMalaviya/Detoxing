/**
 * Analytics Utility Module — DetoxWithBagga
 * Provides privacy-first event tracking and conversion analytics hooks.
 */

export interface AnalyticsEvent {
  action: string;
  category: 'booking' | 'navigation' | 'resource' | 'newsletter' | 'modal';
  label?: string;
  value?: number;
}

export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
  // Console logging in development mode
  if (process.env.NODE_NODE_ENV !== 'production') {
    // console.log(`[Analytics Event] ${category} -> ${action}:`, label);
  }
};
