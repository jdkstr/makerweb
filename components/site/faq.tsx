import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Container } from "@/components/site/container"
import { SectionHeading } from "@/components/site/section-heading"
import { site } from "@/content/site"

export function FaqSection() {
  return (
    <section className="py-24 min-[800px]:py-32">
      <Container>
        <SectionHeading
          kicker={site.faq.kicker}
          title={site.faq.headline}
          text="Three answers we get asked on every brief."
        />
        <Accordion className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl border border-white/8 bg-raise/60">
          {site.faq.items.map((item) => (
            <AccordionItem
              key={item.q}
              value={item.q}
              className="border-white/8 px-5"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] leading-7 text-white/60 [&_a]:no-underline">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}
