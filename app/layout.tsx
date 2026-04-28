import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "next-themes"
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-[68px]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}