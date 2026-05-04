"use client"

import { AnimatedSection } from "./animated-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section id="register" className="relative overflow-hidden bg-primary py-16 sm:py-20 lg:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        {/* Subtle pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <AnimatedSection className="mb-12 text-center sm:mb-16">
            <h2 className="mb-6 text-3xl font-serif font-bold text-balance text-primary-foreground sm:text-4xl lg:text-5xl">
              Ready to Transform Your Career?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base text-pretty text-primary-foreground/80 sm:text-lg">
              Choose the learning path that matches your current level and take the
              next practical step toward becoming a confident, job-ready virtual assistant.
            </p>
            
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button 
                asChild
                size="lg"
                className="group w-full rounded-full bg-primary-foreground px-6 text-base text-primary hover:bg-primary-foreground/90 sm:w-auto sm:px-8 sm:text-lg"
              >
                <Link href="/enroll?program=premium-va-training-program" className="justify-center">
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="w-full rounded-full border-primary-foreground/20 bg-primary-foreground/95 px-6 text-base text-primary hover:bg-primary-foreground sm:w-auto sm:px-8 sm:text-lg"
              >
                <a 
                  href="https://wa.me/2348137513102?text=Hi!%20I'm%20interested%20in%20the%20Bloom%20VA%20Academy%20program."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </AnimatedSection>

          {/* Contact Options */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="grid gap-4 sm:gap-5 md:grid-cols-3 md:gap-6">
              {[
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  value: "08137513102",
                  link: "https://wa.me/2348137513102",
                  description: "Quick responses"
                },
                {
                  icon: Mail,
                  title: "Email",
                  value: "Tamiloreajayi161@gmail.com",
                  link: "mailto:Tamiloreajayi161@gmail.com",
                  description: "Detailed inquiries"
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "0813751302",
                  link: "tel:0813751302",
                  description: "Direct consultation"
                }
              ].map((contact, i) => (
                <a
                  key={i}
                  href={contact.link}
                  target={contact.icon === MessageCircle ? "_blank" : undefined}
                  rel={contact.icon === MessageCircle ? "noopener noreferrer" : undefined}
                  className="group rounded-2xl bg-primary-foreground/10 p-5 text-center backdrop-blur-sm transition-colors hover:bg-primary-foreground/20 sm:p-6"
                >
                  <contact.icon className="w-8 h-8 text-primary-foreground/70 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-primary-foreground mb-1">{contact.title}</h4>
                  <p className="text-primary-foreground/90 text-sm mb-1">{contact.value}</p>
                  <p className="text-primary-foreground/60 text-xs">{contact.description}</p>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
