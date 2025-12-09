import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'About - Firmis Labs',
  description:
    'A multi-product studio building focused tools for practitioners. Precision over feature bloat. Reliability is non-negotiable.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        {/* HEADER */}
        <section className="mb-16 pt-8 sm:mb-24 sm:pt-16">
          <h1
            className="mb-4 font-light tracking-tight text-foreground"
            style={{
              fontSize: 'clamp(2rem, 1.5rem + 3vw, 3.5rem)',
              lineHeight: '1.1',
            }}
          >
            About Firmis Labs
          </h1>
          <Separator className="mt-8" />
        </section>

        {/* OPENING SECTION - PHILOSOPHY */}
        <section className="mb-16 sm:mb-24">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We believe in building focused, single-purpose tools that do one thing exceptionally well.
              No feature bloat. No unnecessary complexity. Just software that serves a clear purpose and serves it reliably.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Every product we build is purpose-crafted for practitioners—the people who live in their
              tools every day. We don't design for personas or market segments. We design for real workflows,
              real problems, and real people who demand{' '}
              <span className="font-medium text-foreground">software that simply works</span>.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              In a world of platforms promising to do everything, we choose deliberate constraint.
              We're not building the next all-in-one solution. We're building tools that disappear
              into your workflow because they do exactly what they're meant to do.
            </p>
          </div>
        </section>

        <Separator className="my-16 sm:my-24" />

        {/* WHAT WE BELIEVE */}
        <section className="mb-16 sm:mb-24">
          <h2 className="mb-10 text-2xl font-light tracking-tight text-foreground">
            What We Believe
          </h2>

          <div className="grid gap-6">
            <Card className="border-border/40 bg-card/30">
              <CardContent className="pt-6">
                <h3 className="mb-3 text-lg font-medium text-foreground">
                  Single-purpose tools
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Software should do one thing exceptionally well. Feature creep is a design failure.
                  Every capability must earn its place. We build with intention, not accumulation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 bg-card/30">
              <CardContent className="pt-6">
                <h3 className="mb-3 text-lg font-medium text-foreground">
                  Practitioner-first
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Built for people who do the work, not people who buy the software.
                  We design for daily use by skilled practitioners who need tools that integrate
                  seamlessly into demanding workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 bg-card/30">
              <CardContent className="pt-6">
                <h3 className="mb-3 text-lg font-medium text-foreground">
                  Sustainable software
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Fair pricing. No surveillance capitalism. No dark patterns.
                  We build businesses that respect users and create value without exploitation.
                  Sustainable for us, sustainable for you.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 bg-card/30">
              <CardContent className="pt-6">
                <h3 className="mb-3 text-lg font-medium text-foreground">
                  Craft over speed
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Quality takes time. We don't ship fast and break things. We ship when it's ready,
                  when it's reliable, when it meets our standards. Your workflow deserves better than perpetual beta.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-16 sm:my-24" />

        {/* TEAM/FOUNDER SECTION */}
        <section className="mb-16 sm:mb-24">
          <h2 className="mb-8 text-2xl font-light tracking-tight text-foreground">
            Who We Are
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Firmis Labs is a small, deliberate team of engineers and designers who've spent years
            building software for others. We started this studio to build the tools we wished existed—tools
            that respect our time, match our workflows, and don't compromise on quality.
          </p>
        </section>

        <Separator className="my-16 sm:my-24" />

        {/* CTA TO CONTACT */}
        <section className="py-8">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We're building tools for people who value precision, reliability, and clarity.
              If that resonates with you, we'd like to hear from you.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:gap-6">
              <Link
                href="/products"
                className="inline-flex items-center text-base font-medium text-primary transition-colors hover:text-primary/80"
              >
                View our products
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center text-base font-medium text-primary transition-colors hover:text-primary/80"
              >
                Get in touch
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
