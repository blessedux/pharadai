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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestro Equipo</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conozca a los expertos detrás de nuestras innovadoras soluciones de IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMember
            name="Alex Johnson"
            role="CEO y Arquitecto de IA"
            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
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
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
            delay={0}
            socialLinks={{
              linkedin: "https://linkedin.com",
              github: "https://github.com"
            }}
          />
          <TeamMember
            name="Michael Rodriguez"
            role="Desarrollador Principal"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
            delay={0}
            socialLinks={{
              twitter: "https://twitter.com",
              github: "https://github.com"
            }}
          />
          <TeamMember
            name="Emily Taylor"
            role="Científica de Investigación en IA"
            image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
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