import React from "react";
import { Wrapper } from "./element";

import posed from "react-pose";

class Loader extends React.Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    return (
      <WrapperAnimated key="transition" ref={this.transition}>
        <video
          src="./assets/videos/transition/transition1.mp4"
          type="video/mp4"
          autoPlay
          loop
          playsInline
          muted
          onCanPlay={this.loadVideo}
        />
      </WrapperAnimated>
    );
  }
}

const WrapperAnimated = posed(Wrapper)({
  enter: {
    x: 0
  },
  exit: {
    x: 100
  }
});
export default Loader;
