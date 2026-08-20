import type { NavLink } from "./types"

export const legalNav: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
]

export const stubTitles: Record<string, string> = {
  "/privacy": "Privacy",
  "/terms": "Terms",
}
