import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { SiteFooter } from "@/components/site/footer"
import { SiteHeader } from "@/components/site/header"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-paper">
      <SiteHeader />
      <main id="main-content" className="flex-1 bg-paper">
        <Container className="py-16 md:py-24">
          <h1 className="mb-4 text-[2rem] font-medium md:text-[2.875rem]">
            Page not found
          </h1>
          <p className="mb-8 max-w-xl text-stone">
            This route is not part of the Makerweb site.
          </p>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "makerOutline", size: "lg" }),
              "h-10 rounded-sm px-5 text-sm"
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
