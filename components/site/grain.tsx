import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function Grain({ className }: { className?: string }) {
  return <div aria-hidden className={cn("grain-layer", className)} />
}

export function GrainBanner({
  className,
  variant = "dusk",
  children,
}: {
  className?: string
  variant?: "dusk" | "ember" | "ink"
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        variant === "dusk" && "gradient-dusk text-paper",
        variant === "ember" && "gradient-ember text-ink",
        variant === "ink" && "gradient-ink text-paper",
        className
      )}
    >
      <Grain className={variant === "ember" ? "opacity-30" : undefined} />
      <div className="relative">{children}</div>
    </div>
  )
}
