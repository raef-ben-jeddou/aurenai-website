import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

// Primary UI Font
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Display Font for Headings
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

// Required for mobile responsiveness and PWA features
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#091210', // Matches your dark dashboard section
};

export const metadata: Metadata = {
  metadataBase: new URL('https://aurenai.tech'),
  title: 'AurenAI | Industrial Energy Optimization',
  description: 'Powering smarter sustainable futures through AI-driven load shifting and solar forecasting.',
  keywords: ['Industrial AI', 'Energy Optimization', 'Load Shifting', 'Solar Forecasting', 'Smart Grid'],
  authors: [{ name: 'AurenAI Team' }],
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aurenai.tech',
    title: 'AurenAI | Industrial Energy Optimization',
    description: 'Powering smarter sustainable futures through AI-driven load shifting and solar forecasting.',
    siteName: 'AurenAI',
    images: [
      {
        url: '/og-image.jpeg', // MUST create this in /public
        width: 1200,
        height: 630,
        alt: 'AurenAI Architecture Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AurenAI | Industrial Energy Optimization',
    description: 'Powering smarter sustainable futures through AI-driven load shifting and solar forecasting.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen font-sans bg-background text-foreground flex flex-col">
        {children}
      </body>
    </html>
  );
}