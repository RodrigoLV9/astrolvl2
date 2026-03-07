import React from 'react'
import { FaCheckCircle as IconCheckCircle } from "react-icons/fa";
import "../../../styles/Services/descriptionCard.css"

interface DescriptionCardProps {
  title: string
  description: string
}

export const DescriptionCard: React.FC<DescriptionCardProps> = ({ title, description }) => {
  return (
    <div className='descriptionCard'>
        <div className="descriptionCard__header">
            <IconCheckCircle className='descriptionCard__header-icon'/>
            <h4>{title}</h4>
        </div>
        <p>{description}</p>
    </div>
  )
}
