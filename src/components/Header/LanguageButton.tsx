import React, { useState, useRef, useEffect } from 'react'
import { IoIosArrowDown as IconArrowDown } from "react-icons/io";
import '../../styles/languageButton.css'

interface Language {
  value: string;
  label: string;
  flag: string;
}

const languages: Language[] = [
  { value: 'spanish', label: 'Español', flag: '🇪🇸' },
  { value: 'english', label: 'English', flag: '🇺🇸' },
  { value: 'portugues', label: 'Português', flag: '🇧🇷' }
];

export const LanguageButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
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
  };

  return (
    <div className="containerLanguageButton" ref={dropdownRef}>
      <button 
        className="languageButton" 
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
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
