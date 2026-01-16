import React from 'react'
import { BiCheck as IconCheck } from 'react-icons/bi';
import '../../../styles/Home/CardTag.css'
export const CardTag:React.FC = () => {
  return (
    <div className='cardTag'>
        <IconCheck className='cardTag__icon'/>
        <p className='cardTag__text'>Responsive design</p>
    </div>
  )
}
