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

export function DesignSystemDemos() {
  return (
    <div className="space-y-10">
      <div>
        <p className="mb-3 font-mono text-xs text-steel">Accordion</p>
        <Accordion className="max-w-md overflow-hidden rounded-xl border border-white/10 px-3">
          <AccordionItem value="services">
            <AccordionTrigger className="text-[15px] hover:no-underline">
              Services
            </AccordionTrigger>
            <AccordionContent className="text-sm text-white/65">
              Web design, analytics, branding, apps, automation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="process">
            <AccordionTrigger className="text-[15px] hover:no-underline">
              Process
            </AccordionTrigger>
            <AccordionContent className="text-sm text-white/65">
              Brief, ship MVP, iterate, ongoing support.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="max-w-md">
        <p className="mb-3 font-mono text-xs text-steel">Input</p>
        <div className="space-y-1.5">
          <Label htmlFor="ds-email">Email</Label>
          <Input
            id="ds-email"
            type="email"
            placeholder="name@company.com"
            className="h-11 rounded-lg bg-raise"
          />
        </div>
        <Button type="button" variant="maker" className="mt-4 h-11 px-6">
          Send
        </Button>
      </div>
    </div>
  )
}
