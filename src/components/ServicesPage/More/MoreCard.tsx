import React from 'react'
import { FaArrowRightLong as IconArrow } from "react-icons/fa6";
import { FaRocket, FaEarthAmericas, FaCartShopping, FaScrewdriverWrench } from "react-icons/fa6";
import '../../../styles/Services/moreCard.css'

const iconMap: Record<string, React.ReactNode> = {
  'landing-page': <FaRocket />,
  'website': <FaEarthAmericas />,
  'ecommerce': <FaCartShopping />,
  'support': <FaScrewdriverWrench />,
}

interface MoreCardProps {
  slug: string
  title: string
  description: string
  href: string
  tag: string
  ctaLabel: string
}

export const MoreCard: React.FC<MoreCardProps> = ({ slug, title, description, href, tag, ctaLabel }) => {
  return (
    <a href={href} className='moreCard'>
      <div className='moreCard__icon-wrap'>
        {iconMap[slug]}
      </div>
      <div className='moreCard__body'>
        <span className='moreCard__tag'>{tag}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className='moreCard__footer'>
        <span>{ctaLabel}</span>
        <IconArrow className='moreCard__arrow' />
      </div>
    </a>
  )
}
