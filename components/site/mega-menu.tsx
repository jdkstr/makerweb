import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { WorkArt } from "@/components/site/work-card"
import { site } from "@/content/site"
import { studioNav } from "@/content/navigation"
import { cn } from "@/lib/utils"

const itemClass =
  "flex items-start gap-3 rounded-md p-2 no-underline hover:bg-muted focus:bg-muted"

export const workLinks = site.work.map((item) => ({
  title: item.client,
  href: item.href,
  text: item.title,
  tone: item.tone,
}))

export const serviceLinks = site.capabilities.map((item) => ({
  title: item.label,
  href: item.href,
  text: item.text,
}))

function MegaItem({
  href,
  title,
  text,
}: {
  href: string
  title: string
  text: string
}) {
  return (
    <NavigationMenuLink className={itemClass} render={<Link href={href} />}>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-xs leading-4 text-muted-foreground">{text}</span>
      </span>
    </NavigationMenuLink>
  )
}

function JournalColumn() {
  return (
    <div className="flex flex-col bg-muted/50 p-3 min-[800px]:border-l">
      <p className="mb-2 px-1 text-xs font-medium text-muted-foreground">
        Journal
      </p>
      <ul className="space-y-0.5">
        {site.journal.slice(0, 3).map((item) => (
          <li key={item.title}>
            <NavigationMenuLink
              className="block rounded-md p-2 no-underline hover:bg-background"
              render={<Link href={item.href} />}
            >
              <span className="block text-[11px] text-muted-foreground">
                {item.date} · {item.tag}
              </span>
              <span className="mt-0.5 line-clamp-2 text-sm leading-snug">
                {item.title}
              </span>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
      <NavigationMenuLink
        className="mt-1 inline-flex items-center gap-1.5 rounded-md p-2 text-sm font-medium text-primary no-underline hover:bg-background hover:underline"
        render={<Link href="/journal" />}
      >
        All notes
        <ArrowRight className="size-3.5" />
      </NavigationMenuLink>
    </div>
  )
}

export function WorkMega() {
  const featured = site.work[0]

  return (
    <div className="grid w-[min(92vw,40rem)] min-[900px]:w-[52rem] min-[900px]:grid-cols-[1fr_16.5rem]">
      <div className="p-2">
        <NavigationMenuLink
          className={cn(itemClass, "mb-1 overflow-hidden p-0")}
          render={<Link href={featured.href} />}
        >
          <span className="relative hidden h-[7.5rem] w-[11rem] shrink-0 overflow-hidden rounded-sm min-[800px]:block">
            <WorkArt work={featured} className="size-full rounded-none" />
          </span>
          <span className="flex flex-col justify-center p-3">
            <span className="text-[11px] font-medium text-muted-foreground">
              Featured
            </span>
            <span className="mt-1 text-sm font-medium">{featured.client}</span>
            <span className="mt-0.5 text-xs leading-4 text-muted-foreground">
              {featured.title}
            </span>
          </span>
        </NavigationMenuLink>
        <Separator className="my-2" />
        <div className="grid gap-0.5 min-[800px]:grid-cols-2">
          {site.work.map((item) => (
            <MegaItem
              key={item.href}
              href={item.href}
              title={item.client}
              text={item.kicker}
            />
          ))}
        </div>
      </div>
      <JournalColumn />
    </div>
  )
}

export function ServicesMega() {
  return (
    <div className="grid w-[22rem] gap-0.5 p-2">
      {serviceLinks.map((item) => (
        <MegaItem key={item.title} {...item} />
      ))}
    </div>
  )
}

export function StudioMega() {
  return (
    <div className="grid w-[16rem] gap-0.5 p-2">
      {studioNav.map((link) => (
        <NavigationMenuLink
          key={link.href}
          className="rounded-md px-3 py-2 text-sm no-underline"
          render={<Link href={link.href} />}
        >
          {link.label}
        </NavigationMenuLink>
      ))}
    </div>
  )
}
