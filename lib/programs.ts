export type ProgramSlug =
  | "va-clarity-webinar"
  | "premium-va-training-program"
  | "advanced-one-on-one-private-training"

export type Program = {
  slug: ProgramSlug
  name: string
  priceKobo: number
  displayPrice: string
  bestFor: string
  description: string
  cta: string
  features: string[]
}

export const programs: Program[] = [
  {
    slug: "va-clarity-webinar",
    name: "VA Clarity Webinar",
    priceKobo: 250000,
    displayPrice: "₦2,500",
    bestFor:
      "For beginners who need clear direction before committing to the full training.",
    description:
      "A guided starter session that shows you what the VA path looks like and what to do next.",
    cta: "Start with Clarity",
    features: [
      "Introduction to virtual assistance",
      "Overview of in-demand skills",
      "How to get started step by step",
      "Where to find opportunities",
      "How to position yourself properly",
      "Direction on what to do next",
    ],
  },
  {
    slug: "premium-va-training-program",
    name: "Premium VA Training Program",
    priceKobo: 2000000,
    displayPrice: "₦20,000",
    bestFor:
      "For learners who are ready to stay consistent, learn properly, and become job-ready.",
    description:
      "The main Bloom VA Academy training path for practical skills, structure, and client readiness.",
    cta: "Join the Main Training",
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
      "Client onboarding and acquisition",
    ],
  },
  {
    slug: "advanced-one-on-one-private-training",
    name: "Advanced One-on-One Private Training",
    priceKobo: 5000000,
    displayPrice: "₦50,000",
    bestFor:
      "For students who want personalized guidance, faster progress, and direct support tailored to their level.",
    description:
      "Private coaching support for learners who want closer guidance and a more tailored learning experience.",
    cta: "Request Private Coaching",
    features: [
      "One-on-one training sessions",
      "Personalized learning plan",
      "Direct guidance from an experienced coach",
      "Everything included in the main training",
      "Ongoing feedback and close support",
    ],
  },
]

export function getProgramBySlug(slug?: string | null) {
  return programs.find((program) => program.slug === slug) ?? programs[1]
}
