/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";

import posed, { PoseGroup } from "react-pose";
import Lottie from "react-lottie";

import { IntroVideoWrapper, VideoWrapper } from "./element";

class IntroVideo extends React.Component {
  state = {
    showComponent: true,
    showVideo: false
  };

  defaultOptions = {
    loop: true,
    autoplay: true,
    path: "./assets/anim/logo.json",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  render() {
    const { showVideo, showComponent } = this.state;
    return (
      <>
        <PoseGroup id="IntroVideo">
          {showComponent && (
            <AnimatedIntroVideoWrapper
              key="intro-video"
              className="intro--wrapper"
            >
              <div className="intro--startscreen">
                <video
                  src="./assets/videos/transition/transition2.mp4"
                  type="video/mp4"
                  autoPlay
                  playsInline
                  muted
                  loop
                  onEnded={() =>
                    this.setState({
                      showVideo: false
                    })
                  }
                />
                <div>
                  <Lottie
                    options={this.defaultOptions}
                    height="auto"
                    width="auto"
                    alt="logo flirt factory"
                  />
                  <button
                    id="start"
                    type="button"
                    onClick={() =>
                      this.setState({
                        showVideo: true
                      })
                    }
                  >
                    Commencer l'expérience
                  </button>
                </div>
              </div>
              <PoseGroup id="IntroVideo">
                {showVideo && (
                  <AnimatedVideoWrapper
                    key="intro-video-wrapper"
                    className="intro--video"
                  >
                    <video
                      src="./assets/videos/Intro.mp4"
                      type="video/mp4"
                      autoPlay
                      playsInline
                      onEnded={() =>
                        this.setState({
                          showComponent: false
                        })
                      }
                    />
                    <button
                      id="skip"
                      type="button"
                      onClick={() =>
                        this.setState({
                          showComponent: false
                        })
                      }
                    >
                      Passer l'introduction
                    </button>
                  </AnimatedVideoWrapper>
                )}
              </PoseGroup>
            </AnimatedIntroVideoWrapper>
          )}
        </PoseGroup>
      </>
    );
  }
}

const AnimatedVideoWrapper = posed(VideoWrapper)({
  enter: {
    left: 0,
    transition: {
      duration: 600,
      ease: "easeIn"
    }
  }
  // exit: {
  //   left: "100vw",
  //   transition: {
  //     duration: 600,
  //     ease: "easeOut"
  //   }
  // }
});

const AnimatedIntroVideoWrapper = posed(IntroVideoWrapper)({
  enter: {
    opacity: 1,
    transition: {
      duration: 1500,
      ease: "easeIn"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1500,
      ease: "easeOut"
    }
  }
});

export default IntroVideo;
