"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PinContainer } from "@/components/ui/3d-pin"
import { Search, Lightbulb, Code, Rocket } from "lucide-react"
import Link from "next/link"

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    
    // Title animation
    gsap.fromTo(
      [titleRef.current?.querySelector('h2'), titleRef.current?.querySelector('p')],
      { 
        opacity: 0, 
        y: 30 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      }
    )
    
    // Process cards animation
    const cards = gsap.utils.toArray<HTMLElement>('.process-card')
    gsap.set(cards, { opacity: 0, y: 50, rotateY: 5 })
    
    cards.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse",
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
      id="process"
      ref={sectionRef}
      style={{ 
        background: 'linear-gradient(to bottom, #1e293b, #334155)',
        backgroundImage: 'linear-gradient(to bottom, rgb(30 41 59), rgb(51 65 85))'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestro Proceso</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Seguimos una metodología probada para entregar resultados excepcionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={cardsRef}>
          <Link href="#contact" className="block process-card">
            <PinContainer
              title="Iniciar Consulta"
              containerClassName="w-full"
            >
              <div className="bg-slate-800/90 rounded-lg p-8 h-full flex flex-col items-center text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-4">01</div>
                <Search className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Descubrimiento</h3>
                <p className="text-gray-300 mb-6">Analizamos las necesidades y desafíos de su negocio</p>
                <button className="px-6 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition-colors">
                  Agendar Consulta
                </button>
              </div>
            </PinContainer>
          </Link>

          <Link href="#contact" className="block process-card">
            <PinContainer
              title="Ver Estrategia"
              containerClassName="w-full"
            >
              <div className="bg-slate-800/90 rounded-lg p-8 h-full flex flex-col items-center text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-4">02</div>
                <Lightbulb className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Estrategia</h3>
                <p className="text-gray-300 mb-6">Desarrollamos una estrategia de solución personalizada</p>
                <button className="px-6 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition-colors">
                  Ver Propuesta
                </button>
              </div>
            </PinContainer>
          </Link>

          <Link href="#contact" className="block process-card">
            <PinContainer
              title="Seguir Desarrollo"
              containerClassName="w-full"
            >
              <div className="bg-slate-800/90 rounded-lg p-8 h-full flex flex-col items-center text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-4">03</div>
                <Code className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Desarrollo</h3>
                <p className="text-gray-300 mb-6">Nuestros expertos construyen su solución personalizada</p>
                <button className="px-6 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition-colors">
                  Ver Progreso
                </button>
              </div>
            </PinContainer>
          </Link>

          <Link href="#contact" className="block process-card">
            <PinContainer
              title="Comenzar"
              containerClassName="w-full"
            >
              <div className="bg-slate-800/90 rounded-lg p-8 h-full flex flex-col items-center text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-4">04</div>
                <Rocket className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Implementación</h3>
                <p className="text-gray-300 mb-6">Implementamos y optimizamos su solución</p>
                <button className="px-6 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition-colors">
                  Lanzar Proyecto
                </button>
              </div>
            </PinContainer>
          </Link>
        </div>
      </div>
    </section>
  )
} 