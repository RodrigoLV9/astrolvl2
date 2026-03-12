import React from 'react'
import { SiGmail as IconGmail} from "react-icons/si";
import { FaPhoneAlt as IconPhone} from "react-icons/fa";
import { BsFillGeoAltFill as IconGPS } from "react-icons/bs";
import { FaArrowRight as IconArrowRight } from "react-icons/fa6";
import '../styles/footer.css'

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
        <section className="footerTop">
            <div className="footerTop__logo">
                <div className="logoContainer">
                    <img src="/comets.png" alt="comets" width="40" height="40" className="logo-img" />
                    <h2>Astro LvL</h2>
                </div>
                <p>
                  Elevamos tu presencia digital con soluciones web modernas y orientadas a resultados para potenciar tu marca en el universo digital.
                </p>
            </div>
            <div className="footerTop__cards">
                <nav className="footerTop__card" aria-label="Navegación principal">
                    <h3>Navegación</h3>
                    <ul>
                        <li><a href="/home">Home<IconArrowRight className="icon-arrow"/></a></li>
                        <li><a href="/services">Services<IconArrowRight className="icon-arrow"/></a></li>
                        <li><a href="/process">Process<IconArrowRight className="icon-arrow"/></a></li>
                        <li><a href="/blogs">Blogs<IconArrowRight className="icon-arrow"/></a></li>
                        <li><a href="/contact">Contact<IconArrowRight className="icon-arrow"/></a></li>
                    </ul>
                </nav>
                <div className="footerTop__card">
                    <h3>Servicios</h3>
                    <ul>
                        <li><a href="/landing-page">Landing Page<IconArrowRight className="icon-arrow"/></a></li>
                        <li><a href="/website">Web site<IconArrowRight className="icon-arrow"/></a></li>
                        <li><a href="/ecommerce">E-commerce<IconArrowRight className="icon-arrow"/></a></li>
                        <li><a href="/support">Support<IconArrowRight className="icon-arrow"/></a></li>
                    </ul>
                </div>
                <div className="footerTop__card">
                    <h3>Contacto</h3>
                    <ul className='footerTop__card-list'>
                        <li>
                            <IconGmail/>
                            <a href="mailto:astrolvl.dev@gmail.com">astrolvl.dev@gmail.com</a>
                        </li>
                        <li>
                            <IconPhone/>
                            <a href="tel:+5491166232246">+54 9 11 6623-2246</a>
                        </li>
                        <li>
                            <IconGPS/>
                            <p>Buenos Aires, Argentina</p>
                        </li>
                    </ul>
                </div>
                
            </div>
        </section>
        <div className="footerBottom">
            <p>© {year} ASTRO LVL WEB. All rights reserved. | Diseñado con ✨ para el futuro digital</p>
        </div>
    
    </footer>
  )
}
