"use client"

import { PinContainer } from "@/components/ui/3d-pin"
import { Search, Lightbulb, Code, Rocket } from "lucide-react"
import Link from "next/link"

export default function ProcessSection() {
  return (
    <section 
      className="w-full py-24 pb-32"
      id="process"
      style={{ 
        contain: 'content',
        background: 'linear-gradient(to bottom, #1e293b, #334155)',
        backgroundImage: 'linear-gradient(to bottom, rgb(30 41 59), rgb(51 65 85))'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestro Proceso</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Seguimos una metodología probada para entregar resultados excepcionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link href="#contact" className="block">
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

          <Link href="#contact" className="block">
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

          <Link href="#contact" className="block">
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

          <Link href="#contact" className="block">
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