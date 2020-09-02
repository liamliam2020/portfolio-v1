import React from 'react';
import {Route} from 'react-router-dom';
import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Navigation/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Main from '../../components/Main/Main';
import SortingAlg from '../../projects/sortingVisualizer/src/SortingVisualizer/SortingVisualizer';

const Layout = (props) => {
  return (
    <div className={styles.Layout}>
      <Route path="/" component={Toolbar} />
      <Route path="/" exact component={Hero} />
      <Route path="/" exact component={Main} />
      <Route path="/sorting-visualizer" exact component={SortingAlg} />
      <Route path="/" exact component={Footer} />
    </div>
  );
};

export default Layout;
