"use client"

import { AnimatedSection } from "./animated-section"
import { Check, X } from "lucide-react"

const comparisons = [
  {
    us: "Teaches in-demand, relevant skills",
    others: "Focus on outdated or overly basic content"
  },
  {
    us: "Structured, step-by-step learning path",
    others: "Random, scattered teaching"
  },
  {
    us: "Practical, task-based training with real VA work",
    others: "Mostly theory with little or no practice"
  },
  {
    us: "Clear focus on becoming job-ready",
    others: "No clear path to actually getting clients"
  },
  {
    us: "Accountability system and partner-based support",
    others: "No follow-up or consistency system"
  },
  {
    us: "Recorded plus live learning support and direction after class",
    others: "Limited rewatch access and students left confused after training"
  }
]

export function DifferentSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            The Difference
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-balance sm:text-4xl lg:text-5xl">
            Why This Academy <span className="gradient-text">Stands Apart</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground text-pretty sm:text-lg">
            Not all VA training programs are created equal. Here&apos;s what makes 
            Bloom VA Academy the clear choice for serious learners.
          </p>
        </AnimatedSection>

        {/* Comparison Cards */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* What We Offer */}
          <AnimatedSection animation="slide-left">
            <div className="h-full">
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm">
                  <Check className="w-4 h-4" />
                  Bloom VA Academy
                </span>
              </div>
              <div className="neu-flat h-full space-y-3 rounded-3xl p-5 sm:p-6 lg:p-8">
                {comparisons.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-primary/5">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground sm:text-base">{item.us}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* What Others Offer */}
          <AnimatedSection animation="slide-right">
            <div className="h-full">
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 bg-muted text-muted-foreground font-semibold px-4 py-2 rounded-full text-sm">
                  <X className="w-4 h-4" />
                  Other Programs
                </span>
              </div>
              <div className="h-full space-y-3 rounded-3xl border-2 border-dashed border-border bg-card/50 p-5 sm:p-6 lg:p-8">
                {comparisons.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl p-3 opacity-60">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <span className="text-sm text-muted-foreground line-through decoration-1 sm:text-base">{item.others}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fade-up" delay={400} className="mt-12 text-center sm:mt-16">
          <p className="mb-2 text-base text-muted-foreground sm:text-lg">
            Ready to experience the difference?
          </p>
          <a 
            href="#offers" 
            className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
          >
            View Our Programs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
