import React, { Component } from "react";
import PropTypes from "prop-types";


class Greeting extends Component {
  static defaultProps = {
    name: "stranger"
  }

  render() {
    return (
      <div>Hello, {this.props.name}</div>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

class Auth extends Component {
  render() {
    return (
      <Greeting />
    );
  }
}

export default Auth;