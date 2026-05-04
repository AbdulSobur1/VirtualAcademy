import { supabaseInsert, supabasePatch } from "@/lib/supabase"

export async function createEnrollmentRecord(payload: {
  reference: string
  fullName: string
  email: string
  phone: string
  notes?: string
  programSlug: string
  programName: string
  amountKobo: number
}) {
  return supabaseInsert("enrollments", {
    reference: payload.reference,
    full_name: payload.fullName,
    email: payload.email,
    phone: payload.phone,
    notes: payload.notes || null,
    program_slug: payload.programSlug,
    program_name: payload.programName,
    amount_kobo: payload.amountKobo,
    payment_provider: "paystack",
    payment_status: "pending",
    coach_notified: false,
  })
}

export async function markCoachNotified(reference: string) {
  return supabasePatch(
    "enrollments",
    { reference },
    {
      coach_notified: true,
    },
  )
}

export async function markEnrollmentPaid(payload: {
  reference: string
  paidAt?: string
  customerEmail?: string
  amountKobo?: number
  rawResponse?: Record<string, unknown>
}) {
  return supabasePatch(
    "enrollments",
    { reference: payload.reference },
    {
      payment_status: "paid",
      paid_at: payload.paidAt || null,
      customer_email: payload.customerEmail || null,
      amount_kobo: payload.amountKobo ?? null,
      gateway_response: payload.rawResponse ?? null,
    },
  )
}

export async function markEnrollmentVerificationFailed(reference: string, errorMessage: string) {
  return supabasePatch(
    "enrollments",
    { reference },
    {
      payment_status: "verification_failed",
      verification_error: errorMessage,
    },
  )
}
