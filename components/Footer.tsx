import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const navigation = {
  products: [
    { name: 'SessionBank', href: '/products/sessionbank' },
    { name: 'LinkTransparency', href: '/products/linktransparency' },
    { name: 'Thumbnail Tester', href: '/products/thumbnail-tester' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-background" role="contentinfo">
      <Separator />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <Link
              href="/"
              className={cn(
                'inline-block text-lg font-medium tracking-tight',
                'text-foreground transition-colors hover:text-muted-foreground'
              )}
            >
              firmis labs
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Precision engineering for modern software systems
            </p>
          </div>

          <nav aria-labelledby="footer-products">
            <h3
              id="footer-products"
              className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
            >
              Products
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      'text-sm text-muted-foreground transition-colors',
                      'hover:text-foreground'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-company">
            <h3
              id="footer-company"
              className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
            >
              Company
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      'text-sm text-muted-foreground transition-colors',
                      'hover:text-foreground'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-legal">
            <h3
              id="footer-legal"
              className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
            >
              Legal
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      'text-sm text-muted-foreground transition-colors',
                      'hover:text-foreground'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} firmis labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
