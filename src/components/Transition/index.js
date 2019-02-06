import React from "react";
/* eslint-disable */

class Transition extends React.Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    return (
      <div>
        <video
          src={`./assets/videos/transition/transition1.mp4`}
          type="video/mp4"
          autoPlay
          playsInline
          muted
          onCanPlay={this.loadVideo}
        />
      </div>
    );
  }
}
export default Video;
