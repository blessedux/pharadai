"use client"

import { useState, useEffect } from 'react'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Function to handle scroll and determine footer visibility
    const handleScroll = () => {
      // Calculate how far down the page the user has scrolled
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Start showing the footer when user is close to the end of the page
      // Adjust the threshold based on your needs
      const threshold = documentHeight - windowHeight - 300
      
      if (scrollPosition > threshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    
    // Initial check
    handleScroll()
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <footer 
      id="contact" 
      className={`w-full py-12 bg-slate-900 fixed bottom-0 left-0 z-[5] overflow-hidden min-h-[16rem] transition-transform duration-500 ease-out ${!isVisible ? 'translate-y-[90%]' : 'translate-y-0'}`}
      style={{ 
        transform: isVisible ? 'translateY(0)' : 'translateY(90%)',
        willChange: 'transform',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">PHARAD.AI</h2>
            <p className="text-gray-400 mt-2">Empresa líder en soluciones de IA en Chile y Estados Unidos</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-white font-bold mb-3">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Agentes de IA</li>
                <li>Automatización</li>
                <li>Soluciones Personalizadas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre Nosotros</li>
                <li>Carreras</li>
                <li>Contacto</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Política de Privacidad</li>
                <li>Términos de Servicio</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Pharad.AI. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Liderando innovación en IA desde Santiago, Chile y San Francisco, Estados Unidos.</p>
        </div>
      </div>

      {/* Large background title */}
      <div className="absolute -bottom-10 left-0 right-0 flex justify-center transform translate-y-0 overflow-hidden">
        <h2 
          className="text-[12rem] md:text-[16rem] font-extrabold text-gray-500/25 tracking-[0.3em] font-favorite whitespace-nowrap"
          style={{ fontFamily: "var(--font-favorite)" }}
        >
          PHARAD.AI
        </h2>
      </div>
    </footer>
  )
} 