import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import Navbar from "./components/Navbar"
import "./globals.css"

export const metadata: Metadata = {
  title: "Zenira",
  description: "Your shop, found.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="pt-[68px]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}