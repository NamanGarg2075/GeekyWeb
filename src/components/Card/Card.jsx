import React from 'react';
import Link from '@docusaurus/Link';

import './Card.css';

const Card = ({ data }) => {
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
                        {/* <p>course paragraph here</p> */}
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
