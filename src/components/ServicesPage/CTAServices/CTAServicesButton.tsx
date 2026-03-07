import React from 'react'
import { FaArrowRightLong as IconArrowRight } from "react-icons/fa6";
import '../../../styles/Services/CTAServicesButton.css'

interface Props {
  service?: string
}

export const CTAServicesButton: React.FC<Props> = () => {
  return (
    <a href="/contact" className='CTAServicesButton'>
        <span>Solicitar cotización personalizada</span>
        <IconArrowRight className='CTAServicesButton-icon'/>
    </a>
  )
}
