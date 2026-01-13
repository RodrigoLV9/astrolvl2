import React from 'react'
import { SiGmail as IconGmail} from "react-icons/si";
import { FaPhoneAlt as IconPhone} from "react-icons/fa";
import { BsFillGeoAltFill as IconGPS } from "react-icons/bs";
import '../styles/footer.css'
export const Footer = () => {
  return (
    <footer className="footer">
        <section className="footerTop">
            <div className="footerTop__logo">
                <div className="logoContainer">
                    <img src="/comets.png" alt="comets" width="30" height="30" />
                    <h2>Astro LvL</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eligendi cupiditate hic suscipit repellendus quis culpa, ullam fugiat!</p>
            </div>
            <div className="footerTop__cards">
                <div className="footerTop__card">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/process">Process</a></li>
                        <li><a href="/blogs">Blogs</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footerTop__card">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="/services#web-development">Web Development</a></li>
                        <li><a href="/services#mobile-development">Mobile Development</a></li>
                        <li><a href="/services#ui-ux-design">UI/UX Design</a></li>
                        <li><a href="/services#digital-marketing">Digital Marketing</a></li>
                    </ul>
                </div>
                <div className="footerTop__card">
                    <h3>Contact</h3>
                    <ul className='footerTop__card-list'>
                        <li>
                            <IconGmail/>
                            <p>astrolvl.dev@gmail.com</p>
                        </li>
                        <li>
                            <IconPhone/>
                            <p>+54 9 11 6623-2246 </p>
                        </li>
                        <li>
                            <IconGPS/>
                            <p>Lorem ipsum do</p>
                        </li>
                    </ul>
                </div>
                
            </div>
        </section>
        <div className="footerBottom">
            <p>© 2025 ASTRO LVL WEB. All rights reserved.</p>
        </div>
    
    </footer>
  )
}
