import React, { Component } from "react";
import PropTypes from "prop-types";

class Grid extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired
  }

  constructor(props){
    super(props);

    this.className = this.props.className || "";
    this.style = this.props.style || {};
  }

  render() {
    return (
      <div className={this.className + "-grid"} style={this.style}>
        {this.props.children}

        <style jsx global>{`
          div[class*="-grid"] {
            display: grid;
          }
        `}</style>
      </div>
    );
  }
}

export default Grid;