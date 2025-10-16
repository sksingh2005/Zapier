type OrbitItem = {
  src: string
  alt: string
}

const ITEMS: OrbitItem[] = [
  { src: "/gmail-icon.png", alt: "Gmail" },
  { src: "/slack-icon.png", alt: "Slack" },
  { src: "/notion-icon.png", alt: "Notion" },
  { src: "/google-sheets-icon.png", alt: "Google Sheets" },
  { src: "/airtable-icon.png", alt: "Airtable" },
  { src: "/github-icon.png", alt: "GitHub" },
]

export function OrbitFeatures() {
  const radius = 90
  return (
    <div
      className="relative mx-auto size-56 rounded-full border bg-card/60 backdrop-blur-sm"
      aria-hidden="true"
      role="img"
    >
      {/* spinning ring */}
      <div className="pointer-events-none absolute inset-0 rounded-full border border-dashed opacity-60 animate-spin-very-slow" />

      {/* center core */}
      <div className="absolute left-1/2 top-1/2 size-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-md" />

      {/* orbiting items */}
      <div className="absolute inset-0 animate-spin-very-slow will-change-transform">
        {ITEMS.map((item, i) => {
          const angle = (i / ITEMS.length) * 360
          return (
            <div
              key={item.alt}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `rotate(${angle}deg) translateY(-${radius}px)` }}
            >
              <div
                className="flex size-12 -rotate-[var(--angle)] items-center justify-center rounded-full border bg-background shadow-sm animate-spin-reverse-match"
                style={{ ["--angle" as any]: `${angle}deg` }}
              >
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  className="h-7 w-7 object-contain"
                  cross-origin="anonymous"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
