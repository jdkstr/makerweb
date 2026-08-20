import type { Metadata } from "next"

import { DesignSystemPage } from "@/components/site/design-system"

export const metadata: Metadata = {
  title: "Design system",
  description:
    "Void, flame, and Instrument Sans on an Attio-style SaaS canvas.",
}

export default function Page() {
  return <DesignSystemPage />
}
