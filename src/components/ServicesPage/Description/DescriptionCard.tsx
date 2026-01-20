import React from 'react'
import { FaCheckCircle as IconCheckCircle } from "react-icons/fa";
import "../../../styles/Services/descriptionCard.css"
export const DescriptionCard:React.FC = () => {
  return (
    <div className='descriptionCard'>
        <div className="descriptionCard__header">
            <IconCheckCircle className='descriptionCard__header-icon'/>
            <h4>Dominio</h4>
        </div>
        <p>Registramos el dominio que identifica a tu sitio en Internet. Un dominio propio ayuda a crear una identidad única.</p>
    </div>
  )
}
