"use client"

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

const footerLinks = {
  academy: [
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#offers" },
    { label: "Our Trainer", href: "#trainer" }
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Free Resources", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#register" }
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" }
  ]
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" }
]

export function Footer() {
  return (
    <footer className="bg-foreground py-14 text-background sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="mb-4 flex items-center justify-center gap-2 md:justify-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-background">
                <span className="text-foreground font-bold text-lg">VA</span>
              </div>
              <span className="font-serif text-xl font-bold text-background">
                Bloom VA Academy
              </span>
            </a>
            <p className="mx-auto mb-6 max-w-sm text-center text-sm leading-relaxed text-background/70 md:mx-0 md:text-left">
              To bridge the gap between learning and real opportunity by
              providing structured, practical Virtual Assistant training that
              develops skilled, confident, and job-ready individuals.
            </p>
            {/* Social Links */}
            <div className="flex justify-center gap-3 md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Academy Links */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 font-semibold text-background">Academy</h4>
            <ul className="space-y-3">
              {footerLinks.academy.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 font-semibold text-background">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 font-semibold text-background">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Bloom VA Academy. All rights reserved.
            </p>
            <p className="text-sm text-background/60">
              Made with care for aspiring VAs worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
