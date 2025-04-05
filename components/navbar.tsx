"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "team", label: "Team" }
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  
  // Function to determine which section is currently in view
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2
    
    // Check each section and determine which one is active
    const sections = navItems.map(item => {
      const element = document.getElementById(item.id)
      if (!element) return { id: item.id, top: 0, bottom: 0 }
      
      const rect = element.getBoundingClientRect()
      const top = rect.top + window.scrollY
      const bottom = rect.bottom + window.scrollY
      
      return { id: item.id, top, bottom }
    })
    
    // Find the current section
    for (const section of sections) {
      if (scrollPosition >= section.top && scrollPosition <= section.bottom) {
        setActiveSection(section.id)
        break
      }
    }
  }, [])
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    // Call it once to set initial state
    handleScroll()
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])
  
  // Smooth scroll to section when nav item is clicked
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  return (
    <div className="fixed bottom-10 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav className="flex items-center bg-slate-800/60 backdrop-blur-lg border border-slate-700/50 rounded-full px-2 py-1.5 shadow-xl pointer-events-auto">
        <div className="mr-3 flex items-center">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection("home") }}
            className="text-white font-bold text-lg px-4"
          >
            PHARAD.AI
          </a>
        </div>
        
        <div className="relative flex items-center space-x-1">
          {/* Highlight background that moves */}
          <div 
            className={`absolute h-8 bg-slate-700 rounded-full transition-all duration-300 ease-in-out`}
            style={{
              left: `${navItems.findIndex(item => item.id === activeSection) * 100}%`,
              width: '100%',
              transform: activeSection === 'home' ? 'translateX(0)' : `translateX(${navItems.findIndex(item => item.id === activeSection) * 100}%)`
            }}
          ></div>
          
          {/* Navigation buttons */}
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-1 rounded-full text-sm font-medium transition-colors z-10 ${
                activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="ml-3">
          <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-4">
            Contact
          </Button>
        </div>
      </nav>
    </div>
  )
}

