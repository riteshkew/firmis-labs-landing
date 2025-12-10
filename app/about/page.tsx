import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Target, Users, Leaf, Hammer } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About - Firmis Labs',
  description:
    'A multi-product studio building focused tools for practitioners. Precision over feature bloat. Reliability is non-negotiable.',
}

const values = [
  {
    icon: Target,
    title: 'Single-purpose tools',
    description:
      'Software should do one thing exceptionally well. Feature creep is a design failure. Every capability must earn its place. We build with intention, not accumulation.',
  },
  {
    icon: Users,
    title: 'Practitioner-first',
    description:
      'Built for people who do the work, not people who buy the software. We design for daily use by skilled practitioners who need tools that integrate seamlessly into demanding workflows.',
  },
  {
    icon: Leaf,
    title: 'Sustainable software',
    description:
      'Fair pricing. No surveillance capitalism. No dark patterns. We build businesses that respect users and create value without exploitation. Sustainable for us, sustainable for you.',
  },
  {
    icon: Hammer,
    title: 'Craft over speed',
    description:
      "Quality takes time. We don't ship fast and break things. We ship when it's ready, when it's reliable, when it meets our standards. Your workflow deserves better than perpetual beta.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-28 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 mb-8">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-950 mb-8 max-w-3xl">
            A studio for practitioners
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
            We build focused, single-purpose tools that do one thing exceptionally well.
            No feature bloat. No unnecessary complexity. Just software that serves a clear purpose.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 mb-5">
                Our Philosophy
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-950">
                Why we build differently
              </h2>
            </div>
            <div className="space-y-7 text-lg text-slate-600 leading-relaxed">
              <p>
                Every product we build is purpose-crafted for practitioners—the people who live in their
                tools every day. We don&apos;t design for personas or market segments. We design for real workflows,
                real problems, and real people who demand software that simply works.
              </p>
              <p>
                In a world of platforms promising to do everything, we choose deliberate constraint.
                We&apos;re not building the next all-in-one solution. We&apos;re building tools that disappear
                into your workflow because they do exactly what they&apos;re meant to do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-[#fafaf9] border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-8 lg:px-12">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 mb-5">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-950">
              What we believe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-6">
                  <value.icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-950 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 mb-5">
              Our Team
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-950 mb-8">
              Who we are
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Firmis Labs is a small, deliberate team of engineers and designers who&apos;ve spent years
              building software for others. We started this studio to build the tools we wished existed—tools
              that respect our time, match our workflows, and don&apos;t compromise on quality.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#fafaf9] border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-8 lg:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 mb-5">
            Work With Us
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-950 mb-8">
            Building something together?
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            We&apos;re building tools for people who value precision, reliability, and clarity.
            If that resonates with you, we&apos;d like to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm bg-slate-950 text-white hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group"
            >
              View Our Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-slate-950 border border-slate-200 hover:border-slate-300 bg-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
