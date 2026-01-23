import React from 'react'
import { IoBookOutline as IconBook } from "react-icons/io5";
import { MdOutlineDateRange as IconDate } from "react-icons/md";
import '../../styles/Blogs/blogPopularFooter.css'
export const BlogCardFooter:React.FC = () => {
  return (
    <div className="blogCardFooter">
        <div className="blogCardFooter__readTime">
            <IconBook className="blogCardFooter__readTime-icon"/>
            <span>Lectura de 8 min</span>
        </div>
        <div className="blogCardFooter__date">
            <IconDate className="blogCardFooter__date-icon"/>
            <span>Hace 3 años</span>
        </div>
    </div>
  )
}

