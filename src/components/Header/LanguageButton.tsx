import React from 'react'

export const LanguageButton:React.FC = () => {

  return (
    <select name="language" id="language">
        <option value="spanish">Espanol</option>
        <option value="english">English</option>
        <option value="portugues">Portugues</option>
    </select>
  )
}
