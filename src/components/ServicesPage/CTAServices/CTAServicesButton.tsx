import React from 'react'
import { FaArrowRightLong as IconArrowRight } from "react-icons/fa6";
import '../../../styles/Services/CTAServicesButton.css'
import { localizedPage } from '../../../lib/routes';
import type { Locale } from '../../../i18n';

interface Props {
  service?: string
  locale: Locale
  label: string
}

export const CTAServicesButton: React.FC<Props> = ({ locale, label }) => {
  return (
    <a href={localizedPage(locale, 'contact')} className='CTAServicesButton'>
        <span>{label}</span>
        <IconArrowRight className='CTAServicesButton-icon'/>
    </a>
  )
}
