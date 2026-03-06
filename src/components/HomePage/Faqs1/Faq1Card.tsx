import React from 'react'
import { IoIosArrowDown as IconArrow } from "react-icons/io";
import '../../../styles/Home/Faq1Card.css'

interface Faq1CardProps {
  question: string
  answer: string
  index: number
  isOpen: boolean
  onToggle: () => void
}

export const Faq1Card: React.FC<Faq1CardProps> = ({ question, answer, index, isOpen, onToggle }) => {
  return (
    <div className={`faq1Card${isOpen ? ' faq1Card--open' : ''}`} onClick={onToggle}>
      <div className="faq1Card__header">
        <span className="faq1Card__number">{String(index + 1).padStart(2, '0')}</span>
        <p className="faq1Card__question">{question}</p>
        <IconArrow className="faq1Card__icon" />
      </div>
      <div className="faq1Card__body">
        <p className="faq1Card__answer">{answer}</p>
      </div>
    </div>
  )
}
