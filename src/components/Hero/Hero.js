import React from 'react';
import styles from './Hero.module.css';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Hero = (props) => (
  <div className={styles.Hero}>
    <h2>
      Hi! I'm Liam a software engineer looking for new work. Check out some of
      what I've done below.
    </h2>
    <div className={styles.icon}>
      <a href="/#projects">
        <ArrowDownIcon style={{fontSize: 60}} />
      </a>
    </div>
  </div>
);

export default Hero;
