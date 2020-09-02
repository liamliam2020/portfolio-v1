import React from 'react';
import styles from './Toolbar.module.css';
import resumePDF from '../../../assets/B Liam Rethore Resume.pdf';

const Toolbar = (props) => {
  return (
    <nav className={styles.Toolbar}>
      <a className={styles.NavLink} href="\">
        {window.location.href}
      </a>
      <ul className={styles.NavLink}>
        <li className={styles.NavItem}>
          <a href={resumePDF} download>
            Resume
          </a>
        </li>
        <li className={styles.NavItem}>
          <a href="/#info">Info</a>
        </li>
      </ul>
    </nav>
  );
};

export default Toolbar;
