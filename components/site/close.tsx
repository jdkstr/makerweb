import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { GrainBanner } from "@/components/site/grain"
import { cn } from "@/lib/utils"
import { site } from "@/content/site"

export function CloseBanner() {
  return (
    <GrainBanner variant="flame">
      <Container className="flex flex-col items-start justify-between gap-8 py-20 min-[800px]:flex-row min-[800px]:items-center min-[800px]:py-24">
        <h2 className="text-4xl font-semibold min-[800px]:text-6xl">
          {site.close.headline}
        </h2>
        <Link
          href={site.close.cta.href}
          className={cn(
            buttonVariants({ variant: "makerWhite", size: "lg" }),
            "h-14 px-8 text-base"
          )}
        >
          {site.close.cta.label}
        </Link>
      </Container>
    </GrainBanner>
  )
}
