import SectionHeading from '@/components/SectionHeading'
import PricingCard from '@/components/PricingCard'
import { getPricingTiers } from '@/lib/cosmic'

export const metadata = {
  title: 'Pricing — My Startup',
  description: 'Simple, transparent pricing for teams of all sizes.',
}

export default async function PricingPage() {
  const pricingTiers = await getPricingTiers()

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Pricing"
        title="Choose your plan"
        subtitle="Flexible plans that grow with your business. Cancel anytime."
      />
      {pricingTiers.length === 0 ? (
        <p className="mt-12 text-center text-slate-500">No pricing tiers available yet.</p>
      ) : (
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>
      )}
    </div>
  )
}