import React from 'react'
import { FaArrowRightLong as IconArrowRight } from "react-icons/fa6";

export const Button:React.FC = () => {
  return (
    <button className="heroLeft__button">
        <p>Solicitar Landing Page</p>
        <IconArrowRight className="heroLeft__button-icon" />
    </button>
  )
}
