import React from 'react';
import styles from './Main.module.css';
import Aux from '../../hoc/Auxillary/Auxillary';
import MainItem from './MainItem/MainItem';

const Main = (props) => (
  <Aux>
    <div id="projects" />
    <ul className={styles.Main}>
      <hr />
      <li>
        <MainItem
          title="Sorting Algorithm Visualizer"
          desc="Visual implementation of Merge Sort, Bubble Sort, Quick Sort, and Shell Sort."
          tech="JavaScript (ES6), React.js, CSS, Git"
          route="https://github.com/liamliam2020/sorting-visualizer"
        />
        <hr />
      </li>
      <li>
        <MainItem
          title="Memory Allocator"
          desc="An implementation of Malloc and Free using a worst fit scheme."
          tech="C, Make"
          route="https://github.com/liamliam2020/MemoryAllocator/blob/master/mymalloc.c"
        />
        <hr />
      </li>
      <li>
        <MainItem
          title="Binary Search Tree Optimizer"
          desc="A top-down dynamic programming algorithm to find optimal binary search trees."
          tech="Java"
          route="https://github.com/liamliam2020/BSTOptimizer"
        />
        <hr />
      </li>
      <li>
        <MainItem
          title="Portfolio Website"
          desc="A single page portfolio website which you are currently viewing."
          tech="React.js, CSS, Git"
          route="/"
        />
        <hr />
      </li>
    </ul>
  </Aux>
);

export default Main;

/* 
True Projects I want to Showcase:
<li>
  <MainItem
    title="Visual Maze Solver"
    desc="description"
    tech="tech stack"
    route="/"
  />
  <hr />
</li>
<li>
  <MainItem
    title="Show BackEnd Skills Here"
    desc="description"
    tech="tech stack"
    route="/"
  />
  <hr />
</li>
*/

/* 
1. because I cant use react router on this I will need to link to different github project pages that are build as react apps standalone
2. also noticed a spacing issue for mobile
*/
