import React from 'react'
import { FaArrowRightLong as IconArrowRight } from "react-icons/fa6";
import '../../../styles/Services/moreCard.css'
export const MoreCard:React.FC = () => {
  return (
    <div className='moreCard'>
        <h3>Sitio Web Completo</h3>
        <p>Ideal para empresas que necesitan múltiples páginas, blog, portafolio y presencia digital robusta.</p>
        <button className='moreCard__button'>
            <span>Ver Sitio Web Completo</span>
            <IconArrowRight className='moreCard__button-icon'/>
        </button>
    </div>
  )
}
