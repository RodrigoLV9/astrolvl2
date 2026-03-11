import React from 'react'
import { 
    FaHtml5 as IconHTML,
    FaCss3Alt as IconCSS,
    FaJs as IconJS,
    FaReact as IconReact,
    FaNode as IconNode,
    FaDatabase as IconDatabase,
    FaGitAlt as IconGit,
    FaPython as IconPython,
    FaDocker as IconDocker,
    FaGithub as IconGithub,
    FaLinux as IconLinux,
    FaVuejs as IconVue,
    FaAngular as IconAngular,
    FaPhp as IconPhp,
    FaSass as IconSass,
    FaNpm as IconNpm,
    FaFigma as IconFigma,
} from "react-icons/fa6";
import {
    SiTypescript as IconTS,
    SiNextdotjs as IconNext,
    SiTailwindcss as IconTailwind,
    SiMongodb as IconMongo,
    SiGraphql as IconGraphQL,
    SiPostgresql as IconPostgres,
} from "react-icons/si";
import '../styles/carouselHero.css'

export const CarouselHero: React.FC = () => {
    const icons = [
        IconHTML, IconCSS, IconJS, IconTS, IconReact, IconNext, IconVue, IconAngular,
        IconNode, IconPython, IconPhp, IconDatabase, IconMongo, IconPostgres,
        IconGraphQL, IconDocker, IconLinux, IconGit, IconGithub,
        IconTailwind, IconSass, IconNpm, IconFigma,
    ]
    
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
