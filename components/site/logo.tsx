import { cn } from "@/lib/utils"

export function Logo({
  className,
  inverted = false,
}: {
  className?: string
  inverted?: boolean
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[17px] font-semibold tracking-tight",
        inverted ? "text-void" : "text-white",
        className
      )}
    >
      <span className="grid size-6 grid-cols-2 gap-0.5" aria-hidden>
        <span className="rounded-[2px] bg-flame" />
        <span className="rounded-[2px] bg-sun" />
        <span className="rounded-[2px] bg-lagoon" />
        <span className="rounded-[2px] bg-reef" />
      </span>
      Makerweb
    </span>
  )
}
