import React from 'react'
import { IoBookOutline as IconBook } from "react-icons/io5";
import { MdOutlineDateRange as IconDate } from "react-icons/md";
import '../../styles/Blogs/blogCardMain.css'
export const BlogCardMain:React.FC = () => {
  return (
    <div className='blogCardMain'>
        <span>Post destacado</span>
        <img src="/src/assets/images/intro.webp" alt="image example" />
        <h3>Que debes aprender para ser full stack? (Guia completa)</h3>
        <p>¿Qué lenguajes y tecnologías debes aprender para convertirte en fullstack? Esta es la guia completa que estabas buscando e incluye los cursos que debes tomar.</p>
        <div className="blogCardMain__footer">
            <div className="blogCardMain__footer-readTime">
                <IconBook/>
                <span>Lectura de 8 min</span>
            </div>
            <div className="blogCardMain__footer-date">
                <IconDate/>
                <span>Hace 3 años</span>
            </div>
        </div>
    </div>
  )
}
