import React from 'react'
import { BsRocketTakeoffFill as IconRocket } from "react-icons/bs";
import '../../../styles/Services/cardIntro.css'
export const Card:React.FC = () => {
  return (
    <div className='cardIntro'>
        <IconRocket className='cardIntro-icon'/>
        <span>Conversion optimizada</span>
        <p>Copy persuasivo y CTAs estratégicos diseñados para maximizar conversiones</p>
    </div>
  )
}
