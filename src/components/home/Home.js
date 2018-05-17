import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wrapper from '../layout/Wrapper';

import HomeStepper from './HomeStepper';

import { grey300 } from 'material-ui/styles/colors';

class Home extends Component {
  constructor(props){
    super(props);

    this.style = {
      bs: {
        "background-color": grey300,
        "border-radius": "15px",
        opacity: 0.5
      },
      cs: {
        "border-radius": "15px"
      },
      ws: {
        height: "calc(92vh - 64px)",
        margin: "4vh 3vw"
      }
    }
  }

  render() {
    return (
      <Wrapper className="home" bs={this.style.bs} cs={this.style.cs} ws={this.style.ws}>
        <HomeStepper />
      </Wrapper>
    );
  }
}

export default Home;
