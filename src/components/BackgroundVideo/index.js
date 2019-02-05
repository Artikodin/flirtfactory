import React from "react";
import PropTypes from "prop-types";
// import Parallax from "parallax-js";

import { BackgroundVideoWrapper } from "./element";
import { Video } from "../index";

class BackgroundVideo extends React.Component {
  state = {};

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

  render() {
    const { path, number, increaseVideo } = this.props;
    return (
      <BackgroundVideoWrapper className="background background__video">
        <Video path={path} number={number} increaseVideo={increaseVideo} />
      </BackgroundVideoWrapper>
    );
  }
}
export default BackgroundVideo;
