import React from "react";

// import posed, { PoseGroup } from "react-pose";
// import PropTypes from "prop-types";

import { IntroVideoWrapper } from "./element";

class IntroVideo extends React.Component {
  state = {
    showed: false
  };

  render() {
    const { showed } = this.state;
    return (
      <>
        <IntroVideoWrapper>
          <video
            src="./assets/videos/transition/transition2.mp4"
            type="video/mp4"
            autoPlay
            playsInline
            muted
            onEnded={() =>
              this.setState({
                showed: false
              })
            }
          />
          <button
            type="button"
            onEnded={() =>
              this.setState({
                showed: true
              })
            }
          >
            Commencer l'expérience
          </button>
          {showed && (
            <video
              src="./assets/videos/Intro.mp4"
              type="video/mp4"
              autoPlay
              playsInline
              muted
              onEnded={() =>
                this.setState({
                  showed: false
                })
              }
            />
          )}
        </IntroVideoWrapper>
      </>
    );
  }
}

// const AnimatedIntroVideoWrapper = posed(IntroVideoWrapper)({
//   enter: {
//     opacity: 1,
//     transition: {
//       duration: 1500,
//       ease: "easeIn",
//       delay: 2000
//     }
//   },
//   exit: {
//     x: 0,
//     opacity: 0,
//     transition: {
//       duration: 1500,
//       ease: "easeOut"
//     }
//   }
// });

export default IntroVideo;
