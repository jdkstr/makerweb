import type { Metadata } from "next"

import { DesignSystemPage } from "@/components/site/design-system"

export const metadata: Metadata = {
  title: "Design system",
  description:
    "Tokens, type, texture, and components for Makerweb: paper canvas, Geist Sans, maker orange, grain on banners.",
}

export default function Page() {
  return <DesignSystemPage />
}
