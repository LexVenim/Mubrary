import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Stepper, Step, StepLabel } from 'material-ui/Stepper';
import AddIcon from 'material-ui/svg-icons/av/add-to-queue';
import OrganizeIcon from 'material-ui/svg-icons/av/recent-actors';
import FollowIcon from 'material-ui/svg-icons/av/hearing';

import HomeStepperContent from './HomeStepperContent';

import { indigo400 } from 'material-ui/styles/colors';

class HomeStepper extends Component {
  state = {
    stepIndex: 0
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    if(stepIndex < 2) {
      this.setState({stepIndex: stepIndex+1});
    }
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if(stepIndex > 0) {
      this.setState({stepIndex: stepIndex-1});
    }
  }

  render() {
    const {stepIndex} = this.state;

    return (
      <div style={{height: "100%"}}>
        <HomeStepperContent step={stepIndex}/>
        <div className="center-flex">
          <Stepper linear={false} activeStep={stepIndex} style={{width:"60%"}}>
            <Step>
              <StepLabel 
                icon={<AddIcon color={indigo400}/>}
                style={{
                  color: indigo400,
                  "font-family": "Gagalin",
                  "font-size": "30px"
                }}
                onClick={() => this.setState({stepIndex: 0})}
              >
                ADD
              </StepLabel>
            </Step>
            <Step>
              <StepLabel 
                icon={<AddIcon color={indigo400}/>}
                style={{
                  color: indigo400,
                  "font-family": "Gagalin",
                  "font-size": "30px"
                }}
                onClick={() => this.setState({stepIndex: 1})}
              >
                ORGANIZE
              </StepLabel>
            </Step>
            <Step>
              <StepLabel 
                icon={<AddIcon color={indigo400}/>}
                style={{
                  color: indigo400,
                  "font-family": "Gagalin",
                  "font-size": "30px"
                }}
                onClick={() => this.setState({stepIndex: 2})}
              >
                FOLLOW
              </StepLabel>
            </Step>
          </Stepper>
        </div>
      </div>
    );
  }
}

export default HomeStepper;
