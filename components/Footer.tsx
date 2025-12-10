import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-8 lg:px-12">
        {/* Main footer content */}
        <div className="py-14 md:py-20">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            {/* Logo and tagline */}
            <div className="space-y-5">
              <Link href="/" className="inline-flex items-center gap-2.5 group">
                <Logo size={24} className="text-slate-950 transition-transform group-hover:scale-105" />
                <span className="text-base font-semibold text-slate-950">Firmis Labs</span>
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-slate-600">
                Precision tools for professionals. Building the future of work.
              </p>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
              <Link
                href="/products"
                className="font-medium text-slate-600 transition-colors hover:text-teal-600"
              >
                Products
              </Link>
              <Link
                href="/about"
                className="font-medium text-slate-600 transition-colors hover:text-teal-600"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="font-medium text-slate-600 transition-colors hover:text-teal-600"
              >
                Journal
              </Link>
              <Link
                href="/contact"
                className="font-medium text-slate-600 transition-colors hover:text-teal-600"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-slate-200 py-8">
          <p className="text-sm text-slate-600">
            &copy; {currentYear} Firmis Labs, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
