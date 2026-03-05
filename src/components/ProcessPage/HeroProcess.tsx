import React, { useState } from 'react'
import { SpaceBackground } from '../SpaceBackground.tsx'
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

const cards: ProcessCard[] = [
  {
    id: 1,
    phase: 'Fase 01',
    title: 'Descubrimiento',
    description: 'Análisis profundo de tus objetivos, competidores y audiencia para construir la estrategia perfecta.',
    tags: ['Análisis', 'Estrategia', 'Investigación'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: '🔍',
  },
  {
    id: 2,
    phase: 'Fase 02',
    title: 'Diseño & Estrategia',
    description: 'Creamos la propuesta visual y técnica que representa tu marca y conecta con tu audiencia.',
    tags: ['UI/UX', 'Wireframes', 'Prototipo'],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: '✏️',
  },
  {
    id: 3,
    phase: 'Fase 03',
    title: 'Desarrollo',
    description: 'Construimos e implementamos tu proyecto con tecnología de vanguardia y código limpio.',
    tags: ['Frontend', 'Backend', 'Optimización'],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    icon: '⚡',
  },
  {
    id: 4,
    phase: 'Fase 04',
    title: 'Lanzamiento',
    description: 'Entregamos, capacitamos y ofrecemos soporte continuo para garantizar tu éxito a largo plazo.',
    tags: ['Deploy', 'Soporte', 'Growth'],
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    icon: '🚀',
  },
]

export const HeroProcess: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(1)

  return (
    <section className="heroProcess">
      <SpaceBackground />

      <div className="heroProcess__badge">
        <span className="heroProcess__badge-dot"></span>
        <p>Metodología Probada</p>
      </div>

      <div className="heroProcess__text">
        <h1>
          Nuestro <span className="heroProcess__text-gradient">Proceso</span>
          <br />
          de Trabajo
        </h1>
        <p>Metodología clara y transparente para resultados excepcionales en cada proyecto</p>
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
          <span className="heroProcess__stat-label">Fases del proceso</span>
        </div>
        <div className="heroProcess__stat-divider" />
        <div className="heroProcess__stat">
          <span className="heroProcess__stat-number">100%</span>
          <span className="heroProcess__stat-label">Transparencia</span>
        </div>
        <div className="heroProcess__stat-divider" />
        <div className="heroProcess__stat">
          <span className="heroProcess__stat-number">+50</span>
          <span className="heroProcess__stat-label">Proyectos completados</span>
        </div>
      </div>
    </section>
  )
}
