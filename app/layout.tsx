import type { Metadata } from "next"
import "./globals.css"
import ThemeWrapper from "./components/ThemeWrapper"
import Navbar from "./components/Navbar"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zenira.studio"),
  title: "Zenira — Your Shop, Found.",
  description:
    "We build your online presence so customers find you first, not your competitor. Websites, Google listings, SEO — done for you. Made in Kenya.",
  keywords: [
    "website design Kenya",
    "online presence Kenya",
    "Google Business Profile Kenya",
    "shop website Nairobi",
    "SEO Kenya",
    "e-commerce Kenya",
    "M-Pesa website",
  ],
  openGraph: {
    title: "Zenira — Your Shop, Found.",
    description:
      "We build your online presence so customers find you first, not your competitor. Websites, Google listings, SEO — done for you. Made in Kenya.",
    url: "https://www.zenira.studio",
    siteName: "Zenira",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zenira — Your Shop, Found.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenira — Your Shop, Found.",
    description:
      "We build your online presence so customers find you first, not your competitor. Made in Kenya.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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