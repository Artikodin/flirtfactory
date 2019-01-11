/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

import { BackgroundVideoWrapper } from "./element";

class BackgroundVideo extends React.Component {
  static  propTypes = {
    path: PropTypes.string,
    number: PropTypes.number,
    loop: PropTypes.bool
  };
  
  static defaultProps = {
    path: "",
    number: 0,
    loop: true
  };

  componentDidMount() {
    console.log("mount")
  }
  
  render() {
    const { path, number, loop } = this.props;
    return (
      <BackgroundVideoWrapper>
        <video
          src={`./assets/videos/${path}/${path}${number}.mp4`}
          type="video/mp4"
          autoPlay
          loop={loop}
          muted
        />
      </BackgroundVideoWrapper>
    );
  }
}

export default BackgroundVideo;