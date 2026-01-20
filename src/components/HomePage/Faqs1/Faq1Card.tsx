import React from 'react'
import { BsArrowDownShort } from 'react-icons/bs'
import '../../../styles/Home/Faq1Card.css'
export const Faq1Card:React.FC = () => {
  return (
    <div className="faq1Card">
        <div className="faq1Card__visible">
            <p>¿Cuánto tarda en estar lista una página web?</p>
            <BsArrowDownShort className='faq1Card__visible-icon'/>
        </div>
    </div>
  )
}
