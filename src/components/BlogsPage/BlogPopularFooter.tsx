import React from 'react'
import { IoBookOutline as IconBook } from "react-icons/io5";
import { MdOutlineDateRange as IconDate } from "react-icons/md";
import '../../styles/Blogs/blogPopularFooter.css'

interface BlogPopularFooterProps {
    readTimeText: string;
    dateText: string;
}

export const BlogPopularFooter:React.FC<BlogPopularFooterProps> = ({ readTimeText, dateText }) => {
  return (
    <div className="blogPopularFooter">
        <div className="blogPopularFooter__readTime">
            <IconBook className="blogPopularFooter__readTime-icon"/>
            <span>{readTimeText}</span>
        </div>
        <div className="blogPopularFooter__date">
            <IconDate className="blogPopularFooter__date-icon"/>
            <span>{dateText}</span>
        </div>
    </div>
  )
}
