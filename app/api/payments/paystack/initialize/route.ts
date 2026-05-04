import { NextResponse } from "next/server"
import { z } from "zod"

import { createEnrollmentRecord, markCoachNotified } from "@/lib/enrollments"
import { sendEnrollmentNotification } from "@/lib/email"
import { initializePaystackTransaction } from "@/lib/paystack"
import { getProgramBySlug } from "@/lib/programs"

const requestSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  notes: z.string().max(500).optional(),
  programSlug: z.string().min(1),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = requestSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: "Please complete the enrollment form correctly." }, { status: 400 })
    }

    const program = getProgramBySlug(parsed.data.programSlug)
    const reference = `bloomva_${program.slug}_${Date.now()}`
    const callbackUrl = new URL("/enroll/success", request.url)
    callbackUrl.searchParams.set("reference", reference)

    await createEnrollmentRecord({
      reference,
      fullName: parsed.data.fullName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      notes: parsed.data.notes,
      programSlug: program.slug,
      programName: program.name,
      amountKobo: program.priceKobo,
    })

    await sendEnrollmentNotification({
      reference,
      fullName: parsed.data.fullName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      programName: program.name,
      programPrice: program.displayPrice,
      notes: parsed.data.notes,
    })

    await markCoachNotified(reference)

    const authorizationUrl = await initializePaystackTransaction({
      email: parsed.data.email,
      amountKobo: program.priceKobo,
      reference,
      callbackUrl: callbackUrl.toString(),
      metadata: {
        fullName: parsed.data.fullName,
        phone: parsed.data.phone,
        notes: parsed.data.notes || "",
        programSlug: program.slug,
        programName: program.name,
      },
    })

    return NextResponse.json({ authorizationUrl })
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "We couldn't start your payment right now. Please try again."

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
