import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getSiteName, getBaseUrl } from '@/lib/seo'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: `${getSiteName()} — 24/7 Emergency Home Services`,
    template: `%s | ${getSiteName()}`,
  },
  description:
    'Find trusted emergency electricians, plumbers, HVAC technicians, locksmiths and more. 24/7 rapid response for urgent home service needs across the United States.',
  keywords: ['emergency home services', '24/7 electrician', 'emergency plumber', 'emergency locksmith', 'HVAC repair', 'home repair near me'],
  authors: [{ name: getSiteName() }],
  creator: getSiteName(),
  publisher: getSiteName(),
  openGraph: {
    type: 'website',
    siteName: getSiteName(),
    locale: 'en_US',
    title: `${getSiteName()} — 24/7 Emergency Home Services`,
    description: 'Find trusted emergency electricians, plumbers, HVAC technicians, locksmiths and more. 24/7 rapid response across the United States.',
    url: getBaseUrl(),
    images: [
      {
        url: '/images/og-electrician.jpg',
        width: 1200,
        height: 630,
        alt: '24/7 Emergency Home Services — FastServ US',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${getSiteName()} — 24/7 Emergency Home Services`,
    description: 'Find trusted emergency electricians, plumbers, HVAC technicians, locksmiths and more. 24/7 rapid response across the United States.',
    images: ['/images/og-electrician.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
