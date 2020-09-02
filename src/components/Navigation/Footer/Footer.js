import React from 'react';

import styles from './Footer.module.css';

const Footer = (props) => (
  <footer className={styles.Footer} id="info">
    <section className={styles.FootMain}>
      <h2>
        Reach me by email at{' '}
        <a href="mailto:bliamrethore@gmail.com">bliamrethore@gmail.com</a> or
        use one of the links below.
      </h2>
    </section>
    <section className={styles.FootSocial}>
      <ul>
        <li>
          <a
            href="https://github.com/liamliam2020/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/liamrethore/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
    <section className={styles.FootLegal}>
      <ul>
        <li>Last Updated: 08.24.2020</li>
        <li>
          <a href="\">Github Source Code</a>
        </li>
        <li>&copy;2020. All Rights Reserved.</li>
      </ul>
    </section>
  </footer>
);

export default Footer;
