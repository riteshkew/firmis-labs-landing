import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Calendar, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products - Firmis Labs',
  description: 'Technical minimalism meets practical utility. Tools built for practitioners.',
}

interface Product {
  name: string
  tagline: string
  description: string
  features: string[]
  ctaText: string
  ctaHref: string
  status: string
  category: string
  icon: typeof Calendar
  isBeta?: boolean
}

const products: Product[] = [
  {
    name: 'SessionBank',
    tagline: 'Your calendar and payments, finally in sync.',
    description:
      'Built for therapists, coaches, and consultants who need their sessions and payments to match automatically. No more manual reconciliation between your calendar and payment processor.',
    features: [
      'Automatic session-to-payment matching',
      'Real-time payment status tracking',
      'Automated invoice generation',
      'Client payment history at a glance',
      'Integrates with Calendly, Cal.com, and Stripe',
    ],
    ctaText: 'Learn more',
    ctaHref: '#',
    status: 'Available',
    category: 'Productivity',
    icon: Calendar,
  },
  {
    name: 'LinkTransparency',
    tagline: 'See where every link leads.',
    description:
      'A Chrome extension that reveals the true destination of any link before you click. See redirect chains, tracking parameters, and potential security risks instantly.',
    features: [
      'Instant link destination preview',
      'Redirect chain visualization',
      'UTM and tracking parameter detection',
      'Malicious URL warning system',
      'Works on any website',
    ],
    ctaText: 'Add to Chrome',
    ctaHref: '#',
    status: 'Chrome',
    category: 'Privacy',
    icon: Shield,
  },
]

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-7 transition-colors duration-200 group-hover:bg-teal-50 group-hover:border-teal-200">
        <Icon className="w-5 h-5 text-slate-600 transition-colors duration-200 group-hover:text-teal-600" />
      </div>

      {/* Badges */}
      <div className="flex items-center gap-3 mb-5">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200">
          {product.status}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">
          {product.category}
        </span>
      </div>

      {/* Title and Tagline */}
      <h3 className="text-2xl font-semibold mb-3 text-slate-950">
        {product.name}
      </h3>
      <p className="text-base text-slate-700 mb-5 font-medium">
        {product.tagline}
      </p>

      {/* Description */}
      <p className="text-slate-600 mb-7 leading-relaxed text-sm">
        {product.description}
      </p>

      {/* Features */}
      <ul className="space-y-4 mb-10">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <span className="text-sm text-slate-600 leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      {product.isBeta ? (
        <button
          disabled
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm text-slate-400 border border-slate-200 cursor-not-allowed bg-slate-50"
        >
          {product.ctaText}
          <ArrowRight className="w-4 h-4" />
        </button>
      ) : (
        <Link
          href={product.ctaHref}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm bg-slate-950 text-white hover:bg-slate-800 transition-all duration-200 group/cta"
        >
          {product.ctaText}
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
        </Link>
      )}
    </div>
  )
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-28 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 mb-8">
            Our Products
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-950 mb-8 max-w-4xl">
            Tools built for practitioners
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            Technical minimalism meets practical utility. Each product serves an underserved
            professional market with precision and care.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#fafaf9] border-t border-slate-200">
        <div className="mx-auto max-w-3xl px-8 lg:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 mb-5">
            Have an idea?
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 mb-8">
            Building something for practitioners?
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            We&apos;re always looking for new problems to solve. If you have an idea for a tool
            that serves a specific professional community, we&apos;d love to hear about it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm bg-slate-950 text-white hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
