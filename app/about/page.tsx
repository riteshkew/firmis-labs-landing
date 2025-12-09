import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About - Firmis Labs',
  description:
    'A multi-product studio building focused tools for practitioners. Precision over feature bloat. Reliability is non-negotiable.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C]">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        {/* HERO */}
        <section className="mb-20 pt-8 sm:mb-32 sm:pt-16">
          <h1
            className="mb-6 font-light tracking-tight text-[#FAFAF9]"
            style={{
              fontSize: 'clamp(2rem, 1.5rem + 3vw, 3.5rem)',
              lineHeight: '1.1',
            }}
          >
            Engineering Atelier
          </h1>
        </section>

        {/* PHILOSOPHY - PROSE LAYOUT */}
        <section className="mb-20 sm:mb-32">
          <div className="prose-invert max-w-none">
            <p className="mb-6 text-lg leading-[1.7] text-[#A3A3A3]">
              Firmis Labs operates as a multi-product studio. We build focused
              tools for practitioners who need software that{' '}
              <span className="text-[#FAFAF9]">works</span>, not software that
              markets well.
            </p>

            <p className="mb-6 text-lg leading-[1.7] text-[#A3A3A3]">
              Each product we ship is purpose-built for a specific problem.{' '}
              <span className="text-[#FAFAF9]">
                Precision over feature bloat.
              </span>{' '}
              We don't build platforms or all-in-one solutions. We build tools
              that do one thing exceptionally well.
            </p>

            <p className="mb-6 text-lg leading-[1.7] text-[#A3A3A3]">
              Our software is built for practitioners, not personas. The people
              who use our tools every day—designers, developers,
              operators—demand reliability. So we make{' '}
              <span className="text-[#FAFAF9]">reliability non-negotiable.</span>
            </p>
          </div>
        </section>

        {/* BELIEFS - MINIMAL STYLED QUOTES */}
        <section className="mb-20 sm:mb-32">
          <div className="space-y-10">
            <div className="border-l-2 border-[#262626] pl-6">
              <p className="mb-2 text-xl leading-[1.5] text-[#FAFAF9]">
                "Software should be invisible"
              </p>
              <p className="text-base leading-[1.7] text-[#737373]">
                The best tools disappear into your workflow. They don't demand
                attention.
              </p>
            </div>

            <div className="border-l-2 border-[#262626] pl-6">
              <p className="mb-2 text-xl leading-[1.5] text-[#FAFAF9]">
                "Complexity is a design failure"
              </p>
              <p className="text-base leading-[1.7] text-[#737373]">
                Every feature must earn its place. We build with intention, not
                accumulation.
              </p>
            </div>

            <div className="border-l-2 border-[#262626] pl-6">
              <p className="mb-2 text-xl leading-[1.5] text-[#FAFAF9]">
                "Reliability is non-negotiable"
              </p>
              <p className="text-base leading-[1.7] text-[#737373]">
                Our tools work on day one. No endless betas, no broken promises.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS - CLEAN NUMBERED LIST */}
        <section className="mb-20 sm:mb-32">
          <h2 className="mb-10 text-2xl font-light leading-tight tracking-tight text-[#FAFAF9]">
            How We Build
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <span className="shrink-0 text-base font-normal text-[#D97757]">
                01
              </span>
              <div>
                <h3 className="mb-2 text-lg font-normal leading-tight text-[#FAFAF9]">
                  Research
                </h3>
                <p className="text-base leading-[1.7] text-[#737373]">
                  We study real-world workflows before writing code.
                  Understanding precedes building.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <span className="shrink-0 text-base font-normal text-[#D97757]">
                02
              </span>
              <div>
                <h3 className="mb-2 text-lg font-normal leading-tight text-[#FAFAF9]">
                  Build
                </h3>
                <p className="text-base leading-[1.7] text-[#737373]">
                  Purpose-built tools for specific problems. Not platforms, but
                  focused solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <span className="shrink-0 text-base font-normal text-[#D97757]">
                03
              </span>
              <div>
                <h3 className="mb-2 text-lg font-normal leading-tight text-[#FAFAF9]">
                  Iterate
                </h3>
                <p className="text-base leading-[1.7] text-[#737373]">
                  Continuous refinement based on practitioner feedback. Ship,
                  learn, improve.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <span className="shrink-0 text-base font-normal text-[#D97757]">
                04
              </span>
              <div>
                <h3 className="mb-2 text-lg font-normal leading-tight text-[#FAFAF9]">
                  Ship
                </h3>
                <p className="text-base leading-[1.7] text-[#737373]">
                  Reliable software that works. No excuses, no broken promises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING STATEMENT */}
        <section className="py-8">
          <p className="mb-8 text-lg leading-[1.7] text-[#A3A3A3]">
            We build tools for people who value precision over popularity,
            reliability over rapid releases, and clarity over complexity.
          </p>

          <Link
            href="/products"
            className="inline-flex items-center text-base text-[#D97757] transition-colors hover:text-[#E89873]"
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
        </section>
      </div>
    </div>
  )
}
