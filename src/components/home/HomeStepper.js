import React from "react";
import {
  Step,
  Stepper,
  StepLabel,
} from "material-ui/Stepper";
import AddIcon from "material-ui/svg-icons/av/add-to-queue";
import OrganizeIcon from "material-ui/svg-icons/av/recent-actors";
import FollowIcon from "material-ui/svg-icons/av/hearing";
import {indigo400} from "material-ui/styles/colors";

import StepperContent from "./StepperContent";

class HomeStepper extends React.Component {
  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  
  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return "Select campaign settings...";
      case 1:
        return "What is an ad group anyways?";
      case 2:
        return "This is the bit I really care about!";
      default:
        return "You\"re a long way from home sonny jim!";
    }
  }

  render() {
    const {stepIndex} = this.state;

    return (
      <div style={{height: "100%"}}>
        <StepperContent step={this.state.stepIndex}/>
        <div className="center-flex">
          <Stepper linear={false} activeStep={stepIndex} style={{width: "60%"}}>
            <Step>
              <StepLabel icon={<AddIcon color={indigo400} />} style={{color: indigo400, "font-family": "Gagalin", "font-size": "30px"}} onClick={() => this.setState({stepIndex: 0})}>
                ADD
              </StepLabel>
            </Step>
            <Step>
              <StepLabel icon={<OrganizeIcon color={indigo400} />} style={{color: indigo400, "font-family": "Gagalin", "font-size": "30px"}} onClick={() => this.setState({stepIndex: 1})}>
                ORGANIZE
              </StepLabel>
            </Step>
            <Step>
              <StepLabel icon={<FollowIcon color={indigo400} />} style={{color: indigo400, "font-family": "Gagalin", "font-size": "30px"}} onClick={() => this.setState({stepIndex: 2})}>
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