import Link from "next/link"

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
    id: "1",
    title: "The Case for Single-Purpose Tools",
    date: "December 2024",
    excerpt:
      "In an era of feature-bloated platforms, there is a compelling argument for software that does one thing exceptionally well.",
    category: "Engineering",
    slug: "the-case-for-single-purpose-tools",
  },
  {
    id: "2",
    title: "Building for Practitioners, Not Personas",
    date: "November 2024",
    excerpt:
      "Why we spend more time with therapists, coaches, and creators than with market research reports.",
    category: "Product",
    slug: "building-for-practitioners-not-personas",
  },
  {
    id: "3",
    title: "The Hidden Cost of Free Software",
    date: "October 2024",
    excerpt:
      "When the product is free, you become the product. A look at sustainable software economics.",
    category: "Industry",
    slug: "the-hidden-cost-of-free-software",
  },
]

export const metadata = {
  title: "Journal - Firmis Labs",
  description:
    "Thoughts on engineering craft and product development",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C]">
      <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24 lg:py-32">
        {/* Page Header */}
        <header className="mb-20">
          <h1 className="mb-6 text-5xl font-light tracking-tight text-[#FAFAF9] sm:text-6xl lg:text-7xl">
            Journal
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#A3A3A3] sm:text-xl">
            Thoughts on engineering craft and product development
          </p>
        </header>

        {/* Blog Posts Grid */}
        {blogPosts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group border-b border-[#262626] pb-8 transition-colors duration-300 hover:border-[#404040]"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {/* Category Tag */}
                  <div className="mb-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-[#D97757]">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mb-4 text-2xl font-normal leading-snug text-[#FAFAF9] transition-all duration-300 group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4 sm:text-3xl">
                    {post.title}
                  </h2>

                  {/* Date */}
                  <time
                    dateTime={post.date}
                    className="mb-4 block text-sm text-[#737373]"
                  >
                    {post.date}
                  </time>

                  {/* Excerpt */}
                  <p className="mb-6 line-clamp-3 leading-relaxed text-[#A3A3A3]">
                    {post.excerpt}
                  </p>

                  {/* Read Link */}
                  <div className="inline-flex items-center gap-2 text-sm text-[#A3A3A3] transition-colors duration-300 group-hover:text-[#FAFAF9]">
                    <span>Read</span>
                    <svg
                      className="h-4 w-4"
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
            <p className="text-lg text-[#A3A3A3]">
              More articles coming soon
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
