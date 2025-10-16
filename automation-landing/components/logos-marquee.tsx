export function LogosMarquee() {
  const logos = ["Acme", "Quantum", "Northwind", "Globex", "Umbrella", "Stark", "Wayne"]
  return (
    <section aria-label="Trusted by great teams" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="mb-6 text-center text-sm text-muted-foreground">Trusted by product, ops, and engineering teams</p>
        <div className="relative overflow-hidden">
          <div className="animate-marquee flex gap-10 whitespace-nowrap opacity-80">
            {logos.concat(logos).map((name, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="size-6 rounded bg-muted" aria-hidden="true" />
                <span className="text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
