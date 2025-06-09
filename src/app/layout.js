import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Keran Sanjay B S - Developer Portfolio',
  description: 'Computer and Communication Engineering graduate specializing in Java development, cybersecurity, and innovative web technologies.',
  keywords: 'Keran Sanjay, Java Developer, Cybersecurity, Web Development, Machine Learning, Flutter',
  authors: [{ name: 'Keran Sanjay B S' }],
  openGraph: {
    title: 'Keran Sanjay B S - Developer Portfolio',
    description: 'Computer and Communication Engineering graduate specializing in Java development, cybersecurity, and innovative web technologies.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}