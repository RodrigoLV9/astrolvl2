import React from 'react'
import { 
    FaHtml5 as IconHTML,
    FaCss3Alt as IconCSS,
    FaJs as IconJS,
    FaReact as IconReact,
    FaNode as IconNode,
    FaDatabase as IconDatabase,
    FaGitAlt as IconGit
} from "react-icons/fa6";
import '../styles/carouselHero.css'

export const CarouselHero: React.FC = () => {
    const icons = [IconHTML, IconCSS, IconJS, IconReact, IconNode, IconDatabase, IconGit]
    
    return (
        <div className="carouselHero-wrapper">
            <div className="carouselHero">
                {[0, 1].map((group) => (
                    <div key={group} className="carouselHero-group">
                        {icons.map((Icon, idx) => (
                            <div key={idx} className="carousel-icon-wrapper">
                                <Icon className="carousel-icon" />
                                <div className="carousel-icon-glow"></div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="carousel-gradient-left"></div>
            <div className="carousel-gradient-right"></div>
        </div>
    )
}
