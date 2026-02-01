import React from 'react'
import { IoPlanet as IconPlanet} from "react-icons/io5";
import '../../../styles/Process/cardIntro.css'
export const CardIntroProcess = () => {
  return (
    <div className="cardIntroProcess">
      <IconPlanet className='cardIntroProcess-icon'/>
      <h3>100%</h3>
      <p>Cada proyecto comienza con un análisis exhaustivo de requisitos y objetivos</p>
    </div>
  )
}
