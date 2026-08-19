import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Container } from "@/components/site/container"
import { DesignSystemDemos } from "@/components/site/design-system-demos"
import { GrainBanner } from "@/components/site/grain"
import { Logo } from "@/components/site/logo"
import { ProductCanvas } from "@/components/site/product-canvas"
import { WorkArt } from "@/components/site/work-card"
import { cn } from "@/lib/utils"
import { designSystem } from "@/content/design-system"
import { site } from "@/content/site"

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-ash py-16 min-[800px]:py-24">
      <Container>
        <h2 className="mb-10 text-3xl font-medium min-[800px]:text-4xl">
          {title}
        </h2>
        {children}
      </Container>
    </section>
  )
}

export function DesignSystemPage() {
  const { name, summary, principles, colors, type, space, sections } =
    designSystem
  const work = site.work[0]
  const capability = site.capabilities[0]

  return (
    <main id="main-content" className="flex-1 bg-paper">
      <section className="border-b border-ash py-16 min-[800px]:py-24">
        <Container>
          <p className="mb-3 text-xs font-medium text-primary">{name}</p>
          <h1 className="max-w-2xl text-[2.35rem] font-medium leading-[1.08] min-[800px]:text-5xl">
            Design system
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-stone min-[800px]:text-base">
            {summary} Documents the site at{" "}
            <Link href="/" className="font-medium text-primary hover:underline">
              /
            </Link>
            .
          </p>
          <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-medium">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-stone hover:text-primary"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <Section id="principles" title="Principles">
        <ul className="grid gap-10 min-[800px]:grid-cols-2 min-[800px]:gap-12">
          {principles.map((principle) => (
            <li key={principle.title}>
              <h3 className="text-xl font-medium">{principle.title}</h3>
              <p className="mt-2 max-w-md text-[15px] leading-7 text-stone">
                {principle.text}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="color" title="Color">
        <p className="mb-8 max-w-lg text-[15px] leading-7 text-stone">
          Warm paper, ink, and a single maker orange. Neutrals carry structure.
          Gradients borrow from the same stops.
        </p>
        <ul className="grid gap-3 min-[600px]:grid-cols-2 min-[1000px]:grid-cols-3">
          {colors.map((color) => (
            <li key={color.hex + color.name} className="min-w-0">
              <div
                className={cn(
                  "flex h-20 items-end rounded-md p-2.5 text-[11px] font-medium",
                  color.className,
                  color.invert ? "text-white" : "text-foreground"
                )}
              >
                {color.hex}
              </div>
              <p className="mt-2 text-sm font-medium">{color.name}</p>
              <p className="truncate text-xs text-stone">{color.token}</p>
              <p className="mt-0.5 text-xs leading-5 text-stone">{color.use}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="type" title="Type">
        <p className="mb-10 max-w-lg text-[15px] leading-7 text-stone">
          Geist Sans throughout. Headings are medium weight with tighter
          tracking. Body stays 15px on paper.
        </p>
        <ul className="divide-y divide-ash border-y border-ash">
          {type.map((style) => (
            <li
              key={style.name}
              className="grid gap-3 py-8 min-[800px]:grid-cols-[8rem_1fr]"
            >
              <p className="text-xs font-medium text-stone">{style.name}</p>
              <div>
                <p className={style.className}>{style.sample}</p>
                <p className="mt-3 text-xs text-stone">{style.spec}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="layout" title="Layout">
        <dl className="divide-y divide-ash border-y border-ash">
          {space.map((item) => (
            <div
              key={item.name}
              className="grid gap-1 py-4 min-[800px]:grid-cols-[12rem_1fr_12rem] min-[800px]:items-baseline min-[800px]:gap-8"
            >
              <dt className="text-sm font-medium">{item.name}</dt>
              <dd className="text-[15px] text-stone">{item.spec}</dd>
              <dd className="text-xs text-stone min-[800px]:text-right">
                {item.token}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 overflow-hidden rounded-md border border-ash">
          <div className="border-b border-ash bg-haze px-4 py-2 text-xs font-medium text-stone">
            container-site · 90% · max 1340px
          </div>
          <div className="grid grid-cols-12 gap-px bg-border">
            {Array.from({ length: 12 }, (_, index) => (
              <div
                key={index}
                className="flex h-16 items-center justify-center bg-haze text-[10px] text-stone"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="texture" title="Texture">
        <p className="mb-8 max-w-lg text-[15px] leading-7 text-stone">
          Grain is an SVG turbulence overlay. Use it on dusk, ember, and ink
          banners — never on everyday paper sections.
        </p>
        <div className="grid gap-4 min-[800px]:grid-cols-3">
          <GrainBanner variant="dusk" className="rounded-md">
            <div className="p-6">
              <p className="text-xs font-medium text-maker-soft">Dusk</p>
              <p className="mt-2 text-lg font-medium">Inverse banner</p>
            </div>
          </GrainBanner>
          <GrainBanner variant="ember" className="rounded-md">
            <div className="p-6">
              <p className="text-xs font-medium text-maker-dark">Ember</p>
              <p className="mt-2 text-lg font-medium">Process band</p>
            </div>
          </GrainBanner>
          <GrainBanner variant="ink" className="rounded-md">
            <div className="p-6">
              <p className="text-xs font-medium text-maker-soft">Ink</p>
              <p className="mt-2 text-lg font-medium">Work covers</p>
            </div>
          </GrainBanner>
        </div>
      </Section>

      <Section id="components" title="Components">
        <div className="space-y-16">
          <div>
            <p className="mb-3 text-xs font-medium text-stone">Logo</p>
            <div className="flex flex-wrap items-center gap-8">
              <Logo className="w-[148px] text-foreground" />
              <div className="rounded-md bg-primary px-5 py-4">
                <Logo className="w-[148px] text-primary-foreground" />
              </div>
              <div className="rounded-md bg-ink px-5 py-4">
                <Logo className="w-[148px] text-paper" />
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium text-stone">Buttons</p>
            <p className="mb-4 max-w-lg text-[15px] leading-7 text-stone">
              <code className="text-[13px]">maker</code> and{" "}
              <code className="text-[13px]">makerOutline</code> invert fill on
              hover. Height is 40px with 4px radius.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "maker", size: "lg" }),
                  "h-10 rounded-sm px-5 text-sm"
                )}
              >
                Start a project
              </Link>
              <Link
                href="/work"
                className={cn(
                  buttonVariants({ variant: "makerOutline", size: "lg" }),
                  "h-10 rounded-sm px-5 text-sm"
                )}
              >
                See the work
              </Link>
              <Link
                href="/studio"
                className={cn(
                  buttonVariants({ variant: "ink", size: "lg" }),
                  "h-10 rounded-sm px-5 text-sm"
                )}
              >
                Studio
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Text link
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium text-stone">Product canvas</p>
            <p className="mb-4 max-w-lg text-[15px] leading-7 text-stone">
              The website, framed as software. Spec chips sit outside the image
              link so they stay interactive.
            </p>
            <div className="max-w-xl">
              <ProductCanvas />
            </div>
          </div>

          <DesignSystemDemos />
        </div>
      </Section>

      <Section id="patterns" title="Patterns">
        <div className="space-y-16">
          <div>
            <p className="mb-3 text-xs font-medium text-stone">Capability row</p>
            <div className="grid items-center gap-10 min-[900px]:grid-cols-2 min-[900px]:gap-16">
              <div>
                <p className="mb-2 text-xs font-medium text-primary">
                  {capability.label}
                </p>
                <h3 className="text-3xl font-medium min-[800px]:text-4xl">
                  {capability.headline}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-7 text-stone">
                  {capability.text}
                </p>
              </div>
              <WorkArt work={work} className="aspect-[16/10]" />
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium text-stone">Quote</p>
            <blockquote className="max-w-lg">
              <p className="text-xl font-medium leading-snug min-[800px]:text-[1.35rem]">
                {site.quotes[0].text}
              </p>
              <footer className="mt-5 text-sm text-stone">
                {site.quotes[0].name} · {site.quotes[0].role}
              </footer>
            </blockquote>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium text-stone">Changelog</p>
            <ul className="max-w-2xl divide-y divide-ash border-y border-ash">
              {site.journal.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="flex flex-col gap-1 py-4 min-[800px]:flex-row min-[800px]:items-baseline min-[800px]:gap-10"
                  >
                    <time className="w-24 shrink-0 text-sm text-stone">
                      {item.date}
                    </time>
                    <span className="text-[15px] leading-snug hover:text-primary">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium text-stone">Close band</p>
            <div className="flex flex-col items-start justify-between gap-8 rounded-md bg-haze px-6 py-10 min-[800px]:flex-row min-[800px]:items-center min-[800px]:px-10">
              <div>
                <h3 className="text-3xl font-medium min-[800px]:text-4xl">
                  {site.close.headline}
                </h3>
                <p className="mt-3 max-w-xl text-[15px] leading-7 text-stone">
                  {site.close.text}
                </p>
              </div>
              <Link
                href={site.close.cta.href}
                className={cn(
                  buttonVariants({ variant: "maker", size: "lg" }),
                  "h-10 shrink-0 rounded-sm px-5 text-sm"
                )}
              >
                {site.close.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <section className="py-16 min-[800px]:py-20">
        <Container>
          <Separator className="mb-8" />
          <p className="text-sm text-stone">
            Tokens live in{" "}
            <code className="text-[13px] text-ink">app/globals.css</code>. Copy
            lives in{" "}
            <code className="text-[13px] text-ink">content/site.ts</code>. This
            inventory is{" "}
            <code className="text-[13px] text-ink">
              content/design-system.ts
            </code>
            .
          </p>
        </Container>
      </section>
    </main>
  )
}
