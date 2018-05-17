import React, { Component } from "react";
import PropTypes from "prop-types";

import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import LibraryMusic from "material-ui/svg-icons/av/library-music";
import {indigo600} from "material-ui/styles/colors";

import Logged from "./Logged";
import Login from "./Login";

class AppHeader extends Component {
  static propTypes = {
    logged: PropTypes.bool
  }

  render() {
    return (
      <AppBar
        className="app-header"
        title="Mubrary"
        iconElementLeft={<IconButton><LibraryMusic /></IconButton>}
        iconElementRight={this.props.logged ? <Logged /> : <Login />}
        style={{
          "font-family": "Gagalin",
          "background-color": indigo600,
          opacity: 0.5
        }}
      />
    );
  }
}

export default AppHeader;