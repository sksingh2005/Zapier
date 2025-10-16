import { SiteHeader } from "@/components/site-header"
import { AuthButtons } from "@/components/auth-buttons"

export default function SignUpPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto grid max-w-md gap-6 px-4 py-16">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold">Create your account</h1>
          <p className="text-sm text-muted-foreground">Get started free — your first workflows are on us</p>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <AuthButtons />
        </div>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <a className="underline underline-offset-4" href="/sign-in">
            Sign in
          </a>
        </p>
      </main>
    </>
  )
}
