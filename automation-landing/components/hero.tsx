"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { OrbitFeatures } from "@/components/orbit-features"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function Hero() {
  const [animateText, setAnimateText] = useState(true)

  return (
    <section className="relative overflow-hidden border-b">
      {/* animated lines background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-animated-lines opacity-[0.55] dark:opacity-50"
        aria-hidden="true"
      />
      {/* add subtle dotted grid overlay to enrich background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-dot-grid [mask-image:radial-gradient(900px_450px_at_50%_-10%,rgba(0,0,0,0.45),transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-transparent to-background/80"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="space-y-6">
          <p className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            New • Automations in minutes
          </p>
          <h1
            className={[
              "text-balance text-4xl font-semibold leading-tight sm:text-5xl",
              animateText ? "text-animated-gradient" : "",
            ].join(" ")}
          >
            Automate your work across every app you use.
          </h1>
          <p className={["text-pretty text-muted-foreground", animateText ? "text-animated-soft" : ""].join(" ")}>
            FlowForge connects your tools and moves data between them so you can focus on what matters. Build workflows
            visually, trigger on events, and ship automations fast.
          </p>

          <div className="flex flex-col items-start gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="/sign-up" aria-label="Start free with FlowForge">
                Start free
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#features" aria-label="See FlowForge features">
                See features
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <Switch id="animate-text" checked={animateText} onCheckedChange={(v) => setAnimateText(Boolean(v))} />
            <Label htmlFor="animate-text" className="text-sm text-muted-foreground">
              Animate text colors
            </Label>
          </div>

          <ul className="grid grid-cols-2 gap-4 pt-2 text-sm text-muted-foreground sm:grid-cols-3">
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" /> No-code builder
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" /> 5k+ app actions
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" /> Webhooks + APIs
            </li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          {/* subtle glows */}
          <div
            className="absolute -left-10 -top-10 -z-10 size-40 rounded-full bg-primary/10 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="absolute -right-8 bottom-6 -z-10 size-28 rounded-full bg-accent/40 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative rounded-xl border bg-card p-4 shadow-sm">
            {/* Visual workflow card */}
            <div className="rounded-lg border bg-background p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Workflow</span>
                <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">Active</span>
              </div>
              <div className="mt-4 grid gap-4">
                <div className="grid grid-cols-[auto,1fr] items-center gap-3">
                  <div className="size-10 rounded-md bg-primary/10 p-2">
                    <img
                      alt="Trigger app icon"
                      src={"/placeholder.svg?height=32&width=32&query=calendar app icon"}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">When Event is added</p>
                    <p className="text-xs text-muted-foreground">Google Calendar</p>
                  </div>
                </div>

                <div className="grid grid-cols-[auto,1fr] items-center gap-3">
                  <div className="size-10 rounded-md bg-primary/10 p-2">
                    <img
                      alt="Action app icon"
                      src={"/placeholder.svg?height=32&width=32&query=slack app icon"}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Send channel message</p>
                    <p className="text-xs text-muted-foreground">Slack</p>
                  </div>
                </div>

                <div className="grid grid-cols-[auto,1fr] items-center gap-3">
                  <div className="size-10 rounded-md bg-primary/10 p-2">
                    <img
                      alt="Action app icon"
                      src={"/placeholder.svg?height=32&width=32&query=notion app icon"}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Create a page</p>
                    <p className="text-xs text-muted-foreground">Notion</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbiting features replacing the old circular badge */}
            <div className="absolute -right-10 -top-10">
              <OrbitFeatures />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
