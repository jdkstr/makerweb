import type { Metadata } from "next"

import { CloseBanner } from "@/components/site/close"
import { Container } from "@/components/site/container"
import { FaqSection } from "@/components/site/faq"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "Makerweb is a hybrid web design agency for makers and manufacturers — simplicity, versatility & effectiveness.",
}

export default function Page() {
  return (
    <main id="main-content" className="flex-1 bg-void">
      <section className="border-b border-white/10 py-16 min-[800px]:py-24">
        <Container>
          <p className="mb-3 font-mono text-xs tracking-[0.18em] text-sun uppercase">
            Learn our story
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[0.95] min-[800px]:text-6xl">
            {site.about.headline}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-white/80">
            {site.about.principle}
          </p>
        </Container>
      </section>
      <section className="py-16 min-[800px]:py-24">
        <Container>
          <h2 className="text-3xl font-semibold min-[800px]:text-5xl">
            {site.about.title}
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/65">
            {site.about.text}
          </p>
          <ul className="mt-10 flex flex-wrap gap-2">
            {site.about.chips.map((chip) => (
              <li
                key={chip}
                className="border border-white/15 px-3 py-1 font-mono text-xs tracking-wide uppercase"
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
