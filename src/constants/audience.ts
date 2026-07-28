import { AudienceCategory } from '@/types';

export const AUDIENCE_CATEGORIES: AudienceCategory[] = [
  {
    id: 'students',
    title: 'Students & Learners',
    subtitle: 'Navigating academic pressure & future anxiety',
    iconName: 'GraduationCap',
    badge: 'Academic & Career',
    description: 'Designed for students grappling with intense exam stress, career uncertainty, performance anxiety, and feeling overwhelmed by expectations.',
    challenges: [
      'Exam stress & performance pressure',
      'Uncertainty about career choices',
      'Burnout from constant studying',
      'Feeling isolated or misunderstood by peers',
      'Procrastination and fear of failure'
    ],
    outcomes: [
      'Clear, actionable study-life boundaries',
      'Reduced anxiety around exams & outcomes',
      'Restored confidence in personal ability',
      'Empathetic space to express fears safely'
    ],
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent'
  },
  {
    id: 'professionals',
    title: 'Young Professionals',
    subtitle: 'Managing workplace stress & imposter syndrome',
    iconName: 'Briefcase',
    badge: 'Career & Life',
    description: 'For early and mid-career professionals navigating workplace politics, career stagnation, decision fatigue, and maintaining work-life harmony.',
    challenges: [
      'Workplace stress & chronic burnout',
      'Imposter syndrome & self-doubt',
      'Career direction & transition confusion',
      'Difficulty setting boundaries with managers',
      'Work-life balance breakdown'
    ],
    outcomes: [
      'Strategies for assertive communication',
      'Constructive framework for burnout recovery',
      'Validation of professional self-worth',
      'Clearer perspective on career goals'
    ],
    gradient: 'from-teal-500/20 via-cyan-500/10 to-transparent'
  },
  {
    id: 'relationships',
    title: 'Relationships & Connections',
    subtitle: 'Building healthy communication & understanding',
    iconName: 'HeartHandshake',
    badge: 'Interpersonal',
    description: 'For individuals seeking clarity on romantic relationships, friendships, family dynamics, breakups, attachment patterns, and boundary setting.',
    challenges: [
      'Communication breakdown & recurring conflicts',
      'Navigating painful breakups or detachment',
      'Anxious or avoidant attachment stress',
      'Difficulty expressing true feelings',
      'Setting healthy boundaries with family/partners'
    ],
    outcomes: [
      'Deeper understanding of emotional needs',
      'Tools for calm, constructive dialogue',
      'Peace of mind through healthy detachment',
      'Clarity on personal boundary enforcement'
    ],
    gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent'
  },
  {
    id: 'growth',
    title: 'Personal Growth Seekers',
    subtitle: 'Fostering self-awareness & internal confidence',
    iconName: 'Sparkles',
    badge: 'Self Discovery',
    description: 'For individuals dedicated to self-improvement, discovering their personal values, conquering self-sabotage, and building lasting confidence.',
    challenges: [
      'Persistent self-doubt & harsh inner critic',
      'Lack of direction or life purpose',
      'Difficulty making meaningful life decisions',
      'People-pleasing behaviors',
      'Struggling with self-acceptance'
    ],
    outcomes: [
      'Grounded sense of self-worth',
      'Actionable self-reflection practices',
      'Freedom from external validation traps',
      'Clarity on personal vision and values'
    ],
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent'
  },
  {
    id: 'wellness',
    title: 'Emotional Overwhelm',
    subtitle: 'Calming overthinking & mental exhaustion',
    iconName: 'Brain',
    badge: 'Mental Clarity',
    description: 'For anyone feeling weighed down by incessant overthinking, emotional fatigue, daily stress, and a mind that refuses to quiet down.',
    challenges: [
      'Late-night overthinking loops',
      'Emotional exhaustion & numbness',
      'Decision fatigue & feeling stuck',
      'High sensitivity to external stress',
      'Difficulty untangling complex emotions'
    ],
    outcomes: [
      'Mental decompression and calmness',
      'Practical grounding techniques',
      'Structured process to organize thoughts',
      'Reassurance that you are not alone'
    ],
    gradient: 'from-blue-500/20 via-emerald-500/10 to-transparent'
  }
];
