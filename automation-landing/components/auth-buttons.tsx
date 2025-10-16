"use client"

import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { useState } from "react"

export function AuthButtons() {
  const [loading, setLoading] = useState<string | null>(null)
  async function handle(provider: "google" | "github") {
    try {
      setLoading(provider)
      await signIn(provider, { callbackUrl: "/" })
    } finally {
      setLoading(null)
    }
  }
  return (
    <div className="grid gap-3">
      <Button
        variant="default"
        onClick={() => handle("google")}
        aria-label="Continue with Google"
        disabled={loading === "google"}
      >
        {loading === "google" ? "Continuing..." : "Continue with Google"}
      </Button>
      <Button
        variant="outline"
        onClick={() => handle("github")}
        aria-label="Continue with GitHub"
        disabled={loading === "github"}
      >
        {loading === "github" ? "Continuing..." : "Continue with GitHub"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        By continuing you agree to our Terms and Privacy Policy.
      </p>
    </div>
  )
}
