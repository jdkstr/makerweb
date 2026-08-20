"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/site/logo"
import { cn } from "@/lib/utils"
import { site } from "@/content/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white text-void">
      <div className="container-site flex h-16 items-center">
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="mr-2 rounded-none text-void hover:bg-black/5 min-[800px]:hidden"
              />
            }
          >
            <Menu className="size-5" />
            <span className="sr-only">Menu</span>
          </SheetTrigger>
          <SheetContent
            side="right"
            showCloseButton={false}
            className="w-full max-w-sm gap-0 rounded-none border-l border-black/10 bg-white p-0 text-void sm:max-w-sm"
          >
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-3">
              <Logo inverted />
              <SheetClose
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-none text-void"
                  />
                }
              >
                <X className="size-5" />
                <span className="sr-only">Close</span>
              </SheetClose>
              <SheetTitle className="sr-only">Menu</SheetTitle>
            </div>
            <nav className="flex flex-col gap-1 p-4">
              {site.nav.map((item) => (
                <SheetClose
                  key={item.href}
                  render={
                    <Link
                      href={item.href}
                      className="px-1 py-3 text-base font-medium"
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>
            <div className="p-4">
              <SheetClose
                render={
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "makerInk", size: "lg" }),
                      "h-11 w-full px-5"
                    )}
                  />
                }
              >
                Contact us
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="text-void">
          <span className="sr-only">Makerweb</span>
          <Logo inverted />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 min-[800px]:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-void hover:text-flame"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: "makerInk", size: "sm" }),
            "ml-auto h-10 px-4 text-sm"
          )}
        >
          Contact us
        </Link>
      </div>
    </header>
  )
}
