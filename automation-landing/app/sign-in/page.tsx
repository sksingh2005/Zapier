import { SiteHeader } from "@/components/site-header"
import { AuthButtons } from "@/components/auth-buttons"

export default function SignInPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto grid max-w-md gap-6 px-4 py-16">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Sign in to your FlowForge account</p>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <AuthButtons />
        </div>
      </main>
    </>
  )
}
