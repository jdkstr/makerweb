import Link from "next/link"

import { Container } from "@/components/site/container"
import { Logo } from "@/components/site/logo"
import { site } from "@/content/site"
import { legalNav, socialNav, studioNav } from "@/content/navigation"

export function SiteFooter() {
  return (
    <footer role="contentinfo" className="mt-auto border-t border-ash bg-paper">
      <Container className="py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex text-foreground">
            <span className="sr-only">Makerweb</span>
            <Logo />
          </Link>
          <p className="mt-3 max-w-sm text-[15px] leading-7 text-stone">
            {site.tagline} A product studio for companies that need the web to
            behave like software.
          </p>
        </div>
        <div className="grid gap-8 min-[800px]:grid-cols-4">
          <div>
            <h2 className="mb-3 text-xs font-medium text-stone">Work</h2>
            <ul className="space-y-1.5">
              {site.work.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-primary">
                    {item.client}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-medium text-stone">Studio</h2>
            <ul className="space-y-1.5">
              {studioNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-medium text-stone">Follow</h2>
            <ul className="space-y-1.5">
              {socialNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-5 space-y-1.5">
              {legalNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-medium text-stone">Start</h2>
            <p className="text-sm leading-6 text-stone">
              {site.contact.email}
              <br />
              {site.contact.locations}
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
            >
              Book a conversation
            </Link>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-ash pt-5 text-sm text-stone min-[800px]:flex-row min-[800px]:items-center min-[800px]:justify-between">
          <p>© 2026 Makerweb</p>
          <Link href="/design-system" className="hover:text-primary">
            Design system
          </Link>
        </div>
      </Container>
    </footer>
  )
}
