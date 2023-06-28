import './globals.css'
import { Fredoka } from 'next/font/google'

const fredoka = Fredoka({ subsets: ['latin'] })

export const metadata = {
  title: '🎂 Happy 52th Birthday Elon Musk',
  description: '🎂🚀 (June 28) #52thElon -  You are an incredible person and a great gift to humanity. 💙🫶',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fredoka.className}>{children}</body>
    </html>
  )
}
