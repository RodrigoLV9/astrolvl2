import React, { useState } from 'react'
import '../../styles/selectServices.css'
import { IoIosArrowDown as IconArrowDown } from "react-icons/io";
import type { I18nDictionary, Locale } from '../../i18n';
import { localizedPage, localizedService } from '../../lib/routes';

interface SelectServicesProps {
  locale: Locale;
  label: string;
  services: I18nDictionary['footer']['services'];
}

export const SelectServices: React.FC<SelectServicesProps> = ({ locale, label, services }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setMobileOpen(prev => !prev);
    }
  };

  return (
    <li className={`selectServices${mobileOpen ? ' mobile-open' : ''}`}>
      <a href={localizedPage(locale, 'services')} className='servicesList__all' onClick={handleClick}>
        <span>{label}</span>
            <IconArrowDown className={`selectServices__button-icon${mobileOpen ? ' rotated' : ''}`}/>
        </a>
        <div className="servicesList">
            <hr className="servicesList__divider" />
        <a href={localizedService(locale, 'landing-page')}>{services.landingPage}</a>
        <a href={localizedService(locale, 'website')}>{services.website}</a>
        <a href={localizedService(locale, 'ecommerce')}>{services.ecommerce}</a>
        <a href={localizedService(locale, 'support')}>{services.support}</a>
        </div>
    </li>
  )
}
