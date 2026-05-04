type EnrollmentEmailPayload = {
  reference: string
  fullName: string
  email: string
  phone: string
  programName: string
  programPrice: string
  notes?: string
}

export async function sendEnrollmentNotification(payload: EnrollmentEmailPayload) {
  const resendApiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM_EMAIL
  const coachEmail = process.env.COACH_EMAIL

  if (!resendApiKey || !fromEmail || !coachEmail) {
    throw new Error("Missing email configuration. Add RESEND_API_KEY, RESEND_FROM_EMAIL, and COACH_EMAIL.")
  }

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
      <h2 style="margin-bottom: 8px;">New Bloom VA Academy Enrollment</h2>
      <p style="margin-top: 0;">A student has submitted the enrollment form and is being redirected to payment.</p>
      <table style="border-collapse: collapse; width: 100%; margin-top: 16px;">
        <tbody>
          <tr><td style="padding: 8px; font-weight: 700;">Reference</td><td style="padding: 8px;">${payload.reference}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Full name</td><td style="padding: 8px;">${payload.fullName}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Email</td><td style="padding: 8px;">${payload.email}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Phone / WhatsApp</td><td style="padding: 8px;">${payload.phone}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Program</td><td style="padding: 8px;">${payload.programName}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Price</td><td style="padding: 8px;">${payload.programPrice}</td></tr>
          <tr><td style="padding: 8px; font-weight: 700;">Notes</td><td style="padding: 8px;">${payload.notes?.trim() || "No extra notes"}</td></tr>
        </tbody>
      </table>
    </div>
  `

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: coachEmail,
      reply_to: payload.email,
      subject: `New enrollment: ${payload.programName}`,
      html,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Failed to send enrollment email: ${errorText}`)
  }
}
