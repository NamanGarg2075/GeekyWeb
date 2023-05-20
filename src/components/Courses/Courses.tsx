import React from 'react';
import Card from '../Card/Card';

import styled from './Courses.module.css';
import cardsData from '../../../docs/cards-data/cards-data';

const Courses = (): JSX.Element => {
    return (
        <div className={styled.cards}>
            {cardsData.map((card) => (
                <Card key={card.id} data={card} />
            ))}
        </div>
    )
}

export default Courses;