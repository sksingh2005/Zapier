"use client"

export function AnimatedGridBg({
  className = "",
}: {
  className?: string
}) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="animated-grid h-full w-full opacity-[0.6] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.9),rgba(0,0,0,0.2)_60%,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,hsl(var(--grid-glow))_0%,transparent_60%)] mix-blend-overlay" />
    </div>
  )
}
