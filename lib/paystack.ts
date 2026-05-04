export async function initializePaystackTransaction(payload: {
  email: string
  amountKobo: number
  reference: string
  callbackUrl: string
  metadata: Record<string, unknown>
}) {
  const secretKey = process.env.PAYSTACK_SECRET_KEY

  if (!secretKey) {
    throw new Error("Missing PAYSTACK_SECRET_KEY.")
  }

  const response = await fetch("https://api.paystack.co/transaction/initialize", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: payload.email,
      amount: payload.amountKobo,
      reference: payload.reference,
      callback_url: payload.callbackUrl,
      metadata: payload.metadata,
      channels: ["card", "bank", "ussd", "bank_transfer"],
      currency: "NGN",
    }),
    cache: "no-store",
  })

  const result = await response.json()

  if (!response.ok || !result.status || !result.data?.authorization_url) {
    throw new Error(result.message || "Unable to initialize payment.")
  }

  return result.data.authorization_url as string
}

export async function verifyPaystackTransaction(reference: string) {
  const secretKey = process.env.PAYSTACK_SECRET_KEY

  if (!secretKey) {
    throw new Error("Missing PAYSTACK_SECRET_KEY.")
  }

  const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
    headers: {
      Authorization: `Bearer ${secretKey}`,
    },
    cache: "no-store",
  })

  const result = await response.json()

  if (!response.ok || !result.status) {
    throw new Error(result.message || "Unable to verify payment.")
  }

  return result.data as {
    status: string
    amount: number
    reference: string
    paid_at?: string
    customer?: { email?: string }
    metadata?: Record<string, unknown>
  }
}
