"use client"

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const bgTitleRef = useRef<HTMLHeadingElement>(null)
  const [debugMode, setDebugMode] = useState(false)

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    
    // Clean up any existing scroll triggers
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.id?.toString()?.includes("footer")) {
        trigger.kill()
      }
    })

    // Create a simple entry animation for the footer
    gsap.fromTo(footerRef.current, 
      { 
        opacity: 0, 
        y: 50 
      }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          end: "top 75%",
          scrub: 0.5,
          id: "footer-reveal",
          markers: debugMode,
          once: false
        }
      }
    )
    
    // Add parallax effect to the content inside footer
    gsap.to(contentRef.current, {
      y: -30, // Move content up slightly for parallax effect
      ease: "power1.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 95%",
        end: "bottom bottom", 
        scrub: 0.8,
        id: "footer-content-parallax",
        markers: debugMode
      }
    })
    
    // Add a more dramatic scale effect to the background title
    gsap.to(bgTitleRef.current, {
      scale: 1.2,
      opacity: 0.4,
      filter: "blur(2px)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom", 
        end: "bottom bottom", 
        scrub: 1,
        id: "footer-bg-parallax",
        markers: debugMode
      }
    })
    
    return () => {
      // Clean up by killing ScrollTriggers with specific IDs
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id?.toString()?.includes("footer")) {
          trigger.kill()
        }
      })
    }
  }, [debugMode])

  return (
    <footer 
      ref={footerRef}
      id="contact" 
      className="footer w-full py-12 relative overflow-hidden min-h-[16rem] z-[60]"
      style={{
        transformOrigin: 'bottom',
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.5)'
      }}
    >
      {/* Debug controls - only visible in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 right-4 z-50">
          <button 
            onClick={() => setDebugMode(!debugMode)}
            className="bg-yellow-500 text-black px-3 py-1 rounded text-sm font-bold"
          >
            {debugMode ? 'Disable Debug' : 'Enable Debug'}
          </button>
        </div>
      )}
      
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
          ref={bgTitleRef}
          className="footer-bg-title text-[12rem] md:text-[16rem] font-extrabold text-gray-500/25 tracking-[0.3em] font-favorite whitespace-nowrap"
          style={{ fontFamily: "var(--font-favorite)" }}
        >
          PHARAD.AI
        </h2>
      </div>
    </footer>
  )
} 