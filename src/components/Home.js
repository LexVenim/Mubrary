import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

class Greeting extends Component {
  static defaultProps = {
    name: "stranger"
  }

  render() {
    return (
      <div>Hello, {this.props.name}. Go to <NavLink to="/library">Library</NavLink></div>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

class Home extends Component {
  render() {
    return (
      <Greeting />
    );
  }
}

export default Home;