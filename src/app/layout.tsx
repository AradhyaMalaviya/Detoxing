import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { BRAND } from '@/constants/brand';
import { FAQ_ITEMS } from '@/constants/faq';
import { SkipLink } from '@/components/ui/SkipLink';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0b0f17',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: 'DetoxWithBagga — A Safe Space To Be Heard | Emotional Wellness & Self-Growth',
    template: '%s | DetoxWithBagga',
  },
  description:
    'Detox your mind & reclaim your peace. Honest, judgment-free 1-on-1 conversations for overthinking, stress, relationship challenges, and personal growth. First 2 sessions complimentary.',
  keywords: [
    'DetoxWithBagga',
    'emotional wellness',
    'overthinking support',
    'mental clarity',
    'self growth mentor',
    'safe space to be heard',
    'relationship clarity',
    'imposter syndrome guidance',
    'burnout recovery',
    'complimentary emotional support'
  ],
  authors: [{ name: 'Bagga', url: 'https://www.instagram.com/detoxwithbagga/' }],
  creator: 'DetoxWithBagga',
  publisher: 'DetoxWithBagga',
  metadataBase: new URL('https://detoxwithbagga.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DetoxWithBagga — A Safe Space To Be Heard',
    description:
      'Honest, judgment-free 1-on-1 conversations to help you navigate life\'s emotional challenges. Request your first two complimentary sessions.',
    url: 'https://detoxwithbagga.com',
    siteName: 'DetoxWithBagga',
    images: [
      {
        url: '/30590.jpg',
        width: 1200,
        height: 630,
        alt: 'DetoxWithBagga Emotional Wellness Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DetoxWithBagga — A Safe Space To Be Heard',
    description:
      'Detox your mind. Reclaim your peace. 1-on-1 supportive conversations to calm overthinking and regain emotional clarity.',
    images: ['/30590.jpg'],
    creator: '@detoxwithbagga',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: BRAND.name,
    url: 'https://detoxwithbagga.com',
    logo: 'https://detoxwithbagga.com/30590.jpg',
    sameAs: [BRAND.instagramUrl],
    description: BRAND.subtitle,
    contactPoint: {
      '@type': 'ContactPoint',
      email: BRAND.email,
      contactType: 'customer support',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-full flex flex-col bg-[#0b0f17] text-slate-100 selection:bg-emerald-500 selection:text-white">
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
