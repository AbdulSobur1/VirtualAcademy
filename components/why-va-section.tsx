"use client"

import { AnimatedSection } from "./animated-section"
import { Globe, Clock, TrendingUp, Laptop, DollarSign, Users } from "lucide-react"

const benefits = [
  {
    icon: Globe,
    title: "Work From Anywhere",
    description: "Freedom to work from home, a café, or anywhere in the world with an internet connection.",
    highlight: "Location Independence"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Set your own schedule and work when you're most productive. Perfect for balancing life commitments.",
    highlight: "Work-Life Balance"
  },
  {
    icon: TrendingUp,
    title: "Growing Demand",
    description: "The VA industry is booming as more businesses go remote and need skilled virtual support.",
    highlight: "High Demand Skills"
  },
  {
    icon: Laptop,
    title: "Low Startup Cost",
    description: "You can start with your smartphone and reliable internet while you build up your tools over time.",
    highlight: "Easy to Start"
  },
  {
    icon: DollarSign,
    title: "Earning Potential",
    description: "VAs can earn competitive rates, with experienced professionals charging premium fees.",
    highlight: "$25-75+/hour"
  },
  {
    icon: Users,
    title: "Diverse Clients",
    description: "Work with entrepreneurs, executives, and businesses across various industries worldwide.",
    highlight: "Varied Experience"
  }
]

export function WhyVASection() {
  return (
    <section id="why-va" className="relative overflow-hidden bg-secondary/30 py-16 sm:py-20 lg:py-24">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            The Opportunity
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-balance sm:text-4xl lg:text-5xl">
            Why Become a <span className="gradient-text">Virtual Assistant?</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground text-pretty sm:text-lg">
            The virtual assistant industry offers incredible opportunities for those 
            seeking flexibility, independence, and meaningful work. Here&apos;s why thousands 
            are making the switch.
          </p>
        </AnimatedSection>

        {/* Benefits Grid */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <AnimatedSection 
              key={benefit.title} 
              animation="fade-up" 
              delay={index * 100}
            >
              <div className="glass group h-full rounded-2xl p-5 transition-all duration-300 hover:shadow-xl sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20 sm:h-14 sm:w-14">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <span className="inline-block text-xs font-semibold text-accent uppercase tracking-wide">
                      {benefit.highlight}
                    </span>
                    <h3 className="font-semibold text-lg text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={600} className="mt-12 sm:mt-16">
          <div className="glass rounded-3xl p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 gap-6 text-center min-[420px]:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "Flexible", label: "Learn around your current schedule" },
                { value: "Practical", label: "Build real-world skills step by step" },
                { value: "Remote", label: "Work from home or anywhere you choose" },
                { value: "Scalable", label: "Grow from starter skills to paid client work" }
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-2xl font-bold gradient-text sm:text-3xl lg:text-4xl">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
