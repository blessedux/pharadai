"use client"

import Image from "next/image"
import { Github, Linkedin, Twitter, X } from "lucide-react"
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog"

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
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: "16px",
        }}
        className="group hover:-translate-y-2 transition-transform duration-300 w-full bg-slate-800/80 backdrop-blur-sm border-slate-700 overflow-hidden h-full"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
        <MorphingDialogImage 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover"
        />
        <div className="pt-6 pb-6 px-4 flex flex-col">
          <MorphingDialogTitle className="text-xl font-bold text-white mb-1">
            {name}
          </MorphingDialogTitle>
          <MorphingDialogSubtitle className="text-cyan-400 mb-3">
            {role}
          </MorphingDialogSubtitle>
          
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
      </MorphingDialogTrigger>
      
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: "24px",
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-slate-700 bg-slate-800/90 backdrop-blur-md sm:w-[600px]"
        >
          <MorphingDialogImage 
            src={image} 
            alt={name}
            className="h-72 w-full object-cover"
          />
          <div className="p-6">
            <MorphingDialogTitle className="text-2xl font-bold text-white">
              {name}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-cyan-400 text-lg">
              {role}
            </MorphingDialogSubtitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 50 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 50 },
              }}
            >
              {bio && (
                <p className="mt-4 text-gray-300">
                  {bio}
                </p>
              )}
              
              {socialLinks && (
                <div className="flex space-x-4 mt-6">
                  {socialLinks.twitter && (
                    <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white">
                      <X className="h-5 w-5" />
                      <span>Twitter</span>
                    </a>
                  )}
                  {socialLinks.linkedin && (
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white">
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {socialLinks.github && (
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white">
                      <Github className="h-5 w-5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              )}
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className="text-white absolute top-4 right-4 bg-slate-700/50 hover:bg-slate-700 rounded-full p-1" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
} 