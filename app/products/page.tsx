import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products | Firmis Labs',
  description: 'Technical minimalism. Tools built for professionals.',
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
      'Built for therapists, coaches, and consultants who need their sessions and payments to match automatically. No more manual reconciliation between your calendar and payment processor.',
    features: [
      { text: 'Automatic session-to-payment matching' },
      { text: 'Real-time payment status tracking' },
      { text: 'Automated invoice generation' },
      { text: 'Client payment history at a glance' },
      { text: 'Integrates with Calendly, Cal.com, and Stripe' },
    ],
    ctaText: 'Learn more',
    ctaHref: '#',
    statusBadge: 'Available',
    statusVariant: 'available',
  },
  {
    name: 'LinkTransparency',
    tagline: 'See where every link leads.',
    description:
      'A Chrome extension that reveals the true destination of any link before you click. See redirect chains, tracking parameters, and potential security risks instantly.',
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
    tagline: 'A/B test before you publish.',
    description:
      'For YouTube creators who need to know which thumbnail will perform before publishing. Get audience feedback and data-driven insights on your thumbnail choices.',
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
  const variantClasses = {
    available: 'bg-[#D97757]/10 text-[#D97757]',
    extension: 'bg-[#262626] text-[#A3A3A3]',
    'coming-soon': 'bg-[#262626] text-[#737373]',
  }

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${variantClasses[variant]}`}
    >
      {children}
    </span>
  )
}

function ProductCard({ product }: { product: Product }) {
  const isComingSoon = product.statusVariant === 'coming-soon'

  return (
    <article className="group bg-[#141414] border border-[#262626] rounded-xl p-10 transition-all duration-200 hover:border-[#333333] hover:shadow-lg hover:shadow-black/20">
      <div className="flex items-start justify-between gap-6 mb-6">
        <h2 className="text-3xl font-normal text-[#FAFAF9] tracking-tight leading-tight">
          {product.name}
        </h2>
        <StatusBadge variant={product.statusVariant}>
          {product.statusBadge}
        </StatusBadge>
      </div>

      <p className="text-xl text-[#FAFAF9] mb-6 leading-relaxed font-light">
        {product.tagline}
      </p>

      <p className="text-base text-[#A3A3A3] mb-8 leading-relaxed">
        {product.description}
      </p>

      <ul className="space-y-3 mb-10">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span
              className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-[#D97757]"
              aria-hidden="true"
            />
            <span className="text-sm text-[#A3A3A3] leading-relaxed">
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {isComingSoon ? (
        <button
          disabled
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#262626] text-[#737373] text-sm font-medium rounded-lg cursor-not-allowed"
        >
          {product.ctaText}
          <svg
            width="14"
            height="14"
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
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAFAF9] text-[#0C0C0C] text-sm font-medium rounded-lg transition-all duration-150 hover:bg-white hover:shadow-md"
        >
          {product.ctaText}
          <svg
            width="14"
            height="14"
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
    </article>
  )
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C]">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <header className="mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#FAFAF9] mb-6 tracking-tight leading-tight">
            Products
          </h1>
          <p className="text-lg md:text-xl text-[#A3A3A3] leading-relaxed max-w-2xl">
            Tools built for underserved professional markets. Technical
            minimalism meets practical utility.
          </p>
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
