import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Aethersaga AI - Machine Learning Research Group",
  description:
    "Aethersaga AI is a cutting-edge machine learning research group pushing the boundaries of artificial intelligence through innovative research and real-world applications.",
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.variable} font-sans relative`}>
        <Navigation />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
