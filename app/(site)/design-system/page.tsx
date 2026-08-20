import type { Metadata } from "next"

import { DesignSystemPage } from "@/components/site/design-system"

export const metadata: Metadata = {
  title: "Design system",
  description:
    "Void, flame, Instrument Sans, and zero radius — sampled from makerweb.framer.website.",
}

export default function Page() {
  return <DesignSystemPage />
}
