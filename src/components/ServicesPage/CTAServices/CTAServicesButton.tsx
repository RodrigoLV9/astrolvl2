import React from 'react'
import { FaArrowRightLong as IconArrowRight } from "react-icons/fa6";

export const CTAServicesButton:React.FC = () => {
  return (
    <button className='CTAServicesButton'>
        <span>Solicitar Cotización Personalizada</span>
        <IconArrowRight className='CTAServicesButton-icon'/>
    </button>
  )
}
