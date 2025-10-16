import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section id="pricing" className="border-b">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h3 className="text-2xl font-semibold">Start automating for free</h3>
          <p className="mt-2 text-muted-foreground">
            Build and run workflows with generous free limits. Upgrade when you need more runs, steps, or teams.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" /> 1000 runs / month
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" /> Unlimited workflows
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" /> Team collaboration
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            <Button asChild size="lg">
              <a href="/sign-up">Create your account</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/sign-in">I already have an account</a>
            </Button>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Free</span>
            <span className="text-3xl font-semibold">$0</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Everything you need to get started.</p>
          <hr className="my-6" />
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg border p-3">
              <p className="font-medium">Runs</p>
              <p className="text-muted-foreground">1000 / mo</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="font-medium">Steps / run</p>
              <p className="text-muted-foreground">Up to 50</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="font-medium">Connected apps</p>
              <p className="text-muted-foreground">Unlimited</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="font-medium">Team seats</p>
              <p className="text-muted-foreground">2 included</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
