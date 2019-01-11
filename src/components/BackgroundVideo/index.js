/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

import { BackgroundVideoWrapper } from "./element";

class BackgroundVideo extends React.Component {
  arrayVideos = []
  videotest

  static  propTypes = {
    path: PropTypes.string,
    number: PropTypes.number,
    loop: PropTypes.bool,
  };
  
  static defaultProps = {
    path: "",
    number: 0,
    loop: true
  };

  componentDidMount() {
    for (let i = 0; i < 5; i++) {
      
    }
    this.videotest = document.createElement('video');
    this.videotest.src = './assets/videos/antiquite/antiquite5.mp4';
    this.videotest.autoplay = true;
    this.videotest.loop = true;
    this.videotest.muted = true;
    this.videotest.load();
    document.getElementById('video').appendChild(this.videotest);
  }
  
  render() {
    const { path, number, loop } = this.props;
    return (
      <BackgroundVideoWrapper>
        <div id="video"></div>
        {/* <video
          src={`./assets/videos/${path}/${path}${number}.mp4`}
          type="video/mp4"
          autoPlay
          loop={loop}
          muted
        /> */}
      </BackgroundVideoWrapper>
    );
  }
}

export default BackgroundVideo;