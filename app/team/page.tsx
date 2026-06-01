import SectionHeading from '@/components/SectionHeading'
import TeamCard from '@/components/TeamCard'
import { getTeamMembers } from '@/lib/cosmic'

export const metadata = {
  title: 'Team — My Startup',
  description: 'Meet the team behind My Startup.',
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Our Team"
        title="The people behind My Startup"
        subtitle="A diverse, talented team united by a shared mission."
      />
      {teamMembers.length === 0 ? (
        <p className="mt-12 text-center text-slate-500">No team members available yet.</p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </div>
  )
}