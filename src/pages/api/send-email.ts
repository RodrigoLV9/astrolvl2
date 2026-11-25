import type { APIRoute } from 'astro'
import { Resend } from 'resend'
import { z } from 'zod'
import { contactSchema, SERVICE_LABELS, type ServiceValue } from '../../lib/validations/contactSchema'
import { SUPPORTED_LOCALES, type Locale } from '../../i18n'

// This endpoint must run on the server — never prerender it.
export const prerender = false

// ── Routing by language ──────────────────────────────────────────────────────
// ES and PT share the main mailbox; EN uses the English-only mailbox.
const CONTACT_CONFIG: Record<Locale, { apiKey: string; to: string[] }> = {
  es: {
    apiKey: import.meta.env.RESEND_API_KEY_ES,
    to: [import.meta.env.CONTACT_EMAIL_ES ?? 'astrolvl.dev@gmail.com'],
  },
  en: {
    apiKey: import.meta.env.RESEND_API_KEY_EN,
    to: [import.meta.env.CONTACT_EMAIL_EN ?? 'astrolvlen.dev@gmail.com'],
  },
  pt: {
    apiKey: import.meta.env.RESEND_API_KEY_ES,
    to: [import.meta.env.CONTACT_EMAIL_ES ?? 'astrolvl.dev@gmail.com'],
  },
}

// ── Sanitise user input before embedding in HTML email ──────────────────────
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// ── Email HTML template ──────────────────────────────────────────────────────
function buildEmailHtml(params: {
  name: string
  email: string
  serviceLabel: string
  message: string
}): string {
  const { name, email, serviceLabel, message } = params
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
      <body style="margin:0;padding:0;background:#09060f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
        <div style="max-width:600px;margin:40px auto;background:#0e0920;border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;">
          <div style="padding:28px 32px;border-bottom:1px solid rgba(255,255,255,0.07);">
            <p style="margin:0;font-size:0.75rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:rgba(0,140,255,0.9);">Formulario de contacto</p>
            <h1 style="margin:8px 0 0;font-size:1.25rem;color:#fff;">Nuevo mensaje recibido</h1>
          </div>
          <div style="padding:28px 32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0 10px;color:rgba(255,255,255,0.45);font-size:0.8rem;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;width:110px;vertical-align:top;">Nombre</td>
                <td style="padding:10px 0 10px;color:#fff;font-size:0.95rem;">${escapeHtml(name)}</td>
              </tr>
              <tr style="border-top:1px solid rgba(255,255,255,0.06);">
                <td style="padding:10px 0;color:rgba(255,255,255,0.45);font-size:0.8rem;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;vertical-align:top;">Correo</td>
                <td style="padding:10px 0;">
                  <a href="mailto:${escapeHtml(email)}" style="color:rgb(0,140,255);text-decoration:none;font-size:0.95rem;">${escapeHtml(email)}</a>
                </td>
              </tr>
              <tr style="border-top:1px solid rgba(255,255,255,0.06);">
                <td style="padding:10px 0;color:rgba(255,255,255,0.45);font-size:0.8rem;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;vertical-align:top;">Servicio</td>
                <td style="padding:10px 0;color:#fff;font-size:0.95rem;">${escapeHtml(serviceLabel)}</td>
              </tr>
              <tr style="border-top:1px solid rgba(255,255,255,0.06);">
                <td style="padding:10px 0;color:rgba(255,255,255,0.45);font-size:0.8rem;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;vertical-align:top;">Mensaje</td>
                <td style="padding:10px 0;color:rgba(255,255,255,0.88);font-size:0.95rem;line-height:1.65;white-space:pre-wrap;">${escapeHtml(message)}</td>
              </tr>
            </table>
          </div>
          <div style="padding:18px 32px;background:rgba(255,255,255,0.02);border-top:1px solid rgba(255,255,255,0.06);">
            <p style="margin:0;font-size:0.75rem;color:rgba(255,255,255,0.3);">Enviado desde el formulario de contacto de astrolvl.dev</p>
          </div>
        </div>
      </body>
    </html>
  `
}

// ── API Route handler ────────────────────────────────────────────────────────
export const POST: APIRoute = async ({ request }) => {
  // 1. Parse request body
  let body: Record<string, unknown>
  try {
    body = await request.json() as Record<string, unknown>
  } catch {
    return Response.json(
      { error: 'Cuerpo de la solicitud inválido.' },
      { status: 400 },
    )
  }

  // 2. Honeypot check — if filled, it's a bot; return fake success silently
  if (typeof body._hp === 'string' && body._hp.trim() !== '') {
    return Response.json({ ok: true }, { status: 200 })
  }

  // 3. Server-side validation — never trust client data
  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return Response.json(
      { error: 'Datos inválidos.', fields: z.flattenError(parsed.error).fieldErrors },
      { status: 422 },
    )
  }

  const { name, email, service, message } = parsed.data
  const serviceLabel = SERVICE_LABELS[service as ServiceValue]

  // 4. Resolve language (server-side validation, never trust the client)
  const locale = z.enum(SUPPORTED_LOCALES).catch('es').parse(body.locale)
  const config = CONTACT_CONFIG[locale]

  if (!config.apiKey) {
    console.error(`[api/send-email] Missing Resend API key for locale "${locale}"`)
    return Response.json(
      { error: 'No se pudo enviar el correo. Por favor, inténtelo nuevamente.' },
      { status: 500 },
    )
  }

  // 5. Send via Resend
  // Instantiate per-request so the env variable is always fresh.
  const resend = new Resend(config.apiKey)

  const { error } = await resend.emails.send({
    // Once you verify a domain in Resend, replace this with your own address:
    // from: 'Formulario Web <noreply@yourdomain.com>'
    from: 'Formulario Web <onboarding@resend.dev>',
    to: config.to,
    replyTo: email,
    subject: `[Contacto] ${escapeHtml(name)} — ${serviceLabel}`,
    html: buildEmailHtml({ name, email, serviceLabel, message }),
  })

  if (error) {
    console.error('[api/send-email] Resend error:', error)
    return Response.json(
      { error: 'No se pudo enviar el correo. Por favor, inténtelo nuevamente.' },
      { status: 500 },
    )
  }

  return Response.json({ ok: true }, { status: 200 })
}
