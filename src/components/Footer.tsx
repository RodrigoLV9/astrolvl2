import React from 'react'
import { SiGmail as IconGmail} from "react-icons/si";
import { FaPhoneAlt as IconPhone} from "react-icons/fa";
import { BsFillGeoAltFill as IconGPS } from "react-icons/bs";
import { FaArrowRight as IconArrowRight } from "react-icons/fa6";
import '../styles/footer.css'
import type { I18nDictionary, Locale } from '../i18n';
import { localizedPage, localizedService } from '../lib/routes';

interface FooterProps {
  locale: Locale;
  dict: I18nDictionary;
}

export const Footer: React.FC<FooterProps> = ({ locale, dict }) => {
  const year = new Date().getFullYear();
  const copyrightLine = dict.footer.copyright.replace('{year}', String(year));
  
  return (
    <footer className="footer">
        <section className="footerTop">
            <div className="footerTop__logo">
                <div className="logoContainer">
                    <img src="/comets.png" alt="comets" width="40" height="40" className="logo-img" />
                    <h2>{dict.brand.name}</h2>
                </div>
                <p>
                  {dict.brand.tagline}
                </p>
            </div>
            <div className="footerTop__cards">
                <nav className="footerTop__card" aria-label={dict.footer.navigationTitle}>
                    <h3>{dict.footer.navigationTitle}</h3>
                    <ul>
                        <li><a href={localizedPage(locale, 'home')}>{dict.header.nav.home}<IconArrowRight className="icon-arrow"/></a></li>
                        <li><a href={localizedPage(locale, 'services')}>{dict.header.nav.services}<IconArrowRight className="icon-arrow"/></a></li>
                        <li><a href={localizedPage(locale, 'process')}>{dict.header.nav.process}<IconArrowRight className="icon-arrow"/></a></li>
                        <li><a href={localizedPage(locale, 'blogs')}>{dict.header.nav.blogs}<IconArrowRight className="icon-arrow"/></a></li>
                        <li><a href={localizedPage(locale, 'contact')}>{dict.header.nav.contact}<IconArrowRight className="icon-arrow"/></a></li>
                    </ul>
                </nav>
                <div className="footerTop__card">
                    <h3>{dict.footer.servicesTitle}</h3>
                    <ul>
                        <li><a href={localizedService(locale, 'landing-page')}>{dict.footer.services.landingPage}<IconArrowRight className="icon-arrow"/></a></li>
                        <li><a href={localizedService(locale, 'website')}>{dict.footer.services.website}<IconArrowRight className="icon-arrow"/></a></li>
                        <li><a href={localizedService(locale, 'ecommerce')}>{dict.footer.services.ecommerce}<IconArrowRight className="icon-arrow"/></a></li>
                        <li><a href={localizedService(locale, 'support')}>{dict.footer.services.support}<IconArrowRight className="icon-arrow"/></a></li>
                    </ul>
                </div>
                <div className="footerTop__card">
                    <h3>{dict.footer.contactTitle}</h3>
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
                            <p>{dict.footer.location}</p>
                        </li>
                    </ul>
                </div>
                
            </div>
        </section>
        <div className="footerBottom">
            <p>{copyrightLine} | {dict.footer.signature}</p>
        </div>
    
    </footer>
  )
}
