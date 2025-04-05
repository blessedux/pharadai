"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  image: string
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
  delay = 0,
  socialLinks 
}: TeamMemberProps) {
  return (
    <div className="group hover:-translate-y-2 transition-transform duration-300">
      <Card className="bg-slate-800 border-slate-700 overflow-hidden h-full">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
        <div className="relative w-full h-64">
          <Image 
            src={image} 
            alt={name}
            fill
            className="object-cover"
            priority
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <CardContent className="pt-6 pb-6">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-cyan-400 mb-4">{role}</p>
          
          {socialLinks && (
            <div className="flex space-x-3">
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
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
        </CardContent>
      </Card>
    </div>
  )
} 