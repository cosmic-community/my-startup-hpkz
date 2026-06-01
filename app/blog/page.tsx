import SectionHeading from '@/components/SectionHeading'
import BlogCard from '@/components/BlogCard'
import { getBlogPosts } from '@/lib/cosmic'

export const metadata = {
  title: 'Blog — My Startup',
  description: 'Insights, updates, and stories from the My Startup team.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Blog"
        title="Latest from the blog"
        subtitle="Tips, news, and insights to help you get the most out of My Startup."
      />
      {posts.length === 0 ? (
        <p className="mt-12 text-center text-slate-500">No blog posts available yet.</p>
      ) : (
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}