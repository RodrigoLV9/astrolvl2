import React from 'react'
import { FaCheckCircle as IconCheckCircle } from "react-icons/fa";

export const DescriptionCard:React.FC = () => {
  return (
    <div className='card'>
        <div className="card__header">
            <IconCheckCircle className='card__header-icon'/>
            <h4>Dominio</h4>
        </div>
        <p>Registramos el dominio que identifica a tu sitio en Internet. Un dominio propio ayuda a crear una identidad única.</p>
    </div>
  )
}
