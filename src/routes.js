import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import TestComponent from './TestComponent';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={TestComponent} />
      </Switch>
    )
  }
}

export default withRouter(Routes);