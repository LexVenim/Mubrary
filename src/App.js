import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppRoutes from './routes';

import AppHeader from './components/layout/AppHeader/AppHeader';

import Wrapper from './components/layout/Wrapper';

import background from './public/images/background-1.jpg';

class App extends Component {
  static propTypes = {
    store: PropTypes.shape({
      logged: PropTypes.bool
    })
  }

  constructor(props){
    super(props);

    this.style = {
      bs: {
        "background-image": "url(" + background + ")",
        "background-size": "cover",
        opacity: 0.5
      },
      ws: {
        height: "100vh"
      }
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <Wrapper className="app" bs={this.style.bs} ws={this.style.ws}>
          <AppHeader logged={this.props.store.logged}/>
          <AppRoutes />
        </Wrapper>
      </MuiThemeProvider>
    );
  }
}

export default App;
