import React, { useState } from 'react'
import { SpaceBackground } from '../SpaceBackground.tsx'
import type { I18nDictionary } from '../../i18n'
import '../../styles/Process/heroProcess.css'

interface ProcessCard {
  id: number
  phase: string
  title: string
  description: string
  tags: string[]
  gradient: string
  icon: string
}

interface HeroProcessProps {
  text: I18nDictionary['process']['hero']
}

const cardsBase: ProcessCard[] = [
  {
    id: 1,
    phase: 'Fase 01',
    title: 'Descubrimiento',
    description: 'Analisis profundo de tus objetivos, competidores y audiencia para construir la estrategia perfecta.',
    tags: ['Analisis', 'Estrategia', 'Investigacion'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: '🔍',
  },
  {
    id: 2,
    phase: 'Fase 02',
    title: 'Diseno & Estrategia',
    description: 'Creamos la propuesta visual y tecnica que representa tu marca y conecta con tu audiencia.',
    tags: ['UI/UX', 'Wireframes', 'Prototipo'],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: '✏️',
  },
  {
    id: 3,
    phase: 'Fase 03',
    title: 'Desarrollo',
    description: 'Construimos e implementamos tu proyecto con tecnologia de vanguardia y codigo limpio.',
    tags: ['Frontend', 'Backend', 'Optimizacion'],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    icon: '⚡',
  },
  {
    id: 4,
    phase: 'Fase 04',
    title: 'Lanzamiento',
    description: 'Entregamos, capacitamos y ofrecemos soporte continuo para garantizar tu exito a largo plazo.',
    tags: ['Deploy', 'Soporte', 'Growth'],
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    icon: '🚀',
  },
]

export const HeroProcess: React.FC<HeroProcessProps> = ({ text }) => {
  const [activeCard, setActiveCard] = useState<number>(1)

  const cards: ProcessCard[] = cardsBase.map((card, index) => {
    const translated = text.cards[index]

    if (!translated) {
      return card
    }

    return {
      ...card,
      phase: translated.phase,
      title: translated.title,
      description: translated.description,
      tags: translated.tags,
    }
  })

  return (
    <section className="heroProcess">
      <SpaceBackground />

      <div className="heroProcess__badge">
        <span className="heroProcess__badge-dot"></span>
        <p>{text.badge}</p>
      </div>

      <div className="heroProcess__text">
        <h1>
          {text.titleStart} <span className="heroProcess__text-gradient">{text.titleHighlight}</span>
          <br />
          {text.titleEnd}
        </h1>
        <p>{text.subtitle}</p>
      </div>

      <div className="heroProcess__cards">
        {cards.map((card) => (
          <div
            key={card.id}
            onMouseEnter={() => setActiveCard(card.id)}
            className={activeCard === card.id ? 'cardProcess__main' : 'cardProcess__secondary'}
          >
            <div className="cardProcess__bg" style={{ background: card.gradient }} />
            <div className="cardProcess__pattern" />

            {activeCard === card.id ? (
              <div className="cardProcess-info">
                <div className="cardProcess-info__top">
                  <span className="cardProcess-info__phase">{card.phase}</span>
                  <span className="cardProcess-info__icon">{card.icon}</span>
                </div>
                <div className="cardProcess-info__text">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                  <div className="cardProcess-info__tags">
                    {card.tags.map((tag) => (
                      <span key={tag} className="cardProcess-info__tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="cardProcess-info2">
                <span className="cardProcess-info2__number">{card.id}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="heroProcess__stats">
        <div className="heroProcess__stat">
          <span className="heroProcess__stat-number">4</span>
          <span className="heroProcess__stat-label">{text.stats.phasesLabel}</span>
        </div>
        <div className="heroProcess__stat-divider" />
        <div className="heroProcess__stat">
          <span className="heroProcess__stat-number">100%</span>
          <span className="heroProcess__stat-label">{text.stats.transparencyLabel}</span>
        </div>
        <div className="heroProcess__stat-divider" />
        <div className="heroProcess__stat">
          <span className="heroProcess__stat-number">+50</span>
          <span className="heroProcess__stat-label">{text.stats.projectsLabel}</span>
        </div>
      </div>
    </section>
  )
}
