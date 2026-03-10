import React, { useState } from 'react'
import '../../styles/selectServices.css'
import { IoIosArrowDown as IconArrowDown } from "react-icons/io";

export const SelectServices: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setMobileOpen(prev => !prev);
    }
  };

  return (
    <li className={`selectServices${mobileOpen ? ' mobile-open' : ''}`}>
        <a href='/services' className='servicesList__all' onClick={handleClick}>
            <span>Services</span>
            <IconArrowDown className={`selectServices__button-icon${mobileOpen ? ' rotated' : ''}`}/>
        </a>
        <div className="servicesList">
            <hr className="servicesList__divider" />
            <a href="/landing-page">Landing Page</a>
            <a href="/website">Web site</a>
            <a href="/ecommerce">E-commerce</a>
            <a href="/support">Maintenance</a>
        </div>
    </li>
  )
}
