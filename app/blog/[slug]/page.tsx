// app/blog/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPost } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const title = getMetafieldValue(post.metadata?.title) || post.title
  const author = getMetafieldValue(post.metadata?.author)
  const publishDate = getMetafieldValue(post.metadata?.publish_date)
  const content = getMetafieldValue(post.metadata?.content)
  const featuredImage = post.metadata?.featured_image

  const formattedDate = publishDate
    ? new Date(publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : ''

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/blog" className="text-sm font-medium text-brand-600 hover:text-brand-700">
        ← Back to blog
      </Link>

      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>

      <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
        {author && <span className="font-medium">{author}</span>}
        {author && formattedDate && <span>•</span>}
        {formattedDate && <span>{formattedDate}</span>}
      </div>

      {featuredImage?.imgix_url && (
        <img
          src={`${featuredImage.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
          alt={title}
          width={800}
          height={400}
          className="mt-8 w-full rounded-2xl object-cover"
        />
      )}

      {content && (
        <div
          className="prose prose-slate mt-8 max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </article>
  )
}