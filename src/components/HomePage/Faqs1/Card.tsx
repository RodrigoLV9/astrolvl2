import React from 'react'
import { BsArrowDownShort } from 'react-icons/bs'
import '../../../styles/Home/FaqCard.css'
export const Card:React.FC = () => {
  return (
    <div className="card">
        <div className="card__visible">
            <p>¿Cuánto tarda en estar lista una página web?</p>
            <BsArrowDownShort className='card__visible-icon'/>
        </div>
    </div>
  )
}
