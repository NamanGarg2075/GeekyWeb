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
              <img src="/img/courses/html-language.png" alt="HTML - Hypertext markup language" className="card__image" width={600} />
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
            </div>
          </div>

          <div className="card">
            <div className="card__header">
              <img src="/img/courses/python-language.png" alt="Python - full course" className="card__image" width={600} />
            </div>
            <div className="card__body">
              <span className="tag tag-blue">AI/ML</span>
              <h4>PYTHON - Basic to Advanced</h4>
            </div>
            <div className="card__footer">
              <Link
                className="card__btn button button--primary"
                to="/docs/python">
                Start Course →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default courses;