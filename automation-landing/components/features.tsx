import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  const items = [
    {
      title: "Visual builder",
      desc: "Drag, drop, and connect steps. No code required.",
      icon: "diagram nodes icon",
    },
    {
      title: "Event triggers",
      desc: "Kick off flows on webhooks, schedules, or app events.",
      icon: "zap bolt icon",
    },
    {
      title: "Branching & filters",
      desc: "Add if/else rules and route data to the right place.",
      icon: "branching icon",
    },
    {
      title: "5k+ actions",
      desc: "A massive catalog of app actions ready to use.",
      icon: "apps grid icon",
    },
    {
      title: "Retry & logging",
      desc: "Built-in retries and searchable run logs.",
      icon: "logs icon",
    },
    {
      title: "Secure by design",
      desc: "OAuth, token vault, and least-privilege scopes.",
      icon: "shield lock icon",
    },
  ]

  return (
    <section id="features" className="border-b bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">Everything you need to automate</h2>
          <p className="mt-3 text-muted-foreground">Connect your stack and build powerful workflows with confidence.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Card key={it.title} className="group transition-colors hover:border-primary">
              <CardHeader>
                <div className="size-10 rounded-md bg-primary/10 p-2">
                  <img
                    src={`/.jpg?height=32&width=32&query=${encodeURIComponent(it.icon)}`}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
                <CardTitle className="mt-4">{it.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{it.desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
