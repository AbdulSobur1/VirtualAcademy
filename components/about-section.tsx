"use client"

import { AnimatedSection } from "./animated-section"
import { TiltCard } from "./tilt-card"
import { Lightbulb, Target, Heart, Sparkles } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Practical Learning",
    description: "Hands-on training with real-world projects and scenarios that prepare you for actual client work."
  },
  {
    icon: Target,
    title: "Career-Focused",
    description: "Every module is designed to make you job-ready with skills employers actively seek."
  },
  {
    icon: Heart,
    title: "Supportive Community",
    description: "Join a network of like-minded individuals and mentors who support your growth journey."
  },
  {
    icon: Sparkles,
    title: "Continuous Growth",
    description: "Access to updated resources and ongoing support even after you complete the program."
  }
]

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <AnimatedSection animation="slide-left">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  About the Academy
                </span>
              </div>
              
              <h2 className="text-3xl font-serif font-bold text-balance sm:text-4xl lg:text-5xl">
                Where Ambition Meets
                <span className="gradient-text"> Expert Guidance</span>
              </h2>
              
              <p className="text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                Bloom VA Academy was founded with a simple mission: to empower 
                individuals with the skills and confidence they need to build 
                successful remote careers. We believe that with the right training 
                and support, anyone can become a highly sought-after virtual assistant.
              </p>
              
              <p className="text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                Our curriculum is crafted by industry experts who understand what 
                clients need. We don&apos;t just teach you skills—we prepare you to 
                deliver exceptional value from day one.
              </p>

              <div className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-sm font-medium text-foreground"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">100+ students</span> have 
                  transformed their careers with us
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Content - Value Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value, index) => (
              <AnimatedSection 
                key={value.title} 
                animation="scale" 
                delay={index * 100}
              >
                <TiltCard className="h-full">
                  <div className="neu-flat rounded-2xl p-6 h-full space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
