import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Engineering Atelier',
  description:
    'A multi-product studio dedicated to precision software. We craft focused tools with intention, replacing complexity with clarity.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
        {/* HERO SECTION */}
        <section className="mb-24">
          <h1 className="mb-6 font-serif text-7xl font-light tracking-tight text-white sm:text-8xl lg:text-9xl">
            Engineering Atelier
          </h1>
          <p className="mb-12 text-2xl leading-relaxed text-[#E5E5E5] sm:text-3xl">
            A multi-product studio dedicated to precision software
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-[#C4A76A] to-transparent" />
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="mb-24 py-24">
          <h2 className="mb-16 font-serif text-5xl font-light tracking-tight text-white sm:text-6xl">
            What We Believe
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Belief Card 1 */}
            <div className="rounded-lg border border-[#1F1F1F] bg-[#1A1A1A] p-8 transition-all hover:border-[#C4A76A]/30">
              <div className="mb-4 h-1 w-12 bg-[#C4A76A]" />
              <h3 className="mb-4 font-serif text-2xl font-light text-white">
                Software should be invisible
              </h3>
              <p className="leading-relaxed text-[#E5E5E5]">
                The best tools disappear into your workflow. They don't demand
                attention—they simply work.
              </p>
            </div>

            {/* Belief Card 2 */}
            <div className="rounded-lg border border-[#1F1F1F] bg-[#1A1A1A] p-8 transition-all hover:border-[#C4A76A]/30">
              <div className="mb-4 h-1 w-12 bg-[#C4A76A]" />
              <h3 className="mb-4 font-serif text-2xl font-light text-white">
                Complexity is a design failure
              </h3>
              <p className="leading-relaxed text-[#E5E5E5]">
                Every feature we ship must earn its place. We build with
                intention, not accumulation.
              </p>
            </div>

            {/* Belief Card 3 */}
            <div className="rounded-lg border border-[#1F1F1F] bg-[#1A1A1A] p-8 transition-all hover:border-[#C4A76A]/30">
              <div className="mb-4 h-1 w-12 bg-[#C4A76A]" />
              <h3 className="mb-4 font-serif text-2xl font-light text-white">
                Reliability is non-negotiable
              </h3>
              <p className="leading-relaxed text-[#E5E5E5]">
                Our tools work on day one. No endless betas, no broken promises.
              </p>
            </div>
          </div>
        </section>

        {/* APPROACH SECTION */}
        <section className="mb-24 py-24">
          <h2 className="mb-16 font-serif text-5xl font-light tracking-tight text-white sm:text-6xl">
            How We Build
          </h2>
          <div className="relative">
            {/* Vertical gold line connector */}
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-[#C4A76A] via-[#C4A76A] to-[#C4A76A]/20" />

            <div className="space-y-12">
              {/* Step 1: Research */}
              <div className="relative flex gap-8">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#C4A76A] bg-[#0A0A0A]">
                  <span className="font-serif text-xl font-light text-[#C4A76A]">
                    1
                  </span>
                </div>
                <div className="flex-1 pb-4 pt-2">
                  <h3 className="mb-3 font-serif text-3xl font-light text-white">
                    Research
                  </h3>
                  <p className="text-lg leading-relaxed text-[#E5E5E5]">
                    We study real-world workflows before writing code.
                    Understanding precedes building.
                  </p>
                </div>
              </div>

              {/* Step 2: Build */}
              <div className="relative flex gap-8">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#C4A76A] bg-[#0A0A0A]">
                  <span className="font-serif text-xl font-light text-[#C4A76A]">
                    2
                  </span>
                </div>
                <div className="flex-1 pb-4 pt-2">
                  <h3 className="mb-3 font-serif text-3xl font-light text-white">
                    Build
                  </h3>
                  <p className="text-lg leading-relaxed text-[#E5E5E5]">
                    Purpose-built tools for specific problems. Not platforms,
                    but focused solutions.
                  </p>
                </div>
              </div>

              {/* Step 3: Iterate */}
              <div className="relative flex gap-8">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#C4A76A] bg-[#0A0A0A]">
                  <span className="font-serif text-xl font-light text-[#C4A76A]">
                    3
                  </span>
                </div>
                <div className="flex-1 pb-4 pt-2">
                  <h3 className="mb-3 font-serif text-3xl font-light text-white">
                    Iterate
                  </h3>
                  <p className="text-lg leading-relaxed text-[#E5E5E5]">
                    Continuous refinement based on practitioner feedback.
                  </p>
                </div>
              </div>

              {/* Step 4: Ship */}
              <div className="relative flex gap-8">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#C4A76A] bg-[#0A0A0A]">
                  <span className="font-serif text-xl font-light text-[#C4A76A]">
                    4
                  </span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="mb-3 font-serif text-3xl font-light text-white">
                    Ship
                  </h3>
                  <p className="text-lg leading-relaxed text-[#E5E5E5]">
                    Reliable software that works. No excuses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MULTI-PRODUCT SECTION */}
        <section className="mb-24 py-24">
          <h2 className="mb-16 font-serif text-5xl font-light tracking-tight text-white sm:text-6xl">
            The House of Products
          </h2>
          <div className="mb-12 rounded-lg border border-[#1F1F1F] bg-[#1A1A1A] p-12">
            <p className="mb-8 text-xl leading-relaxed text-[#E5E5E5] sm:text-2xl">
              Firmis Labs operates as an engineering atelier—a studio that
              crafts multiple independent products under a unified philosophy.
              Each tool is purpose-built for a specific workflow, designed to
              excel at one thing rather than attempting everything.
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-[#C4A76A] to-transparent" />
          </div>

          {/* Product Showcase */}
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="group rounded-lg border border-[#1F1F1F] bg-[#1A1A1A] p-8 transition-all hover:border-[#C4A76A]/50">
              <div className="mb-4 flex h-16 items-center">
                <span className="font-serif text-3xl font-light text-white">
                  SB
                </span>
              </div>
              <h3 className="mb-2 font-serif text-xl font-light text-white">
                SessionBank
              </h3>
              <p className="text-sm text-[#E5E5E5]/70">
                Browser session management
              </p>
            </div>

            <div className="group rounded-lg border border-[#1F1F1F] bg-[#1A1A1A] p-8 transition-all hover:border-[#C4A76A]/50">
              <div className="mb-4 flex h-16 items-center">
                <span className="font-serif text-3xl font-light text-white">
                  LT
                </span>
              </div>
              <h3 className="mb-2 font-serif text-xl font-light text-white">
                LinkTransparency
              </h3>
              <p className="text-sm text-[#E5E5E5]/70">
                URL tracking detection
              </p>
            </div>

            <div className="group rounded-lg border border-[#1F1F1F] bg-[#1A1A1A] p-8 transition-all hover:border-[#C4A76A]/50">
              <div className="mb-4 flex h-16 items-center">
                <span className="font-serif text-3xl font-light text-white">
                  TT
                </span>
              </div>
              <h3 className="mb-2 font-serif text-xl font-light text-white">
                Thumbnail Tester
              </h3>
              <p className="text-sm text-[#E5E5E5]/70">
                YouTube preview testing
              </p>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="py-12">
          <div className="rounded-lg border-2 border-[#C4A76A]/30 bg-[#1A1A1A] p-12 text-center">
            <p className="mb-6 font-serif text-3xl font-light text-white sm:text-4xl">
              Precision tools for modern operators
            </p>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-lg bg-[#C4A76A] px-8 py-4 font-medium text-[#0A0A0A] transition-all hover:bg-[#D4B77A]"
            >
              Explore Products
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
