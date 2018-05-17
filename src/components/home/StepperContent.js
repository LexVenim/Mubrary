import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import {indigo400} from "material-ui/styles/colors";

import Grid from "../layout/Grid";
import Wrapper from "../layout/Wrapper";

const text = [
  "Mubrary allows you to link various platforms, like Google Play, Last.fm, SoundCloud and many others, to keep in one place all the data about artists and albums you own or want to buy. Follow simple integration steps and enjoy having one library instead of many.",
  "Having one library isn't enough! Mubrary clears the mess and makes it clear what you own, what you have on wishlist and what you don't want to see in your library anymore. Order is everything when you are managing a great music library.",
  "Not only you will have a single and organized library, Mubrary will constantly check out new releases and keep you posted on new albums of your favourite artists. Studio albums, EPs, singles, compilations - it's up to you when you should be notified."
];

const title = [
  "Be connected!",
  "Stay organized!",
  "Keep it up-to-date!"
];

class StepperContent extends Component {
  static propTypes = {
    step: PropTypes.number
  }

  render() {
    this.step = this.props.step;

    return (
      <Grid className="home" style={{
        height: "85%",
        "grid-template-columns": "2fr 3fr",
        "grid-gap": "10px"
      }}>
        <div>
          <img className="home-img" src={"images/home-"+this.step+".jpg"} alt="" />
        </div>
        <div className="home-text" style={{color: indigo400}}>
          <h2>{title[this.step]}</h2>
          {text[this.step]}
        </div>

        <style jsx global>{`
          img.home-img {
            height: 80%;
            width: 80%;
            margin: 10%;
          }

          .home-text {
            font-family: Gagalin;
            font-size: 20px;
            padding: 10px;
          }

          .home-text h2 {
            text-align: center;
            font-size: 32px;
          }
        `}</style>
      </Grid>
    );
  }
}

export default StepperContent;