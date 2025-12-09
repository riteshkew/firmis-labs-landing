'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const navigation = [
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? 'bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-[#2A2A2A]'
            : 'bg-transparent'
        }`}
      >
        <nav
          className={`mx-auto max-w-[1200px] flex items-center justify-between px-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled ? 'h-14' : 'h-20'
          }`}
          aria-label="Main navigation"
        >
          {/* Logo with signature gold vertical line */}
          <Link
            href="/"
            className="group flex items-center gap-3 relative z-10"
            aria-label="Firmis Labs home"
          >
            <div
              className="w-[2px] h-6 bg-[#C4A76A] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:h-8"
              aria-hidden="true"
            />
            <span className="text-lg font-normal tracking-wide text-[#FAFAFA] transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-[#C4A76A] font-serif">
              firmis labs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="group relative text-sm font-medium text-[#888888] transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-[#C4A76A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C4A76A] focus-visible:outline-offset-4 focus-visible:rounded-sm"
                >
                  {item.name}
                  <span
                    className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#C4A76A] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-[#888888] hover:text-[#C4A76A] transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-[2px] w-full bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block h-[2px] w-full bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-[2px] w-full bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu - Full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#0A0A0A]/95 backdrop-blur-2xl"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu content */}
        <div className="relative h-full flex items-center justify-center">
          <nav
            className="w-full max-w-md px-6"
            aria-label="Mobile navigation"
          >
            {/* Architectural grid layout */}
            <ul className="space-y-2" role="list">
              {navigation.map((item, index) => (
                <li
                  key={item.name}
                  className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: mobileMenuOpen
                      ? 'translateY(0)'
                      : 'translateY(20px)',
                    opacity: mobileMenuOpen ? 1 : 0,
                    transitionDelay: mobileMenuOpen
                      ? `${index * 50 + 100}ms`
                      : '0ms',
                  }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center gap-4 py-4 border-b border-[#2A2A2A] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C4A76A] focus-visible:outline-offset-4 focus-visible:rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span
                      className="w-[2px] h-0 bg-[#C4A76A] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:h-6"
                      aria-hidden="true"
                    />
                    <span className="text-2xl font-normal text-[#888888] transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-[#C4A76A] font-serif">
                      {item.name}
                    </span>
                    <span
                      className="ml-auto text-sm text-[#2A2A2A] transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-[#C4A76A]"
                      aria-hidden="true"
                    >
                      0{index + 1}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Decorative gold line */}
            <div
              className="mt-12 h-[1px] bg-gradient-to-r from-transparent via-[#C4A76A] to-transparent transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? 'scaleX(1)' : 'scaleX(0)',
                transitionDelay: mobileMenuOpen ? '400ms' : '0ms',
              }}
              aria-hidden="true"
            />
          </nav>
        </div>
      </div>
    </>
  )
}
