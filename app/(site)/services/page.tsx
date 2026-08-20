import type { Metadata } from "next"

import { CloseBanner } from "@/components/site/close"
import { Container } from "@/components/site/container"
import { FaqSection } from "@/components/site/faq"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, analytics, branding, web apps and automation for makers and manufacturers.",
}

export default function Page() {
  return (
    <main id="main-content" className="flex-1 bg-void">
      <section className="border-b border-white/10 py-16 min-[800px]:py-24">
        <Container>
          <p className="mb-3 font-mono text-xs tracking-[0.18em] text-flame uppercase">
            Our Services
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[0.95] min-[800px]:text-6xl">
            Boost your digital presence
          </h1>
        </Container>
      </section>
      <section className="py-16 min-[800px]:py-24">
        <Container>
          <ul className="grid gap-px bg-white/10 min-[800px]:grid-cols-2">
            {site.servicePages.map((item) => (
              <li key={item.label} className="bg-void p-8 min-[800px]:p-10">
                <h2 className="text-2xl font-semibold">{item.label}</h2>
                <p className="mt-3 max-w-md text-[15px] leading-7 text-white/65">
                  {item.text}
                </p>
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
