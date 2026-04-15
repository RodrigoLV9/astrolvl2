import React from 'react'
import { IoBookOutline as IconBook } from "react-icons/io5";
import { MdOutlineDateRange as IconDate } from "react-icons/md";
import { IoArrowForward as IconArrow } from "react-icons/io5";
import '../../styles/Blogs/blogCardMain.css'

interface BlogCardMainProps {
  title: string;
  description: string;
  image: string;
  category: string;
  readTimeText: string;
  dateText: string;
  href: string;
  featuredBadge: string;
  readArticleCta: string;
}

export const BlogCardMain: React.FC<BlogCardMainProps> = ({
  title,
  description,
  image,
  category,
  readTimeText,
  dateText,
  href,
  featuredBadge,
  readArticleCta,
}) => {
  return (
    <article className='blogCardMain'>
        <div className="blogCardMain__media">
            <img src={image} alt={title} />
            <div className="blogCardMain__media-overlay"></div>
            <span className="blogCardMain__badge">{featuredBadge}</span>
            <span className="blogCardMain__category">{category}</span>
        </div>
        <div className="blogCardMain__body">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="blogCardMain__footer">
                <div className="blogCardMain__meta">
                    <div className="blogCardMain__meta-item">
                        <IconBook />
                        <span>{readTimeText}</span>
                    </div>
                    <div className="blogCardMain__meta-item">
                        <IconDate />
                        <span>{dateText}</span>
                    </div>
                </div>
                <a href={href} className="blogCardMain__cta">
                  {readArticleCta} <IconArrow />
                </a>
            </div>
        </div>
    </article>
  )
}
