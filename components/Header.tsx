'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

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
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-[4.25rem] transition-all',
          'duration-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
          scrolled
            ? 'bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]'
            : 'bg-transparent'
        )}
      >
        <nav
          className="h-full mx-auto max-w-[1400px] flex items-center justify-between px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              'relative z-10 text-base font-medium tracking-tight',
              'text-[var(--text-primary)] transition-colors',
              'duration-[200ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
              'hover:text-[var(--text-secondary)]',
              'focus-visible:outline focus-visible:outline-2',
              'focus-visible:outline-[var(--accent)]',
              'focus-visible:outline-offset-4 focus-visible:rounded-sm'
            )}
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
                  className={cn(
                    'group relative inline-block text-sm font-normal',
                    'text-[var(--text-secondary)] transition-colors',
                    'duration-[200ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
                    'hover:text-[var(--text-primary)]',
                    'focus-visible:outline focus-visible:outline-2',
                    'focus-visible:outline-[var(--accent)]',
                    'focus-visible:outline-offset-4 focus-visible:rounded-sm'
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-[1px] w-0',
                      'bg-[var(--accent)] transition-all',
                      'duration-[200ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
                      'group-hover:w-full'
                    )}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              'md:hidden relative z-10',
              'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
              'hover:bg-transparent'
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={cn(
                  'block h-[2px] w-full bg-current transition-all',
                  'duration-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
                  'origin-center',
                  mobileMenuOpen && 'rotate-45 translate-y-[7px]'
                )}
              />
              <span
                className={cn(
                  'block h-[2px] w-full bg-current transition-all',
                  'duration-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
                  mobileMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'block h-[2px] w-full bg-current transition-all',
                  'duration-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
                  'origin-center',
                  mobileMenuOpen && '-rotate-45 -translate-y-[7px]'
                )}
              />
            </div>
          </Button>
        </nav>
      </header>

      {/* Mobile Menu - Full-screen overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-opacity',
          'duration-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[var(--bg-primary)]/95 backdrop-blur-xl"
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
                  className={cn(
                    'transition-all duration-[300ms]',
                    'ease-[cubic-bezier(0.16,1,0.3,1)]'
                  )}
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
                    className={cn(
                      'group block py-5 text-2xl font-normal',
                      'text-[var(--text-secondary)] transition-colors',
                      'duration-[200ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
                      'hover:text-[var(--accent)]',
                      'focus-visible:outline focus-visible:outline-2',
                      'focus-visible:outline-[var(--accent)]',
                      'focus-visible:outline-offset-4 focus-visible:rounded'
                    )}
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
