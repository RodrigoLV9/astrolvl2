import React from 'react'

export const SelectServices:React.FC = () => {
  return (
    <li className='selectServices'>
        <span>Services</span>
        <div className="servicesList">
            <a href="/services">Landing Page</a>
            <a href="/services">Web site</a>
            <a href="/services">E-commerce</a>
            <a href="/services">Maintenance</a>
        </div>
    </li>
  )
}
