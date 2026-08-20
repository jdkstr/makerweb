import Link from "next/link"

import { Container } from "@/components/site/container"
import { Logo } from "@/components/site/logo"
import { site } from "@/content/site"

export function SiteFooter() {
  return (
    <footer role="contentinfo" className="mt-auto border-t border-white/10 bg-void">
      <Container className="py-12">
        <div className="flex flex-col gap-8 min-[800px]:flex-row min-[800px]:items-start min-[800px]:justify-between">
          <div>
            <Link href="/" className="inline-flex">
              <span className="sr-only">Makerweb</span>
              <Logo />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
              {site.footer.locations}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <span className="w-full font-mono text-xs tracking-[0.18em] text-steel uppercase">
              Explore
            </span>
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="text-white/70 hover:text-white">
              Contact
            </Link>
            <Link href="/design-system" className="text-white/70 hover:text-white">
              Design system
            </Link>
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-5 text-sm text-steel min-[800px]:flex-row min-[800px]:justify-between">
          <p>2026 | {site.legal}</p>
          <p>{site.tagline}</p>
        </div>
      </Container>
    </footer>
  )
}
