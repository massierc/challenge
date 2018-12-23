import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import IndexView from './IndexView';
import ShowView from './ShowView';
import NotFoundView from './NotFoundView';
import Nav from '../blocks/Nav';
import Footer from '../blocks/Footer';
import A from '../elements/A';

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
          <Fragment>
            <GlobalStyle theme={theme} />
            <BrowserRouter>
              <div>
                <Nav>
                  <Nav.Logo as={A} to="/" />
                  <Nav.Link to="#" id={`nav-link-${0}`}>
                    Purchase
                  </Nav.Link>
                  <Nav.Link to="#" id={`nav-link-${1}`}>
                    My Orders
                  </Nav.Link>
                  <Nav.Link to="#" id={`nav-link-${2}`}>
                    Sell
                  </Nav.Link>
                </Nav>
                <Switch>
                  <Route exact path="/" component={IndexView} />
                  <Route path="/cars/:carId" component={ShowView} />
                  <Route component={NotFoundView} />
                </Switch>
                <Footer>
                  <Footer.Content>© AUTO1 Group 2018</Footer.Content>
                </Footer>
              </div>
            </BrowserRouter>
          </Fragment>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
