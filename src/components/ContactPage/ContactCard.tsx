import React from 'react'
import { FaWhatsapp as IconWhatsapp } from "react-icons/fa";
import '../../styles/Contact/contactCard.css'
export const ContactCard:React.FC = () => {
  return (
    <div className='contactCard'>
        <IconWhatsapp className='contactCard-icon'/>
        <div className="contactCard__content">
            <h3>Whatsapp</h3>
            <span>+54 911 66231326</span>
            <button className='contactButton'>
                <IconWhatsapp className='contactButton-icon'/>
                <span>Escribir por whatsapp</span>
            </button>
        </div>
    </div>
  )
}
