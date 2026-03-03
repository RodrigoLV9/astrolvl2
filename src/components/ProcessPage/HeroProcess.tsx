import React,{useState} from 'react'
import '../../styles/Process/heroProcess.css'

interface ProcessCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const HeroProcess:React.FC = () => {
    const [activeCard,setActiveCard] = useState<number>(1)
    
    const cards: ProcessCard[] = [
      {
        id: 1,
        title: "Descubrimiento y consulta",
        description: "Análisis y definición de objetivos",
        image: "/src/assets/images/intro.webp"
      },
      {
        id: 2,
        title: "Diseño y estrategia",
        description: "Creación de propuesta visual y técnica",
        image: "/src/assets/images/intro.webp"
      },
      {
        id: 3,
        title: "Desarrollo e implementación",
        description: "Construcción y optimización del proyecto",
        image: "/src/assets/images/intro.webp"
      },
      {
        id: 4,
        title: "Lanzamiento y soporte",
        description: "Entrega, capacitación y mantenimiento",
        image: "/src/assets/images/intro.webp"
      }
    ]

  return (
    <section className="heroProcess">
        <div className="heroProcess__text">
            <h1>Nuestro Proceso de Trabajo</h1>
            <p>Metodología clara y transparente para resultados excepcionales</p>
        </div>
        <div className="heroProcess__cards">
            {cards.map((card) => (
              <div 
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                className={activeCard === card.id ? "cardProcess__main" : "cardProcess__secondary"}
              >
                <img src={card.image} alt={card.title}/>
                <div className={activeCard === card.id ? "cardProcess-info" : "cardProcess-info2"}>
                    <span className="cardProcess-info__circle">{card.id}</span>
                    {activeCard === card.id && (
                      <div className="cardProcess-info__text">
                        <h4>{card.title}</h4>
                        <p>{card.description}</p>
                      </div>
                    )}
                </div>
              </div>
            ))}
        </div>
    </section>
  )
}
