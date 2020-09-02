import React from 'react';
import styles from './MainItem.module.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const MainItem = (props) => (
  <div className={styles.MainItem}>
    <a href={props.route}>
      <ul>
        <li>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <p>{props.tech}</p>
        </li>
        <li>
          <ArrowForwardIcon fontSize="large" />
        </li>
      </ul>
    </a>
  </div>
);

export default MainItem;
