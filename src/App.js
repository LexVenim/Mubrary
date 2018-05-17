import React, { Component } from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Wrapper from "./components/layout/Wrapper";
import AppHeader from "./components/layout/AppHeader/AppHeader";
import AppRoutes from "./routes";

class App extends Component {
  static propTypes = {
    store: PropTypes.shape({
      logged: PropTypes.bool
    })
  }

  constructor(props){
    super(props);
    
    this.style = {
      ws: {
        height: "100vh"
      },
      bs: {
        "background-image": "url(images/background-1.jpg)",
        "background-size": "cover",
        opacity: 0.5
      }
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <Wrapper className="app" ws={this.style.ws} bs={this.style.bs}>
          <AppHeader logged={this.props.store.logged} />
          <AppRoutes />
        </Wrapper>  
      </MuiThemeProvider>
    );
  }
}

export default App;