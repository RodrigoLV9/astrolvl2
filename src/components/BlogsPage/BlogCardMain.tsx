import React from 'react'
import { IoBookOutline as IconBook } from "react-icons/io5";
import { MdOutlineDateRange as IconDate } from "react-icons/md";
import { IoArrowForward as IconArrow } from "react-icons/io5";
import '../../styles/Blogs/blogCardMain.css'
export const BlogCardMain: React.FC = () => {
  return (
    <article className='blogCardMain'>
        <div className="blogCardMain__media">
            <img src="/src/assets/images/intro.webp" alt="image example" />
            <div className="blogCardMain__media-overlay"></div>
            <span className="blogCardMain__badge">Post destacado</span>
            <span className="blogCardMain__category">Desarrollo Web</span>
        </div>
        <div className="blogCardMain__body">
            <h2>¿Qué debes aprender para ser full stack? (Guía completa)</h2>
            <p>¿Qué lenguajes y tecnologías debes aprender para convertirte en fullstack? Esta es la guía completa que estabas buscando, con los recursos y cursos que necesitas.</p>
            <div className="blogCardMain__footer">
                <div className="blogCardMain__meta">
                    <div className="blogCardMain__meta-item">
                        <IconBook />
                        <span>8 min de lectura</span>
                    </div>
                    <div className="blogCardMain__meta-item">
                        <IconDate />
                        <span>Hace 3 años</span>
                    </div>
                </div>
                <a href="#" className="blogCardMain__cta">
                    Leer artículo <IconArrow />
                </a>
            </div>
        </div>
    </article>
  )
}
