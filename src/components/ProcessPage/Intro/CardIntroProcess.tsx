import React from 'react'
import '../../../styles/Process/cardIntro.css'

interface CardIntroProcessProps {
  icon: string
  stat: string
  title: string
  description: string
  accent: string
}

export const CardIntroProcess: React.FC<CardIntroProcessProps> = ({ icon, stat, title, description, accent }) => {
  return (
    <div className="cardIntroProcess">
      <div className="cardIntroProcess__icon" style={{ background: accent }}>
        <span>{icon}</span>
      </div>
      <div className="cardIntroProcess__stat">{stat}</div>
      <h3 className="cardIntroProcess__title">{title}</h3>
      <p className="cardIntroProcess__desc">{description}</p>
      <div className="cardIntroProcess__bar" style={{ background: accent }} />
    </div>
  )
}
