"use client"

import Image from "next/image"
import { AnimatedSection } from "./animated-section"
import { Clock, Heart, Headphones, RefreshCw, Users, Video } from "lucide-react"

const supportFeatures = [
  {
    icon: Video,
    title: "Recorded + Live Support",
    description: "Learn through guided live sessions and recorded materials you can revisit when you need clarity."
  },
  {
    icon: Clock,
    title: "Structured Learning Path",
    description: "Every learning path is arranged step by step so you always know what to do next."
  },
  {
    icon: Heart,
    title: "Direction Beyond Training",
    description: "You get guidance that helps you move from learning the skill to presenting yourself and finding clients."
  },
  {
    icon: Headphones,
    title: "Ongoing Mentorship",
    description: "Get follow-up guidance, feedback, and support as you keep building confidence."
  },
  {
    icon: RefreshCw,
    title: "Practical Task Training",
    description: "Lessons are built around the actual tools, tasks, and workflows virtual assistants need to use."
  },
  {
    icon: Users,
    title: "Accountability Support",
    description: "Bloom VA Academy is designed to help students stay consistent instead of learning alone and dropping off."
  }
]

export function CertificationSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            More Than Lessons
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-balance sm:text-4xl lg:text-5xl">
            Certification & <span className="gradient-text">Learning Support</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground text-pretty sm:text-lg">
            Complete your training with practical guidance, clear structure,
            and a certificate that reflects the skills you&apos;ve built through BLOOM.
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="mx-auto grid max-w-6xl gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {supportFeatures.map((feature, index) => (
            <AnimatedSection 
              key={feature.title} 
              animation="scale" 
              delay={index * 100}
            >
              <div className="glass group h-full rounded-2xl p-5 transition-all duration-300 hover:shadow-xl sm:p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary sm:h-14 sm:w-14">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Certificate Preview */}
        <AnimatedSection animation="fade-up" delay={600} className="mt-12 sm:mt-16">
          <div className="mx-auto max-w-4xl">
            <div className="neu-flat rounded-3xl p-4 sm:p-6 lg:p-8">
              <div className="overflow-hidden rounded-2xl border border-primary/15 bg-card shadow-xl">
                <div className="relative aspect-[10/7] w-full">
                  <Image
                    src="/certificate.jpg"
                    alt="Bloom VA Academy certificate of completion"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 896px, (min-width: 640px) 640px, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
