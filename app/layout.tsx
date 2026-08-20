import type { Metadata, Viewport } from "next"
import { Fragment_Mono, Instrument_Sans } from "next/font/google"

import "./globals.css"

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
})

const fragment = Fragment_Mono({
  variable: "--font-fragment",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Makerweb — Web agency for Makers",
    template: "%s | Makerweb",
  },
  description:
    "Makerweb is a hybrid web design agency modernizing web solutions for makers and manufacturers with three core principles: simplicity, versatility & effectiveness.",
}

export const viewport: Viewport = {
  themeColor: "#141413",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${instrument.variable} ${fragment.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-void font-sans text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
