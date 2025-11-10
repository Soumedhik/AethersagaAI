import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google"
import "./globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
})

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-serif",
})

export const metadata: Metadata = {
  title: "Aethersaga AI - Machine Learning Research Group",
  description:
    "Aethersaga AI is a cutting-edge machine learning research group pushing the boundaries of artificial intelligence through innovative research and real-world applications."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${ibmPlexSans.variable} ${ibmPlexSerif.variable} font-sans relative`}>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
