import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C]">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 py-32">
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <h1
            className="hero-headline mb-8 font-medium leading-[1.1] tracking-tight text-[#FAFAF9]"
            style={{
              fontSize: 'clamp(2.5rem, 2rem + 4vw, 4.5rem)',
            }}
          >
            Precision software for modern workflows
          </h1>

          <p className="hero-subheadline mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-[#A3A3A3] md:text-2xl">
            Building focused tools that solve real problems. No clutter, no compromise.
          </p>

          <div className="hero-ctas flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#products"
              className="inline-flex h-14 items-center justify-center rounded-md bg-[#D97757] px-10 text-base font-semibold text-white transition-all duration-300 hover:bg-[#E08B6D] hover:shadow-lg"
            >
              Explore Products
            </Link>

            <Link
              href="#approach"
              className="inline-flex h-14 items-center justify-center rounded-md border border-[#333] px-10 text-base font-semibold text-[#A3A3A3] transition-all duration-300 hover:border-[#404040] hover:text-white"
            >
              Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="relative px-6 py-32 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="products-header mb-20 text-center">
            <p className="mb-3 text-sm uppercase tracking-widest text-[#737373]">
              Products
            </p>
            <h2
              className="font-medium tracking-tight text-[#FAFAF9]"
              style={{
                fontSize: 'clamp(2rem, 1.5rem + 3vw, 3.5rem)',
              }}
            >
              Tools built for practitioners
            </h2>
          </div>

          <div className="products-grid grid gap-8 md:grid-cols-3">
            {/* SessionBank */}
            <article className="product-card group relative overflow-hidden rounded-lg border border-[#262626] bg-[#141414] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#333] hover:shadow-xl">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-3 w-3 items-center justify-center">
                  <div className="h-full w-full rounded-full bg-[#D97757]" />
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-medium text-[#FAFAF9]">
                SessionBank
              </h3>

              <p className="mb-6 leading-relaxed text-[#A3A3A3]">
                Calendar and payment sync for professionals. Automated invoicing that follows your schedule.
              </p>

              <Link
                href="/products/sessionbank"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D97757] transition-all duration-300 hover:gap-3"
              >
                Learn more
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </article>

            {/* LinkTransparency */}
            <article className="product-card group relative overflow-hidden rounded-lg border border-[#262626] bg-[#141414] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#333] hover:shadow-xl">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-3 w-3 items-center justify-center">
                  <div className="h-full w-full rounded-full bg-[#D97757]" />
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-medium text-[#FAFAF9]">
                LinkTransparency
              </h3>

              <p className="mb-6 leading-relaxed text-[#A3A3A3]">
                See where every link leads. Privacy-first transparency revealing redirects and tracking.
              </p>

              <Link
                href="/products/linktransparency"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D97757] transition-all duration-300 hover:gap-3"
              >
                Learn more
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </article>

            {/* Thumbnail Tester */}
            <article className="product-card group relative overflow-hidden rounded-lg border border-[#262626] bg-[#141414] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#333] hover:shadow-xl">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-3 w-3 items-center justify-center">
                  <div className="h-full w-full rounded-full bg-[#D97757]" />
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-medium text-[#FAFAF9]">
                Thumbnail Tester
              </h3>

              <p className="mb-6 leading-relaxed text-[#A3A3A3]">
                A/B test before you publish. Data-driven thumbnail optimization for content creators.
              </p>

              <Link
                href="/products/thumbnail-tester"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D97757] transition-all duration-300 hover:gap-3"
              >
                Learn more
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section id="approach" className="relative px-6 py-32 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="approach-header mb-20 text-center">
            <p className="mb-3 text-sm uppercase tracking-widest text-[#737373]">
              How we build
            </p>
            <h2
              className="font-medium tracking-tight text-[#FAFAF9]"
              style={{
                fontSize: 'clamp(2rem, 1.5rem + 3vw, 3.5rem)',
              }}
            >
              Our process
            </h2>
          </div>

          <div className="approach-grid grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Research */}
            <div className="approach-step group">
              <div className="mb-4 text-5xl font-medium text-[#D97757]">
                01
              </div>
              <h3 className="mb-3 text-xl font-medium text-[#FAFAF9]">
                Research
              </h3>
              <p className="leading-relaxed text-[#737373]">
                Deep understanding of real workflows and pain points. We listen before we build.
              </p>
            </div>

            {/* Build */}
            <div className="approach-step group">
              <div className="mb-4 text-5xl font-medium text-[#D97757]">
                02
              </div>
              <h3 className="mb-3 text-xl font-medium text-[#FAFAF9]">
                Build
              </h3>
              <p className="leading-relaxed text-[#737373]">
                Focused solutions that solve specific problems. Every feature earns its place.
              </p>
            </div>

            {/* Iterate */}
            <div className="approach-step group">
              <div className="mb-4 text-5xl font-medium text-[#D97757]">
                03
              </div>
              <h3 className="mb-3 text-xl font-medium text-[#FAFAF9]">
                Iterate
              </h3>
              <p className="leading-relaxed text-[#737373]">
                Continuous refinement based on real feedback. Better every day.
              </p>
            </div>

            {/* Ship */}
            <div className="approach-step group">
              <div className="mb-4 text-5xl font-medium text-[#D97757]">
                04
              </div>
              <h3 className="mb-3 text-xl font-medium text-[#FAFAF9]">
                Ship
              </h3>
              <p className="leading-relaxed text-[#737373]">
                Reliable software that works. No endless betas. Just tools that deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative px-6 py-32 md:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="cta-headline mb-6 font-medium tracking-tight text-[#FAFAF9]"
            style={{
              fontSize: 'clamp(2rem, 1.5rem + 3vw, 3.5rem)',
            }}
          >
            Ready to work with precision tools?
          </h2>

          <p className="cta-subheadline mb-10 text-xl leading-relaxed text-[#A3A3A3]">
            Join professionals who demand excellence from their software.
          </p>

          <Link
            href="#products"
            className="cta-button inline-flex h-14 items-center justify-center rounded-md bg-[#D97757] px-12 text-base font-semibold text-white transition-all duration-300 hover:bg-[#E08B6D] hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}
