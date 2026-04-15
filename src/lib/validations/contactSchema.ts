import { z } from 'zod'
export const SERVICE_VALUES = ['landing', 'ecommerce', 'web', 'soporte', 'otro'] as const

export type ServiceValue = (typeof SERVICE_VALUES)[number]

export type ServiceLabels = Record<ServiceValue, string>

export interface ContactValidationMessages {
  nameRequired: string
  nameMin: string
  emailRequired: string
  emailInvalid: string
  serviceRequired: string
  serviceInvalid: string
  messageRequired: string
  messageMin: string
}

export const SERVICE_LABELS: ServiceLabels = {
  landing:   'Landing Page',
  ecommerce: 'E-commerce',
  web:       'Sitio Web',
  soporte:   'Soporte',
  otro:      'Otro',
}

export const DEFAULT_CONTACT_VALIDATION_MESSAGES: ContactValidationMessages = {
  nameRequired: 'El nombre es requerido',
  nameMin: 'El nombre debe tener al menos 3 caracteres',
  emailRequired: 'El correo es requerido',
  emailInvalid: 'Ingrese un correo electronico valido',
  serviceRequired: 'Seleccione un servicio',
  serviceInvalid: 'Seleccione un servicio valido',
  messageRequired: 'El mensaje es requerido',
  messageMin: 'El mensaje debe tener al menos 20 caracteres',
}

export function createContactSchema(
  messages: ContactValidationMessages = DEFAULT_CONTACT_VALIDATION_MESSAGES,
  serviceLabels: ServiceLabels = SERVICE_LABELS,
) {
  const serviceKeys = Object.keys(serviceLabels)
  const emailSchema = z.email({ error: messages.emailInvalid })

  return z.object({
  name: z
    .string()
    .min(1, messages.nameRequired)
    .min(3, messages.nameMin),

  email: z
    .string()
    .min(1, messages.emailRequired)
    .refine((value) => emailSchema.safeParse(value).success, messages.emailInvalid),

  service: z
    .string()
    .min(1, messages.serviceRequired)
    .refine(
      val => serviceKeys.includes(val),
      { message: messages.serviceInvalid },
    ),

  message: z
    .string()
    .min(1, messages.messageRequired)
    .min(20, messages.messageMin),
  })
}

export const contactSchema = createContactSchema()

export type ContactFormData = z.infer<typeof contactSchema>
