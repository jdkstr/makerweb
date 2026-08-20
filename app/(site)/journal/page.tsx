import type { Metadata } from "next"
import Link from "next/link"

import { Container } from "@/components/site/container"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes on websites as products, process, and craft from Makerweb.",
}

const notes = [
  {
    ...site.journal[0],
    body: "A marketing site that cannot ship with the product is already legacy. Treat navigation, changelog, and demos as product surfaces — then the CMS is an adapter, not the architecture.",
  },
  {
    ...site.journal[1],
    body: "Stakeholders click the real thing. A prototype in the browser by week two kills more bad ideas than a 40-page deck, and it becomes the contract for engineering.",
  },
  {
    ...site.journal[2],
    body: "Sales opened the changelog because it was the same chrome as the product. That is the test: if the team will not use it, the public will not either.",
  },
  {
    ...site.journal[3],
    body: "Grain earns its keep on banners and covers. Everyday sections should stay paper-quiet so the chrome still feels like software, not a poster.",
  },
]

export default function Page() {
  return (
    <main id="main-content" className="flex-1 bg-paper">
      <section className="border-b border-ash py-16 min-[800px]:py-24">
        <Container>
          <p className="mb-3 text-xs font-medium text-primary">Journal</p>
          <h1 className="max-w-2xl text-[2.35rem] font-medium leading-[1.08] min-[800px]:text-5xl">
            Notes from the studio.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-stone">
            Process, craft, and the occasional case. Written for the people who
            ship, not for an awards jury.
          </p>
        </Container>
      </section>
      <section className="py-16 min-[800px]:py-24">
        <Container>
          <ul className="divide-y divide-ash border-y border-ash">
            {notes.map((note) => (
              <li key={note.title} className="py-10">
                <p className="text-xs font-medium text-primary">
                  {note.date} · {note.tag}
                </p>
                <h2 className="mt-3 text-2xl font-medium min-[800px]:text-3xl">
                  {note.title}
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-stone">
                  {note.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-stone">
            Want this in your inbox? Write{" "}
            <Link href="/contact" className="font-medium text-primary hover:underline">
              hello@makerweb.studio
            </Link>
            .
          </p>
        </Container>
      </section>
    </main>
  )
}
