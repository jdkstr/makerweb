import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { GrainBanner } from "@/components/site/grain"
import { cn } from "@/lib/utils"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product websites, brand systems, design engineering, and retainers — one Makerweb programme.",
}

export default function Page() {
  return (
    <main id="main-content" className="flex-1 bg-paper">
      <section className="border-b border-ash py-16 min-[800px]:py-24">
        <Container>
          <p className="mb-3 text-xs font-medium text-primary">Services</p>
          <h1 className="max-w-2xl text-[2.35rem] font-medium leading-[1.08] min-[800px]:text-5xl">
            Strategy, interface, and engineering. Not a menu of add-ons.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-stone">
            We do not sell campaigns, print, or social. We make websites and
            the systems around them — the same way a product studio makes
            software.
          </p>
        </Container>
      </section>

      <section className="py-16 min-[800px]:py-24">
        <Container className="space-y-16">
          {site.capabilities.map((item, index) => (
            <article
              key={item.label}
              className="grid gap-8 border-t border-ash pt-10 min-[900px]:grid-cols-[12rem_1fr] min-[900px]:gap-16"
            >
              <p className="text-xs font-medium text-stone">0{index + 1}</p>
              <div>
                <h2 className="text-3xl font-medium">{item.headline}</h2>
                <p className="mt-2 text-sm font-medium text-primary">
                  {item.label}
                </p>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-stone">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <GrainBanner variant="ember" className="border-y border-ash">
        <Container className="flex flex-col items-start justify-between gap-8 py-16 min-[800px]:flex-row min-[800px]:items-center">
          <div>
            <h2 className="text-3xl font-medium min-[800px]:text-4xl">
              See how a programme runs.
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-ink/80">
              Monday kickoff. Friday something real. Eight weeks to a site the
              team can keep.
            </p>
          </div>
          <Link
            href="/process"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-maker-dark hover:underline"
          >
            Process
            <ArrowRight className="size-3.5" />
          </Link>
        </Container>
      </GrainBanner>

      <section className="py-16 min-[800px]:py-20">
        <Container className="flex flex-col items-start justify-between gap-8 min-[800px]:flex-row min-[800px]:items-center">
          <p className="max-w-xl text-[15px] leading-7 text-stone">
            Typical programmes run eight weeks. Retainers start after launch.
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "maker", size: "lg" }),
              "h-10 rounded-sm px-5 text-sm"
            )}
          >
            Start a project
          </Link>
        </Container>
      </section>
    </main>
  )
}
