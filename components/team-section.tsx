"use client"

import TeamMember from "@/components/team-member"

export default function TeamSection() {
  return (
    <section 
      className="w-full py-24 pb-32 bg-slate-900"
      id="team"
      style={{ contain: 'content' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the experts behind our innovative AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMember
            name="Alex Johnson"
            role="CEO & AI Architect"
            image="/images/team/team-1.jpg"
            delay={0}
            socialLinks={{
              twitter: "https://twitter.com",
              linkedin: "https://linkedin.com",
              github: "https://github.com"
            }}
          />
          <TeamMember
            name="Sarah Chen"
            role="CTO"
            image="/images/team/team-2.jpg"
            delay={0}
            socialLinks={{
              linkedin: "https://linkedin.com",
              github: "https://github.com"
            }}
          />
          <TeamMember
            name="Michael Rodriguez"
            role="Lead Developer"
            image="/images/team/team-3.jpg"
            delay={0}
            socialLinks={{
              twitter: "https://twitter.com",
              github: "https://github.com"
            }}
          />
          <TeamMember
            name="Emily Taylor"
            role="AI Research Scientist"
            image="/images/team/team-4.jpg"
            delay={0}
            socialLinks={{
              linkedin: "https://linkedin.com",
              github: "https://github.com"
            }}
          />
        </div>
      </div>
    </section>
  )
} 