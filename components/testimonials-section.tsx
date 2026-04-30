"use client"

import { AnimatedSection } from "./animated-section"
import { TiltCard } from "./tilt-card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Adaeze Okafor",
    role: "Executive Virtual Assistant",
    image: null,
    rating: 5,
    text: "I went from being completely lost about my career to landing my first client within 2 months of completing the program. The practical training and mentorship made all the difference.",
    result: "Now earning $2,500/month"
  },
  {
    name: "Chukwudi Eze",
    role: "Social Media VA",
    image: null,
    rating: 5,
    text: "The community support is incredible. Whenever I had questions or faced challenges, there was always someone ready to help. I&apos;ve made lifelong friends and business connections.",
    result: "3 recurring clients"
  },
  {
    name: "Blessing Nnamdi",
    role: "Administrative VA",
    image: null,
    rating: 5,
    text: "Best investment I&apos;ve ever made in myself. The curriculum is so well-structured and the tools training prepared me for real client work from day one.",
    result: "Quit 9-5 in 4 months"
  },
  {
    name: "Emmanuel Adeyemi",
    role: "Project Management VA",
    image: null,
    rating: 5,
    text: "I was skeptical at first, but the results speak for themselves. The job placement assistance actually works—I got introduced to my first major client through the academy network.",
    result: "Working with US clients"
  },
  {
    name: "Funke Adeleke",
    role: "E-commerce VA",
    image: null,
    rating: 5,
    text: "The flexibility of learning while maintaining my day job was perfect. The weekend sessions and recorded materials meant I could learn at my own pace.",
    result: "Doubled my income"
  },
  {
    name: "Oluwaseun Bakare",
    role: "General VA",
    image: null,
    rating: 5,
    text: "What sets this academy apart is the personalized attention. The mentors genuinely care about your success and provide feedback that helps you improve continuously.",
    result: "Full client roster"
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-balance sm:text-4xl lg:text-5xl">
            Real Results from <span className="gradient-text">Real Students</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground text-pretty sm:text-lg">
            Don&apos;t just take our word for it. Hear from graduates who have 
            transformed their careers through Bloom VA Academy.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.name} 
              animation="fade-up" 
              delay={index * 100}
            >
              <TiltCard className="h-full">
                <div className="glass flex h-full flex-col rounded-2xl p-5 sm:p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-foreground mb-6 flex-grow leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Result Badge */}
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                      {testimonial.result}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                      <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
