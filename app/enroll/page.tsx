import Link from "next/link"
import { ArrowLeft, BadgeCheck, Mail, Phone } from "lucide-react"

import { EnrollmentForm } from "@/components/enrollment-form"
import { getProgramBySlug } from "@/lib/programs"

export default async function EnrollPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams
  const programParam = Array.isArray(params.program) ? params.program[0] : params.program
  const program = getProgramBySlug(programParam)

  return (
    <main className="min-h-screen bg-background py-12 sm:py-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/#offers"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to programs
        </Link>

        <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:gap-10">
          <section className="glass rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Selected path</p>
            <h1 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              {program.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {program.bestFor}
            </p>

            <div className="mt-6 rounded-3xl bg-primary p-5 text-primary-foreground">
              <p className="text-sm uppercase tracking-wider text-primary-foreground/75">Amount to pay</p>
              <div className="mt-2 text-4xl font-bold">{program.displayPrice}</div>
              <p className="mt-2 text-sm text-primary-foreground/80">Pay securely with Paystack and get your payment confirmation immediately after checkout.</p>
            </div>

            <div className="mt-8 space-y-3">
              {program.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-2xl bg-card/70 p-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm text-foreground">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-border bg-card p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Support contact</h2>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>Tamiloreajayi161@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>08137513102</span>
                </div>
              </div>
            </div>
          </section>

          <section className="neu-flat rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Enrollment form</p>
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
              Enter your details to continue
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Your form details will be sent to the coach, and then you&apos;ll be redirected to Paystack to complete payment.
            </p>

            <div className="mt-8">
              <EnrollmentForm program={program} />
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
