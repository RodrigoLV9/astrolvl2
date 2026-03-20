import React from 'react'
import { IoBookOutline as IconBook } from "react-icons/io5";
import { MdOutlineDateRange as IconDate } from "react-icons/md";
import { IoArrowForward as IconArrow } from "react-icons/io5";
import '../../styles/Blogs/blogCardFooter.css'

interface BlogCardFooterProps {
  readTimeText: string;
  dateText: string;
}

export const BlogCardFooter: React.FC<BlogCardFooterProps> = ({ readTimeText, dateText }) => {
  return (
    <div className="blogCardFooter">
      <div className="blogCardFooter__meta">
        <div className="blogCardFooter__meta-item">
          <IconBook />
          <span>{readTimeText}</span>
        </div>
        <div className="blogCardFooter__meta-item">
          <IconDate />
          <span>{dateText}</span>
        </div>
      </div>
      <span className="blogCardFooter__cta">
        Leer <IconArrow />
      </span>
    </div>
  )
}

