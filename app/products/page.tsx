import type { Metadata } from 'next'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ChevronRight, Check } from 'lucide-react'

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
  badgeVariant: 'default' | 'secondary'
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
    badgeVariant: 'default',
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
    badgeVariant: 'default',
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
    badgeVariant: 'secondary',
  },
]

function ProductCard({ product }: { product: Product }) {
  const isComingSoon = product.statusBadge === 'Coming Soon'

  return (
    <Card className="group bg-card border-border hover:border-[#333333] transition-all duration-200">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-3xl font-normal text-[#FAFAF9] tracking-tight">
            {product.name}
          </CardTitle>
          <Badge variant={product.badgeVariant} className="shrink-0">
            {product.statusBadge}
          </Badge>
        </div>
        <CardDescription className="text-xl text-[#FAFAF9] font-light leading-relaxed">
          {product.tagline}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <p className="text-base text-[#A3A3A3] leading-relaxed">
          {product.description}
        </p>

        <Separator className="bg-border/50" />

        <ul className="space-y-3">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
              <span className="text-sm text-[#A3A3A3] leading-relaxed">
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        {isComingSoon ? (
          <Button disabled variant="outline" className="w-full sm:w-auto">
            {product.ctaText}
            <ChevronRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button asChild variant="default" className="w-full sm:w-auto">
            <a href={product.ctaHref}>
              {product.ctaText}
              <ChevronRight className="w-4 h-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C]">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <header className="mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#FAFAF9] mb-6 tracking-tight leading-tight">
            Our Products
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
