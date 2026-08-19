"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SpecChip } from "@/components/site/spec-chip"
import { site } from "@/content/site"

export function DesignSystemDemos() {
  const specs = site.canvas.specs

  return (
    <div className="space-y-10">
      <div>
        <p className="mb-3 text-xs font-medium text-stone">Spec chips</p>
        <p className="mb-4 max-w-lg text-[15px] leading-7 text-stone">
          Hover a chip. Open delay is 0ms so the canvas feels like a product,
          not a tooltip.
        </p>
        <div className="relative overflow-hidden rounded-md bg-ink p-6">
          <div className="flex flex-wrap gap-2">
            {specs.map((spec) => (
              <SpecChip key={spec.label} spec={spec} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs font-medium text-stone">Accordion</p>
        <Accordion className="max-w-md rounded-md border border-ash bg-card px-3">
          <AccordionItem value="work">
            <AccordionTrigger className="rounded-md text-[15px] hover:no-underline">
              Work
            </AccordionTrigger>
            <AccordionContent className="text-sm text-stone">
              Northline, Helix Pay, Orion Health, Fieldnote.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="studio">
            <AccordionTrigger className="rounded-md text-[15px] hover:no-underline">
              Studio
            </AccordionTrigger>
            <AccordionContent className="text-sm text-stone">
              Process, journal, careers, and this design system.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="max-w-md">
        <p className="mb-3 text-xs font-medium text-stone">Input</p>
        <div className="space-y-1.5">
          <Label htmlFor="ds-email">Email</Label>
          <Input
            id="ds-email"
            type="email"
            placeholder="name@company.com"
            className="h-10 rounded-sm bg-card"
          />
        </div>
        <Button type="button" variant="maker" className="mt-4 h-10 rounded-sm px-5">
          Submit
        </Button>
      </div>
    </div>
  )
}
