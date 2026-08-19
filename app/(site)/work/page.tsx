import type { Metadata } from "next"
import Link from "next/link"

import { Container } from "@/components/site/container"
import { WorkCard } from "@/components/site/work-card"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected Makerweb programmes — product websites, brand systems, and design engineering.",
}

export default function Page() {
  return (
    <main id="main-content" className="flex-1 bg-paper">
      <section className="border-b border-ash py-16 min-[800px]:py-24">
        <Container>
          <p className="mb-3 text-xs font-medium text-primary">Work</p>
          <h1 className="max-w-2xl text-[2.35rem] font-medium leading-[1.08] min-[800px]:text-5xl">
            Programmes worth talking about.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-stone">
            Websites treated as products. Each engagement is strategy,
            interface, and engineering on one backlog — then a system the
            internal team can keep shipping.
          </p>
        </Container>
      </section>
      <section className="py-16 min-[800px]:py-24">
        <Container>
          <ul className="grid gap-14 min-[800px]:grid-cols-2">
            {site.work.map((item) => (
              <li key={item.slug}>
                <WorkCard work={item} />
              </li>
            ))}
          </ul>
          <p className="mt-16 max-w-lg text-[15px] leading-7 text-stone">
            Want the next one listed here?{" "}
            <Link href="/contact" className="font-medium text-primary hover:underline">
              Start a programme
            </Link>
            .
          </p>
        </Container>
      </section>
    </main>
  )
}
