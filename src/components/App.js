import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import IndexPage from './IndexPage';
import Car from './Car';
import NotFound from './NotFound';

import Nav from '../blocks/Nav';
import Footer from '../blocks/Footer';

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
                  <Nav.Logo src={`${process.env.PUBLIC_URL}/logo.png`} />
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
                  <Route exact path="/" component={IndexPage} />
                  <Route path="/:carId" component={Car} />
                  <Route component={NotFound} />
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
