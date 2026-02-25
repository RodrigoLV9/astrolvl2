import React from 'react'
import { Faq1Card } from './Faq1Card'

export const Faqs1Controller: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)
  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i))
  const items = new Array(7).fill(null)

  return (
    <div className="faqs1__cards">
      {items.map((_, i) => (
        <Faq1Card key={i} isOpen={openIndex === i} onToggle={() => toggle(i)} />
      ))}
    </div>
  )
}
