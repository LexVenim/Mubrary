import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Wrapper extends Component {
  static propTypes = {
    className: PropTypes.string,
    bs: PropTypes.object,
    cs: PropTypes.object,
    ws: PropTypes.object,
    children: PropTypes.node.isRequired
  }

  constructor(props){
    super(props);

    this.className = this.props.className || "";
    this.style = {
      background: this.props.bs || {},
      content: this.props.cs || {},
      wrapper: this.props.ws || {}
    }
  }

  render() {
    return (
      <div className={this.className + "-wrapper"} style={this.style.wrapper}>
        <div className={this.className + "-background"} style={this.style.background}/>
        <div className={this.className + "-content"} style={this.style.content}>
          {this.props.children}
        </div>

        <style jsx global>{`
          div[class*="-wrapper"] {
            position: relative;
          }

          div[class*="-wrapper"] > div {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}

export default Wrapper;
