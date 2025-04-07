"use client"

import Image from "next/image"
import { Github, Linkedin, Twitter, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio?: string
  delay?: number
  socialLinks?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export default function TeamMember({ 
  name, 
  role, 
  image, 
  bio,
  delay = 0,
  socialLinks 
}: TeamMemberProps) {
  return (
    <div className="group hover:-translate-y-2 transition-transform duration-300 w-full bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 overflow-hidden h-full shadow-lg hover:shadow-cyan-500/10 rounded-xl">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 z-10"></div>
      <div className="relative w-full h-64">
        <Image 
          src={image} 
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="pt-6 pb-6 px-4 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-1">
          {name}
        </h3>
        <p className="text-cyan-400 mb-3">
          {role}
        </p>
        
        {bio && (
          <p className="text-gray-300 text-sm mb-4 flex-grow line-clamp-2 group-hover:line-clamp-3 transition-all">
            {bio}
          </p>
        )}
        
        {socialLinks && (
          <div className="flex space-x-3 mt-auto">
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {socialLinks.github && (
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
} 