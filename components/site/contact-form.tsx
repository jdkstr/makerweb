"use client"

import { useState, type FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <p className="border border-white/15 bg-raise p-6 text-[15px] leading-7">
        Thanks. We’ll reply within two working days.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 min-[700px]:grid-cols-2">
        <Field id="name" label="Name" autoComplete="name" required />
        <Field id="email" label="Email" type="email" autoComplete="email" required />
      </div>
      <Field id="company" label="Company" autoComplete="organization" />
      <div className="space-y-1.5">
        <Label htmlFor="message">What are you making?</Label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-none border border-input bg-raise px-2.5 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </div>
      <Button type="submit" variant="maker" className="h-12 px-6">
        Send
      </Button>
    </form>
  )
}

function Field({
  id,
  label,
  type = "text",
  autoComplete,
  required,
}: {
  id: string
  label: string
  type?: string
  autoComplete?: string
  required?: boolean
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="h-11 rounded-none bg-raise"
      />
    </div>
  )
}
