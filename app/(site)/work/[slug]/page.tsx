import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { GrainBanner } from "@/components/site/grain"
import { WorkArt } from "@/components/site/work-card"
import { cn } from "@/lib/utils"
import { site } from "@/content/site"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return site.work.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const work = site.work.find((item) => item.slug === slug)
  if (!work) return {}
  return { title: work.client, description: work.summary }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const work = site.work.find((item) => item.slug === slug)
  if (!work) notFound()

  return (
    <main id="main-content" className="flex-1 bg-paper">
      <section className="border-b border-ash py-16 min-[800px]:py-24">
        <Container className="grid gap-12 min-[900px]:grid-cols-2 min-[900px]:items-end">
          <div>
            <p className="mb-3 text-xs font-medium text-primary">{work.kicker}</p>
            <h1 className="max-w-xl text-[2.35rem] font-medium leading-[1.08] min-[800px]:text-5xl">
              {work.title}
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-stone">
              {work.summary}
            </p>
          </div>
          <p className="text-sm text-stone">
            {work.client} · {work.year}
            <span className="mt-1 block">{work.services.join(" · ")}</span>
          </p>
        </Container>
      </section>

      <section className="border-b border-ash">
        <Container className="py-10">
          <WorkArt work={work} className="aspect-[21/10]" />
        </Container>
      </section>

      <section className="border-b border-ash py-16 min-[800px]:py-24">
        <Container>
          <ul className="grid gap-8 min-[800px]:grid-cols-3">
            {work.metrics.map((metric) => (
              <li key={metric.label} className="border-t border-ash pt-5">
                <p className="text-3xl font-medium">{metric.value}</p>
                <p className="mt-2 text-sm text-stone">{metric.label}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 min-[800px]:py-24">
        <Container className="grid gap-12 min-[900px]:grid-cols-2">
          <div>
            <h2 className="text-3xl font-medium">The brief</h2>
            <p className="mt-4 text-[15px] leading-7 text-stone">
              {work.client} came to Makerweb because the website could not keep
              pace with the product. Campaigns lagged releases. Tokens lived in
              a deck. The public story and the interface had drifted apart.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-medium">What we shipped</h2>
            <p className="mt-4 text-[15px] leading-7 text-stone">
              A narrative, a component library, and a content model the team
              still uses. {work.services.join(", ")} on one programme — then a
              retainer so new pages land with the product, not six weeks later.
            </p>
          </div>
        </Container>
      </section>

      <GrainBanner variant="dusk">
        <Container className="flex flex-col items-start justify-between gap-8 py-16 min-[800px]:flex-row min-[800px]:items-center">
          <div>
            <h2 className="text-3xl font-medium min-[800px]:text-4xl">
              Start a programme like this.
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-paper/80">
              A new site, a system, or a studio on retainer.
            </p>
          </div>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "maker", size: "lg" }),
              "h-10 shrink-0 rounded-sm px-5 text-sm"
            )}
          >
            Book a conversation
          </Link>
        </Container>
      </GrainBanner>
    </main>
  )
}
