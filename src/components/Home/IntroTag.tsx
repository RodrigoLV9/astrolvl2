import React from 'react'
import { PiShootingStarFill as IconStar } from "react-icons/pi";
import '../../styles/Home/introTag.css'
export const IntroTag:React.FC = () => {
  return (
    <div className='introTag'>
        <IconStar className='introTag__icon'/>
        <p>Innovacion constante</p>
    </div>
  )
}
