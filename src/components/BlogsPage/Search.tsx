import React from 'react'
import { IoMdSearch as IconSearch } from "react-icons/io";

export const Search:React.FC = () => {
  return (
    <div className="searchContainer">
        <IconSearch/>
        <label htmlFor="">Buscar articulos</label>
        <input type="text" />
    </div>
  )
}
