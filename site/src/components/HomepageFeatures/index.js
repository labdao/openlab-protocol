import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'An open protocol for decentralized science',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        OpenLab protocol allows anyone to use or provide scientific services,
        anywhere in the world.
      </>
    ),
  },
  {
    title: 'Collaborate with a global network',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        An API specification and message schemas allow interoperability between
        servers and clients.
      </>
    ),
  },
  {
    title: 'Deploy your own workflow in one command',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>The OpenLab CLI allows you to manage files, apps and jobs.</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
