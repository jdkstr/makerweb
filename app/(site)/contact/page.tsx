import type { Metadata } from "next"

import { Container } from "@/components/site/container"
import { ContactForm } from "@/components/site/contact-form"
import { PageHero } from "@/components/site/page-hero"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Brainstorm how Makerweb can help you improve your digital presence while keeping your tech stack lean and clean.",
}

export default function Page() {
  return (
    <main id="main-content" className="flex-1 bg-void">
      <PageHero
        kicker="Contact"
        title={site.contact.headline}
        text={site.contact.text}
      />
      <section className="py-16 min-[800px]:py-24">
        <Container className="grid gap-12 min-[900px]:grid-cols-[0.9fr_1.1fr] min-[900px]:items-start">
          <div>
            <p className="text-sm leading-6 text-white/50">{site.footer.locations}</p>
            <p className="mt-6 text-lg font-semibold tracking-tight">
              Simplicity, versatility & effectiveness.
            </p>
          </div>
          <div className="surface-card p-6 min-[800px]:p-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  )
}
