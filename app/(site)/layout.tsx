import type { ReactNode } from "react"

import { SiteFooter } from "@/components/site/footer"
import { SiteHeader } from "@/components/site/header"

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-paper">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}
