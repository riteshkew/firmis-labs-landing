import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Geometric Background Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #C4A76A 1px, transparent 1px),
              linear-gradient(to bottom, #C4A76A 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} />
        </div>

        {/* Architectural Line Drawing Overlay */}
        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="arch-lines" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
                <path d="M0,200 L400,200 M200,0 L200,400" stroke="#C4A76A" strokeWidth="1" fill="none" />
                <circle cx="200" cy="200" r="100" stroke="#C4A76A" strokeWidth="1" fill="none" />
                <rect x="100" y="100" width="200" height="200" stroke="#C4A76A" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#arch-lines)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="hero-headline mb-6 font-cormorant text-6xl font-semibold leading-[1.1] tracking-tight text-[#FAFAFA] md:text-7xl lg:text-8xl">
            Precision-built software
            <br />
            for modern workflows
          </h1>

          <p className="hero-subheadline mx-auto mb-12 max-w-3xl font-jakarta text-xl leading-relaxed text-[#888888] md:text-2xl">
            A multi-product studio crafting focused tools for clarity, security, and productivity.
          </p>

          <div className="hero-ctas flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#products"
              className="group inline-flex h-14 items-center justify-center rounded-sm bg-[#C4A76A] px-10 font-jakarta text-base font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-[#D4B77A] hover:shadow-[0_0_30px_rgba(196,167,106,0.3)]"
            >
              Explore Products
              <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              href="#philosophy"
              className="group inline-flex h-14 items-center justify-center rounded-sm border border-[#C4A76A]/30 bg-transparent px-10 font-jakarta text-base font-semibold text-[#C4A76A] transition-all duration-300 hover:border-[#C4A76A] hover:bg-[#C4A76A]/5"
            >
              Our Philosophy
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="font-jakarta text-xs uppercase tracking-widest text-[#888888]">Scroll</span>
              <div className="h-12 w-px bg-gradient-to-b from-[#C4A76A] to-transparent animate-scroll-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO SECTION */}
      <section id="philosophy" className="relative">
        {/* Gold Gradient Divider */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#C4A76A] to-transparent" />
        </div>

        <div className="studio-section mx-auto max-w-7xl px-6 py-32 md:py-40">
          <div className="studio-header mb-20 text-center">
            <h2 className="mb-4 font-cormorant text-5xl font-semibold tracking-tight text-[#FAFAFA] md:text-6xl">
              Engineering Atelier
            </h2>
            <p className="mx-auto max-w-2xl font-jakarta text-lg text-[#888888]">
              Where architectural principles meet software craftsmanship
            </p>
          </div>

          <div className="studio-cards grid gap-8 md:grid-cols-3">
            {/* Precision Card */}
            <article className="group relative overflow-hidden rounded-sm border border-[#2A2A2A] bg-[#1A1A1A] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#C4A76A] hover:shadow-[0_20px_50px_rgba(196,167,106,0.15)]">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#C4A76A] transition-all duration-500 group-hover:w-2" />

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-sm bg-[#C4A76A]/10">
                <svg className="h-8 w-8 text-[#C4A76A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h3 className="mb-3 font-cormorant text-2xl font-semibold text-[#FAFAFA]">
                Precision
              </h3>

              <p className="font-jakarta text-base leading-relaxed text-[#888888]">
                Every line of code serves a purpose. Nothing extraneous. Mathematical elegance applied to software design.
              </p>
            </article>

            {/* Reliability Card */}
            <article className="group relative overflow-hidden rounded-sm border border-[#2A2A2A] bg-[#1A1A1A] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#C4A76A] hover:shadow-[0_20px_50px_rgba(196,167,106,0.15)]">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#C4A76A] transition-all duration-500 group-hover:w-2" />

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-sm bg-[#C4A76A]/10">
                <svg className="h-8 w-8 text-[#C4A76A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h3 className="mb-3 font-cormorant text-2xl font-semibold text-[#FAFAFA]">
                Reliability
              </h3>

              <p className="font-jakarta text-base leading-relaxed text-[#888888]">
                Software that works on day one and continues working. Built on foundations that endure.
              </p>
            </article>

            {/* Focus Card */}
            <article className="group relative overflow-hidden rounded-sm border border-[#2A2A2A] bg-[#1A1A1A] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#C4A76A] hover:shadow-[0_20px_50px_rgba(196,167,106,0.15)]">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#C4A76A] transition-all duration-500 group-hover:w-2" />

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-sm bg-[#C4A76A]/10">
                <svg className="h-8 w-8 text-[#C4A76A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              <h3 className="mb-3 font-cormorant text-2xl font-semibold text-[#FAFAFA]">
                Focus
              </h3>

              <p className="font-jakarta text-base leading-relaxed text-[#888888]">
                Single-purpose tools that do one thing exceptionally well. Depth over breadth, always.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="relative">
        {/* Gold Gradient Divider */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#C4A76A] to-transparent" />
        </div>

        <div className="products-section mx-auto max-w-7xl px-6 py-32 md:py-40">
          <div className="products-header mb-20 text-center">
            <h2 className="mb-4 font-cormorant text-5xl font-semibold tracking-tight text-[#FAFAFA] md:text-6xl">
              Product Lineup
            </h2>
            <p className="mx-auto max-w-2xl font-jakarta text-lg text-[#888888]">
              Independent tools under a unified engineering philosophy
            </p>
          </div>

          <div className="products-grid grid gap-8 md:grid-cols-3">
            {/* SessionBank */}
            <article className="product-card group relative overflow-hidden rounded-sm border border-[#2A2A2A] bg-[#1A1A1A] p-10 transition-all duration-500 hover:-translate-y-3 hover:border-[#C4A76A] hover:shadow-[0_30px_60px_rgba(196,167,106,0.2)]">
              {/* Geometric Icon */}
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-sm bg-[#C4A76A]/10">
                <svg className="h-10 w-10 text-[#C4A76A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeLinecap="round" />
                </svg>
              </div>

              <h3 className="mb-3 font-cormorant text-3xl font-semibold text-[#FAFAFA]">
                SessionBank
              </h3>

              <p className="mb-6 font-jakarta text-base leading-relaxed text-[#888888]">
                Calendar and payment sync for professionals. Automated invoicing that follows your schedule.
              </p>

              <Link
                href="/products/sessionbank"
                className="group/link inline-flex items-center gap-2 font-jakarta text-sm font-semibold text-[#C4A76A] transition-all duration-300 hover:gap-3"
              >
                Learn more
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              {/* Hover Glow Effect */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#C4A76A]/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </article>

            {/* LinkTransparency */}
            <article className="product-card group relative overflow-hidden rounded-sm border border-[#2A2A2A] bg-[#1A1A1A] p-10 transition-all duration-500 hover:-translate-y-3 hover:border-[#C4A76A] hover:shadow-[0_30px_60px_rgba(196,167,106,0.2)]">
              {/* Geometric Icon */}
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-sm bg-[#C4A76A]/10">
                <svg className="h-10 w-10 text-[#C4A76A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.828 7.757l1.102-1.101a4 4 0 115.656 5.656l-4 4a4 4 0 01-5.656 0" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
                </svg>
              </div>

              <h3 className="mb-3 font-cormorant text-3xl font-semibold text-[#FAFAFA]">
                LinkTransparency
              </h3>

              <p className="mb-6 font-jakarta text-base leading-relaxed text-[#888888]">
                See where every link leads. Privacy-first transparency revealing redirects and tracking parameters.
              </p>

              <Link
                href="/products/linktransparency"
                className="group/link inline-flex items-center gap-2 font-jakarta text-sm font-semibold text-[#C4A76A] transition-all duration-300 hover:gap-3"
              >
                Learn more
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              {/* Hover Glow Effect */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#C4A76A]/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </article>

            {/* Thumbnail Tester */}
            <article className="product-card group relative overflow-hidden rounded-sm border border-[#2A2A2A] bg-[#1A1A1A] p-10 transition-all duration-500 hover:-translate-y-3 hover:border-[#C4A76A] hover:shadow-[0_30px_60px_rgba(196,167,106,0.2)]">
              {/* Geometric Icon */}
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-sm bg-[#C4A76A]/10">
                <svg className="h-10 w-10 text-[#C4A76A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="2" y="3" width="9" height="9" rx="1" />
                  <rect x="13" y="3" width="9" height="9" rx="1" />
                  <rect x="2" y="14" width="9" height="9" rx="1" />
                  <rect x="13" y="14" width="9" height="9" rx="1" />
                </svg>
              </div>

              <h3 className="mb-3 font-cormorant text-3xl font-semibold text-[#FAFAFA]">
                Thumbnail Tester
              </h3>

              <p className="mb-6 font-jakarta text-base leading-relaxed text-[#888888]">
                A/B test before you publish. Data-driven thumbnail optimization for content creators.
              </p>

              <Link
                href="/products/thumbnail-tester"
                className="group/link inline-flex items-center gap-2 font-jakarta text-sm font-semibold text-[#C4A76A] transition-all duration-300 hover:gap-3"
              >
                Learn more
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              {/* Hover Glow Effect */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#C4A76A]/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          </div>
        </div>
      </section>

      {/* CRAFT SECTION */}
      <section className="relative">
        {/* Gold Gradient Divider */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#C4A76A] to-transparent" />
        </div>

        <div className="craft-section mx-auto max-w-7xl px-6 py-32 md:py-40">
          <div className="craft-header mb-20 text-center">
            <h2 className="mb-4 font-cormorant text-5xl font-semibold tracking-tight text-[#FAFAFA] md:text-6xl">
              The Firmis Approach
            </h2>
            <p className="mx-auto max-w-2xl font-jakarta text-lg text-[#888888]">
              A systematic methodology refined through years of building software
            </p>
          </div>

          {/* Timeline */}
          <div className="craft-timeline relative">
            {/* Connecting Line */}
            <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-[#C4A76A]/20 via-[#C4A76A] to-[#C4A76A]/20 md:block" />

            <div className="grid gap-12 md:grid-cols-4">
              {/* Step 1: Research */}
              <div className="craft-step group relative text-center">
                <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#C4A76A] bg-[#0A0A0A] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#C4A76A] group-hover:shadow-[0_0_30px_rgba(196,167,106,0.5)]">
                  <span className="font-cormorant text-2xl font-semibold text-[#C4A76A] transition-colors duration-500 group-hover:text-[#0A0A0A]">
                    1
                  </span>
                </div>

                <h3 className="mb-3 font-cormorant text-2xl font-semibold text-[#FAFAFA]">
                  Research
                </h3>

                <p className="font-jakarta text-sm leading-relaxed text-[#888888]">
                  Deep study of workflows and pain points. Understanding precedes building.
                </p>
              </div>

              {/* Step 2: Build */}
              <div className="craft-step group relative text-center">
                <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#C4A76A] bg-[#0A0A0A] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#C4A76A] group-hover:shadow-[0_0_30px_rgba(196,167,106,0.5)]">
                  <span className="font-cormorant text-2xl font-semibold text-[#C4A76A] transition-colors duration-500 group-hover:text-[#0A0A0A]">
                    2
                  </span>
                </div>

                <h3 className="mb-3 font-cormorant text-2xl font-semibold text-[#FAFAFA]">
                  Build
                </h3>

                <p className="font-jakarta text-sm leading-relaxed text-[#888888]">
                  Focused solutions, not feature-bloated platforms. Every element serves a purpose.
                </p>
              </div>

              {/* Step 3: Iterate */}
              <div className="craft-step group relative text-center">
                <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#C4A76A] bg-[#0A0A0A] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#C4A76A] group-hover:shadow-[0_0_30px_rgba(196,167,106,0.5)]">
                  <span className="font-cormorant text-2xl font-semibold text-[#C4A76A] transition-colors duration-500 group-hover:text-[#0A0A0A]">
                    3
                  </span>
                </div>

                <h3 className="mb-3 font-cormorant text-2xl font-semibold text-[#FAFAFA]">
                  Iterate
                </h3>

                <p className="font-jakarta text-sm leading-relaxed text-[#888888]">
                  Continuous refinement through real-world feedback. Progress toward perfection.
                </p>
              </div>

              {/* Step 4: Ship */}
              <div className="craft-step group relative text-center">
                <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#C4A76A] bg-[#0A0A0A] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#C4A76A] group-hover:shadow-[0_0_30px_rgba(196,167,106,0.5)]">
                  <span className="font-cormorant text-2xl font-semibold text-[#C4A76A] transition-colors duration-500 group-hover:text-[#0A0A0A]">
                    4
                  </span>
                </div>

                <h3 className="mb-3 font-cormorant text-2xl font-semibold text-[#FAFAFA]">
                  Ship
                </h3>

                <p className="font-jakarta text-sm leading-relaxed text-[#888888]">
                  Reliable software that works from day one. No endless betas. Just tools that deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative">
        {/* Gold Gradient Divider */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#C4A76A] to-transparent" />
        </div>

        <div className="cta-section mx-auto max-w-7xl px-6 py-32 md:py-40">
          <div className="cta-card relative overflow-hidden rounded-sm border-2 border-[#C4A76A] bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] p-16 text-center shadow-[0_0_100px_rgba(196,167,106,0.1)] md:p-20">
            {/* Decorative Geometric Pattern */}
            <div className="absolute right-0 top-0 opacity-5">
              <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="200" height="200" fill="none" stroke="#C4A76A" strokeWidth="2" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="#C4A76A" strokeWidth="2" />
                <line x1="0" y1="0" x2="400" y2="400" stroke="#C4A76A" strokeWidth="2" />
              </svg>
            </div>

            <h2 className="relative z-10 mb-6 font-cormorant text-4xl font-semibold text-[#FAFAFA] md:text-5xl">
              Ready to work with precision tools?
            </h2>

            <p className="relative z-10 mx-auto mb-10 max-w-2xl font-jakarta text-lg text-[#888888]">
              Join professionals who demand excellence from their software. Experience tools built with architectural precision.
            </p>

            <Link
              href="#products"
              className="relative z-10 inline-flex h-14 items-center justify-center rounded-sm bg-[#C4A76A] px-12 font-jakarta text-base font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-[#D4B77A] hover:shadow-[0_0_40px_rgba(196,167,106,0.4)]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
