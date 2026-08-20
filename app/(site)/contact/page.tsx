import type { Metadata } from "next"

import { Container } from "@/components/site/container"
import { ContactForm } from "@/components/site/contact-form"
import { GrainBanner } from "@/components/site/grain"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Brainstorm how Makerweb can help you improve your digital presence while keeping your tech stack lean and clean.",
}

export default function Page() {
  return (
    <main id="main-content" className="flex-1 bg-void">
      <section className="border-b border-white/10 py-16 min-[800px]:py-24">
        <Container className="grid gap-12 min-[900px]:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-xs tracking-[0.18em] text-flame uppercase">
              Contact
            </p>
            <h1 className="max-w-xl text-4xl font-semibold leading-[0.95] min-[800px]:text-6xl">
              {site.contact.headline}
            </h1>
            <p className="mt-6 max-w-lg text-[15px] leading-7 text-white/65">
              {site.contact.text}
            </p>
            <p className="mt-8 text-sm text-steel">{site.footer.locations}</p>
          </div>
          <ContactForm />
        </Container>
      </section>
      <GrainBanner variant="flame">
        <Container className="py-14">
          <p className="font-mono text-xs tracking-[0.18em] text-white/60 uppercase">
            Makers for makers
          </p>
          <p className="mt-3 max-w-xl text-xl font-semibold leading-snug">
            Simplicity, versatility & effectiveness.
          </p>
        </Container>
      </GrainBanner>
    </main>
  )
}
