"use client"

import { AnimatedSection } from "./animated-section"
import { TiltCard } from "./tilt-card"
import { Button } from "@/components/ui/button"
import { Check, Compass, GraduationCap, UserRound } from "lucide-react"

const packages = [
  {
    name: "VA Clarity Webinar",
    icon: Compass,
    price: "₦2,500",
    description: "For beginners who need clear direction before committing to the full training.",
    features: [
      "Introduction to virtual assistance",
      "Overview of in-demand skills",
      "How to get started step by step",
      "Where to find opportunities",
      "How to position yourself properly",
      "Direction on what to do next"
    ],
    popular: false,
    cta: "Start with Clarity"
  },
  {
    name: "Premium VA Training Program",
    icon: GraduationCap,
    price: "₦20,000",
    description: "For learners who are ready to stay consistent, learn properly, and become job-ready.",
    features: [
      "General VA tools and skills",
      "Travel planning and travel packs",
      "CRM tools",
      "Automation tools",
      "Branding as a virtual assistant",
      "Portfolio creation",
      "Resume and cover letter creation",
      "How to apply for jobs and get clients",
      "Pitching and interview training",
      "Client onboarding and acquisition"
    ],
    popular: true,
    cta: "Join the Main Training"
  },
  {
    name: "Advanced One-on-One Private Training",
    icon: UserRound,
    price: "₦50,000",
    description: "For students who want personalized guidance, faster progress, and direct support tailored to their level.",
    features: [
      "One-on-one training sessions",
      "Personalized learning plan",
      "Direct guidance from an experienced coach",
      "Everything included in the main training",
      "Ongoing feedback and close support"
    ],
    popular: false,
    cta: "Request Private Coaching"
  }
]

export function OffersSection() {
  return (
    <section id="offers" className="relative overflow-hidden bg-secondary/30 py-16 sm:py-20 lg:py-24">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Programs & Pricing
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-balance sm:text-4xl lg:text-5xl">
            Choose Your <span className="gradient-text">Learning Path</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground text-pretty sm:text-lg">
            Flexible programs designed to meet you where you are and take you 
            where you want to be. Invest in yourself today.
          </p>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {packages.map((pkg, index) => (
            <AnimatedSection 
              key={pkg.name} 
              animation="scale" 
              delay={index * 150}
            >
              <TiltCard className="h-full">
                <div 
                  className={`relative h-full rounded-3xl p-6 sm:p-8 ${
                    pkg.popular 
                      ? 'bg-primary text-primary-foreground shadow-2xl lg:scale-105' 
                      : 'glass'
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                      <span className="rounded-full bg-accent px-4 py-1 text-sm font-semibold text-accent-foreground">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                      pkg.popular ? 'bg-primary-foreground/20' : 'bg-primary/10'
                    }`}>
                      <pkg.icon className={`w-7 h-7 ${pkg.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className={`text-sm ${pkg.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <span className="text-3xl font-bold sm:text-4xl">{pkg.price}</span>
                    <span className={`text-sm ${pkg.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                      {" "}access fee
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          pkg.popular ? 'bg-primary-foreground/20' : 'bg-primary/10'
                        }`}>
                          <Check className={`w-3 h-3 ${pkg.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                        </div>
                        <span className={`text-sm ${pkg.popular ? 'text-primary-foreground/90' : 'text-foreground'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    asChild
                    className={`w-full rounded-full py-6 text-lg font-semibold ${
                      pkg.popular 
                        ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90' 
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    <a href="#register">{pkg.cta}</a>
                  </Button>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={600} className="mt-10 text-center sm:mt-12">
          <div className="glass inline-flex max-w-full flex-wrap items-center justify-center gap-3 rounded-full px-4 py-3 text-center sm:px-6">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-medium text-foreground">Choose the path that fits your stage and learning style.</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
