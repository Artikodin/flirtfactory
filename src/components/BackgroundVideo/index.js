import React from "react";
import PropTypes from "prop-types";
// import Parallax from "parallax-js";

/* eslint-disable */

import { BackgroundVideoWrapper } from "./element";
import { Video } from "../index";

class BackgroundVideo extends React.Component {
  static propTypes = {
    path: PropTypes.string,
    number: PropTypes.number,
    loop: PropTypes.bool
  };

  static defaultProps = {
    path: "",
    number: 1,
    loop: true
  };

  componentDidMount() {
    // this.parallax = new Parallax(this.scene);
  }

  componentWillUnmount() {
    // this.parallax.disable();
  }

  render() {
    const { path, number, loop } = this.props;
    return (
      <BackgroundVideoWrapper className="background background__video">
        {/* <BackgroundVideoWrapper className="background background__video" ref={el => (this.scene = el)}> */}
        {/* <div data-depth="0.2"> */}
        <Video path={path} number={number} loop={loop} />
      </BackgroundVideoWrapper>
    );
  }
}
export default BackgroundVideo;
