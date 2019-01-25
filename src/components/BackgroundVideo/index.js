import React from "react";
import PropTypes from "prop-types";
// import Parallax from "parallax-js";

import { BackgroundVideoWrapper } from "./element";
import { Video } from "../index";

class BackgroundVideo extends React.Component {
  static propTypes = {
    path: PropTypes.string,
    number: PropTypes.number,
    increaseVideo: PropTypes.func
  };

  static defaultProps = {
    path: "",
    number: 1,
    increaseVideo: () => {}
  };

  componentDidMount() {
    // this.parallax = new Parallax(this.scene);
  }

  componentWillUnmount() {
    // this.parallax.disable();
  }

  render() {
    const { path, number, increaseVideo } = this.props;
    return (
      <BackgroundVideoWrapper className="background background__video">
        {/* <BackgroundVideoWrapper className="background background__video" ref={el => (this.scene = el)}> */}
        {/* <div data-depth="0.2"> */}
        <Video path={path} number={number} increaseVideo={increaseVideo} />
      </BackgroundVideoWrapper>
    );
  }
}
export default BackgroundVideo;
