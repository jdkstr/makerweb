import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function Grain({ className }: { className?: string }) {
  return <div aria-hidden className={cn("grain-layer", className)} />
}

export function GrainBanner({
  className,
  variant = "flame",
  children,
}: {
  className?: string
  variant?: "flame" | "lagoon" | "sun"
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        variant === "flame" && "gradient-flame",
        variant === "lagoon" && "gradient-lagoon",
        variant === "sun" && "gradient-sun",
        className
      )}
    >
      <Grain />
      <div className="relative">{children}</div>
    </div>
  )
}
