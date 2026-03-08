import React from 'react'
import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import '../../styles/Contact/ItemSocial.css'

type SocialPlatform = 'instagram' | 'whatsapp' | 'twitter' | 'facebook' | 'linkedin' | 'github' | 'youtube'

interface SocialConfig {
  icon: React.ReactNode
  name: string
  accentColor: string
}

const socialConfig: Record<SocialPlatform, SocialConfig> = {
  instagram: {
    icon: <FaInstagram />,
    name: 'Instagram',
    accentColor: 'rgba(225, 48, 108, 0.35)',
  },
  whatsapp: {
    icon: <FaWhatsapp />,
    name: 'WhatsApp',
    accentColor: 'rgba(37, 211, 102, 0.35)',
  },
  twitter: {
    icon: <FaXTwitter />,
    name: 'Twitter / X',
    accentColor: 'rgba(255, 255, 255, 0.2)',
  },
  facebook: {
    icon: <FaFacebook />,
    name: 'Facebook',
    accentColor: 'rgba(66, 103, 178, 0.35)',
  },
  linkedin: {
    icon: <FaLinkedin />,
    name: 'LinkedIn',
    accentColor: 'rgba(0, 119, 181, 0.35)',
  },
  github: {
    icon: <FaGithub />,
    name: 'GitHub',
    accentColor: 'rgba(255, 255, 255, 0.18)',
  },
  youtube: {
    icon: <FaYoutube />,
    name: 'YouTube',
    accentColor: 'rgba(255, 0, 0, 0.3)',
  },
}

interface ItemSocialProps {
  platform: SocialPlatform
  href: string
}

export const ItemSocial: React.FC<ItemSocialProps> = ({ platform, href }) => {
  const config = socialConfig[platform]

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='social'
      style={{ '--social-accent': config.accentColor } as React.CSSProperties}
      aria-label={config.name}
      title={config.name}
    >
      <span className='social-icon'>{config.icon}</span>
    </a>
  )
}