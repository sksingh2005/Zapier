import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-10 md:grid-cols-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-md bg-primary" />
            <span className="font-semibold tracking-tight">FlowForge</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Automate anything. Connect your tools and ship workflows in minutes.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-3 text-sm md:justify-self-center">
          <Link className="text-muted-foreground hover:text-foreground" href="#features">
            Features
          </Link>
          <Link className="text-muted-foreground hover:text-foreground" href="#how-it-works">
            How it works
          </Link>
          <Link className="text-muted-foreground hover:text-foreground" href="#pricing">
            Pricing
          </Link>
          <Link className="text-muted-foreground hover:text-foreground" href="#docs">
            Docs
          </Link>
        </nav>

        <div className="md:justify-self-end">
          <a
            href="/sign-up"
            className="inline-flex items-center rounded-md border bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            aria-label="Get started with FlowForge"
          >
            Get started
          </a>
          <p className="mt-2 text-xs text-muted-foreground">© {new Date().getFullYear()} FlowForge Automation.</p>
        </div>
      </div>
    </footer>
  )
}
