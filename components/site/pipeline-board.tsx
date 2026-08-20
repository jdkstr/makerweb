import { site } from "@/content/site"

const status = ["Queued", "In flight", "Shipped", "Support"]

export function PipelineBoard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#1a1918] p-4 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.8)] min-[800px]:p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-medium">Programme board</p>
        <span className="rounded-full bg-white/8 px-2.5 py-1 font-mono text-[10px] text-white/50">
          Live
        </span>
      </div>
      <div className="grid gap-3 min-[700px]:grid-cols-2">
        {site.process.steps.map((step, index) => (
          <div
            key={step.week}
            className="rounded-xl border border-white/8 bg-white/3 p-4"
          >
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] text-flame">{step.week}</p>
              <p className="text-[11px] text-white/40">{status[index]}</p>
            </div>
            <p className="mt-2 text-sm font-semibold">{step.title}</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8">
              <div
                className="h-full rounded-full bg-flame"
                style={{ width: `${25 * (index + 1)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
