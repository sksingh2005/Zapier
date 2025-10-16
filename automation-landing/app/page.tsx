import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogosMarquee } from "@/components/logos-marquee"
import { CTA } from "@/components/cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="relative">
        {/* optional global grid overlay behind sections to enhance background aesthetics */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-dot-grid [mask-image:radial-gradient(1200px_600px_at_50%_0%,rgba(0,0,0,0.55),transparent_70%)]"
        />
        <Hero />
        <LogosMarquee />
        <Features />
        <CTA />
      </main>
      {/* replace inline footer with component */}
      <SiteFooter />
    </>
  )
}
