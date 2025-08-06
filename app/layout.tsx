import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Studio Regenade",
  description: "Portfolio créatif de Studio Regenade, présentant nos projets.",
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.studio-regenade.com",
    siteName: "Studio Regenade",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio Studio Regenade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Regenade",
    description: "Portfolio créatif de Studio Regenade",
    images: ["/images/og-image.jpg"],
  },
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body
        className={`antialiased p-3 ${inter.className} text-[#f1f1f1] bg-black`}
      >
        {children}
      </body>
    </html>
  )
}
