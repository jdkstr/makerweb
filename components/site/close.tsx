import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { cn } from "@/lib/utils"
import { site } from "@/content/site"

export function CloseBanner() {
  return (
    <section className="relative overflow-hidden border-t border-white/8">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <Container className="relative py-24 text-center min-[800px]:py-32">
        <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] tracking-[0.16em] text-white/60 uppercase">
          Work with us
        </p>
        <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-semibold tracking-tight min-[800px]:text-6xl">
          {site.close.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-white/55">
          {site.contact.text}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={site.close.cta.href}
            className={cn(
              buttonVariants({ variant: "maker", size: "lg" }),
              "h-12 px-7 text-sm"
            )}
          >
            {site.close.cta.label}
          </Link>
          <Link
            href="/process"
            className={cn(
              buttonVariants({ variant: "makerGhost", size: "lg" }),
              "h-12 px-7 text-sm"
            )}
          >
            See the process
          </Link>
        </div>
      </Container>
    </section>
  )
}
