import { z } from 'zod'
export const SERVICE_VALUES = ['landing', 'ecommerce', 'web', 'soporte', 'otro'] as const

export type ServiceValue = (typeof SERVICE_VALUES)[number]

export const SERVICE_LABELS: Record<ServiceValue, string> = {
  landing:   'Landing Page',
  ecommerce: 'E-commerce',
  web:       'Sitio Web',
  soporte:   'Soporte',
  otro:      'Otro',
}
export const contactSchema = z.object({
  name: z
    .string()
    .min(1, 'El nombre es requerido')
    .min(3, 'El nombre debe tener al menos 3 caracteres'),

  email: z
    .string()
    .min(1, 'El correo es requerido')
    .email('Ingrese un correo electrónico válido'),

  service: z
    .string()
    .min(1, 'Seleccione un servicio')
    .refine(
      val => (SERVICE_VALUES as readonly string[]).includes(val),
      { message: 'Seleccione un servicio válido' },
    ),

  message: z
    .string()
    .min(1, 'El mensaje es requerido')
    .min(20, 'El mensaje debe tener al menos 20 caracteres'),
})

export type ContactFormData = z.infer<typeof contactSchema>
