import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  date: string
  excerpt: string
  category: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Case for Single-Purpose Tools',
    date: 'December 2024',
    excerpt:
      'In an era of feature-bloated platforms, there is a compelling argument for software that does one thing exceptionally well.',
    category: 'Engineering',
    slug: 'the-case-for-single-purpose-tools',
  },
  {
    id: '2',
    title: 'Building for Practitioners, Not Personas',
    date: 'November 2024',
    excerpt:
      'Why we spend more time with therapists, coaches, and creators than with market research reports.',
    category: 'Product',
    slug: 'building-for-practitioners-not-personas',
  },
  {
    id: '3',
    title: 'The Hidden Cost of Free Software',
    date: 'October 2024',
    excerpt:
      'When the product is free, you become the product. A look at sustainable software economics.',
    category: 'Industry',
    slug: 'the-hidden-cost-of-free-software',
  },
]

export const metadata = {
  title: 'Journal - Firmis Labs',
  description: 'Thoughts on engineering craft and product development',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-28 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 mb-8">
            Our Journal
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-950 mb-8 max-w-4xl">
            Thoughts on craft
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            Ideas on engineering, product development, and building tools that serve real practitioners.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-8 lg:px-12">
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg flex flex-col">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-teal-600">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-500">
                        {post.date}
                      </span>
                    </div>

                    <h2 className="text-xl font-semibold leading-tight text-slate-950 transition-colors duration-200 group-hover:text-teal-600 mb-4">
                      {post.title}
                    </h2>

                    <p className="text-sm leading-relaxed text-slate-600 flex-grow mb-8">
                      {post.excerpt}
                    </p>

                    <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-950 transition-colors duration-200 group-hover:text-teal-600 w-fit">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-slate-600">More articles coming soon</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#fafaf9] border-t border-slate-200">
        <div className="mx-auto max-w-3xl px-8 lg:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 mb-5">
            Stay Updated
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 mb-8">
            Want to follow our work?
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            We write about the intersection of engineering craft and product thinking.
            No spam, just thoughtful content.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-slate-950 transition-colors duration-200 hover:text-teal-600"
            >
              Read our philosophy
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
