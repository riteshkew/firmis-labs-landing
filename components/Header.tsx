'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const navigation = [
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Journal', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200'
            : 'bg-white'
        }`}
      >
        <div className="mx-auto max-w-6xl px-8 lg:px-12">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-50 flex items-center gap-2.5 group"
            >
              <Logo size={28} className="text-slate-950 transition-transform duration-200 ease-out group-hover:scale-105" />
              <span className="text-base font-semibold tracking-tight text-slate-950">
                Firmis Labs
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 transition-colors duration-200 ease-out hover:text-slate-950"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-sm font-medium text-white transition-all duration-200 ease-out hover:bg-slate-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
              >
                Start Project
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full text-slate-950 transition-colors duration-200 ease-out hover:bg-slate-100 lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden">
          <div className="flex h-full flex-col px-8 pt-28">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-slate-200 py-4 text-2xl font-semibold text-slate-950 transition-colors duration-200 ease-out hover:text-slate-600"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-8">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-slate-800"
              >
                Start Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
