import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Wrapper from "../layout/Wrapper";
import HomeStepper from "./HomeStepper";

class Home extends Component {
  constructor(props){
    super(props);
    
    this.style = {
      ws: {
        height: "calc(92vh - 64px)",
        margin: "4vh 3vw"
      },
      bs: {
        "background-color": "ghostwhite",
        "border-radius": "15px",
        opacity: 0.5
      },
      cs: {
        "border-radius": "15px"
      }
    };
  }

  render() {
    return (
      <Wrapper className="home" ws={this.style.ws} bs={this.style.bs} cs={this.style.cs}>
        <HomeStepper />
      </Wrapper> 
    );
  }
}

export default Home;