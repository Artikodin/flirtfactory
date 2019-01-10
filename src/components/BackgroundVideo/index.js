/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

import { BackgroundVideoWrapper } from "./element";

const BackgroundVideo = ({ path }) => (
  <BackgroundVideoWrapper>
    {path}
    <video
      src={`./assets/videos/${path}/${path}1.mp4`}
      type="video/mp4"
      autoPlay
      loop
      muted
    />
  </BackgroundVideoWrapper>
);

BackgroundVideo.propTypes = {
  path: PropTypes.string
};

BackgroundVideo.defaultProps = {
  children: ""
};

export default BackgroundVideo;
