import type { Metadata } from "next"
import "./globals.css"
import ThemeWrapper from "./components/ThemeWrapper"
import Navbar from "./components/Navbar"

export const metadata: Metadata = {
  title: "Zenira — Your Shop, Found.",
  description: "We build your online presence so customers find you first, not your competitor.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeWrapper>
          <Navbar />
          <main className="pt-[68px]">
            {children}
          </main>
        </ThemeWrapper>
      </body>
    </html>
  )
}