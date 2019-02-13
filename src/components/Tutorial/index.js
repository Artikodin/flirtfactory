import React from "react";

import posed, { PoseGroup } from "react-pose";
import PropTypes from "prop-types";

import { TutorialWrapper } from "./element";

import Lottie from "react-lottie";

class Tutorial extends React.Component {
  static propTypes = {
    showed: PropTypes.bool,
    hide: PropTypes.bool,
    removeTutorial: PropTypes.func
  };

  static defaultProps = {
    showed: true,
    hide: true,
    removeTutorial: () => {}
  };

  render() {
    const { showed, hide, removeTutorial } = this.props;
    console.log(hide);

    const defaultOptions = {
      loop: true,
      autoplay: true,
      path: "./assets/anim/tutorial.json",
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (
      <>
        <PoseGroup id="Tutorial">
          {showed && hide && (
            <AnimatedTutorialWrapper
              key="tutorial"
              onClick={() => removeTutorial()}
            >
              <Lottie options={defaultOptions} height="auto" width="100%" />
            </AnimatedTutorialWrapper>
          )}
        </PoseGroup>
      </>
    );
  }
}

const AnimatedTutorialWrapper = posed(TutorialWrapper)({
  enter: {
    opacity: 1,
    transition: {
      duration: 1500,
      ease: "easeIn",
      delay: 2000
    }
  },
  exit: {
    x: 0,
    opacity: 0,
    transition: {
      duration: 1500,
      ease: "easeOut"
    }
  }
});

export default Tutorial;
