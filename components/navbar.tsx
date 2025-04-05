"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "home", label: "Inicio" },
  { id: "services", label: "Servicios" },
  { id: "process", label: "Proceso" },
  { id: "team", label: "Equipo" },
  { id: "projects", label: "Proyectos" }
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const navRefs = useRef<(HTMLButtonElement | null)[]>([])
  const { scrollYProgress } = useScroll()
  
  // Track scroll position for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled for styling
      setIsScrolled(window.scrollY > 10)
      
      // Account for the navbar height (approximately 60px)
      const scrollPosition = window.scrollY + 60
      
      // Check each section and determine which one is active
      for (const item of navItems) {
        const element = document.getElementById(item.id)
        if (!element) continue
        
        const rect = element.getBoundingClientRect()
        const top = rect.top + window.scrollY
        const bottom = rect.bottom + window.scrollY
        
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(item.id)
          break
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  
  // Show/hide navbar based on scroll direction
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      // Always keep the navbar visible for better navigation
      setIsVisible(true)
    }
  })
  
  // Smooth scroll to section when nav item is clicked
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -100
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4 pointer-events-none"
      >
        <motion.nav
          className="flex items-center justify-between backdrop-blur-md bg-slate-900/85 border border-slate-700/60 
                   rounded-full px-4 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                   max-w-3xl w-[95%] mx-auto pointer-events-auto"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 40px rgba(16,185,129,0.2)"
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            boxShadow: isScrolled 
              ? "0 8px 32px rgba(0,0,0,0.3), 0 0 10px rgba(16,185,129,0.15)" 
              : "0 8px 32px rgba(0,0,0,0.25)"
          }}
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="flex items-center mr-3">
            <motion.a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection("home") }}
              className="text-white font-bold text-lg px-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              PHARAD.AI
            </motion.a>
          </div>
          
          <div className="relative flex items-center space-x-1 px-2">
            <motion.div 
              className="absolute h-8 bg-slate-700/80 backdrop-blur-sm rounded-full"
              layoutId="navBackground"
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 30
              }}
              animate={{
                width: navRefs.current[navItems.findIndex(item => item.id === activeSection)]?.offsetWidth || 100,
                x: navRefs.current[navItems.findIndex(item => item.id === activeSection)]?.offsetLeft || 0,
              }}
            />
            
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                ref={el => { navRefs.current[index] = el }}
                onClick={() => scrollToSection(item.id)}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-1 rounded-full text-sm font-medium transition-colors z-10 ${
                  activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeSection === item.id ? (
                  <motion.span
                    layoutId="activeText"
                    transition={{ type: "spring", duration: 0.5 }}
                  >
                    {item.label}
                  </motion.span>
                ) : (
                  item.label
                )}
              </motion.button>
            ))}
          </div>
          
          <div className="ml-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-4">
                Contacto
              </Button>
            </motion.div>
          </div>
        </motion.nav>
      </motion.div>
    </AnimatePresence>
  )
}

