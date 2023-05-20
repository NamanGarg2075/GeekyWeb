import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../../static/img/features/easy-to-use-1.svg').default,
    description: (
      <>
        GeekyWeb was designed from the ground up to be easy to use and learn different programming languages.
      </>
    ),
  },
  {
    title: 'Organized Content',
    Svg: require('../../../static/img/features/well-organised-2.svg').default,
    description: (
      <>
        You will well organize content on GeekyWeb so that you can learn anything from GeekyWeb in a very systematic way.
      </>
    ),
  },
  {
    title: 'Instant Search',
    Svg: require('../../../static/img/features/instant-search-3.svg').default,
    description: (
      <>
        You can search anything; it will show you the most appropriate results within a couple of seconds; you don't even have to wait.
      </>
    ),
  },
  {
    title: 'Project Making',
    Svg: require('../../../static/img/features/projects-making-4.svg').default,
    description: (
      <>
        You are able to create different projects on your own and, with the help of our guidance, start any course and start learning.
      </>
    ),
  },
  {
    title: 'Various Languages',
    Svg: require('../../../static/img/features/different-different-languages-5.svg').default,
    description: (
      <>
        Our docs are available in different languages, which allow you to learn in any language; in the future, we will try to add more languages.
      </>
    ),
  },
  {
    title: 'Contact Us',
    Svg: require('../../../static/img/features/contact-us-6.svg').default,
    description: (
      <>
        You can also contact us if you are facing any errors regarding practicing and regarding the docs; by contacting us, you are able to solve errors.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
