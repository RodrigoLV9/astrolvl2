import React from 'react'
import { SiGmail as IconGmail} from "react-icons/si";
import { FaPhoneAlt as IconPhone} from "react-icons/fa";
import { BsFillGeoAltFill as IconGPS } from "react-icons/bs";
import '../styles/footer.css'
export const Footer:React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
        <section className="footerTop">
            <div className="footerTop__logo">
                <div className="logoContainer">
                    <img src="/comets.png" alt="comets" width="30" height="30" />
                    <h2>Astro LvL</h2>
                </div>
                <p>
                  Diseñamos sitios web rápidos, modernos y orientados a resultados para potenciar tu marca digital.
                </p>
            </div>
            <div className="footerTop__cards">
                <nav className="footerTop__card" aria-label="Navegación principal">
                    <h3>Navegación</h3>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/process">Process</a></li>
                        <li><a href="/blogs">Blogs</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="footerTop__card">
                    <h3>Servicios</h3>
                    <ul>
                        <li><a href="/landing-page">Landing Page</a></li>
                        <li><a href="/website">Web site</a></li>
                        <li><a href="/ecommerce">E-commerce</a></li>
                        <li><a href="/support">Support</a></li>
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
            <p>© {year} ASTRO LVL WEB. All rights reserved.</p>
        </div>
    
    </footer>
  )
}
