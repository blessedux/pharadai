import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { montserrat, favorite } from './fonts'

export const metadata = {
  title: "Pharad.AI - AI Solutions & Automation",
  description: "Transforming businesses through automation, AI agents, and custom end-to-end solutions",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${favorite.variable}`}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://websites.godaddy.com" />
        
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="https://websites.godaddy.com/categories/v4/videos/raw/video/uA41GmyyG8IMaxXdb"
          as="video"
          type="video/mp4"
        />
      </head>
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}