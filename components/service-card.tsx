"use client"

import type { ReactNode } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export default function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <div className="group hover:-translate-y-2 transition-transform duration-300">
      <Card className="bg-slate-800 border-slate-700 overflow-hidden h-full">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
        <CardContent className="pt-8">
          <div className="mb-6">{icon}</div>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </CardContent>
        <CardFooter>
          <button className="text-cyan-400 flex items-center group">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </CardFooter>
      </Card>
    </div>
  )
}

