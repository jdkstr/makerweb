import Link from "next/link"

import { SpecChip } from "@/components/site/spec-chip"
import { site } from "@/content/site"

export function ProductCanvas() {
  const { canvas } = site

  return (
    <div className="overflow-hidden rounded-md border border-ash bg-card shadow-[0_20px_50px_-28px_rgba(22,22,21,0.45)]">
      <Link
        href={canvas.href}
        className="flex items-center gap-2 border-b border-ash bg-haze px-3 py-2"
      >
        <span className="size-2 rounded-full bg-ash" />
        <span className="size-2 rounded-full bg-ash" />
        <span className="size-2 rounded-full bg-ash" />
        <span className="ml-2 truncate text-xs text-stone">
          {canvas.title} · {canvas.caption}
        </span>
      </Link>
      <div className="relative aspect-[16/10] overflow-hidden bg-ink">
        <Link href={canvas.href} className="group absolute inset-0 block">
          <CanvasArt />
        </Link>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 pt-16">
          <div className="pointer-events-auto flex flex-wrap gap-2">
            {canvas.specs.map((spec) => (
              <SpecChip key={spec.label} spec={spec} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CanvasArt() {
  return (
    <svg
      viewBox="0 0 640 400"
      className="size-full transition-transform duration-500 group-hover:scale-[1.02]"
      aria-hidden
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a2420" />
          <stop offset="55%" stopColor="#161615" />
          <stop offset="100%" stopColor="#3b2218" />
        </linearGradient>
        <linearGradient id="panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fafaf7" />
          <stop offset="100%" stopColor="#ebe9e3" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill="url(#sky)" />
      <rect x="48" y="36" width="544" height="328" rx="10" fill="url(#panel)" />
      <rect x="48" y="36" width="544" height="36" rx="10" fill="#e2e0d8" />
      <rect x="48" y="60" width="544" height="12" fill="#e2e0d8" />
      <circle cx="70" cy="54" r="5" fill="#c8c5bb" />
      <circle cx="86" cy="54" r="5" fill="#c8c5bb" />
      <circle cx="102" cy="54" r="5" fill="#c8c5bb" />
      <rect x="72" y="96" width="220" height="14" rx="3" fill="#161615" />
      <rect x="72" y="120" width="168" height="8" rx="2" fill="#c8c5bb" />
      <rect x="72" y="136" width="148" height="8" rx="2" fill="#c8c5bb" />
      <rect x="72" y="168" width="88" height="28" rx="4" fill="#d94b1a" />
      <rect x="168" y="168" width="88" height="28" rx="4" fill="none" stroke="#d94b1a" />
      <rect x="360" y="92" width="204" height="220" rx="8" fill="#161615" />
      <rect x="376" y="112" width="88" height="8" rx="2" fill="#6f6e69" />
      <rect x="376" y="132" width="172" height="10" rx="2" fill="#f3f2ee" />
      <rect x="376" y="150" width="140" height="8" rx="2" fill="#6f6e69" />
      <rect x="376" y="178" width="172" height="48" rx="4" fill="#2a2420" />
      <rect x="376" y="238" width="80" height="8" rx="2" fill="#d94b1a" />
      <rect x="376" y="258" width="172" height="6" rx="2" fill="#3b2218" />
      <rect x="376" y="272" width="148" height="6" rx="2" fill="#3b2218" />
      <rect x="72" y="220" width="256" height="92" rx="8" fill="#f4d4c4" />
      <rect x="88" y="240" width="72" height="8" rx="2" fill="#9a2f0c" />
      <rect x="88" y="258" width="160" height="8" rx="2" fill="#161615" />
      <rect x="88" y="274" width="120" height="6" rx="2" fill="#6f6e69" />
    </svg>
  )
}
