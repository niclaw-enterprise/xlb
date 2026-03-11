import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://xlb.hk'),
  title: 'XLB — 老板不在',
  description: 'A dim sum counter in Sham Shui Po, Kowloon. The merch precedes the place. Drop 001 — invite only.',
  keywords: ['XLB', '小籠包', '老板不在', 'dim sum', 'Sham Shui Po', 'Hong Kong', 'restaurant', 'workwear'],
  openGraph: {
    title: 'XLB — 老板不在',
    description: 'A restaurant that does not exist yet. Drop 001. Invite only.',
    url: 'https://xlb.hk',
    siteName: 'XLB',
    locale: 'zh_HK',
    type: 'website',
    images: ['/opengraph-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XLB — 老板不在',
    description: 'A restaurant that does not exist yet. Drop 001. Invite only.',
    images: ['/opengraph-image.png'],
  },
  other: {
    'theme-color': '#0A0A0A',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  )
}
