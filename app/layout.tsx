import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SeoProvider from "./components/providers/SeoProvider"

export const metadata: Metadata = {
  title: "Studio Regenade",
  description: "Site portfolio de Studio Regenade",
  icons: {
    icon: "/images/favicon.png",
  },
}

const inter = Inter({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased p-3 ${inter.className} text-[#f1f1f1] bg-black`}
      >
        <SeoProvider />
        {children}
      </body>
    </html>
  )
}
