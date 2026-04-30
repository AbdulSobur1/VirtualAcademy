"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "2348000000000"
  const message = encodeURIComponent(
    "Hi! I'm interested in the Bloom VA Academy program. Please share more details."
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-pulse fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white sm:h-7 sm:w-7" />
    </a>
  )
}
