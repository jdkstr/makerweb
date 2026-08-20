import type { Metadata } from "next"

import { CloseBanner } from "@/components/site/close"
import { Container } from "@/components/site/container"
import { FaqSection } from "@/components/site/faq"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "Process",
  description: "Ship fast, iterate — Makerweb’s brief, MVP, iterate, support cycle.",
}

export default function Page() {
  return (
    <main id="main-content" className="flex-1 bg-void">
      <section className="border-b border-white/10 py-16 min-[800px]:py-24">
        <Container>
          <p className="mb-3 font-mono text-xs tracking-[0.18em] text-lagoon uppercase">
            {site.process.kicker}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[0.95] min-[800px]:text-6xl">
            {site.process.headline}
          </h1>
        </Container>
      </section>
      <section className="py-16 min-[800px]:py-24">
        <Container>
          <ol className="space-y-14">
            {site.process.steps.map((step) => (
              <li
                key={step.title}
                className="grid gap-4 border-t border-white/10 pt-8 min-[800px]:grid-cols-[8rem_1fr]"
              >
                <p className="font-mono text-sm text-flame">{step.week}</p>
                <div>
                  <h2 className="text-3xl font-semibold">{step.title}</h2>
                  <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/65">
                    {step.text}
                  </p>
                </div>
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
