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
        className={`fixed top-0 left-0 right-0 z-50 h-[4.25rem] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? 'bg-[#0C0C0C]/90 backdrop-blur-md border-b border-[#262626]'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="h-full mx-auto max-w-[1400px] flex items-center justify-between px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 text-base font-medium tracking-tight text-[#FAFAF9] transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-[#A3A3A3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FAFAF9] focus-visible:outline-offset-4 focus-visible:rounded-sm"
            aria-label="firmis labs home"
          >
            firmis labs
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="group relative inline-block text-sm font-normal text-[#A3A3A3] transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-[#FAFAF9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FAFAF9] focus-visible:outline-offset-4 focus-visible:rounded-sm"
                >
                  {item.name}
                  <span
                    className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#FAFAF9] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center text-[#A3A3A3] hover:text-[#FAFAF9] transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FAFAF9] focus-visible:outline-offset-4 focus-visible:rounded-sm"
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
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#0C0C0C]/95 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu content */}
        <div className="relative h-full flex items-center justify-center pt-[4.25rem]">
          <nav
            className="w-full max-w-md px-8"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-1" role="list">
              {navigation.map((item, index) => (
                <li
                  key={item.name}
                  className="transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
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
                    className="group block py-5 text-2xl font-normal text-[#A3A3A3] transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-[#FAFAF9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FAFAF9] focus-visible:outline-offset-4 focus-visible:rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
