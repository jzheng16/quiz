import React from 'react';
import { graphql } from 'react-apollo';
import { getQuestionsQuery } from '../../queries/questions';

import './App.css';
import Routes from '../../routes';

const app = () => (
  <div className="App">
    <Routes />
  </div>
);


export default graphql(getQuestionsQuery)(app);
