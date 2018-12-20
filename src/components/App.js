import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Cars from './Cars';
import Car from './Car';
import NotFound from './NotFound';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.font.family};
  }
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <GlobalStyle />
              <Route exact path="/" component={Cars} />
              <Route path="/:carId" component={Car} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
