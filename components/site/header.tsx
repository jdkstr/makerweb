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
    <header className="sticky top-0 z-40">
      <div className="absolute inset-0 border-b border-white/8 bg-void/70 backdrop-blur-xl" />
      <div className="container-site relative flex h-[4.25rem] items-center">
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="mr-1 rounded-full text-white hover:bg-white/8 min-[860px]:hidden"
              />
            }
          >
            <Menu className="size-5" />
            <span className="sr-only">Menu</span>
          </SheetTrigger>
          <SheetContent
            side="right"
            showCloseButton={false}
            className="w-full max-w-sm gap-0 rounded-none border-l border-white/10 bg-void p-0 text-white sm:max-w-sm"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <Logo />
              <SheetClose
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-white"
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
                      className="rounded-lg px-2 py-3 text-base font-medium"
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
                      buttonVariants({ variant: "maker", size: "lg" }),
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

        <Link href="/" className="text-white">
          <span className="sr-only">Makerweb</span>
          <Logo />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 min-[860px]:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/6 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/#makers"
            className={cn(
              buttonVariants({ variant: "makerGhost", size: "sm" }),
              "hidden h-9 px-3.5 text-sm min-[860px]:inline-flex"
            )}
          >
            See our work
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "maker", size: "sm" }),
              "h-9 px-4 text-sm"
            )}
          >
            Contact us
          </Link>
        </div>
      </div>
    </header>
  )
}
