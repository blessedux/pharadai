"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconBriefcase } from "@tabler/icons-react";

export default function BottomNav() {
  const navItems = [
    {
      name: "Inicio",
      link: "/",
      icon: <IconHome className="h-5 w-5 text-white" />,
    },
    {
      name: "Servicios",
      link: "#services",
      icon: <IconBriefcase className="h-5 w-5 text-white" />,
    },
    {
      name: "Proyectos",
      link: "#projects",
      icon: <IconUser className="h-5 w-5 text-white" />,
    },
    {
      name: "Contacto",
      link: "#contact",
      icon: <IconMessage className="h-5 w-5 text-white" />,
    },
  ];
  
  return (
    <FloatingNav navItems={navItems} className="bg-gradient-to-r from-slate-900/80 to-slate-800/80" />
  );
} 