import { site } from "@/content/site"

export function LogoMarquee() {
  const names = [...site.trust.names, ...site.trust.names]

  return (
    <section id="makers" className="border-y border-white/8 py-10">
      <p className="mb-6 text-center font-mono text-[11px] tracking-[0.18em] text-steel uppercase">
        {site.trust.kicker}
      </p>
      <div className="logo-marquee overflow-hidden">
        <ul className="logo-marquee-track flex w-max items-center gap-14 pr-14">
          {names.map((name, index) => (
            <li
              key={`${name}-${index}`}
              className="text-xl font-semibold tracking-tight text-steel/90"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
