import React from 'react'
import { FaCheck as IconCheck } from "react-icons/fa6";
import '../../../styles/Services/heroTag.css'

interface HeroTagProps {
  label: string
}

export const HeroTag: React.FC<HeroTagProps> = ({ label }) => {
  return (
    <div className="heroTag">
      <IconCheck className="heroTag__icon" />
      <span>{label}</span>
    </div>
  )
}
