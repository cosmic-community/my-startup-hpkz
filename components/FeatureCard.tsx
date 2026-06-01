import type { Feature } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const name = getMetafieldValue(feature.metadata?.name) || feature.title
  const description = getMetafieldValue(feature.metadata?.description)
  const icon = getMetafieldValue(feature.metadata?.icon)
  const image = feature.metadata?.image

  return (
    <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      {image?.imgix_url ? (
        <img
          src={`${image.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
          alt={name}
          width={60}
          height={60}
          className="mb-4 h-12 w-12 rounded-xl object-cover"
        />
      ) : (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-2xl">
          {icon || '⚡'}
        </div>
      )}
      <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
      {description && <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>}
    </div>
  )
}