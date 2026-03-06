import React from 'react'
import { GiFallingStar as IconStar } from "react-icons/gi";
import '../../../styles/Services/heroTag.css'

interface HeroTagProps {
  label: string
}

export const HeroTag: React.FC<HeroTagProps> = ({ label }) => {
  return (
    <div className="heroTag">
      <IconStar className="heroTag__icon" />
      <p>{label}</p>
    </div>
  )
}
