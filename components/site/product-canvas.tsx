import { site } from "@/content/site"

const nav = ["Overview", "Sites", "Apps", "Automations", "Brand"]

const rows = [
  { maker: "Bosch", work: "Product site", status: "Live", tone: "lagoon" },
  { maker: "BASF", work: "Internal app", status: "Iterate", tone: "sun" },
  { maker: "GEA", work: "Automation", status: "MVP", tone: "flame" },
  { maker: "Enel", work: "Brand system", status: "Brief", tone: "reef" },
]

const tones: Record<string, string> = {
  flame: "bg-flame/15 text-flame",
  sun: "bg-sun/15 text-sun",
  lagoon: "bg-lagoon/15 text-lagoon",
  reef: "bg-reef/20 text-lagoon",
}

export function ProductCanvas() {
  return (
    <div className="relative">
      <div className="product-glow pointer-events-none absolute inset-x-8 -bottom-10 h-40 rounded-full blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#1a1918] shadow-[0_40px_80px_-32px_rgba(0,0,0,0.85)]">
        <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <p className="ml-3 font-mono text-[11px] tracking-wide text-white/40">
            studio.makerweb
          </p>
        </div>
        <div className="grid min-[800px]:grid-cols-[13rem_1fr]">
          <aside className="hidden border-r border-white/8 p-4 min-[800px]:block">
            <p className="px-2 text-[11px] font-medium tracking-wide text-white/35 uppercase">
              Studio
            </p>
            <ul className="mt-3 space-y-0.5">
              {nav.map((item, index) => (
                <li
                  key={item}
                  className={
                    index === 0
                      ? "rounded-lg bg-white/8 px-2.5 py-2 text-sm font-medium"
                      : "rounded-lg px-2.5 py-2 text-sm text-white/55"
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
          <div className="p-4 min-[800px]:p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] tracking-wide text-white/40 uppercase">
                  {site.studio.kicker}
                </p>
                <h3 className="mt-1 text-lg font-semibold">Active programmes</h3>
              </div>
              <span className="rounded-full bg-flame px-3 py-1 text-xs font-medium">
                Ship MVP
              </span>
            </div>
            <div className="mt-5 overflow-hidden rounded-xl border border-white/8">
              <div className="grid grid-cols-[1fr_1fr_5.5rem] bg-white/4 px-4 py-2 font-mono text-[10px] tracking-wide text-white/40 uppercase">
                <span>Maker</span>
                <span>Work</span>
                <span>Status</span>
              </div>
              <ul>
                {rows.map((row) => (
                  <li
                    key={row.maker}
                    className="grid grid-cols-[1fr_1fr_5.5rem] items-center border-t border-white/6 px-4 py-3 text-sm"
                  >
                    <span className="font-medium">{row.maker}</span>
                    <span className="text-white/55">{row.work}</span>
                    <span
                      className={`justify-self-start rounded-full px-2 py-0.5 text-[11px] font-medium ${tones[row.tone]}`}
                    >
                      {row.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {site.process.steps.slice(0, 3).map((step) => (
                <div
                  key={step.week}
                  className="rounded-xl border border-white/8 bg-white/3 px-3 py-3"
                >
                  <p className="font-mono text-[10px] text-flame">{step.week}</p>
                  <p className="mt-1 text-xs font-medium">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
