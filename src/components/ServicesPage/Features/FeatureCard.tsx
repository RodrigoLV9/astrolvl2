import React from 'react'
import { FaCheckCircle as IconCheckCircle } from "react-icons/fa";

export const FeatureCard:React.FC = () => {
  return (
    <li className='featureItem'>
        <IconCheckCircle className='featureItem-icon'/>
        <span>Diseño responsive mobile-first</span>
    </li>
  )
}
