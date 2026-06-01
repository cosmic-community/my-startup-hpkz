import Link from 'next/link'
import type { BlogPost } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const title = getMetafieldValue(post.metadata?.title) || post.title
  const excerpt = getMetafieldValue(post.metadata?.excerpt)
  const author = getMetafieldValue(post.metadata?.author)
  const publishDate = getMetafieldValue(post.metadata?.publish_date)
  const featuredImage = post.metadata?.featured_image

  const formattedDate = publishDate
    ? new Date(publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : ''

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
    >
      {featuredImage?.imgix_url && (
        <img
          src={`${featuredImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
          alt={title}
          width={400}
          height={200}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-600">{title}</h3>
        {excerpt && <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{excerpt}</p>}
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          {author && <span className="font-medium">{author}</span>}
          {author && formattedDate && <span>•</span>}
          {formattedDate && <span>{formattedDate}</span>}
        </div>
      </div>
    </Link>
  )
}