import SectionHeading from '@/components/SectionHeading'
import FeatureCard from '@/components/FeatureCard'
import { getFeatures } from '@/lib/cosmic'

export const metadata = {
  title: 'Features — My Startup',
  description: 'Explore everything My Startup has to offer.',
}

export default async function FeaturesPage() {
  const features = await getFeatures()

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Features"
        title="Powerful features for modern teams"
        subtitle="Discover all the capabilities that make My Startup the platform of choice."
      />
      {features.length === 0 ? (
        <p className="mt-12 text-center text-slate-500">No features available yet.</p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      )}
    </div>
  )
}