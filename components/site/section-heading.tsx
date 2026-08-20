import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function SectionHeading({
  kicker,
  title,
  text,
  align = "center",
}: {
  kicker: string
  title: string
  text?: ReactNode
  align?: "center" | "left"
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] tracking-[0.16em] text-white/60 uppercase">
        {kicker}
      </p>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight min-[800px]:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-7 text-white/60">{text}</p>
      ) : null}
    </div>
  )
}
