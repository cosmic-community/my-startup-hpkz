import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const customerName = getMetafieldValue(testimonial.metadata?.customer_name) || testimonial.title
  const company = getMetafieldValue(testimonial.metadata?.company)
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const photo = testimonial.metadata?.photo
  const rating = typeof testimonial.metadata?.rating === 'number' ? testimonial.metadata.rating : 0

  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
      {rating > 0 && (
        <div className="flex gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-slate-200'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          ))}
        </div>
      )}
      {quote && <p className="mt-4 flex-1 text-base leading-relaxed text-slate-700">&ldquo;{quote}&rdquo;</p>}
      <div className="mt-6 flex items-center gap-3">
        {photo?.imgix_url ? (
          <img
            src={`${photo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={customerName}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-lg">👤</div>
        )}
        <div>
          <p className="text-sm font-semibold text-slate-900">{customerName}</p>
          {company && <p className="text-sm text-slate-500">{company}</p>}
        </div>
      </div>
    </div>
  )
}