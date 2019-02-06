import React from "react";
import { TransitionWrapper } from "./element";
import PropTypes from "prop-types";
import posed, { PoseGroup } from "react-pose";

class Transition extends React.Component {
  static propTypes = {
    visible: PropTypes.bool
  };

  static defaultProps = {
    visible: true
  };

  render() {
    const { visible } = this.props;
    return (
      <>
        <PoseGroup id="transition">
          {visible && (
            <TransitionWrapper key="transition" ref={this.transition}>
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
          )}
        </PoseGroup>
      </>
    );
  }
}

// const AnimatedTransitionWrapper = posed(TransitionWrapper)({
// enter: {
//   height: "100vh",
//   transition: {
//     duration: 500,
//     ease: "easeIn"
//   }
// }
// exit: {
//   height: 0,
//   bottom: "100vh",
//   transition: {
//     duration: 500,
//     ease: "easeOut"
//   }
// }
// });
export default Transition;
