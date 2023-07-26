import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './(components)/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | David Petre',
  description: 'Written by David Petre, 2023.',
}

export default function RootLayout({ children }) {
  return (
  <>
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  </>
  )
}