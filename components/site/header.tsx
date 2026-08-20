"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/site/logo"
import {
  ServicesMega,
  StudioMega,
  WorkMega,
  serviceLinks,
} from "@/components/site/mega-menu"
import { cn } from "@/lib/utils"
import { site } from "@/content/site"
import { studioNav } from "@/content/navigation"

const triggerClass = cn(
  navigationMenuTriggerStyle(),
  "h-8 rounded-md bg-transparent px-2.5 text-[13px] font-medium"
)

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ash/80 bg-paper/80 backdrop-blur-md">
      <div className="container-site relative flex h-14 items-center">
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="mr-2 rounded-md hover:bg-muted min-[900px]:hidden"
              />
            }
          >
            <Menu className="size-5" />
            <span className="sr-only">Menu</span>
          </SheetTrigger>
          <SheetContent
            side="right"
            showCloseButton={false}
            className="w-full max-w-sm gap-0 border-l bg-card p-0 sm:max-w-sm"
          >
            <div className="flex items-center justify-between border-b px-4 py-3">
              <Logo className="text-foreground" />
              <SheetClose
                render={
                  <Button variant="ghost" size="icon" className="rounded-md" />
                }
              >
                <X className="size-5" />
                <span className="sr-only">Close</span>
              </SheetClose>
              <SheetTitle className="sr-only">Menu</SheetTitle>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-2">
              <Accordion className="w-full">
                <AccordionItem value="work">
                  <AccordionTrigger className="rounded-md px-1 text-[15px] hover:no-underline">
                    Work
                  </AccordionTrigger>
                  <AccordionContent className="[&_a]:no-underline">
                    <ul className="pb-2">
                      {site.work.map((item) => (
                        <li key={item.href}>
                          <SheetClose
                            render={
                              <Link
                                href={item.href}
                                className="block rounded-md px-1 py-2"
                              />
                            }
                          >
                            <span className="block text-sm font-medium">
                              {item.client}
                            </span>
                            <span className="block text-xs text-muted-foreground">
                              {item.kicker}
                            </span>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="services">
                  <AccordionTrigger className="rounded-md px-1 text-[15px] hover:no-underline">
                    Services
                  </AccordionTrigger>
                  <AccordionContent className="[&_a]:no-underline">
                    <ul className="pb-2">
                      {serviceLinks.map((item) => (
                        <li key={item.title}>
                          <SheetClose
                            render={
                              <Link
                                href={item.href}
                                className="block rounded-md px-1 py-2 text-sm"
                              />
                            }
                          >
                            {item.title}
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="studio">
                  <AccordionTrigger className="rounded-md px-1 text-[15px] hover:no-underline">
                    Studio
                  </AccordionTrigger>
                  <AccordionContent className="[&_a]:no-underline">
                    <ul className="pb-2">
                      {studioNav.map((item) => (
                        <li key={item.href}>
                          <SheetClose
                            render={
                              <Link
                                href={item.href}
                                className="block rounded-md px-1 py-2 text-sm"
                              />
                            }
                          >
                            {item.label}
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </nav>
            <Separator />
            <div className="flex flex-col gap-2 p-4">
              <SheetClose
                render={
                  <Link
                    href="/work"
                    className={cn(
                      buttonVariants({ variant: "makerOutline", size: "lg" }),
                      "h-10 rounded-sm"
                    )}
                  />
                }
              >
                See the work
              </SheetClose>
              <SheetClose
                render={
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "maker", size: "lg" }),
                      "h-10 rounded-sm"
                    )}
                  />
                }
              >
                Start a project
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="text-foreground">
          <span className="sr-only">Makerweb</span>
          <Logo />
        </Link>

        <NavigationMenu
          align="center"
          sideOffset={8}
          className="absolute top-1/2 left-1/2 hidden max-w-none -translate-x-1/2 -translate-y-1/2 min-[900px]:flex"
          popupClassName="rounded-md data-starting-style:scale-100 data-ending-style:scale-100"
        >
          <NavigationMenuList className="gap-0.5">
            <NavigationMenuItem>
              <NavigationMenuTrigger className={triggerClass}>
                Work
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-auto p-0">
                <WorkMega />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={triggerClass}>
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-auto p-0">
                <ServicesMega />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={triggerClass}>
                Studio
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-auto p-0">
                <StudioMega />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-1 min-[900px]:gap-2">
          <Link
            href="/journal"
            className={cn(triggerClass, "hidden min-[900px]:inline-flex")}
          >
            Journal
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "maker", size: "sm" }),
              "h-8 rounded-md px-3 text-[13px]"
            )}
          >
            Start a project
          </Link>
        </div>
      </div>
    </header>
  )
}
