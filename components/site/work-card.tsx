import Link from "next/link"

import { cn } from "@/lib/utils"
import type { WorkItem } from "@/content/types"

const tones: Record<WorkItem["tone"], string> = {
  dusk: "gradient-dusk text-paper",
  ember: "gradient-ember text-ink",
  haze: "bg-haze text-ink",
  ink: "gradient-ink text-paper",
}

export function WorkArt({
  work,
  className,
}: {
  work: WorkItem
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md",
        tones[work.tone],
        className
      )}
    >
      <div className="grain-layer opacity-35" />
      <svg
        viewBox="0 0 640 400"
        className="relative size-full"
        aria-hidden
      >
        <rect x="56" y="48" width="360" height="18" rx="4" fill="currentColor" opacity="0.9" />
        <rect x="56" y="84" width="240" height="10" rx="3" fill="currentColor" opacity="0.35" />
        <rect x="56" y="140" width="200" height="120" rx="8" fill="currentColor" opacity="0.12" />
        <rect x="276" y="160" width="160" height="160" rx="8" fill="currentColor" opacity="0.18" />
        <rect x="456" y="88" width="128" height="220" rx="8" fill="currentColor" opacity="0.22" />
        <circle cx="520" cy="70" r="28" fill="#d94b1a" opacity="0.85" />
      </svg>
      <p className="absolute bottom-4 left-4 text-xs font-medium tracking-wide">
        {work.client}
      </p>
    </div>
  )
}

export function WorkCard({ work }: { work: WorkItem }) {
  return (
    <Link href={work.href} className="group block">
      <WorkArt work={work} className="aspect-[16/10]" />
      <p className="mt-4 text-xs font-medium text-primary">{work.kicker}</p>
      <h3 className="mt-1.5 max-w-md text-xl font-medium leading-snug group-hover:text-primary">
        {work.title}
      </h3>
      <p className="mt-2 max-w-md text-[15px] leading-7 text-stone">
        {work.summary}
      </p>
    </Link>
  )
}
