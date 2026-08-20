import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { GrainBanner } from "@/components/site/grain"
import { ProductCanvas } from "@/components/site/product-canvas"
import { WorkCard } from "@/components/site/work-card"
import { cn } from "@/lib/utils"
import { site } from "@/content/site"

export function HomePage() {
  const {
    hero,
    trust,
    manifesto,
    capabilities,
    process,
    work,
    quotes,
    partners,
    banner,
    journal,
    close,
  } = site

  return (
    <main id="main-content" className="flex-1 bg-paper">
      <section className="border-b border-ash py-16 min-[800px]:py-24">
        <Container className="grid items-center gap-12 min-[900px]:grid-cols-2 min-[900px]:gap-16">
          <div>
            <p className="mb-4 text-xs font-medium text-primary">{hero.kicker}</p>
            <h1 className="max-w-xl text-[2.35rem] font-medium leading-[1.08] min-[800px]:text-5xl min-[1200px]:text-[3.35rem]">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-stone min-[800px]:text-base">
              {hero.text}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={hero.primary.href}
                className={cn(
                  buttonVariants({ variant: "maker", size: "lg" }),
                  "h-10 rounded-sm px-5 text-sm"
                )}
              >
                {hero.primary.label}
              </Link>
              <Link
                href={hero.secondary.href}
                className={cn(
                  buttonVariants({ variant: "makerOutline", size: "lg" }),
                  "h-10 rounded-sm px-5 text-sm"
                )}
              >
                {hero.secondary.label}
              </Link>
            </div>
          </div>
          <ProductCanvas />
        </Container>
      </section>

      <section className="border-b border-ash py-8">
        <Container>
          <p className="mb-4 text-xs font-medium text-stone">{trust.kicker}</p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-ink">
            {trust.names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-ash py-20 min-[800px]:py-28">
        <Container className="grid gap-12 min-[900px]:grid-cols-[1.1fr_0.9fr] min-[900px]:gap-20">
          <div>
            <p className="mb-3 text-xs font-medium text-primary">
              {manifesto.kicker}
            </p>
            <h2 className="max-w-xl text-3xl font-medium min-[800px]:text-4xl">
              {manifesto.headline}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-stone">
              {manifesto.text}
            </p>
          </div>
          <ul className="space-y-8">
            {manifesto.points.map((point, index) => (
              <li key={point.title} className="border-t border-ash pt-6">
                <p className="text-xs font-medium text-stone">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-medium">{point.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-stone">
                  {point.text}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 min-[800px]:py-28">
        <Container>
          <div className="mb-16 max-w-xl">
            <p className="mb-3 text-xs font-medium text-primary">Capabilities</p>
            <h2 className="text-3xl font-medium min-[800px]:text-4xl">
              Four practices. One programme.
            </h2>
          </div>
          <div className="space-y-24">
            {capabilities.map((item, index) => (
              <div
                key={item.label}
                className="grid items-center gap-10 min-[900px]:grid-cols-2 min-[900px]:gap-16"
              >
                <div className={index % 2 === 1 ? "min-[900px]:order-2" : undefined}>
                  <p className="mb-2 text-xs font-medium text-primary">
                    {item.label}
                  </p>
                  <h3 className="text-3xl font-medium min-[800px]:text-4xl">
                    {item.headline}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-7 text-stone">
                    {item.text}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Explore services
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
                <CapabilityPanel index={index} label={item.label} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <GrainBanner variant="ember" className="border-y border-ash">
        <Container className="py-16 min-[800px]:py-20">
          <p className="text-xs font-medium text-maker-dark">
            {process.kicker}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium min-[800px]:text-4xl">
            {process.headline}
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink/80">
            {process.text}
          </p>
        </Container>
      </GrainBanner>

      <section className="border-b border-ash py-20 min-[800px]:py-28">
        <Container>
          <ol className="grid gap-10 min-[800px]:grid-cols-4 min-[800px]:gap-8">
            {process.steps.map((step) => (
              <li key={step.title}>
                <p className="text-xs font-medium text-primary">{step.week}</p>
                <h3 className="mt-3 text-xl font-medium">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-stone">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
          <Link
            href="/process"
            className="mt-12 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            The full process
            <ArrowRight className="size-3.5" />
          </Link>
        </Container>
      </section>

      <section className="py-20 min-[800px]:py-28">
        <Container>
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-medium text-primary">Selected work</p>
              <h2 className="text-3xl font-medium min-[800px]:text-4xl">
                Programmes in the field
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden text-sm font-medium text-primary hover:underline min-[800px]:inline"
            >
              All work
            </Link>
          </div>
          <ul className="grid gap-12 min-[800px]:grid-cols-2 min-[800px]:gap-10">
            {work.map((item) => (
              <li key={item.slug}>
                <WorkCard work={item} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y border-ash py-20 min-[800px]:py-28">
        <Container>
          <h2 className="mb-12 text-3xl font-medium min-[800px]:text-4xl">
            In their words
          </h2>
          <ul className="grid gap-12 min-[800px]:grid-cols-3 min-[800px]:gap-10">
            {quotes.map((quote) => (
              <li key={quote.name}>
                <blockquote>
                  <p className="text-xl font-medium leading-snug min-[800px]:text-[1.35rem]">
                    {quote.text}
                  </p>
                  <footer className="mt-5">
                    <Link
                      href={quote.href}
                      className="text-sm text-stone hover:text-primary"
                    >
                      {quote.name}
                      <span className="mt-0.5 block">{quote.role}</span>
                    </Link>
                  </footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 min-[800px]:py-28">
        <Container>
          <p className="mb-3 text-xs font-medium text-primary">
            {partners.kicker}
          </p>
          <h2 className="max-w-xl text-3xl font-medium min-[800px]:text-4xl">
            {partners.headline}
          </h2>
          <ul className="mt-12 grid gap-8 min-[800px]:grid-cols-3">
            {partners.items.map((item) => (
              <li key={item.title} className="rounded-md border border-ash bg-card p-6">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-stone">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <GrainBanner variant="dusk">
        <Container className="flex flex-col items-start justify-between gap-8 py-16 min-[800px]:flex-row min-[800px]:items-center min-[800px]:py-20">
          <div>
            <p className="text-xs font-medium text-maker-soft">{banner.kicker}</p>
            <h2 className="mt-3 max-w-xl text-3xl font-medium min-[800px]:text-4xl">
              {banner.headline}
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-paper/80">
              {banner.text}
            </p>
          </div>
          <Link
            href={banner.cta.href}
            className={cn(
              buttonVariants({ variant: "maker", size: "lg" }),
              "h-10 shrink-0 rounded-sm px-5 text-sm"
            )}
          >
            {banner.cta.label}
          </Link>
        </Container>
      </GrainBanner>

      <section className="py-20 min-[800px]:py-28">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-6">
            <h2 className="text-3xl font-medium min-[800px]:text-4xl">Journal</h2>
            <Link href="/journal" className="text-sm font-medium text-primary">
              All notes
            </Link>
          </div>
          <ul className="divide-y divide-ash border-y border-ash">
            {journal.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="flex flex-col gap-1 py-4 min-[800px]:flex-row min-[800px]:items-baseline min-[800px]:gap-10"
                >
                  <time className="w-24 shrink-0 text-sm text-stone">
                    {item.date}
                  </time>
                  <span className="w-20 shrink-0 text-xs font-medium text-primary">
                    {item.tag}
                  </span>
                  <span className="text-[15px] leading-snug hover:text-primary">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-ash bg-haze py-20 min-[800px]:py-24">
        <Container className="flex flex-col items-start justify-between gap-8 min-[800px]:flex-row min-[800px]:items-center">
          <div>
            <h2 className="text-3xl font-medium min-[800px]:text-4xl">
              {close.headline}
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-stone">
              {close.text}
            </p>
          </div>
          <Link
            href={close.cta.href}
            className={cn(
              buttonVariants({ variant: "maker", size: "lg" }),
              "h-10 shrink-0 rounded-sm px-5 text-sm"
            )}
          >
            {close.cta.label}
          </Link>
        </Container>
      </section>
    </main>
  )
}

function CapabilityPanel({ index, label }: { index: number; label: string }) {
  const variants = [
    "gradient-dusk text-paper",
    "gradient-ember text-ink",
    "gradient-ink text-paper",
    "bg-haze text-ink",
  ] as const

  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden rounded-md",
        variants[index],
        index % 2 === 1 && "min-[900px]:order-1"
      )}
    >
      <div className="grain-layer" />
      <div className="relative flex h-full flex-col justify-between p-6">
        <p className="text-xs font-medium tracking-wide opacity-80">0{index + 1}</p>
        <p className="max-w-[12rem] text-2xl font-medium leading-tight">{label}</p>
      </div>
    </div>
  )
}
