import Link from 'next/link'

const navigation = {
  products: [
    { name: 'Solutions', href: '/products' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Documentation', href: '/docs' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Security', href: '/security' },
  ],
}

const social = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/firmislabs',
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/firmislabs',
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/firmislabs',
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C]" role="contentinfo">
      {/* Subtle top border */}
      <div
        className="h-px w-full"
        style={{ backgroundColor: '#262626' }}
      />

      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-20 lg:px-8">
        {/* Main content grid */}
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block font-medium text-[#FAFAF9] transition-colors duration-200 hover:text-[#737373]"
              style={{ fontSize: '20px', letterSpacing: '-0.01em' }}
            >
              Firmis Labs
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-[#737373]">
              Precision engineering for modern software systems
            </p>
          </div>

          {/* Products column */}
          <nav aria-labelledby="footer-products">
            <h3
              id="footer-products"
              className="text-xs font-normal uppercase text-[#737373]"
              style={{ letterSpacing: '0.15em' }}
            >
              Products
            </h3>
            <ul className="mt-6 space-y-3" role="list">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-normal text-[#737373] transition-colors duration-200 hover:text-[#FAFAF9]"
                    style={{ textUnderlineOffset: '4px' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company column */}
          <nav aria-labelledby="footer-company">
            <h3
              id="footer-company"
              className="text-xs font-normal uppercase text-[#737373]"
              style={{ letterSpacing: '0.15em' }}
            >
              Company
            </h3>
            <ul className="mt-6 space-y-3" role="list">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-normal text-[#737373] transition-colors duration-200 hover:text-[#FAFAF9]"
                    style={{ textUnderlineOffset: '4px' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal column */}
          <nav aria-labelledby="footer-legal">
            <h3
              id="footer-legal"
              className="text-xs font-normal uppercase text-[#737373]"
              style={{ letterSpacing: '0.15em' }}
            >
              Legal
            </h3>
            <ul className="mt-6 space-y-3" role="list">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-normal text-[#737373] transition-colors duration-200 hover:text-[#FAFAF9]"
                    style={{ textUnderlineOffset: '4px' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom section with border */}
        <div
          className="mt-16 flex flex-col-reverse items-center justify-between gap-8 border-t pt-8 sm:flex-row"
          style={{ borderColor: '#262626' }}
        >
          {/* Copyright */}
          <p className="text-sm font-normal text-[#737373]">
            &copy; {new Date().getFullYear()} Firmis Labs. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-6">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#737373] transition-opacity duration-200 hover:opacity-100"
                style={{ opacity: 0.6 }}
                aria-label={`Follow us on ${item.name}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
