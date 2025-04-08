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
    <html lang="en" className={`${montserrat.variable} ${favorite.variable} dark`} suppressHydrationWarning>
      <head>
     
      </head>
      <body className={`${montserrat.className} relative`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}