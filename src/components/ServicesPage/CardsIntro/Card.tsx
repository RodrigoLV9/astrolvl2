import React from 'react'
import type { IconType } from 'react-icons'
import '../../../styles/Services/cardIntro.css'

interface CardProps {
  Icon: IconType
  title: string
  description: string
  accentColor?: string
}

export const Card: React.FC<CardProps> = ({ Icon, title, description, accentColor = '#6366f1' }) => {
  return (
    <div className='cardIntro'>
        <div className='cardIntro-iconWrap' style={{ '--accent': accentColor } as React.CSSProperties}>
            <Icon className='cardIntro-icon'/>
        </div>
        <span>{title}</span>
        <p>{description}</p>
    </div>
  )
}
