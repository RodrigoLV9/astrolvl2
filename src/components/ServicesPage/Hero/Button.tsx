import React from 'react'
import { FaArrowRightLong as IconArrowRight } from "react-icons/fa6";
import '../../../styles/Services/button.css'

interface ButtonProps {
  label: string
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="heroLeft__button">
        <p>{label}</p>
        <IconArrowRight className="heroLeft__button-icon" />
    </button>
  )
}
