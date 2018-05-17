import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wrapper from '../layout/Wrapper';

import { indigo400 } from 'material-ui/styles/colors';

import home0 from '../../public/images/home-0.jpg'
import home1 from '../../public/images/home-1.jpg';
import home2 from '../../public/images/home-2.jpg';

const homeImages = [home0, home1, home2];

const title = ["Be connected!", "Stay organized!", "Keep it up-to-date!"];

const text = [
  "Mubrary allows you to link carious platforms, like Google Play, SoundCloud, Last.fm and many others, to keep in one place all the data about artists and albums you own or want to buy. Follow simple integration steps and enjoy having one library instead of many.",
  "Having one library isn't enough! Mubrary clears the mess and makes it obvious what you own, what you have on your wishlist and what you don't want to see in your library anymore. Order is everything when you are managing a great library.",
  "Not only you will have a single and organized library, Mubrary will constantly check out new releases and keep you posted on new albums of your favourite artists. Studio albums, EP, singles, compilations - it's up to you when you should be notified."
]

class HomeStepperContent extends Component {
  static propTypes = {
    step: PropTypes.number
  }

  render() {
    this.step = this.props.step;

    return (
      <div className="home">
        <div>
          <img className="home-img" src={homeImages[this.step]} />
        </div>
        <div className="home-text" style={{color: indigo400}}>
          <h2>{title[this.step]}</h2>
          {text[this.step]}
        </div>

        <style jsx global>{`
          .home {
            height: 85%;
            display: grid;
            grid-template-columns: 2fr 3fr;
            grid-gap: 10px;
          }

          img.home-img {
            height: 80%;
            width: 80%;
            margin: 10%;
          }

          .home-text {
            padding: 10px;
            font-family: Gagalin;
            font-size: 20px;
          }

          .home-text h2 {
            text-align: center;
            font-size: 32px;
          }
        `}</style>
      </div>
    );
  }
}

export default HomeStepperContent;
