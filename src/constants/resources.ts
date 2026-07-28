import { EducationalArticle } from '@/types';

export const EDUCATIONAL_ARTICLES: EducationalArticle[] = [
  {
    id: 'res-1',
    title: 'The Anatomy of Late-Night Overthinking (And How to Soften It)',
    slug: 'anatomy-of-late-night-overthinking',
    category: 'Overthinking & Mindset',
    readTime: '5 min read',
    date: 'July 2026',
    excerpt: 'Why does our brain replay awkward conversations or worry about the future at 2 AM? Discover cognitive grounding techniques to quiet midnight mental loops.',
    featured: true,
    tags: ['Overthinking', 'Sleep Quality', 'Mindset', 'Self-Care'],
    content: {
      intro: 'Have you ever noticed how a minor problem at 2 PM transforms into an insurmountable crisis at 2 AM? Late-night overthinking is not a character flaw—it is a physiological reaction when external stimuli drop and your brain enters hyper-vigilance.',
      sections: [
        {
          heading: '1. Why Late-Night Brains Spiral',
          body: 'During the day, work, social interactions, and ambient noises consume your working memory. When you lay in bed in silence, your prefrontal cortex relaxes while your amygdala remains alert, scanning for unresolved tension.',
          keyPoints: [
            'Brain shifts from external focus to internal threat scanning.',
            'Melatonin drops can paradoxically trigger emotional intensity in tired minds.',
            'Lack of perspective makes small issues feel monumental.'
          ]
        },
        {
          heading: '2. The "Brain Dump & Parking Lot" Technique',
          body: 'Keep a notebook next to your bed. When a persistent thought arises, write it down verbatim. Name the concern, write "Parked until 9:00 AM tomorrow", and physically close the notebook. This communicates to your brain that the thought has been logged safely.'
        },
        {
          heading: '3. Somatosensory Re-anchoring',
          body: 'Instead of fighting the thought with more logic (which keeps your brain active), shift focus to your physical senses. Try the 4-7-8 breathing cadence or count 5 things touching your skin.'
        }
      ],
      conclusion: 'Overthinking is just energy looking for a place to land. Giving it a temporary home on paper frees your mind to rest.',
      actionableExercise: 'Try the 3-Step Night Reset: Write down 1 thing you are holding onto, 1 thing you are grateful for, and 1 action you will take tomorrow morning.'
    }
  },
  {
    id: 'res-2',
    title: 'How to Set Boundaries Without Feeling Like a Bad Person',
    slug: 'set-boundaries-without-guilt',
    category: 'Relationships & Boundaries',
    readTime: '6 min read',
    date: 'July 2026',
    excerpt: 'Setting boundaries often triggers intense guilt for chronic people-pleasers. Learn how to say no with compassion, clarity, and zero over-explaining.',
    featured: true,
    tags: ['Boundaries', 'Communication', 'People Pleasing', 'Self-Worth'],
    content: {
      intro: 'Many people confuse setting boundaries with being mean, cold, or selfish. In reality, a boundary is not a wall to keep people out—it is a bridge that defines where you end and another person begins.',
      sections: [
        {
          heading: '1. The People-Pleasing Trap',
          body: 'When you say "yes" to others at the expense of your own peace, you build quiet resentment. Resentment erodes relationships far faster than a polite "no" ever will.',
          keyPoints: [
            'A boundary is about your response, not controlling other people.',
            'Over-explaining weakens your boundary and invites negotiation.',
            'Guilt is a temporary emotion; burnout is a lasting consequence.'
          ]
        },
        {
          heading: '2. The Power of Brief Scripts',
          body: 'Instead of fabricating long excuses, use simple, grounded phrases: "I don\'t have the capacity for this right now, but thank you for thinking of me" or "I need to check my energy before committing."'
        }
      ],
      conclusion: 'The people who truly care about your well-being will respect your boundaries. The ones who get angry are usually the ones who benefited from you having none.',
      actionableExercise: 'Practice saying "Let me get back to you on that" to give yourself a 10-minute pause before automatically agreeing to requests.'
    }
  },
  {
    id: 'res-3',
    title: 'Imposter Syndrome: Why High Achievers Feel Like Frauds',
    slug: 'imposter-syndrome-high-achievers',
    category: 'Career & Self-Worth',
    readTime: '7 min read',
    date: 'June 2026',
    excerpt: 'Unpack the psychological mechanics of imposter syndrome and learn how to internalize your genuine achievements instead of attributing them to luck.',
    featured: false,
    tags: ['Imposter Syndrome', 'Career Growth', 'Self-Confidence', 'Mindset'],
    content: {
      intro: 'Imposter syndrome rarely affects people who don\'t care about their work. It almost exclusively targets conscientious, hard-working individuals who set impossibly high standards for themselves.',
      sections: [
        {
          heading: '1. Distinguishing Capability from Feeling',
          body: 'Feeling unqualified does not mean you ARE unqualified. Emotions are valid experiences, but they are not always accurate objective facts.',
          keyPoints: [
            'Attribute success to effort and skill rather than pure luck.',
            'Keep an "Evidence Folder" of positive feedback and completed challenges.',
            'Normalize not knowing everything—growth requires being a beginner.'
          ]
        }
      ],
      conclusion: 'You do not need to feel 100% confident to be 100% competent. Action leads to confidence, not the other way around.',
      actionableExercise: 'Build an "Evidence Log": Write 3 concrete technical or personal challenges you solved in the past 6 months.'
    }
  },
  {
    id: 'res-4',
    title: 'Emotional Exhaustion & Burnout: Rebuilding Your Reserves',
    slug: 'rebuilding-from-emotional-burnout',
    category: 'Emotional Wellness',
    readTime: '5 min read',
    date: 'June 2026',
    excerpt: 'Recognize the early warning signs of emotional depletion and discover restorative practices that go beyond superficial self-care spa days.',
    featured: false,
    tags: ['Burnout', 'Mental Health', 'Restoration', 'Self-Care'],
    content: {
      intro: 'True rest is not just sleeping 8 hours—it involves mental, sensory, emotional, and creative rejuvenation.',
      sections: [
        {
          heading: '1. The 7 Types of Rest',
          body: 'If you are emotionally drained, physical sleep alone will not cure your fatigue. You need emotional rest (freedom from pleasing others) and sensory rest (time away from screens).',
          keyPoints: [
            'Physical, Mental, Emotional, Sensory, Creative, Social, and Spiritual Rest.',
            'Identify which energy bucket is empty before choosing your recovery method.'
          ]
        }
      ],
      conclusion: 'Rest is not a reward for completing your work; it is a fundamental requirement for functioning.',
      actionableExercise: 'Conduct a 5-minute Energy Audit: Identify the top 2 activities that drained you today and 1 activity that restored you.'
    }
  }
];
