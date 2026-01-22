import React from 'react'
import { IoMdSearch as IconSearch } from "react-icons/io";
import '../../styles/Blogs/blogSearch.css'
export const Search:React.FC = () => {
  return (
    <div className="blogSearch">
        <IconSearch className='blogSearch-icon'/>
        <input type="text" placeholder='Buscar articulos' />
    </div>
  )
}
