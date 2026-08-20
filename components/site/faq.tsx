import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Container } from "@/components/site/container"
import { site } from "@/content/site"

export function FaqSection() {
  return (
    <section className="border-t border-white/10 py-24 min-[800px]:py-32">
      <Container className="grid gap-12 min-[900px]:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-steel uppercase">
            {site.faq.kicker}
          </p>
          <h2 className="mt-4 text-3xl font-semibold min-[800px]:text-5xl">
            {site.faq.headline}
          </h2>
        </div>
        <Accordion className="border-y border-white/10">
          {site.faq.items.map((item) => (
            <AccordionItem
              key={item.q}
              value={item.q}
              className="border-white/10"
            >
              <AccordionTrigger className="rounded-none py-5 text-left text-base font-medium hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] leading-7 text-white/65 [&_a]:no-underline">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}
