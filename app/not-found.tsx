import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { SiteFooter } from "@/components/site/footer"
import { SiteHeader } from "@/components/site/header"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-void">
      <SiteHeader />
      <main id="main-content" className="flex-1 bg-void">
        <Container className="py-16 md:py-24">
          <h1 className="mb-4 text-4xl font-semibold">Page not found</h1>
          <p className="mb-8 max-w-xl text-white/65">
            This route is not part of the Makerweb site.
          </p>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "makerWhite", size: "lg" }),
              "h-12 px-6"
            )}
          >
            Back to homepage
          </Link>
        </Container>
      </main>
      <SiteFooter />
    </div>
  )
}
