import type { Metadata } from "next"

import { CloseBanner } from "@/components/site/close"
import { Container } from "@/components/site/container"
import { FaqSection } from "@/components/site/faq"
import { PageHero } from "@/components/site/page-hero"
import { PipelineBoard } from "@/components/site/pipeline-board"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "Process",
  description: "Ship fast, iterate — Makerweb’s brief, MVP, iterate, support cycle.",
}

export default function Page() {
  return (
    <main id="main-content" className="flex-1 bg-void">
      <PageHero
        kicker={site.process.kicker}
        title={site.process.headline}
        text="Brief, ship MVP, iterate, then stay on for ongoing support."
      />
      <section className="py-16 min-[800px]:py-24">
        <Container className="grid gap-12 min-[1000px]:grid-cols-[1.1fr_0.9fr] min-[1000px]:items-start">
          <ol className="space-y-3">
            {site.process.steps.map((step) => (
              <li key={step.title} className="surface-card p-6 min-[800px]:p-8">
                <p className="font-mono text-sm text-flame">{step.week}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  {step.title}
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-7 text-white/60">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
          <div className="min-[1000px]:sticky min-[1000px]:top-24">
            <PipelineBoard />
          </div>
        </Container>
      </section>
      <FaqSection />
      <CloseBanner />
    </main>
  )
}
