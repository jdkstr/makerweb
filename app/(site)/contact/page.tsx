import type { Metadata } from "next"

import { Container } from "@/components/site/container"
import { ContactForm } from "@/components/site/contact-form"
import { GrainBanner } from "@/components/site/grain"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a Makerweb programme — a new site, a system, or a studio on retainer.",
}

export default function Page() {
  const { contact } = site

  return (
    <main id="main-content" className="flex-1 bg-paper">
      <section className="border-b border-ash py-16 min-[800px]:py-24">
        <Container className="grid gap-12 min-[900px]:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-medium text-primary">Contact</p>
            <h1 className="max-w-xl text-[2.35rem] font-medium leading-[1.08] min-[800px]:text-5xl">
              {contact.headline}
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-stone">
              {contact.text}
            </p>
            <p className="mt-8 text-sm text-stone">
              {contact.email}
              <br />
              {contact.locations}
            </p>
          </div>
          <ContactForm />
        </Container>
      </section>
      <GrainBanner variant="ink">
        <Container className="py-14">
          <p className="text-xs font-medium text-maker-soft">Capacity</p>
          <p className="mt-3 max-w-xl text-xl font-medium leading-snug">
            We take a small number of partners at a time. If we are not a fit,
            we will say so in the first conversation.
          </p>
        </Container>
      </GrainBanner>
    </main>
  )
}
