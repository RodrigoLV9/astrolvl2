import React from 'react'
import { IoBookOutline as IconBook } from "react-icons/io5";
import { MdOutlineDateRange as IconDate } from "react-icons/md";
import '../../styles/Blogs/blogPopularFooter.css'
export const BlogPopularFooter:React.FC = () => {
  return (
    <div className="blogPopularFooter">
        <div className="blogPopularFooter__readTime">
            <IconBook className="blogPopularFooter__readTime-icon"/>
            <span>Lectura de 8 min</span>
        </div>
        <div className="blogPopularFooter__date">
            <IconDate className="blogPopularFooter__date-icon"/>
            <span>Hace 3 años</span>
        </div>
    </div>
  )
}
