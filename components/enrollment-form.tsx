"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, ShieldCheck } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import type { Program } from "@/lib/programs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const enrollmentSchema = z.object({
  fullName: z.string().min(2, "Enter your full name."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(8, "Enter a valid phone or WhatsApp number."),
  notes: z.string().max(500, "Keep notes within 500 characters.").optional(),
})

type EnrollmentFormValues = z.infer<typeof enrollmentSchema>

export function EnrollmentForm({ program }: { program: Program }) {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<EnrollmentFormValues>({
    resolver: zodResolver(enrollmentSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      notes: "",
    },
  })

  async function onSubmit(values: EnrollmentFormValues) {
    setServerError(null)

    const response = await fetch("/api/payments/paystack/initialize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        programSlug: program.slug,
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      setServerError(result.error || "Something went wrong while starting your enrollment.")
      return
    }

    router.push(result.authorizationUrl)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" placeholder="Your full name" {...form.register("fullName")} />
          {form.formState.errors.fullName && (
            <p className="text-sm text-destructive">{form.formState.errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" type="email" placeholder="you@example.com" {...form.register("email")} />
          {form.formState.errors.email && (
            <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone / WhatsApp number</Label>
        <Input id="phone" placeholder="080..." {...form.register("phone")} />
        {form.formState.errors.phone && (
          <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Anything the coach should know? <span className="text-muted-foreground">(Optional)</span></Label>
        <Textarea
          id="notes"
          placeholder="Add anything helpful before payment, like your current level or questions."
          rows={5}
          {...form.register("notes")}
        />
        {form.formState.errors.notes && (
          <p className="text-sm text-destructive">{form.formState.errors.notes.message}</p>
        )}
      </div>

      <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4 text-sm text-muted-foreground">
        <div className="mb-2 flex items-center gap-2 font-medium text-foreground">
          <ShieldCheck className="h-4 w-4 text-primary" />
          What happens next
        </div>
        <p>
          After you submit this form, your details will be sent to the coach and you will
          be redirected to Paystack to complete payment for <span className="font-semibold text-foreground">{program.name}</span>.
        </p>
      </div>

      {serverError && <p className="text-sm text-destructive">{serverError}</p>}

      <Button
        type="submit"
        size="lg"
        className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Redirecting to payment...
          </>
        ) : (
          `Proceed to pay ${program.displayPrice}`
        )}
      </Button>
    </form>
  )
}
