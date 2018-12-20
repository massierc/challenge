import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Cars from './Cars';
import Car from './Car';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Cars} />
            <Route path="/:carId" component={Car} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
