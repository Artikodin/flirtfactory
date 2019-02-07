import React from "react";

import PropTypes from "prop-types";

import { TutorialWrapper } from "./element";

class Tutorial extends React.Component {
  static propTypes = {
    showed: PropTypes.bool
  };

  static defaultProps = {
    showed: false
  };

  render() {
    return (
      <>
        <TutorialWrapper>
          <video
            src="./assets/videos/tuto.mp4"
            type="video/mp4"
            autoPlay
            playsInline
            loop
            muted
            onCanPlay={this.loadVideo}
          />
        </TutorialWrapper>
      </>
    );
  }
}

export default Tutorial;
