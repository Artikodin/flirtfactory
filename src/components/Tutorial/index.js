import React from "react";

import posed, { PoseGroup } from "react-pose";
import PropTypes from "prop-types";

import { TutorialWrapper } from "./element";

import Lottie from "react-lottie";
import * as Tuto from "../../assets/lottie/tutorial.json";

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

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Tuto.default,
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
              <Lottie options={defaultOptions} height="auto" width="auto" />
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
