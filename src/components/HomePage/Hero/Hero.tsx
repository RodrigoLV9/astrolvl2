import React from 'react'
import { FaRegLightbulb as IconLightBulb, FaArrowRightLong as IconArrowRight } from "react-icons/fa6";
import { CarouselHero } from "../../CarouselHero.tsx"
import { SpaceBackground } from "../../SpaceBackground.tsx"
import '../../../styles/Home/Hero.css'
export const Hero: React.FC = () => {
  return (
    <section className="hero">
        <SpaceBackground />
        <div className="tag">
            <IconLightBulb className='tag-icon'/>
            <p>Tecnologia con vision</p>
        </div>
        <div className='hero__text'>
            <h1>Elevamos Tu Presencia Digital Al Siguiente Nivel</h1>
            <h4>Desarrollo Web Futurista para Empresas Visionarias</h4>
        </div>
        <div className="buttons">
            <a href='/services' className="button-services">
                <span>Explorar servicios</span>
                <IconArrowRight/>
            </a>
            <a href='/contact' className="button-contact">
                <span>Contacto</span>
            </a>
        </div>
        <CarouselHero/>
      </section>
  )
}
