import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { CloseBanner } from "@/components/site/close"
import { Container } from "@/components/site/container"
import { FaqSection } from "@/components/site/faq"
import { GrainBanner } from "@/components/site/grain"
import { cn } from "@/lib/utils"
import { site } from "@/content/site"

const tones: Record<string, string> = {
  flame: "bg-flame",
  sun: "bg-sun",
  lagoon: "bg-lagoon",
  reef: "bg-reef",
  raise: "bg-raise",
}

export function HomePage() {
  return (
    <main id="main-content" className="flex-1 bg-void">
      <GrainBanner variant="flame">
        <Container className="flex min-h-[78vh] flex-col justify-end py-20 min-[800px]:py-28">
          <p className="font-mono text-xs tracking-[0.18em] text-white/55 uppercase">
            {site.tagline}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] min-[800px]:text-7xl min-[1200px]:text-8xl">
            {site.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            {site.hero.text}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={site.hero.primary.href}
              className={cn(
                buttonVariants({ variant: "maker", size: "lg" }),
                "h-14 px-8 text-base"
              )}
            >
              {site.hero.primary.label}
            </Link>
            <Link
              href={site.hero.secondary.href}
              className={cn(
                buttonVariants({ variant: "makerWhite", size: "lg" }),
                "h-14 px-8 text-base"
              )}
            >
              {site.hero.secondary.label}
            </Link>
          </div>
        </Container>
      </GrainBanner>

      <section id="makers" className="border-y border-white/10 py-10">
        <Container>
          <p className="mb-6 font-mono text-xs tracking-[0.18em] text-steel uppercase">
            {site.trust.kicker}
          </p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-3 text-lg font-medium text-steel">
            {site.trust.names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-24 min-[800px]:py-32">
        <Container>
          <p className="font-mono text-xs tracking-[0.18em] text-flame uppercase">
            {site.servicesIntro.kicker}
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold min-[800px]:text-5xl">
            {site.servicesIntro.headline}
          </h2>
          <ul className="mt-16 grid gap-px bg-white/10 min-[800px]:grid-cols-2">
            {site.services.map((item, index) => (
              <li
                key={item.label}
                className={cn(
                  "bg-void p-8 min-[800px]:p-10",
                  index === site.services.length - 1 &&
                    site.services.length % 2 === 1 &&
                    "min-[800px]:col-span-2"
                )}
              >
                <span className={cn("mb-6 block size-8", tones[item.tone])} />
                <h3 className="text-2xl font-semibold">{item.label}</h3>
                <p className="mt-3 max-w-md text-[15px] leading-7 text-white/65">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-raise py-24 min-[800px]:py-32">
        <Container className="grid gap-12 min-[900px]:grid-cols-2 min-[900px]:gap-20">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-sun uppercase">
              {site.about.kicker}
            </p>
            <h2 className="mt-4 text-3xl font-semibold min-[800px]:text-5xl">
              {site.about.headline}
            </h2>
            <p className="mt-4 text-xl font-semibold text-white/90">
              {site.about.title}
            </p>
          </div>
          <div>
            <p className="text-lg leading-8 text-white/80">{site.about.principle}</p>
            <p className="mt-6 text-[15px] leading-7 text-white/65">
              {site.about.text}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {site.about.chips.map((chip) => (
                <li
                  key={chip}
                  className="border border-white/15 px-3 py-1 font-mono text-xs tracking-wide text-white/80 uppercase"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-24 min-[800px]:py-32">
        <Container>
          <p className="font-mono text-xs tracking-[0.18em] text-lagoon uppercase">
            {site.process.kicker}
          </p>
          <h2 className="mt-4 text-3xl font-semibold min-[800px]:text-5xl">
            {site.process.headline}
          </h2>
          <ol className="mt-16 grid gap-12 min-[800px]:grid-cols-2 min-[1100px]:grid-cols-4">
            {site.process.steps.map((step) => (
              <li key={step.week}>
                <p className="font-mono text-sm text-flame">{step.week}</p>
                <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-white/65">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <FaqSection />
      <CloseBanner />
    </main>
  )
}
