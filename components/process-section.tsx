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
          start: "top 90%",
          toggleActions: "play none none reset",
          once: false
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
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reset",
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
    <div className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestro Proceso</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Seguimos una metodología probada para entregar resultados excepcionales
          </p>
        </div>

        <div className="flex flex-wrap justify-center -mx-3" ref={cardsRef}>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6 process-card-container" style={{ maxWidth: "320px" }}>
            <Link href="#contact" className="block process-card h-full">
              <PinContainer
                title="Iniciar Consulta"
                containerClassName="w-full h-full"
              >
                <div className="bg-slate-800/90 rounded-lg p-6 h-full flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-4">01</div>
                  <Search className="w-10 h-10 text-cyan-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Descubrimiento</h3>
                  <p className="text-gray-300 mb-4 text-sm">Analizamos necesidades y desafíos de su negocio</p>
                  <button className="mt-auto px-4 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition-colors text-sm">
                    Agendar Consulta
                  </button>
                </div>
              </PinContainer>
            </Link>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6 process-card-container" style={{ maxWidth: "320px" }}>
            <Link href="#contact" className="block process-card h-full">
              <PinContainer
                title="Ver Estrategia"
                containerClassName="w-full h-full"
              >
                <div className="bg-slate-800/90 rounded-lg p-6 h-full flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-4">02</div>
                  <Lightbulb className="w-10 h-10 text-cyan-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Estrategia</h3>
                  <p className="text-gray-300 mb-4 text-sm">Desarrollamos soluciones personalizadas</p>
                  <button className="mt-auto px-4 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition-colors text-sm">
                    Ver Propuesta
                  </button>
                </div>
              </PinContainer>
            </Link>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6 process-card-container" style={{ maxWidth: "320px" }}>
            <Link href="#contact" className="block process-card h-full">
              <PinContainer
                title="Seguir Desarrollo"
                containerClassName="w-full h-full"
              >
                <div className="bg-slate-800/90 rounded-lg p-6 h-full flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-4">03</div>
                  <Code className="w-10 h-10 text-cyan-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Desarrollo</h3>
                  <p className="text-gray-300 mb-4 text-sm">Construimos su solución personalizada</p>
                  <button className="mt-auto px-4 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition-colors text-sm">
                    Ver Progreso
                  </button>
                </div>
              </PinContainer>
            </Link>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6 process-card-container" style={{ maxWidth: "320px" }}>
            <Link href="#contact" className="block process-card h-full">
              <PinContainer
                title="Comenzar"
                containerClassName="w-full h-full"
              >
                <div className="bg-slate-800/90 rounded-lg p-6 h-full flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-4">04</div>
                  <Rocket className="w-10 h-10 text-cyan-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Implementación</h3>
                  <p className="text-gray-300 mb-4 text-sm">Implementamos y optimizamos soluciones</p>
                  <button className="mt-auto px-4 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition-colors text-sm">
                    Lanzar Proyecto
                  </button>
                </div>
              </PinContainer>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 