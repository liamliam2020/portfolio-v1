import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';

const App = (props) => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
