import React,{useState} from 'react'
import { IoIosArrowUp as IconArrowUp } from "react-icons/io";
import '../../../styles/Home/Faq1Card.css'
export const Faq1Card:React.FC = () => {
  const [isOpen, setIsOpen]=useState<boolean>(false)
  const handleSwitch=()=>{
    setIsOpen(!isOpen)
    console.log('swith')
  }
  return (
    <div className={`faq1Card ${isOpen ? '' : 'faq1Card-open'}`}  onClick={handleSwitch}>
        <div className="faq1Card__visible" >
            <p>¿Cuánto tarda en estar lista una página web?</p>
            <IconArrowUp className={`faq1Card__visible-icon ${isOpen ? '' : 'faq1Card__visible-icon--open'}`}/>
        </div>
        <div className="faq1Card__text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus minus blanditiis tempora autem dolorem! Deleniti nesciunt et nihil ratione voluptas iste reprehenderit deserunt nulla. Quisquam ipsum maxime praesentium distinctio pariatur!</p>
        </div>
    </div>
  )
}
