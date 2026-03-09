import React, { useState, useRef, useEffect } from 'react'
import { useForm, Controller, type Resolver } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  contactSchema,
  type ContactFormData,
  SERVICE_VALUES,
  SERVICE_LABELS,
  type ServiceValue,
} from '../../lib/validations/contactSchema'
import '../../styles/Contact/contactForm.css'

interface ServiceSelectProps {
  value: string
  onChange: (value: string) => void
  hasError: boolean
}

const ServiceSelect: React.FC<ServiceSelectProps> = ({ value, onChange, hasError }) => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const optionRefs = useRef<(HTMLLIElement | null)[]>([])

  const selectedLabel = value ? SERVICE_LABELS[value as ServiceValue] : null

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [])

  const handleSelect = (val: string) => {
    onChange(val)
    setIsOpen(false)
    triggerRef.current?.focus()
  }

  const openAndFocus = () => {
    setIsOpen(true)
    setTimeout(() => {
      const idx = SERVICE_VALUES.findIndex(v => v === value)
      optionRefs.current[idx >= 0 ? idx : 0]?.focus()
    }, 0)
  }

  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openAndFocus()
    }
    if (e.key === 'Escape') setIsOpen(false)
  }

  const handleOptionKeyDown = (e: React.KeyboardEvent, idx: number, val: string) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSelect(val) }
    if (e.key === 'Escape') { setIsOpen(false); triggerRef.current?.focus() }
    if (e.key === 'ArrowDown') { e.preventDefault(); optionRefs.current[idx + 1]?.focus() }
    if (e.key === 'ArrowUp') { e.preventDefault(); optionRefs.current[idx - 1]?.focus() }
  }

  return (
    <div
      ref={wrapperRef}
      className={[
        'custom-select',
        isOpen   ? 'is-open'   : '',
        hasError ? 'has-error' : '',
      ].filter(Boolean).join(' ')}
    >
      <button
        ref={triggerRef}
        type="button"
        className="custom-select__trigger"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => (isOpen ? setIsOpen(false) : openAndFocus())}
        onKeyDown={handleTriggerKeyDown}
      >
        <span className={selectedLabel ? undefined : 'custom-select__placeholder'}>
          {selectedLabel ?? 'Seleccione un servicio'}
        </span>
        <svg
          className="custom-select__chevron"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <ul className="custom-select__options" role="listbox">
        {SERVICE_VALUES.map((val, idx) => (
          <li
            key={val}
            ref={el => { optionRefs.current[idx] = el }}
            className="custom-select__option"
            role="option"
            aria-selected={value === val}
            tabIndex={-1}
            onClick={() => handleSelect(val)}
            onKeyDown={e => handleOptionKeyDown(e, idx, val)}
          >
            {SERVICE_LABELS[val]}
          </li>
        ))}
      </ul>
    </div>
  )
}
export const ContactForm: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema as any) as Resolver<ContactFormData>,
    defaultValues: { name: '', email: '', service: '', message: '' },
  })

  const onSubmit = async (_data: ContactFormData): Promise<void> => {
    await new Promise(r => setTimeout(r, 800))
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact__form" noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="cf-name">Nombre completo</label>
          <input
            id="cf-name"
            type="text"
            placeholder="Escriba su nombre"
            autoComplete="name"
            className={errors.name ? 'has-error' : undefined}
            {...register('name')}
          />
          {errors.name && (
            <span className="field-error" role="alert">{errors.name.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="cf-email">Correo electrónico</label>
          <input
            id="cf-email"
            type="email"
            placeholder="Escriba su correo"
            autoComplete="email"
            className={errors.email ? 'has-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <span className="field-error" role="alert">{errors.email.message}</span>
          )}
        </div>
      </div>
      <div className="form-group">
        <label>Tipo de servicio</label>
        <Controller
          name="service"
          control={control}
          render={({ field }) => (
            <ServiceSelect
              value={field.value ?? ''}
              onChange={field.onChange}
              hasError={!!errors.service}
            />
          )}
        />
        {errors.service && (
          <span className="field-error" role="alert">{errors.service.message}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="cf-message">Mensaje</label>
        <textarea
          id="cf-message"
          placeholder="Escriba su mensaje..."
          rows={5}
          className={errors.message ? 'has-error' : undefined}
          {...register('message')}
        />
        {errors.message && (
          <span className="field-error" role="alert">{errors.message.message}</span>
        )}
      </div>

      <button type="submit" className="submit-btn" disabled={isSubmitting}>
        <span className="submit-btn__text">
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </span>
      </button>

    </form>
  )
}
