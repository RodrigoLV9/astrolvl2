import React from 'react'
import { FaRegLightbulb as IconLightBulb, FaArrowRightLong as IconArrowRight } from "react-icons/fa6";
import { CarouselHero } from "../../CarouselHero.tsx"
import { SpaceBackground } from "../../SpaceBackground.tsx"
import type { Locale } from '../../../i18n';
import { localizedPage } from '../../../lib/routes';
import '../../../styles/Home/Hero.css'

interface HeroProps {
    locale: Locale
    text: {
        badge: string
        title: string
        subtitle: string
        servicesButton: string
        contactButton: string
    }
}

export const Hero: React.FC<HeroProps> = ({ locale, text }) => {
  return (
    <section className="hero">
        <SpaceBackground />
        <div className="tag">
            <IconLightBulb className='tag-icon'/>
                        <p>{text.badge}</p>
        </div>
        <div className='hero__text'>
                        <h1>{text.title}</h1>
                        <h4>{text.subtitle}</h4>
        </div>
        <div className="buttons">
                        <a href={localizedPage(locale, 'services')} className="button-services">
                                <span>{text.servicesButton}</span>
                <IconArrowRight/>
            </a>
                        <a href={localizedPage(locale, 'contact')} className="button-contact">
                                <span>{text.contactButton}</span>
            </a>
        </div>
        <CarouselHero/>
      </section>
  )
}
