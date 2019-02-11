import React from "react";
import { Wrapper } from "./element";

import posed from "react-pose";

class Transition extends React.Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    return (
      <Wrapper key="transition" ref={this.transition}>
        <video
          src="./assets/videos/transition/transition1.mp4"
          type="video/mp4"
          autoPlay
          loop
          playsInline
          muted
          onCanPlay={this.loadVideo}
        />
      </Wrapper>
    );
  }
}

// const WrapperAnimated = posed(Wrapper)({
//   enter: {
//     height: "100vh"
//   },
//   exit: {
//     height: 0
//   }
// });
export default Transition;
