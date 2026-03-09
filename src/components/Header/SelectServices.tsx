import React from 'react'
import '../../styles/selectServices.css'
import { IoIosArrowDown as IconArrowDown } from "react-icons/io";
export const SelectServices:React.FC = () => {
  return (
    <li className='selectServices'>
        <a href='/services' className='servicesList__all'>
            <span>Services</span>
            <IconArrowDown className='selectServices__button-icon'/>
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
