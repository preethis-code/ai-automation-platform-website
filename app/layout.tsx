import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "AI Automation Platform | Local-First Workflow Automation",
  description:
    "Privacy-focused, local-first AI automation platform. Build powerful workflows with AI agents, document chat, and full execution control.",
  icons: {
    icon: "icon/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AI Agent Automation",
              "url": "https://vmdeshpande.github.io/ai-automation-platform-website/",
              "applicationCategory": "DeveloperTool",
              "creator": {
                "@type": "Person",
                "name": "Vedant Deshpande",
                "url": "https://vmdeshpande.github.io/portfolio1/"
              }
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
