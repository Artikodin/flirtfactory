import React from "react";
import PropTypes from "prop-types";
import Parallax from "parallax-js";

/* eslint-disable */

import { BackgroundVideoWrapper } from "./element";
import { Video } from "../index";

class BackgroundVideo extends React.Component {
  static propTypes = {
    path: PropTypes.string
  };

  static defaultProps = {
    path: ""
  };

  // PARRALAX

  componentDidMount() {
    this.parallax = new Parallax(this.scene);
  }

  componentWillUnmount() {
    this.parallax.disable();
  }

  render() {
    const { path } = this.props;
    return (
      <BackgroundVideoWrapper ref={el => (this.scene = el)}>
        <div data-depth="0.2">
          <Video path={path} />
        </div>
      </BackgroundVideoWrapper>
    );
  }
}
export default BackgroundVideo;
