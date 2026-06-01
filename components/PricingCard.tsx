import Link from 'next/link'
import type { PricingTier } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface PricingCardProps {
  tier: PricingTier;
}

export default function PricingCard({ tier }: PricingCardProps) {
  const planName = getMetafieldValue(tier.metadata?.plan_name) || tier.title
  const price = getMetafieldValue(tier.metadata?.price)
  const billingPeriod = getMetafieldValue(tier.metadata?.billing_period)
  const description = getMetafieldValue(tier.metadata?.description)
  const featuresIncluded = getMetafieldValue(tier.metadata?.features_included)
  const mostPopular = Boolean(tier.metadata?.most_popular)

  const featuresList = featuresIncluded
    ? featuresIncluded.split('\n').map((f) => f.trim()).filter(Boolean)
    : []

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 ${
        mostPopular
          ? 'border-brand-500 bg-white shadow-lg ring-2 ring-brand-500'
          : 'border-slate-200 bg-white shadow-sm'
      }`}
    >
      {mostPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold text-slate-900">{planName}</h3>
      {description && <p className="mt-2 text-sm text-slate-600">{description}</p>}
      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold text-slate-900">{price || '$0'}</span>
        {billingPeriod && <span className="text-sm text-slate-500">/{billingPeriod}</span>}
      </div>

      {featuresList.length > 0 && (
        <ul className="mt-6 flex flex-col gap-3">
          {featuresList.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <Link
        href="/pricing"
        className={`mt-8 rounded-lg px-6 py-3 text-center text-sm font-semibold transition-colors ${
          mostPopular
            ? 'bg-brand-600 text-white hover:bg-brand-700'
            : 'border border-slate-300 text-slate-700 hover:border-brand-400 hover:text-brand-600'
        }`}
      >
        Choose {planName}
      </Link>
    </div>
  )
}