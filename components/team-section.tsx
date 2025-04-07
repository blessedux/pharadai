"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import TeamMember from "@/components/team-member"

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    
    // Target all team cards
    const cards = gsap.utils.toArray<HTMLElement>('.team-card')
    
    // Create initial state (hidden)
    gsap.set(cards, { opacity: 0, y: 50, rotateX: 10 })
    
    // Create the animation
    cards.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
          once: false
        }
      })
    })
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section 
      className="w-full py-24 pb-32 relative z-10"
      id="team"
      ref={sectionRef}
      style={{ 
        background: "linear-gradient(to bottom, rgb(51 65 85), rgb(15 23 42))",
        backgroundImage: "url('/patterns/grid.svg'), linear-gradient(to bottom, rgb(51 65 85), rgb(15 23 42))",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un equipo multidisciplinario de expertos en tecnología, negocios y normativa urbana
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" ref={cardsRef}>
          <div className="flex h-full team-card">
            <TeamMember
              name="Álvaro Acevedo"
              role="CTO y Founder"
              image="/PFP/AlvaroPFP.png"
              delay={0}
              bio="Ingeniero en Administración de Empresas con diplomados en Marketing Digital, Comercio Internacional y Gestión Financiera. Ha liderado proyectos de transformación digital como Product Owner en Unired y Cencosud, desarrollando plataformas orientadas al usuario, sistemas de pago y marketplaces."
              socialLinks={{
                linkedin: "https://linkedin.com",
                github: "https://github.com"
              }}
            />
          </div>
          
          <div className="flex h-full team-card">
            <TeamMember
              name="Franco Enrique Parra Campos"
              role="Back Office Engineer"
              image="/PFP/FrancoPFP.png"
              delay={0}
              bio="Ingeniero Civil Informático por la Universidad Técnica Federico Santa María. Ha liderado la automatización de procesos críticos y la implementación de soluciones inteligentes basadas en datos, incluyendo proyectos para el Ministerio de Vivienda y Urbanismo."
              socialLinks={{
                twitter: "https://twitter.com",
                github: "https://github.com"
              }}
            />
          </div>
          
          <div className="flex h-full team-card">
            <TeamMember
              name="Simon Espínola Marín"
              role="Director Comercial y Co-Founder"
              image="/PFP/SimonPFP.png"
              delay={0}
              bio="Economista de la Universidad de Chile, con estudios en innovación social en Aalto University (Finlandia) y certificación en Project Management (MIT xPro). Ex CEO de Naturland, donde lideró un proceso de expansión y transformación digital."
              socialLinks={{
                linkedin: "https://linkedin.com",
                github: "https://github.com"
              }}
            />
          </div>
          
          <div className="flex h-full team-card">
            <TeamMember
              name="Joaquín Farfán Torres"
              role="Desarrollador Front-end"
              image="/PFP/JoaquinPFP.png"
              delay={0}
              bio="Desarrollador con formación técnica en desarrollo web y diseño UX, con estudios en Front-End Engineering y diseño de experiencia de usuario. Cuenta con experiencia en la creación de interfaces digitales centradas en el usuario, especialmente en plataformas Web3."
              socialLinks={{
                twitter: "https://twitter.com",
                github: "https://github.com"
              }}
            />
          </div>
          
          <div className="flex h-full team-card">
            <TeamMember
              name="Francisca Salazar Herrera"
              role="Analista de Proyectos Urbanos"
              image="/PFP/FranPFP.png"
              delay={0}
              bio="Arquitecta titulada de la Universidad de Santiago de Chile (USACH), Máster en Estudios Territoriales y Planificación. Posee más de 7 años de experiencia en el sector público, con 4 años como Arquitecta Revisora en distintas Direcciones de Obras (DOM)."
              socialLinks={{
                linkedin: "https://linkedin.com"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
} 