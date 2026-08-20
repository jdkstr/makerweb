import type { ReactNode } from "react"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Container } from "@/components/site/container"
import { DesignSystemDemos } from "@/components/site/design-system-demos"
import { GrainBanner } from "@/components/site/grain"
import { Logo } from "@/components/site/logo"
import { ProductCanvas } from "@/components/site/product-canvas"
import { cn } from "@/lib/utils"
import { designSystem } from "@/content/design-system"

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
    <section
      id={id}
      className="scroll-mt-20 border-b border-white/10 py-16 min-[800px]:py-24"
    >
      <Container>
        <h2 className="mb-10 text-3xl font-semibold tracking-tight min-[800px]:text-4xl">
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

  return (
    <main id="main-content" className="flex-1 bg-void">
      <section className="border-b border-white/10 py-16 min-[800px]:py-24">
        <Container>
          <p className="mb-3 font-mono text-xs tracking-[0.18em] text-flame uppercase">
            {name}
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight min-[800px]:text-6xl">
            Design system
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/65">
            {summary}
          </p>
          <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs tracking-wide uppercase">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-steel hover:text-white"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <Section id="principles" title="Principles">
        <ul className="grid gap-10 min-[800px]:grid-cols-2">
          {principles.map((principle) => (
            <li key={principle.title}>
              <h3 className="text-xl font-semibold">{principle.title}</h3>
              <p className="mt-2 max-w-md text-[15px] leading-7 text-white/65">
                {principle.text}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="color" title="Color">
        <p className="mb-8 max-w-lg text-[15px] leading-7 text-white/65">
          Tokens sampled from the Framer site. Flame is the only CTA color. The
          four mark tiles are the brand.
        </p>
        <ul className="grid gap-3 min-[600px]:grid-cols-2 min-[1000px]:grid-cols-3">
          {colors.map((color) => (
            <li key={color.hex + color.name}>
              <div
                className={cn(
                  "flex h-20 items-end rounded-xl p-2.5 font-mono text-[11px]",
                  color.className,
                  color.invert ? "text-white" : "text-void"
                )}
              >
                {color.hex}
              </div>
              <p className="mt-2 text-sm font-medium">{color.name}</p>
              <p className="font-mono text-xs text-steel">{color.token}</p>
              <p className="mt-0.5 text-xs leading-5 text-white/55">{color.use}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="type" title="Type">
        <p className="mb-10 max-w-lg text-[15px] leading-7 text-white/65">
          Instrument Sans throughout. Fragment Mono for labels. Rawest is the
          Framer display face; it is not licensed for this repo, so Instrument
          carries display too.
        </p>
        <ul className="divide-y divide-white/10 border-y border-white/10">
          {type.map((style) => (
            <li
              key={style.name}
              className="grid gap-3 py-8 min-[800px]:grid-cols-[8rem_1fr]"
            >
              <p className="font-mono text-xs text-steel">{style.name}</p>
              <div>
                <p className={style.className}>{style.sample}</p>
                <p className="mt-3 font-mono text-xs text-steel">{style.spec}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="layout" title="Layout">
        <dl className="divide-y divide-white/10 border-y border-white/10">
          {space.map((item) => (
            <div
              key={item.name}
              className="grid gap-1 py-4 min-[800px]:grid-cols-[12rem_1fr_12rem] min-[800px]:items-baseline"
            >
              <dt className="text-sm font-medium">{item.name}</dt>
              <dd className="text-[15px] text-white/65">{item.spec}</dd>
              <dd className="font-mono text-xs text-steel min-[800px]:text-right">
                {item.token}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="texture" title="Texture">
        <p className="mb-8 max-w-lg text-[15px] leading-7 text-white/65">
          Soft radial glows sit behind the hero and product frame. Grain is
          optional on banners.
        </p>
        <div className="grid gap-3 min-[800px]:grid-cols-3">
          <GrainBanner variant="flame" className="rounded-2xl">
            <div className="p-6">
              <p className="font-mono text-xs text-white/70">Flame</p>
              <p className="mt-2 text-lg font-semibold">Hero glow</p>
            </div>
          </GrainBanner>
          <GrainBanner variant="lagoon" className="rounded-2xl">
            <div className="p-6">
              <p className="font-mono text-xs text-white/70">Lagoon</p>
              <p className="mt-2 text-lg font-semibold">Product accent</p>
            </div>
          </GrainBanner>
          <GrainBanner variant="sun" className="rounded-2xl">
            <div className="p-6">
              <p className="font-mono text-xs text-white/70">Sun</p>
              <p className="mt-2 text-lg font-semibold">Status chip</p>
            </div>
          </GrainBanner>
        </div>
      </Section>

      <Section id="components" title="Components">
        <div className="space-y-16">
          <div>
            <p className="mb-3 font-mono text-xs text-steel">Logo</p>
            <div className="flex flex-wrap items-center gap-8">
              <div className="bg-void p-5">
                <Logo />
              </div>
              <div className="bg-white p-5">
                <Logo inverted />
              </div>
              <div className="bg-flame p-5">
                <Logo />
              </div>
            </div>
          </div>
          <div>
            <p className="mb-3 font-mono text-xs text-steel">Buttons</p>
            <p className="mb-4 max-w-lg text-[15px] leading-7 text-white/65">
              Pills. Flame for contact, ghost for secondary, white when you need
              contrast on a dark band.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "maker", size: "lg" }),
                  "h-12 px-6"
                )}
              >
                Contact us
              </Link>
              <Link
                href="/#makers"
                className={cn(
                  buttonVariants({ variant: "makerGhost", size: "lg" }),
                  "h-12 px-6"
                )}
              >
                See our work
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "makerWhite", size: "lg" }),
                  "h-12 px-6"
                )}
              >
                Work with us
              </Link>
            </div>
          </div>
          <div>
            <p className="mb-3 font-mono text-xs text-steel">Product chrome</p>
            <ProductCanvas />
          </div>
          <DesignSystemDemos />
        </div>
      </Section>

      <section className="py-16">
        <Container>
          <Separator className="mb-8 bg-white/10" />
          <p className="text-sm text-steel">
            Tokens:{" "}
            <code className="text-white/70">app/globals.css</code>. Copy:{" "}
            <code className="text-white/70">content/site.ts</code>. Inventory:{" "}
            <code className="text-white/70">content/design-system.ts</code>.
            Source: makerweb.framer.website. Layout: attio.com.
          </p>
        </Container>
      </section>
    </main>
  )
}
