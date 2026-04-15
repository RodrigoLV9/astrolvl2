import React, { useState, useRef, useEffect } from 'react'
import { useForm, Controller, type Resolver } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  createContactSchema,
  type ContactFormData,
  SERVICE_VALUES,
  type ServiceLabels,
  type ServiceValue,
} from '../../lib/validations/contactSchema'
import type { I18nDictionary } from '../../i18n'
import '../../styles/Contact/contactForm.css'

interface ServiceSelectProps {
  value: string
  onChange: (value: string) => void
  hasError: boolean
  placeholder: string
  labels: ServiceLabels
}

const ServiceSelect: React.FC<ServiceSelectProps> = ({ value, onChange, hasError, placeholder, labels }) => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const optionRefs = useRef<(HTMLLIElement | null)[]>([])

  const selectedLabel = value ? labels[value as ServiceValue] : null

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
          {selectedLabel ?? placeholder}
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
            {labels[val]}
          </li>
        ))}
      </ul>
    </div>
  )
}

// ── Button Spinner ───────────────────────────────────────────────────────────
const Spinner: React.FC = () => (
  <span className="btn-spinner" aria-hidden="true" />
)

// ── Success Card ─────────────────────────────────────────────────────────────
const SuccessCard: React.FC<{ onReset: () => void; formTexts: I18nDictionary['contact']['form'] }> = ({ onReset, formTexts }) => (
  <div className="success-card" role="status" aria-live="polite">
    <div className="success-card__icon-wrapper">
      <svg className="success-card__svg" viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <circle className="sc-circle" cx="26" cy="26" r="23" stroke="var(--clr-accent)" strokeWidth="2" fill="none" />
        <path className="sc-check" d="M14 26l8 9 16-17" stroke="var(--clr-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
    <h3 className="success-card__title">{formTexts.successTitle}</h3>
    <p className="success-card__subtitle">{formTexts.successMessage}</p>
    <button type="button" className="success-card__reset" onClick={onReset}>
      {formTexts.successReset}
    </button>
  </div>
)

// ── Main Form ────────────────────────────────────────────────────────────────
interface ContactFormProps {
  dict: I18nDictionary
}

export const ContactForm: React.FC<ContactFormProps> = ({ dict }) => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState<string | null>(null)
  const formTexts = dict.contact.form

  const serviceLabels: ServiceLabels = {
    landing: dict.contact.services.landing,
    ecommerce: dict.contact.services.ecommerce,
    web: dict.contact.services.web,
    soporte: dict.contact.services.soporte,
    otro: dict.contact.services.otro,
  }

  const localizedSchema = createContactSchema(dict.contact.validation, serviceLabels)

  const honeypotRef = useRef<HTMLInputElement>(null)

  // Clear any browser-autofilled value; the field must stay empty for real users
  useEffect(() => {
    if (honeypotRef.current) honeypotRef.current.value = ''
  }, [])

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(localizedSchema as any) as Resolver<ContactFormData>,
    defaultValues: { name: '', email: '', service: '', message: '' },
  })

  const handleReset = () => {
    reset()
    setSubmitStatus('idle')
    setServerError(null)
  }

  const onSubmit = async (data: ContactFormData): Promise<void> => {
    setServerError(null)

    // Honeypot — bots fill this; real users never interact with it
    if (honeypotRef.current?.value) {
      setSubmitStatus('success')
      return
    }

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Include honeypot value — server will reject if filled (bot detected)
        body: JSON.stringify({ ...data, _hp: honeypotRef.current?.value ?? '' }),
      })

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}))
        throw new Error(
          payload.error ?? formTexts.unknownError,
        )
      }

      setSubmitStatus('success')
      reset()
    } catch (err) {
      setServerError(
        err instanceof Error
          ? err.message
          : formTexts.unknownError,
      )
      setSubmitStatus('error')
    }
  }

  if (submitStatus === 'success') {
    return <SuccessCard onReset={handleReset} formTexts={formTexts} />
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact__form" noValidate>
      {/* Honeypot — invisible to humans, bots will fill it */}
      <input
        ref={honeypotRef}
        type="text"
        name="_hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hp-field"
      />
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="cf-name">{formTexts.nameLabel}</label>
          <input
            id="cf-name"
            type="text"
            placeholder={formTexts.namePlaceholder}
            autoComplete="name"
            className={errors.name ? 'has-error' : undefined}
            {...register('name')}
          />
          {errors.name && (
            <span className="field-error" role="alert">{errors.name.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="cf-email">{formTexts.emailLabel}</label>
          <input
            id="cf-email"
            type="email"
            placeholder={formTexts.emailPlaceholder}
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
        <label>{formTexts.serviceLabel}</label>
        <Controller
          name="service"
          control={control}
          render={({ field }) => (
            <ServiceSelect
              value={field.value ?? ''}
              onChange={field.onChange}
              hasError={!!errors.service}
              placeholder={formTexts.servicePlaceholder}
              labels={serviceLabels}
            />
          )}
        />
        {errors.service && (
          <span className="field-error" role="alert">{errors.service.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="cf-message">{formTexts.messageLabel}</label>
        <textarea
          id="cf-message"
          placeholder={formTexts.messagePlaceholder}
          rows={5}
          className={errors.message ? 'has-error' : undefined}
          {...register('message')}
        />
        {errors.message && (
          <span className="field-error" role="alert">{errors.message.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Spinner />
            <span className="submit-btn__text">{formTexts.submittingText}</span>
          </>
        ) : (
          <span className="submit-btn__text">{formTexts.submitText}</span>
        )}
      </button>

      {submitStatus === 'error' && serverError && (
        <p className="form-feedback form-feedback--error" role="alert">
          {serverError}
        </p>
      )}
    </form>
  )
}
