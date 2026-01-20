import React from 'react'
import { FaCheckCircle as IconCheckCircle } from "react-icons/fa";
import '../../../styles/Services/FeatureCard.css'
export const FeatureCard:React.FC = () => {
  return (
    <li className='featureCard'>
        <IconCheckCircle className='featureCard-icon'/>
        <span>Diseño responsive mobile-first</span>
    </li>
  )
}
