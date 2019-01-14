import React from "react";
import PropTypes from "prop-types";

/* eslint-disable */

class Video extends React.Component {
  static propTypes = {
    path: PropTypes.string
  };

  static defaultProps = {
    path: ""
  };

  render() {
    const { path } = this.props;
    return (
      <video
        src={`./assets/videos/${path}/${path}5.mp4`}
        type="video/mp4"
        autoPlay
        playsInline
        loop
        muted
      />
    );
  }
}
export default Video;
