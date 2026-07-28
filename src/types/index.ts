export interface AudienceCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  badge: string;
  description: string;
  challenges: string[];
  outcomes: string[];
  gradient: string;
}

export interface TopicItem {
  id: string;
  title: string;
  category: 'emotional' | 'relationships' | 'career' | 'growth';
  description: string;
  iconName: string;
  keyTakeaways: string[];
  popular?: boolean;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  iconName: string;
  estimatedTime: string;
  ctaText?: string;
  ctaAction?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'sessions' | 'complimentary' | 'privacy' | 'emergency';
  isImportant?: boolean;
}

export interface ValuePropItem {
  id: string;
  title: string;
  summary: string;
  whatItIs: string;
  whyItMatters: string;
  userBenefit: string;
  iconName: string;
}

export interface EducationalArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: {
    intro: string;
    sections: { heading: string; body: string; keyPoints?: string[] }[];
    conclusion: string;
    actionableExercise?: string;
  };
  tags: string[];
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  context: string;
  tag: string;
  date: string;
}

export interface SessionBookingFormData {
  fullName: string;
  age: string;
  email: string;
  instagramHandle: string;
  country: string;
  timezone: string;
  preferredLanguage: string;
  selectedTopics: string[];
  situationDescription: string;
  preferredDuration: '30' | '45' | '60';
  preferredTimeSlot: 'morning' | 'afternoon' | 'evening' | 'flexible';
  urgency: 'low' | 'moderate' | 'high';
  consentAcknowledged: boolean;
  emergencyAcknowledged: boolean;
}
