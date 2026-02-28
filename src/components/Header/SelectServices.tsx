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
            <a href="/services">Landing Page</a>
            <a href="/services">Web site</a>
            <a href="/services">E-commerce</a>
            <a href="/services">Maintenance</a>
        </div>
    </li>
  )
}
