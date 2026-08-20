import type { Metadata } from "next"
import Link from "next/link"

import { Container } from "@/components/site/container"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "Work",
  description: "Inspired by global makers.",
}

export default function Page() {
  return (
    <main id="main-content" className="flex-1 bg-void">
      <section className="py-16 min-[800px]:py-24">
        <Container>
          <p className="mb-3 font-mono text-xs tracking-[0.18em] text-steel uppercase">
            {site.trust.kicker}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[0.95] min-[800px]:text-6xl">
            See our work
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/65">
            Websites, brands, apps and automation for makers and manufacturers —
            built to convert, then iterated.
          </p>
          <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-2xl font-semibold text-steel">
            {site.trust.names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <Link href="/contact" className="mt-12 inline-block text-flame hover:underline">
            Contact us
          </Link>
        </Container>
      </section>
    </main>
  )
}
