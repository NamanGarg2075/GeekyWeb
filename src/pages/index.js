import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
// import "@fontsource/josefin-sans";
// import "@fontsource/fredoka-one";
// import "@fontsource/patrick-hand";
import "@fontsource/cascadia-code";
import "@fontsource/balsamiq-sans";


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/courses">
            Start Learning
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Features() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="GeekyWeb helps you in learning different programming languages, and in much more"
      image='img/introduction-to-html.png'>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
