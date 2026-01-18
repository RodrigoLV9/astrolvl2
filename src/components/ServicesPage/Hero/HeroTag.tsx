import React from 'react'
import { GiFallingStar as IconStar } from "react-icons/gi";
import '../../../styles/Services/heroTag.css'
export const HeroTag:React.FC = () => {
  return (
    <div className="heroTag">
      <IconStar className="heroTag__icon" />
      <p>Responsive design</p>
    </div>
  )
}
