"use client"

import { useEffect, useState } from "react"

export function useMediaQuery(query: string) {
  // Default to false on server-side
  const [matches, setMatches] = useState(false)
  
  useEffect(() => {
    // This code only runs on the client
    const media = window.matchMedia(query)
    // Set initial value
    setMatches(media.matches)
    
    const listener = () => setMatches(media.matches)
    media.addEventListener("change", listener)
    
    return () => media.removeEventListener("change", listener)
  }, [query]) // Remove matches dependency to prevent infinite loops
  
  return matches
} 