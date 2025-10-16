"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const nav = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
]

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="FlowForge Home">
          <div className="size-6 rounded-md bg-primary" />
          <span className="font-semibold tracking-tight">FlowForge</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {pathname === "/sign-in" ? (
            <Button asChild variant="ghost">
              <Link href="/sign-up">Create account</Link>
            </Button>
          ) : (
            <Button asChild variant="ghost">
              <Link href="/sign-in">Sign in</Link>
            </Button>
          )}
          <Button asChild>
            <Link href="/sign-up">Get started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
