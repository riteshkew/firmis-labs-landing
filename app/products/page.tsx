import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Lineup | Firmis Labs',
  description: 'Purpose-built tools for underserved professional markets.',
}

interface ProductFeature {
  text: string
}

interface Product {
  name: string
  tagline: string
  description: string
  features: ProductFeature[]
  ctaText: string
  ctaHref: string
  statusBadge: string
  statusVariant: 'available' | 'extension' | 'coming-soon'
}

const products: Product[] = [
  {
    name: 'SessionBank',
    tagline: 'Your calendar and payments, finally in sync.',
    description:
      'Session and payment sync for therapists, coaches, and consultants',
    features: [
      { text: 'Automatic session-to-payment matching' },
      { text: 'Real-time payment status tracking' },
      { text: 'Automated invoice generation' },
      { text: 'Client payment history at a glance' },
      { text: 'Integrates with Calendly, Cal.com, and Stripe' },
    ],
    ctaText: 'Learn more',
    ctaHref: '#',
    statusBadge: 'Available Now',
    statusVariant: 'available',
  },
  {
    name: 'LinkTransparency',
    tagline: 'See where every link actually leads.',
    description:
      'Reveals true destination of any link before you click',
    features: [
      { text: 'Instant link destination preview' },
      { text: 'Redirect chain visualization' },
      { text: 'UTM and tracking parameter detection' },
      { text: 'Malicious URL warning system' },
      { text: 'Works on any website' },
    ],
    ctaText: 'Add to Chrome',
    ctaHref: '#',
    statusBadge: 'Chrome Extension',
    statusVariant: 'extension',
  },
  {
    name: 'Thumbnail Tester',
    tagline: 'A/B test your thumbnails before publishing.',
    description:
      'YouTube thumbnail testing for creators',
    features: [
      { text: 'Side-by-side thumbnail comparison' },
      { text: 'Audience voting and analytics' },
      { text: 'Click-through rate predictions' },
      { text: 'Mobile vs desktop preview' },
      { text: 'Export-ready insights' },
    ],
    ctaText: 'Join waitlist',
    ctaHref: '#',
    statusBadge: 'Coming Soon',
    statusVariant: 'coming-soon',
  },
]

function StatusBadge({
  variant,
  children,
}: {
  variant: 'available' | 'extension' | 'coming-soon'
  children: React.ReactNode
}) {
  const baseClasses =
    'inline-block px-3 py-1 text-xs font-semibold tracking-wider rounded-full uppercase'

  const variantClasses = {
    available: 'bg-[#C4A76A]/10 border border-[#C4A76A] text-[#C4A76A]',
    extension: 'bg-[#2A2A2A]/50 border border-[#2A2A2A] text-[#888888]',
    'coming-soon': 'bg-[#2A2A2A]/50 border border-[#2A2A2A] text-[#666666]',
  }

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </span>
  )
}

function ProductCard({ product }: { product: Product }) {
  const isComingSoon = product.statusVariant === 'coming-soon'

  return (
    <article className="group relative bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#C4A76A] hover:shadow-2xl hover:shadow-[#C4A76A]/20 hover:-translate-y-2">
      {/* Gold accent line on left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C4A76A] to-[#C4A76A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h2 className="text-3xl font-semibold text-[#FFFFFF] tracking-tight font-[family-name:var(--font-cormorant)]">
            {product.name}
          </h2>
          <StatusBadge variant={product.statusVariant}>
            {product.statusBadge}
          </StatusBadge>
        </div>

        <p className="text-xl font-medium text-[#E5E5E5] mb-4 leading-relaxed">
          {product.tagline}
        </p>

        <p className="text-[#888888] leading-relaxed mb-8 text-base">
          {product.description}
        </p>

        <ul className="space-y-3 mb-10">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 mt-0.5 text-[#C4A76A]"
                aria-hidden="true"
              >
                <path
                  d="M16.667 5L7.5 14.167L3.333 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#E5E5E5] text-sm leading-relaxed">
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {isComingSoon ? (
          <button
            disabled
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#2A2A2A] text-[#666666] font-semibold rounded-md cursor-not-allowed"
          >
            {product.ctaText}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 3L11 8L6 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ) : (
          <a
            href={product.ctaHref}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4A76A] text-[#0A0A0A] font-semibold rounded-md hover:bg-[#D4B77A] transition-all duration-200 hover:shadow-lg hover:shadow-[#C4A76A]/30"
          >
            {product.ctaText}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 3L11 8L6 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
      </div>
    </article>
  )
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-16">
          <h1 className="text-6xl md:text-7xl font-semibold text-[#FFFFFF] mb-4 tracking-tight font-[family-name:var(--font-cormorant)]">
            Product Lineup
          </h1>
          <p className="text-xl text-[#888888] leading-relaxed mb-6">
            Purpose-built tools for underserved professional markets
          </p>

          {/* Gold gradient divider */}
          <div className="h-px w-32 bg-gradient-to-r from-[#C4A76A] via-[#D4B77A] to-transparent" />
        </header>

        <div className="space-y-8">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
