import { FaInstagram } from "react-icons/fa";
import React from 'react'
import '../../styles/Contact/ItemSocial.css'
export const ItemSocial:React.FC = () => {
  return (
    <div className="social">
      <a href="#">
        <FaInstagram className="social-icon"/>
      </a>
    </div>
  )
}