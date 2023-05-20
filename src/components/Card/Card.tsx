import React from 'react';
import Link from '@docusaurus/Link';

import './Card.css';

interface CardData {
    imgSrc: string;
    title: string;
    category: string;
    path: string;
}

interface CardProps {
    data: CardData;
}

const Card = ({ data }: CardProps): JSX.Element => {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card__header">
                        <img src={data.imgSrc} alt={data.title} className="card__image" width={600} />
                    </div>
                    <div className="card__body">
                        <span className="tag tag-blue">{data.category}</span>
                        <h4>{data.title}</h4>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p> */}
                    </div>
                    <div className="card__footer">
                        <Link
                            className="card__btn button button--primary"
                            to={`/docs/${data.path}`}>
                            Start Course →
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card;