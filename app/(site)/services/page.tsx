import type { Metadata } from "next"

import { CloseBanner } from "@/components/site/close"
import { Container } from "@/components/site/container"
import { FaqSection } from "@/components/site/faq"
import { PageHero } from "@/components/site/page-hero"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, analytics, branding, web apps and automation for makers and manufacturers.",
}

const accents = ["bg-flame", "bg-sun", "bg-lagoon", "bg-reef", "bg-flame", "bg-lagoon"]

export default function Page() {
  return (
    <main id="main-content" className="flex-1 bg-void">
      <PageHero kicker="Our Services" title="Boost your digital presence" />
      <section className="py-16 min-[800px]:py-24">
        <Container>
          <ul className="grid gap-3 min-[800px]:grid-cols-2">
            {site.servicePages.map((item, index) => (
              <li key={item.label} className="surface-card p-8 min-[800px]:p-10">
                <span className={`mb-6 block size-7 rounded-md ${accents[index]}`} />
                <h2 className="text-2xl font-semibold tracking-tight">{item.label}</h2>
                <p className="mt-3 max-w-md text-[15px] leading-7 text-white/60">
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
