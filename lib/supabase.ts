type SupabaseInsertPayload = Record<string, unknown>

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceRoleKey) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.")
  }

  return { url, serviceRoleKey }
}

export async function supabaseInsert(table: string, payload: SupabaseInsertPayload) {
  const { url, serviceRoleKey } = getSupabaseConfig()

  const response = await fetch(`${url}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(`Supabase insert failed: ${await response.text()}`)
  }

  return response.json()
}

export async function supabasePatch(
  table: string,
  match: Record<string, string>,
  payload: SupabaseInsertPayload,
) {
  const { url, serviceRoleKey } = getSupabaseConfig()
  const query = new URLSearchParams()

  Object.entries(match).forEach(([key, value]) => {
    query.set(key, `eq.${value}`)
  })

  const response = await fetch(`${url}/rest/v1/${table}?${query.toString()}`, {
    method: "PATCH",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(`Supabase update failed: ${await response.text()}`)
  }

  return response.json()
}
