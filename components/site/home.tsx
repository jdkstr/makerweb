import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { CloseBanner } from "@/components/site/close"
import { FaqSection } from "@/components/site/faq"
import { LogoMarquee } from "@/components/site/logo-marquee"
import { PipelineBoard } from "@/components/site/pipeline-board"
import { ProductCanvas } from "@/components/site/product-canvas"
import { SectionHeading } from "@/components/site/section-heading"
import { cn } from "@/lib/utils"
import { site } from "@/content/site"

const tones: Record<string, string> = {
  flame: "bg-flame",
  sun: "bg-sun",
  lagoon: "bg-lagoon",
  reef: "bg-reef",
  raise: "bg-white/20",
}

export function HomePage() {
  const [featured, ...rest] = site.services

  return (
    <main id="main-content" className="flex-1 bg-void">
      <section className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <Container className="relative pt-16 pb-10 text-center min-[800px]:pt-24 min-[800px]:pb-6">
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] tracking-[0.16em] text-white/60 uppercase">
            {site.hero.eyebrow}
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold tracking-tight min-[800px]:text-7xl min-[1100px]:text-[5.25rem] min-[1100px]:leading-[0.92]">
            {site.hero.headline}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/60">
            {site.hero.text}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={site.hero.primary.href}
              className={cn(
                buttonVariants({ variant: "maker", size: "lg" }),
                "h-12 px-7 text-sm"
              )}
            >
              {site.hero.primary.label}
            </Link>
            <Link
              href={site.hero.secondary.href}
              className={cn(
                buttonVariants({ variant: "makerGhost", size: "lg" }),
                "h-12 px-7 text-sm"
              )}
            >
              {site.hero.secondary.label}
            </Link>
          </div>
        </Container>
        <Container className="relative pb-20 min-[800px]:pb-28">
          <ProductCanvas />
        </Container>
      </section>

      <LogoMarquee />

      <section className="py-24 min-[800px]:py-32">
        <Container>
          <SectionHeading
            kicker={site.servicesIntro.kicker}
            title={site.servicesIntro.headline}
            text="Websites, automations, internal tools and brand — implemented as one stack."
          />
          <ul className="mt-14 grid gap-3 min-[800px]:grid-cols-2 min-[1100px]:grid-cols-3">
            <li className="surface-card relative overflow-hidden p-7 min-[800px]:col-span-2 min-[1100px]:col-span-2 min-[1100px]:row-span-2 min-[1100px]:p-10">
              <span className={cn("mb-8 block size-8 rounded-lg", tones[featured.tone])} />
              <h3 className="text-3xl font-semibold tracking-tight">
                {featured.label}
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-7 text-white/60">
                {featured.text}
              </p>
              <div className="mt-10 hidden rounded-xl border border-white/8 bg-void/60 p-4 min-[800px]:block">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-flame" />
                  <span className="size-2 rounded-full bg-sun" />
                  <span className="size-2 rounded-full bg-lagoon" />
                  <span className="ml-2 font-mono text-[10px] text-white/35">
                    makerweb.site
                  </span>
                </div>
                <div className="mt-4 grid gap-2 min-[800px]:grid-cols-3">
                  {["Hero", "Product", "Convert"].map((label) => (
                    <div
                      key={label}
                      className="rounded-lg bg-white/4 px-3 py-6 text-center text-xs text-white/45"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </li>
            {rest.map((item) => (
              <li key={item.label} className="surface-card p-7">
                <span className={cn("mb-6 block size-7 rounded-md", tones[item.tone])} />
                <h3 className="text-xl font-semibold">{item.label}</h3>
                <p className="mt-3 text-[15px] leading-7 text-white/60">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        id="studio"
        className="border-y border-white/8 bg-[#181716] py-24 min-[800px]:py-32"
      >
        <Container className="grid items-center gap-14 min-[1000px]:grid-cols-2 min-[1000px]:gap-20">
          <div>
            <SectionHeading
              align="left"
              kicker={site.process.kicker}
              title={site.process.headline}
              text="Brief, ship MVP, iterate, then stay on for ongoing support."
            />
            <ol className="mt-10 space-y-4">
              {site.process.steps.map((step) => (
                <li
                  key={step.week}
                  className="flex gap-4 rounded-xl border border-white/8 bg-white/3 p-4"
                >
                  <p className="font-mono text-sm text-flame">{step.week}</p>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/55">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="mb-4 font-mono text-[11px] tracking-[0.16em] text-white/40 uppercase">
              {site.studio.kicker}
            </p>
            <h3 className="text-2xl font-semibold tracking-tight">
              {site.studio.title}
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-white/55">
              {site.studio.text}
            </p>
            <div className="mt-8">
              <PipelineBoard />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 min-[800px]:py-32">
        <Container>
          <SectionHeading
            kicker={site.about.kicker}
            title={site.about.title}
            text={site.about.principle}
          />
          <ul className="mt-14 grid gap-3 min-[800px]:grid-cols-3">
            {site.principles.map((item) => (
              <li key={item.title} className="surface-card p-7">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-white/60">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[15px] leading-7 text-white/50">
            {site.about.text}
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            {site.about.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-white/10 bg-white/4 px-3 py-1 font-mono text-xs tracking-wide text-white/70 uppercase"
              >
                {chip}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FaqSection />
      <CloseBanner />
    </main>
  )
}
