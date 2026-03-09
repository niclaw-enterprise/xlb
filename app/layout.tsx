import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'XLB — 小籠包',
  description: 'The merch of a restaurant that doesn\'t exist. Drop 001. Invite only.',
  openGraph: {
    title: 'XLB — 小籠包',
    description: 'The merch of a restaurant that doesn\'t exist.',
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
