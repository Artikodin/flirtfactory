import React from "react";
import PropTypes from "prop-types";

// import { Canvas } from "./element";

class CanvasVideo extends React.Component {
  static propTypes = {
    frame: PropTypes.number,
    age: PropTypes.string
  };

  static defaultProps = {
    frame: 0,
    age: ""
  };

  componentDidUpdate() {
    this.opacity = 1;
  }

  render() {
    const { age, frame } = this.props;
    return (
      <img
        style={{ opacity: this.opacity }}
        src={`./assets/frames/${age}/${age}${frame}.jpg`}
        className="background background__canvas"
        alt={age}
      />
    );
  }
}

export default CanvasVideo;
