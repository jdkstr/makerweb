import type { Metadata } from "next"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { GrainBanner } from "@/components/site/grain"
import { cn } from "@/lib/utils"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Makerweb works: truth, shape, craft, ship — one-week sprints from workshop to launch.",
}

export default function Page() {
  const { process } = site

  return (
    <main id="main-content" className="flex-1 bg-paper">
      <section className="border-b border-ash py-16 min-[800px]:py-24">
        <Container>
          <p className="mb-3 text-xs font-medium text-primary">{process.kicker}</p>
          <h1 className="max-w-2xl text-[2.35rem] font-medium leading-[1.08] min-[800px]:text-5xl">
            {process.headline}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-stone">
            {process.text} Excellence comes from specialisation: we just do
            product websites, all day.
          </p>
        </Container>
      </section>

      <section className="py-16 min-[800px]:py-24">
        <Container>
          <ol className="space-y-14">
            {process.steps.map((step) => (
              <li
                key={step.title}
                className="grid gap-4 border-t border-ash pt-8 min-[800px]:grid-cols-[8rem_1fr] min-[800px]:gap-16"
              >
                <p className="text-xs font-medium text-primary">{step.week}</p>
                <div>
                  <h2 className="text-3xl font-medium">{step.title}</h2>
                  <p className="mt-4 max-w-xl text-[15px] leading-7 text-stone">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <GrainBanner variant="dusk">
        <Container className="py-16 min-[800px]:py-20">
          <h2 className="max-w-xl text-3xl font-medium min-[800px]:text-4xl">
            After launch, we can stay.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-paper/80">
            A small team on the same branch. New pages, experiments, and the
            craft that campaigns never budget for.
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "maker", size: "lg" }),
              "mt-8 inline-flex h-10 rounded-sm px-5 text-sm"
            )}
          >
            Talk about a retainer
          </Link>
        </Container>
      </GrainBanner>
    </main>
  )
}
