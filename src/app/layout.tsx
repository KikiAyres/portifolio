import type { Metadata, Viewport } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | CrissaDev",
    default: "CrissaDev",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={montserrat.className} lang="pt">
      <body className="bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  )
}
