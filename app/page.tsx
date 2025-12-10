import Link from 'next/link'
import { ArrowRight, Gauge, Layers, BarChart3, Calendar, Shield } from 'lucide-react'

const philosophyFeatures = [
  {
    icon: Gauge,
    title: 'Anti-Bloat',
    description:
      'Focused tools that do exactly what is needed. Clear pathways, minimal surface area, zero distractions.',
  },
  {
    icon: Layers,
    title: 'Engineering-Led',
    description:
      'Architecture first. Instrumentation, observability, and performance budgets are part of the product—not afterthoughts.',
  },
  {
    icon: BarChart3,
    title: 'Clear Signals',
    description:
      'Interfaces built for decision makers: dense with signal, lean on decoration, and always readable.',
  },
]

const products = [
  {
    name: 'SessionBank',
    tagline: 'Calendar and payment sync for specialists.',
    description:
      'Automated invoicing that follows your schedule without additional overhead.',
    status: 'Available',
    category: 'Productivity',
    icon: Calendar,
    href: '/products',
  },
  {
    name: 'LinkTransparency',
    tagline: 'Strip the mystery out of every URL.',
    description:
      'See redirects, tracking, and destinations before you click.',
    status: 'Chrome',
    category: 'Privacy',
    icon: Shield,
    href: '/products',
  },
]

const principles = [
  'Architecture-first builds with instrumentation baked in from day one',
  'Interfaces tuned for professional focus: concise copy, confident spacing, immediate clarity',
  'Release discipline that favors reliable velocity over feature bloat',
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-28 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl px-8 lg:px-12">
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-slate-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              Firmis Labs · Precision Software
            </div>

            {/* Two-column layout */}
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              {/* Left column - Title + description + CTAs */}
              <div className="space-y-8">
                <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                  Precision tools for teams who can&apos;t afford noise.
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                  We build calm, engineering-led products with clear signals and zero filler.
                  Every release is tuned for speed, reliability, and decision quality.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                  >
                    Start a project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                  >
                    View products
                  </Link>
                </div>
              </div>

              {/* Right column - Principles card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                  Studio Principles
                </p>
                <ul className="mt-6 space-y-5">
                  {principles.map((principle, index) => (
                    <li key={index} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                      {principle}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="border-t border-slate-200 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-8 lg:px-12">
          {/* Section header */}
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                Philosophy
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                The discipline behind every build.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-slate-600 md:text-right">
              Calm product design, reliable engineering, and signals you can act on.
              No distracting motion or filler features—only what moves the metric.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {philosophyFeatures.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-teal-600 transition-colors duration-200 group-hover:border-teal-200 group-hover:bg-teal-50">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="border-t border-slate-200 bg-[#fafaf9] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-8 lg:px-12">
          {/* Section header */}
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
              Products
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Built for practitioners who value certainty.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600">
              Each product ships with a focused remit, crisp interfaces, and clear onboarding.
            </p>
          </div>

          {/* Product cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group block"
              >
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                      {product.status}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wide text-teal-600">
                      {product.category}
                    </span>
                  </div>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-colors duration-200 group-hover:border-teal-200 group-hover:bg-teal-50 group-hover:text-teal-600">
                    <product.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950">{product.name}</h3>
                  <p className="mt-2 text-sm font-medium text-slate-700">{product.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {product.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-slate-200 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-8 lg:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Work With Us
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Join professionals who demand excellence from their software.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            Calm, considered builds with measurable impact. Let&apos;s scope the next release together.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              Read our philosophy
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
