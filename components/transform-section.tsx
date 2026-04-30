"use client"

import { AnimatedSection } from "./animated-section"
import { ArrowRight } from "lucide-react"

const transformations = [
  {
    before: "Feeling stuck in a 9-5 with no flexibility",
    after: "Working from anywhere, setting your own hours"
  },
  {
    before: "Uncertain about your career direction",
    after: "Clear path with in-demand, marketable skills"
  },
  {
    before: "Limited income with no growth potential",
    after: "Earning potential that grows with experience"
  },
  {
    before: "Missing time with family and loved ones",
    after: "Present for life&apos;s moments while building a career"
  }
]

export function TransformSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Your Transformation
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-balance sm:text-4xl lg:text-5xl">
            From Where You Are to <span className="gradient-text">Where You Want to Be</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground text-pretty sm:text-lg">
            Our graduates don&apos;t just learn skills—they transform their lives. 
            See the journey that awaits you.
          </p>
        </AnimatedSection>

        {/* Transformation Timeline */}
        <div className="mx-auto max-w-4xl space-y-4 sm:space-y-6">
          {transformations.map((item, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-up" 
              delay={index * 150}
            >
              <div className="glass group rounded-2xl p-5 transition-all duration-300 hover:shadow-xl sm:p-6 lg:p-8">
                <div className="grid items-center gap-5 md:grid-cols-[1fr,auto,1fr] md:gap-6">
                  {/* Before */}
                  <div className="text-center md:text-right">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-2">
                      Before
                    </span>
                    <p className="text-base text-foreground sm:text-lg">{item.before}</p>
                  </div>
                  
                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="text-center md:text-left">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide block mb-2">
                      After
                    </span>
                    <p className="text-base font-medium text-foreground sm:text-lg">{item.after}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Journey Visualization */}
        <AnimatedSection animation="scale" delay={600} className="mt-12 sm:mt-16">
          <div className="neu-flat mx-auto max-w-4xl rounded-3xl p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-4">
              {[
                { step: "01", title: "Enroll", desc: "Join the academy" },
                { step: "02", title: "Learn", desc: "Master core skills" },
                { step: "03", title: "Practice", desc: "Real-world projects" },
                { step: "04", title: "Launch", desc: "Start your career" }
              ].map((phase, i) => (
                <div key={i} className="text-center relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold gradient-text">{phase.step}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{phase.title}</h4>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                  
                  {/* Connector line */}
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-accent/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
