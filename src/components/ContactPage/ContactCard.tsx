import React from 'react'
import { FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa'
import '../../styles/Contact/contactCard.css'

type Platform = 'whatsapp' | 'email' | 'instagram'

interface PlatformConfig {
  icon: React.ReactNode
  label: string
  accentColor: string
  iconBg: string
  buttonText: string
}

const platformConfig: Record<Platform, PlatformConfig> = {
  whatsapp: {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    accentColor: '#25d366',
    iconBg: 'rgba(37, 211, 102, 0.12)',
    buttonText: 'Escribir por WhatsApp',
  },
  email: {
    icon: <FaEnvelope />,
    label: 'Correo electrónico',
    accentColor: '#4f8ef7',
    iconBg: 'rgba(79, 142, 247, 0.12)',
    buttonText: 'Enviar un correo',
  },
  instagram: {
    icon: <FaInstagram />,
    label: 'Instagram',
    accentColor: '#e1306c',
    iconBg: 'rgba(225, 48, 108, 0.12)',
    buttonText: 'Ver perfil',
  },
}

interface ContactCardProps {
  platform: Platform
  value: string
  href: string
}

export const ContactCard: React.FC<ContactCardProps> = ({ platform, value, href }) => {
  const config = platformConfig[platform]

  return (
    <div
      className='contactCard'
      style={{
        '--accent': config.accentColor,
        '--icon-bg': config.iconBg,
      } as React.CSSProperties}
    >
      <div className='contactCard__icon-wrapper'>{config.icon}</div>
      <div className='contactCard__content'>
        <span className='contactCard__label'>{config.label}</span>
        <p className='contactCard__value'>{value}</p>
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='contactButton'
        >
          <span>{config.buttonText}</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='13'
            height='13'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M5 12h14' />
            <path d='m12 5 7 7-7 7' />
          </svg>
        </a>
      </div>
    </div>
  )
}
