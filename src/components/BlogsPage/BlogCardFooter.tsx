import React from 'react'
import { IoBookOutline as IconBook } from "react-icons/io5";
import { MdOutlineDateRange as IconDate } from "react-icons/md";
import { IoArrowForward as IconArrow } from "react-icons/io5";
import '../../styles/Blogs/blogCardFooter.css'

export const BlogCardFooter: React.FC = () => {
  return (
    <div className="blogCardFooter">
      <div className="blogCardFooter__meta">
        <div className="blogCardFooter__meta-item">
          <IconBook />
          <span>8 min</span>
        </div>
        <div className="blogCardFooter__meta-item">
          <IconDate />
          <span>Hace 3 años</span>
        </div>
      </div>
      <span className="blogCardFooter__cta">
        Leer <IconArrow />
      </span>
    </div>
  )
}

