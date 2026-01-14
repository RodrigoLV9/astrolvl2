import React from 'react'
import { FaRegLightbulb as IconLightBulb, FaArrowRightLong as IconArrowRight } from "react-icons/fa6";
import { FaHtml5 as IconHTML} from "react-icons/fa";
import '../../styles/Home/Hero.css'
export  const Hero:React.FC = () => {
  return (
    <section className="hero">
        <div className="tag">
            <IconLightBulb className='tag-icon'/>
            <p>Tecnologia con vision</p>
        </div>
        <div className='hero__text'>
            <h1>Elevamos Tu Presencia Digital Al Siguiente Nivel</h1>
            <h4>Desarrollo Web Futurista para Empresas Visionarias</h4>
        </div>
        <div className="buttons">
            <button className="button-services">
                <p>Explorar servicios</p>
                <IconArrowRight/>
            </button>
            <button className="button-contact">
                <p>Contacto</p>
            </button>
        </div>
        <div className="carousel">
            <IconHTML/>
            <IconHTML/>
            <IconHTML/>
            <IconHTML/>
            <IconHTML/>
            <IconHTML/>
            <IconHTML/>
        </div>
    </section>
  )
}
