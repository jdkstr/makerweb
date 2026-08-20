import Link from "next/link"

import { Container } from "@/components/site/container"
import { Logo } from "@/components/site/logo"
import { site } from "@/content/site"

const columns = [
  {
    title: "Product",
    links: [
      { label: "Services", href: "/services" },
      { label: "Process", href: "/process" },
      { label: "Studio", href: "/#studio" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Design system", href: "/design-system" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer role="contentinfo" className="mt-auto border-t border-white/8 bg-void">
      <Container className="py-16">
        <div className="grid gap-12 min-[800px]:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex">
              <span className="sr-only">Makerweb</span>
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/50">
              {site.tagline}. {site.footer.locations}
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-medium text-white/80">{column.title}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-white/8 pt-6 text-sm text-steel min-[800px]:flex-row min-[800px]:justify-between">
          <p>2026 · {site.legal}</p>
          <p>Simplicity, versatility & effectiveness.</p>
        </div>
      </Container>
    </footer>
  )
}
