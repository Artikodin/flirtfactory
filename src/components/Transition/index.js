import React from "react";
import { TransitionWrapper } from "./element";

class Transition extends React.Component {
  render() {
    return (
      <TransitionWrapper id="transition">
        <video
          src={`./assets/videos/transition/transition1.mp4`}
          type="video/mp4"
          autoPlay
          loop
          playsInline
          muted
          onCanPlay={this.loadVideo}
        />
      </TransitionWrapper>
    );
  }
}
export default Transition;
