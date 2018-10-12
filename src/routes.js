import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import AddQuestion from './components/AddQuestion';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={AddQuestion} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
