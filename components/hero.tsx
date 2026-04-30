"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Users, Award } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-12 pt-24 sm:pb-16 sm:pt-28 lg:min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating shapes */}
        <div className="absolute left-[-3rem] top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl sm:left-10 sm:top-1/4 sm:h-64 sm:w-64 float" />
        <div className="absolute bottom-10 right-[-3rem] h-52 w-52 rounded-full bg-accent/10 blur-3xl sm:bottom-1/4 sm:right-10 sm:h-80 sm:w-80 float-delayed" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary opacity-50 blur-3xl sm:h-96 sm:w-96" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex max-w-full items-center gap-2 rounded-full px-3 py-2 text-xs sm:px-4 sm:text-sm glass">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-foreground">Structured, practical VA training for serious beginners</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl font-bold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
              Launch Your Career as a
              <span className="gradient-text block">Virtual Assistant</span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg lg:text-xl">
              Transform your skills into a thriving remote career. Our comprehensive 
              training program equips you with everything you need to succeed as a 
              professional virtual assistant.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button 
                asChild
                size="lg"
                className="group w-full rounded-full bg-primary px-6 text-base text-primary-foreground hover:bg-primary/90 sm:w-auto sm:px-8 sm:text-lg"
              >
                <a href="#register" className="justify-center">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="w-full rounded-full border-2 px-6 text-base hover:bg-secondary sm:w-auto sm:px-8 sm:text-lg"
              >
                <a href="#about" className="flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Learn More
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              <div className="flex items-center gap-3 rounded-2xl bg-card/50 p-3 sm:bg-transparent sm:p-0">
                <div className="w-12 h-12 neu-flat rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">100+</div>
                  <div className="text-sm text-muted-foreground">Students trained</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-card/50 p-3 sm:bg-transparent sm:p-0">
                <div className="w-12 h-12 neu-flat rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">3</div>
                  <div className="text-sm text-muted-foreground">Learning paths</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-card/50 p-3 sm:bg-transparent sm:p-0 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 neu-flat rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-accent fill-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">₦20k</div>
                  <div className="text-sm text-muted-foreground">Main training</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Card Stack */}
          <div className="relative mx-auto w-full max-w-xl lg:h-[600px] lg:max-w-none">
            {/* Background glow */}
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl sm:h-80 sm:w-80" />
            
            {/* Main Card */}
            <div className="relative rounded-[1.75rem] p-5 shadow-2xl sm:p-6 lg:p-8 glass float">
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-4 sm:items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 sm:h-16 sm:w-16">
                    <span className="text-3xl">💼</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Career Ready Training</h3>
                    <p className="text-muted-foreground">Industry-aligned curriculum</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "General Virtual Assistant tools & skills",
                    "Travel planning & travel packs",
                    "CRM Tools",
                    "Automation tools",
                    "Branding as a Virtual assistant",
                    "Portfolio Creation",
                    "Resume & cover letter creation.",
                    "How to apply for jobs & get clients.",
                    "Pitching & Interview Training",
                    "Client onboarding & client acquisition",
                  ].map((skill, i) => (
                    <div key={i} className="flex items-start gap-3 text-foreground">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20">
                        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base">{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <div className="text-2xl font-bold text-primary">₦20,000</div>
                    </div>
                    <Button className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge Cards */}
            <div className="absolute right-3 top-3 hidden rounded-2xl p-4 shadow-lg sm:block lg:-right-4 lg:-top-4 glass float-delayed">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">Job-Ready</div>
                  <div className="text-xs text-muted-foreground">Practical skills</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-3 left-3 hidden rounded-2xl p-4 shadow-lg sm:block lg:-bottom-4 lg:-left-4 glass float-slow">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">Flexible</div>
                  <div className="text-xs text-muted-foreground">Learn at your pace</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
