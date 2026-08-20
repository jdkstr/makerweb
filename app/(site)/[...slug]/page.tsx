import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { stubTitles } from "@/content/navigation"
import { cn } from "@/lib/utils"

type PageProps = {
  params: Promise<{ slug: string[] }>
}

function pathFromSlug(slug: string[]) {
  return `/${slug.join("/")}`
}

export function generateStaticParams() {
  return Object.keys(stubTitles).map((path) => ({
    slug: path.split("/").filter(Boolean),
  }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const title = stubTitles[pathFromSlug(slug)]
  if (!title) return {}
  return { title }
}

export default async function StubPage({ params }: PageProps) {
  const { slug } = await params
  const path = pathFromSlug(slug)
  const title = stubTitles[path]
  if (!title) notFound()

  return (
    <main id="main-content" className="flex-1 bg-paper">
      <Container className="py-16 md:py-24">
        <p className="mb-3 text-sm font-medium text-primary">Studio note</p>
        <h1 className="mb-4 text-[2rem] font-medium leading-tight md:text-[2.875rem]">
          {title}
        </h1>
        <p className="mb-8 max-w-2xl text-[15px] leading-7 text-stone">
          This page is a stub so the chrome can be clicked through. The
          homepage, work, services, process, studio, journal, and design system
          are fully designed.
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
  )
}
