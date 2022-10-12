import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'REST API',
    Svg: require('../../static/img/undraw_version_control_re_mg66.svg').default,
    description: (
      <>
        <p>
          Integrate or build your own application directly on our REST API. Integrating with our API gives more flexibility and control, but comes at the cost of being more complex to set up.
        </p>
        <p>
          For more information about our API, see the <a href="/docs/Introduction">API Overview</a>.
        </p>
      </>      
    ),
  },
  {
    title: 'Custom Configurator',
    Svg: require('../../static/img/undraw_building_websites_i78t.svg').default,
    description: (
      <>
        <p>
          There are several ways to embed the customer-facing configurator onto your existing website.
        </p>
        <p>
          You will also be able to create a new interface from scratch using our <a href="apis/configurator">configuration endpoints.</a> Or check out our <a href="/blog/tutorial%20-%20custom%20configurator">tutorial on Custom Configurators.</a>
        </p>
      </>
    ),
  },
  {
    title: 'Guides',
    Svg: require('../../static/img/undraw_books_re_8gea.svg').default,
    description: (
      <>
        <p>Some integrations can be more complex than others.</p>
        <p>
          Leverage <a href="/docs/guides/embed-showroom">our guides</a> to make building complex integrations easier.
        </p>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
