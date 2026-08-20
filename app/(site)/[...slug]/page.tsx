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
    <main id="main-content" className="flex-1 bg-void">
      <Container className="py-16 md:py-24">
        <p className="mb-3 font-mono text-xs tracking-wide text-flame uppercase">
          Makerweb
        </p>
        <h1 className="mb-4 text-4xl font-semibold">{title}</h1>
        <p className="mb-8 max-w-2xl text-[15px] leading-7 text-white/65">
          This inner page is a stub so the chrome can be clicked through.
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
  )
}
