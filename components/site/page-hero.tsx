import type { ReactNode } from "react"

import { Container } from "@/components/site/container"

export function PageHero({
  kicker,
  title,
  text,
}: {
  kicker: string
  title: string
  text?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/8 pt-16 pb-14 min-[800px]:pt-24 min-[800px]:pb-20">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <Container className="relative mx-auto max-w-3xl text-center">
        <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] tracking-[0.16em] text-white/60 uppercase">
          {kicker}
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight min-[800px]:text-6xl">
          {title}
        </h1>
        {text ? (
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/60">
            {text}
          </p>
        ) : null}
      </Container>
    </section>
  )
}
