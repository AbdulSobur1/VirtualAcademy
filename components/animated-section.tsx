"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "slide-left" | "slide-right" | "scale"
  delay?: number
}

export function AnimatedSection({ 
  children, 
  className, 
  animation = "fade-up",
  delay = 0 
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const animationClasses = {
    "fade-up": "animate-fade-in-up",
    "slide-left": "animate-slide-left",
    "slide-right": "animate-slide-right",
    "scale": "animate-scale-in"
  }

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={cn(
        "opacity-0",
        isVisible && animationClasses[animation],
        className
      )}
    >
      {children}
    </div>
  )
}
