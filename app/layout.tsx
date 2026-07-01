import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://vmdeshpande.github.io/ai-automation-platform-website",
  ),

  title: {
    default: "AI Agent Automation — Open Source AI Workflow Engine",
    template: "%s | AI Agent Automation",
  },

  description:
    "Open-source AI workflow automation platform for building deterministic agent pipelines. Self-hosted alternative to Zapier and n8n with full execution control.",

  keywords: [
    "AI agent automation",
    "AI workflow engine",
    "open source AI automation",
    "LLM workflow automation",
    "AI orchestration engine",
    "self hosted AI agents",
    "AI automation platform",
    "n8n alternative",
    "Zapier alternative",
  ],

  authors: [
    {
      name: "Vedant Deshpande",
      url: "https://vmdeshpande.github.io/portfolio1/",
    },
  ],

  openGraph: {
    title: "AI Agent Automation",
    description:
      "Open-source AI workflow automation platform for building deterministic agent pipelines.",
    url: "https://vmdeshpande.github.io/ai-automation-platform-website",
    siteName: "AI Agent Automation",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Agent Automation Platform",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Agent Automation",
    description: "Build deterministic AI automation workflows with agents.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/icon/icon.svg",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="google-site-verification"
          content="-wkCYo6UzkduIQt-q3n1NoMl7lwYrmWVWAutHElyr6A"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TechArticle",
              name: "AI Agent Automation",
              description:
                "Open-source AI workflow automation engine for building deterministic agent pipelines.",
              url: "https://vmdeshpande.github.io/ai-automation-platform-website",
              codeRepository:
                "https://github.com/vmDeshpande/ai-agent-automation",
              programmingLanguage: "JavaScript",
              creator: {
                "@type": "Person",
                name: "Vedant Deshpande",
                url: "https://vmdeshpande.github.io/portfolio1/",
              },
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
