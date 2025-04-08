"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  delay: number
  siteUrl?: string
  codeUrl?: string
  index: number
}

const ProjectCard = ({ title, description, image, tags, delay, siteUrl, codeUrl, index }: ProjectCardProps) => {
  return (
    <div 
      className="project-card group bg-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2"
    >
      <div className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-3 py-1 rounded-full bg-slate-700 text-cyan-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col space-y-3">
          {siteUrl && (
            <a 
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Visit site <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          )}
          
          {codeUrl && (
            <a 
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full border border-cyan-500 text-cyan-400 hover:bg-cyan-900/20 font-medium py-2 px-4 rounded-md transition-colors"
            >
              View code <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ProjectSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    
    // Target all project cards
    const cards = gsap.utils.toArray<HTMLElement>('.project-card')
    
    // Create initial state (hidden)
    gsap.set(cards, { opacity: 0, y: 70, scale: 0.95 })
    
    // Create the animation
    cards.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
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

  const projects = [
    {
      title: "Genzee",
      description: "Portal inmobiliario diseñado para las preferencias de alquiler de la Generación Z, con una interfaz minimalista.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Python", "Django", "Bootstrap", "Postgres", "Render"],
      delay: 0,
      siteUrl: "#",
      codeUrl: "#"
    },
    {
      title: "AI Retirement Evaluator",
      description: "Aplicación diseñada para calcular tu pensión proyectada bajo el sistema antiguo y el nuevo sistema de pensiones de Chile.",
      image: "/images/pension.webp",
      tags: ["Python", "Fastapi", "React", "Tailwind", "TypeScript", "Vite"],
      delay: 1,
      siteUrl: "#",
      codeUrl: "#"
    },
    {
      title: "XenYield",
      description: "Un juego competitivo de exploración espacial impulsado por DeFi donde los jugadores apuestan activos para explorar exoplanetas tokenizados, extraer recursos y competir por rendimientos. Desarrollado para Sozu Hack #2.",
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Blockchain", "DeFi", "Gaming", "Smart Contracts", "Web3"],
      delay: 2,
      siteUrl: "https://xenyield.vercel.app",
      codeUrl: "https://github.com/xenyield"
    },
    {
      title: "Dobi Agent",
      description: "Un agente autónomo on-chain que valida, monitorea y gestiona dispositivos de infraestructura física en tiempo real, asegurando generación de ingresos y financiamiento a través de flujos de caja tokenizados.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Blockchain", "IoT", "Smart Contracts", "NextJS", "Web3"],
      delay: 3,
      siteUrl: "https://dobi-agent-landing.vercel.app",
      codeUrl: "https://github.com/DOBI_AGENT_LANDING"
    },
    {
      title: "DOM App",
      description: "Sistema que automatiza y optimiza la gestión de permisos municipales, reduciendo tiempo y errores para arquitectos mediante el uso de inteligencia artificial. Proyecto desarrollado para la Dirección de Obras Municipales.",
      image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["AI", "Municipal Work", "Permit Management", "React", "SVG"],
      delay: 4,
      siteUrl: "https://domlapp-landing.vercel.app",
      codeUrl: "https://github.com/DOMLapp_landing"
    },
    {
      title: "SweetCake",
      description: "Sitio de comercio electrónico para pasteles y cupcakes, desarrollado con una interfaz atractiva y experiencia de usuario optimizada. Cada preparación es una obra de arte.",
      image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Python", "Django", "Bootstrap", "Postgres", "Render"],
      delay: 5,
      siteUrl: "#",
      codeUrl: "#"
    }
  ]

  return (
    <div className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestra Experiencia
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformando empresas con soluciones de IA innovadoras y personalizadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={projectsRef}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 