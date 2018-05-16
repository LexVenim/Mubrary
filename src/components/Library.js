import React, { Component } from "react";

class Greeting extends Component {
  static defaultProps = {
    name: "stranger"
  }

  render() {
    return (
      <div>Hello in library, {this.props.name}</div>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

class Library extends Component {
  render() {
    return (
      <Greeting />
    );
  }
}

export default Library;