import Link from 'next/link'

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
      "In an era of feature-bloated platforms, there's a compelling argument for software that does one thing exceptionally well.",
    category: 'Engineering Philosophy',
    slug: 'the-case-for-single-purpose-tools',
  },
  {
    id: '2',
    title: 'Building for Practitioners, Not Personas',
    date: 'November 2024',
    excerpt:
      'Why we spend more time with therapists, coaches, and creators than with market research reports.',
    category: 'Product Development',
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
  description:
    'Thoughts on engineering craft, product development, and precision software.',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
        {/* Page Header */}
        <header className="mb-16">
          <h1 className="mb-4 font-cormorant text-6xl font-semibold tracking-tight text-white">
            Journal
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#AAAAAA]">
            Thoughts on engineering craft, product development, and precision
            software
          </p>

          {/* Gold gradient divider */}
          <div className="h-px w-32 bg-gradient-to-r from-[#C4A76A] to-transparent" />
        </header>

        {/* Blog Posts Grid */}
        {blogPosts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-lg border border-[#1F1F1F] bg-[#1A1A1A] p-8 transition-all duration-300 hover:border-[#C4A76A] hover:shadow-[0_8px_32px_rgba(196,167,106,0.1)] hover:-translate-y-1"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {/* Category Tag */}
                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-widest text-[#C4A76A]">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mb-3 font-cormorant text-2xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-[#C4A76A]">
                    {post.title}
                  </h2>

                  {/* Date */}
                  <time
                    dateTime={post.date}
                    className="mb-4 block text-sm text-[#888888]"
                  >
                    {post.date}
                  </time>

                  {/* Excerpt */}
                  <p className="mb-6 line-clamp-3 leading-relaxed text-[#AAAAAA]">
                    {post.excerpt}
                  </p>

                  {/* Read Article Link */}
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-[#C4A76A] transition-all duration-300 group-hover:gap-3">
                    <span>Read article</span>
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-16 text-center">
            <p className="inline-block border-b-2 border-[#C4A76A] pb-1 text-lg text-[#AAAAAA]">
              More articles coming soon
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
