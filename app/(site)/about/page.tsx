import type { Metadata } from "next"

import { CloseBanner } from "@/components/site/close"
import { Container } from "@/components/site/container"
import { FaqSection } from "@/components/site/faq"
import { PageHero } from "@/components/site/page-hero"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "Makerweb is a hybrid web design agency for makers and manufacturers — simplicity, versatility & effectiveness.",
}

export default function Page() {
  return (
    <main id="main-content" className="flex-1 bg-void">
      <PageHero
        kicker="Learn our story"
        title={site.about.headline}
        text={site.about.principle}
      />
      <section className="py-16 min-[800px]:py-24">
        <Container>
          <h2 className="text-center text-3xl font-semibold tracking-tight min-[800px]:text-5xl">
            {site.about.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-center text-[15px] leading-7 text-white/60">
            {site.about.text}
          </p>
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
          <ul className="mt-10 flex flex-wrap justify-center gap-2">
            {site.about.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-white/10 bg-white/4 px-3 py-1 font-mono text-xs tracking-wide uppercase"
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
