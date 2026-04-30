"use client"

import Image from "next/image"
import { AnimatedSection } from "./animated-section"
import { TiltCard } from "./tilt-card"
import { CheckCircle2, UserRound, Users, BookOpen } from "lucide-react"

const trainerSupport = [
  {
    text: "Practical guidance focused on helping you become job-ready, not just inspired."
  },
  {
    text: "Structured teaching, clear next steps, and support that keeps you accountable."
  },
  {
    text: "A learning experience built around real VA tasks, live support, and feedback."
  }
]

const stats = [
  { icon: Users, value: "100+", label: "Students trained" },
  { icon: UserRound, value: "1:1", label: "Private support available" },
  { icon: BookOpen, value: "3", label: "Learning paths" }
]

export function TrainerSection() {
  return (
    <section id="trainer" className="relative overflow-hidden bg-secondary/30 py-16 sm:py-20 lg:py-24">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Your Lead Trainer
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-balance sm:text-4xl lg:text-5xl">
            Meet the <span className="gradient-text">Trainer</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground text-pretty sm:text-lg">
            Meet the trainer guiding Bloom VA Academy learners with clarity,
            structure, and practical support.
          </p>
        </AnimatedSection>

        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Trainer Card */}
          <AnimatedSection animation="slide-left">
            <TiltCard>
              <div className="glass rounded-3xl p-5 sm:p-8 lg:p-10">
                {/* Profile */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl border border-border/60 bg-card shadow-lg sm:h-36 sm:w-36">
                    <Image
                      src="/tamilore-ajayi.jpg"
                      alt="Tamilore Ajayi, lead trainer at Bloom VA Academy"
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 640px) 144px, 112px"
                      priority
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-1">Tamilore Ajayi</h3>
                    <p className="text-primary font-medium mb-3">Lead Trainer</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Tamilore Ajayi is a Virtual Assistant coach and trainer who helps
                      beginners step into the digital space with clarity, structure,
                      and confidence.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      She understands what it feels like to start out confused or unsure,
                      so her teaching style is simple, patient, and easy to follow. She
                      breaks things down in a way that makes learning feel less
                      overwhelming and more doable.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Through BLOOM, Tamilore supports learners not just as a trainer,
                      but as a guide, someone who walks with you, meets you at your pace,
                      and helps you build real, practical skills that can lead to opportunities.
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="mb-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3 sm:gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center p-4 rounded-xl bg-secondary/50">
                      <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Credentials */}
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {["Lead trainer", "Group training", "One-on-one support"].map((badge, i) => (
                    <span 
                      key={i} 
                      className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </AnimatedSection>

          {/* Support Highlights */}
          <AnimatedSection animation="slide-right">
            <div className="space-y-4">
              <h4 className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                What You Can Expect
              </h4>
              
              {trainerSupport.map((item, index) => (
                <div 
                  key={index}
                  className="neu-flat space-y-3 rounded-2xl p-5 sm:p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
