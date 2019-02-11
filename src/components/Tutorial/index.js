import React from "react";

import posed, { PoseGroup } from "react-pose";

import { TutorialWrapper } from "./element";

import Lottie from "react-lottie";

class Tutorial extends React.Component {
  state = {
    hide: true
  };

  // static propTypes = {
  //   showed: PropTypes.bool
  // };

  // static defaultProps = {
  //   showed: true
  // };

  render() {
    const { hide } = this.state;
    // const { showed } = this.props;

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
          {hide && (
            <AnimatedTutorialWrapper
              key="tutorial"
              onClick={() => {
                this.setState({
                  hide: false
                });
              }}
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
      ease: "easeIn"
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
