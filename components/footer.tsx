"use client"

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    
    // Create a timeline for the footer reveal animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom-=100", // Start when the footer is 100px from the bottom of the viewport
        end: "bottom bottom", // End when the bottom of the footer reaches the bottom of the viewport
        scrub: 1.5, // Smooth scrubbing effect with a slight delay
        onUpdate: (self) => {
          // Update visibility state based on scroll progress
          setIsVisible(self.progress > 0.1)
        }
      }
    })
    
    // Add parallax effect to the content
    tl.to(contentRef.current, {
      y: -50, // Move content up slightly for parallax effect
      ease: "none"
    })
    
    // Add a subtle scale effect to the background title
    tl.to(".footer-bg-title", {
      scale: 1.05,
      opacity: 0.3,
      ease: "none"
    }, "<")
    
    return () => {
      // Clean up by killing the ScrollTrigger
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
    }
  }, [])

  return (
    <footer 
      ref={footerRef}
      id="contact" 
      className={`w-full py-12 bg-slate-900 relative z-[5] overflow-hidden min-h-[16rem] transition-opacity duration-500 ease-out ${!isVisible ? 'opacity-0' : 'opacity-100'}`}
    >
      <div 
        ref={contentRef}
        className="container mx-auto px-4 relative z-10"
      >
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

      {/* Large background title with parallax effect */}
      <div className="absolute -bottom-10 left-0 right-0 flex justify-center transform overflow-hidden">
        <h2 
          className="footer-bg-title text-[12rem] md:text-[16rem] font-extrabold text-gray-500/25 tracking-[0.3em] font-favorite whitespace-nowrap"
          style={{ fontFamily: "var(--font-favorite)" }}
        >
          PHARAD.AI
        </h2>
      </div>
    </footer>
  )
} 