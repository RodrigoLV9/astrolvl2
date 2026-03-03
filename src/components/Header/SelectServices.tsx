import React from 'react'
import '../../styles/selectServices.css'
import { IoIosArrowDown as IconArrowDown } from "react-icons/io";
export const SelectServices:React.FC = () => {
  return (
    <li className='selectServices'>
        <button className='selectServices__button'>
            <span>Services</span>
            <IconArrowDown className='selectServices__button-icon'/>
        </button>
        <div className="servicesList">
            <a href="/landing-page">Landing Page</a>
            <a href="/website">Web site</a>
            <a href="/ecommerce">E-commerce</a>
            <a href="/support">Maintenance</a>
        </div>
    </li>
  )
}
