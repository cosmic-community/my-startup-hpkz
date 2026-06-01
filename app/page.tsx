import Link from 'next/link'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import FeatureCard from '@/components/FeatureCard'
import PricingCard from '@/components/PricingCard'
import TeamCard from '@/components/TeamCard'
import TestimonialCard from '@/components/TestimonialCard'
import { getFeatures, getPricingTiers, getTeamMembers, getTestimonials } from '@/lib/cosmic'

export default async function HomePage() {
  const [features, pricingTiers, teamMembers, testimonials] = await Promise.all([
    getFeatures(),
    getPricingTiers(),
    getTeamMembers(),
    getTestimonials(),
  ])

  return (
    <>
      <Hero />

      {features.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Features"
            title="Everything you need to succeed"
            subtitle="Powerful tools designed to help your team move faster and build better."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 6).map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/features" className="font-semibold text-brand-600 hover:text-brand-700">
              View all features →
            </Link>
          </div>
        </section>
      )}

      {pricingTiers.length > 0 && (
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Pricing"
              title="Simple, transparent pricing"
              subtitle="Choose the plan that's right for your team. No hidden fees."
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pricingTiers.map((tier) => (
                <PricingCard key={tier.id} tier={tier} />
              ))}
            </div>
          </div>
        </section>
      )}

      {teamMembers.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Team"
            title="Meet the people behind My Startup"
            subtitle="A passionate team dedicated to building products you'll love."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.slice(0, 4).map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/team" className="font-semibold text-brand-600 hover:text-brand-700">
              Meet the full team →
            </Link>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Testimonials"
              title="Loved by teams everywhere"
              subtitle="Don't just take our word for it—hear from our happy customers."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.slice(0, 3).map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}