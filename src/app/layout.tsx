import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matthew via Music',
  description: 'Discography',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <link rel='shortcut icon' href='https://easycss.github.io/favicon/favicon.png' type='image/x-icon' />
    </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
