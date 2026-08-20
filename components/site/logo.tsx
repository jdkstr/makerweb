import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[15px] font-medium tracking-tight",
        className
      )}
    >
        <svg
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-6 shrink-0"
        aria-hidden
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4 0h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4Zm2 5h7v18H6V5Zm9 6h7v12h-7V11Z"
        />
      </svg>
      Makerweb
    </span>
  )
}
