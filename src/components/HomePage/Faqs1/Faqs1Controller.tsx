import React, { useState } from 'react'
import { Faq1Card } from './Faq1Card'

interface FaqItem {
  question: string
  answer: string
}

interface Faqs1ControllerProps {
  faqs: FaqItem[]
}

export const Faqs1Controller: React.FC<Faqs1ControllerProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const toggle = (i: number) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <div className="faqs1__list">
      {faqs.map((faq, i) => (
        <Faq1Card
          key={i}
          question={faq.question}
          answer={faq.answer}
          index={i}
          isOpen={openIndex === i}
          onToggle={() => toggle(i)}
        />
      ))}
    </div>
  )
}
