import type { Metadata } from "next"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { LogoMarquee } from "@/components/site/logo-marquee"
import { PageHero } from "@/components/site/page-hero"
import { cn } from "@/lib/utils"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "Work",
  description: "Inspired by global makers.",
}

export default function Page() {
  return (
    <main id="main-content" className="flex-1 bg-void">
      <PageHero
        kicker={site.trust.kicker}
        title="See our work"
        text="Websites, brands, apps and automation for makers and manufacturers — built to convert, then iterated."
      />
      <LogoMarquee />
      <section className="py-16 min-[800px]:py-24">
        <Container className="text-center">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "maker", size: "lg" }),
              "h-12 px-7"
            )}
          >
            Contact us
          </Link>
        </Container>
      </section>
    </main>
  )
}
