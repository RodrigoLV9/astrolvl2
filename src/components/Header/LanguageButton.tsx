import React, { useState, useRef, useEffect } from 'react'
import { IoIosArrowDown as IconArrowDown } from "react-icons/io";
import '../../styles/languageButton.css'
import type { I18nDictionary, Locale } from '../../i18n';
import { switchLocalePath } from '../../lib/routes';

interface Language {
  value: Locale;
  label: string;
  flag: string;
}

interface LanguageButtonProps {
  locale: Locale;
  dict: I18nDictionary;
}

export const LanguageButton: React.FC<LanguageButtonProps> = ({ locale, dict }) => {
  const languages: Language[] = [
    { value: 'es', label: dict.language.options.es, flag: 'ES' },
    { value: 'en', label: dict.language.options.en, flag: 'EN' },
    { value: 'pt', label: dict.language.options.pt, flag: 'PT' },
  ];

  const initial = languages.find((language) => language.value === locale) ?? languages[1];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(initial);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar el dropdown cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);

    if (language.value !== locale) {
      window.location.href = switchLocalePath(window.location.pathname, language.value);
    }
  };

  return (
    <div className="containerLanguageButton" ref={dropdownRef}>
      <button 
        className="languageButton" 
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={dict.language.current}
      >
        <span className="languageFlag">{selectedLanguage.flag}</span>
        <span className="languageLabel">{selectedLanguage.label}</span>
        <IconArrowDown className={`languageArrow ${isOpen ? 'open' : ''}`} />
      </button>
      
      <div className={`languageDropdown ${isOpen ? 'show' : ''}`}>
        <ul className="languageList" role="listbox">
          {languages.map((language) => (
            <li
              key={language.value}
              className={`languageOption ${selectedLanguage.value === language.value ? 'selected' : ''}`}
              onClick={() => handleSelect(language)}
              role="option"
              aria-selected={selectedLanguage.value === language.value}
            >
              <span className="optionFlag">{language.flag}</span>
              <span className="optionLabel">{language.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
