import type { Metadata } from "next"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { cn } from "@/lib/utils"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Makerweb is a small product studio — designers, writers, and engineers in the same room.",
}

export default function Page() {
  const { studio } = site

  return (
    <main id="main-content" className="flex-1 bg-paper">
      <section className="border-b border-ash py-16 min-[800px]:py-24">
        <Container>
          <p className="mb-3 text-xs font-medium text-primary">Studio</p>
          <h1 className="max-w-2xl text-[2.35rem] font-medium leading-[1.08] min-[800px]:text-5xl">
            {studio.headline}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-stone">
            {studio.text} Amsterdam, Lisbon, and New York — one backlog.
          </p>
        </Container>
      </section>

      <section className="border-b border-ash py-16 min-[800px]:py-24">
        <Container>
          <ul className="grid gap-8 min-[800px]:grid-cols-4">
            {studio.stats.map((stat) => (
              <li key={stat.label}>
                <p className="text-3xl font-medium">{stat.value}</p>
                <p className="mt-2 text-sm text-stone">{stat.label}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 min-[800px]:py-24">
        <Container>
          <h2 className="mb-12 text-3xl font-medium min-[800px]:text-4xl">
            How we behave
          </h2>
          <ul className="grid gap-10 min-[800px]:grid-cols-3">
            {studio.values.map((value) => (
              <li key={value.title}>
                <h3 className="text-xl font-medium">{value.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-stone">
                  {value.text}
                </p>
              </li>
            ))}
          </ul>
          <Link
            href="/careers"
            className={cn(
              buttonVariants({ variant: "makerOutline", size: "lg" }),
              "mt-12 inline-flex h-10 rounded-sm px-5 text-sm"
            )}
          >
            Open roles
          </Link>
        </Container>
      </section>
    </main>
  )
}
