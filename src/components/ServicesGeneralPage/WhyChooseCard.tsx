import React from 'react';
import '../../styles/ServicesGeneralPage/WhyChooseCard.css';

interface WhyChooseCardProps {
    icon: string;
    title: string;
    description: string;
}

export const WhyChooseCard: React.FC<WhyChooseCardProps> = ({ icon, title, description }) => {
    return (
        <div className="whyCard">
            <div className="whyCard__icon">{icon}</div>
            <h3 className="whyCard__title">{title}</h3>
            <p className="whyCard__description">{description}</p>
        </div>
    );
};
