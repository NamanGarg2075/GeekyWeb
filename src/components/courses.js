import React from 'react';
// import Layout from '@theme/Layout';
// import styles from '../pages/introduction.css'
import './courses.module.css' // if needed then

import Link from '@docusaurus/Link';

function courses() {
  return (
    <>
      <div>
<div className="card-container container">
        <div className="card">
          <div className="card__header">
            <img src="/img/courses/html-language.png" alt="card__image" className="card__image" width={600} />
          </div>
          <div className="card__body">
            <span className="tag tag-blue">Web Development</span>
            <h4>HTML - Hypertext Markup Language</h4>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p> */}
          </div>
          <div className="card__footer">
            <Link
            className="card__btn button button--primary"
            to="/docs/html">
            Start Course →
          </Link>
            {/* <button className='card__btn'><a href='docs/html'>Start Course →</a></button> */}
          </div>
        </div>

        {/* <div className="card">
          <div className="card__header">
            <img src="https://source.unsplash.com/600x400/?food" alt="card__image" className="card__image" width={600} />
          </div>
          <div className="card__body">
            <span className="tag tag-brown">Food</span>
            <h4>Delicious Food</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
          </div>
          <div className="card__footer">
            <button className='card__btn'>Start Course →</button>
          </div>
        </div> */}
        
        {/* <div className="card">
          <div className="card__header">
            <img src="https://source.unsplash.com/600x400/?car,automobile" alt="card__image" className="card__image" width={600} />
          </div>
          <div className="card__body">
            <span className="tag tag-red">Automobile</span>
            <h4>Race to your heart content</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
          </div>
          <div className="card__footer">
            <button className='card__btn'>Start Course →</button>
          </div>
        </div> */}
      
      </div>
      </div>
    </>
  );
}

export default courses;