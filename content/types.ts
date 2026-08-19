export type NavLink = {
  label: string
  href: string
  children?: NavLink[]
}

export type Cta = {
  label: string
  href: string
}

export type Spec = {
  label: string
  value: string
  title: string
  text: string
}

export type WorkItem = {
  slug: string
  client: string
  title: string
  kicker: string
  summary: string
  href: string
  year: string
  services: string[]
  metrics: { label: string; value: string }[]
  tone: "ember" | "ink" | "haze" | "dusk"
}
