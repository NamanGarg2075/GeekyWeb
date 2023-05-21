import React from 'react';
import Card from '../Card/Card';
import sytles from './Courses.module.css';
import cardsData from '../../../docs/cards-data/cards-data';

const Courses = () => {
    return (
        <div className={sytles.cards}>
            {cardsData.map((card) => (
                <Card key={card.id} data={card} />
            ))}
        </div>
    )
}

export default Courses;