import React from 'react'
import { BiCheck as IconCheck } from 'react-icons/bi';
import '../../../styles/Home/CardTag.css'

type CardTagProps = {
  text: string;
};

export const CardTag:React.FC<CardTagProps> = ({ text }) => {
  return (
    <div className='cardTag'>
        <IconCheck className='cardTag__icon'/>
        <p className='cardTag__text'>{text}</p>
    </div>
  )
}
