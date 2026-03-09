import React from 'react'
import { PiShootingStarFill as IconStar } from "react-icons/pi";
import '../../../styles/Home/introTag.css'

interface IntroTagProps {
  text?: string;
}

export const IntroTag: React.FC<IntroTagProps> = ({ text = "Innovación constante" }) => {
  return (
    <div className='introTag'>
        <IconStar className='introTag__icon'/>
        <p>{text}</p>
    </div>
  )
}
