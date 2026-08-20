import type { NavLink } from "./types"
import { site } from "./site"

export const workNav: NavLink[] = site.work.map((item) => ({
  label: item.client,
  href: item.href,
}))

export const serviceNav: NavLink[] = site.capabilities.map((item) => ({
  label: item.label,
  href: item.href,
}))

export const studioNav: NavLink[] = [
  { label: "Studio", href: "/studio" },
  { label: "Process", href: "/process" },
  { label: "Journal", href: "/journal" },
  { label: "Careers", href: "/careers" },
  { label: "Design system", href: "/design-system" },
]

export const legalNav: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
]

export const socialNav: NavLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "X", href: "https://x.com/" },
  { label: "Are.na", href: "https://www.are.na/" },
]

export const stubTitles: Record<string, string> = {
  "/careers": "Careers",
  "/privacy": "Privacy",
  "/terms": "Terms",
  "/search": "Search",
}
