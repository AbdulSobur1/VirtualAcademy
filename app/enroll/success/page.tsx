import Link from "next/link"
import { BadgeCheck, MailCheck, Wallet } from "lucide-react"

import {
  markEnrollmentPaid,
  markEnrollmentVerificationFailed,
} from "@/lib/enrollments"
import { verifyPaystackTransaction } from "@/lib/paystack"
import { getProgramBySlug } from "@/lib/programs"

export default async function EnrollmentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams
  const reference = Array.isArray(params.reference) ? params.reference[0] : params.reference

  if (!reference) {
    return (
      <main className="min-h-screen bg-background py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground">Payment reference missing</h1>
          <p className="mt-4 text-muted-foreground">
            We couldn&apos;t verify this payment because no transaction reference was provided.
          </p>
          <Link href="/#offers" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-primary-foreground">
            Return to programs
          </Link>
        </div>
      </main>
    )
  }

  let transaction
  let verificationError: string | null = null

  try {
    transaction = await verifyPaystackTransaction(reference)
  } catch (error) {
    verificationError = error instanceof Error ? error.message : "Unable to verify payment."
    try {
      await markEnrollmentVerificationFailed(reference, verificationError)
    } catch {}
  }

  const programSlug =
    typeof transaction?.metadata?.programSlug === "string"
      ? transaction.metadata.programSlug
      : undefined
  const program = getProgramBySlug(programSlug)
  const paid = transaction?.status === "success"

  if (paid && transaction) {
    try {
      await markEnrollmentPaid({
        reference,
        paidAt: transaction.paid_at,
        customerEmail: transaction.customer?.email,
        amountKobo: transaction.amount,
        rawResponse: transaction as unknown as Record<string, unknown>,
      })
    } catch {}
  }

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <div className="glass rounded-[2rem] p-8 text-center sm:p-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <BadgeCheck className="h-8 w-8 text-primary" />
          </div>

          <h1 className="mt-6 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {paid ? "Payment successful" : "Payment received status pending"}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {paid
              ? `Your payment for ${program.name} has been verified. The coach has already received your enrollment details.`
              : "We found your transaction, but it has not been marked successful yet. If you were charged, please wait a moment and refresh or contact the coach with your reference."}
          </p>

          {verificationError && (
            <p className="mt-4 text-sm text-destructive">{verificationError}</p>
          )}

          <div className="mt-8 grid gap-4 rounded-3xl bg-card p-6 text-left sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Program</p>
              <p className="mt-2 text-lg font-semibold text-foreground">{program.name}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Reference</p>
              <p className="mt-2 break-all text-lg font-semibold text-foreground">{reference}</p>
            </div>
            <div className="flex items-start gap-3">
              <Wallet className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Amount</p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  {transaction ? `₦${(transaction.amount / 100).toLocaleString()}` : program.displayPrice}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MailCheck className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Receipt / confirmation</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Check {transaction?.customer?.email || "your email"} for your Paystack payment confirmation and follow-up details.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/#offers"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Back to programs
            </Link>
            <a
              href="mailto:Tamiloreajayi161@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 font-medium text-foreground transition hover:bg-secondary"
            >
              Contact the coach
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
