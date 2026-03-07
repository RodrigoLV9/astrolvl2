import React from 'react'
import { FaCheckCircle as IconCheckCircle } from "react-icons/fa";
import '../../../styles/Services/FeatureCard.css'

interface FeatureCardProps {
  label: string
  index?: number
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ label }) => {
  return (
    <div className='featureCard'>
        <IconCheckCircle className='featureCard-icon'/>
        <span>{label}</span>
    </div>
  )
}
