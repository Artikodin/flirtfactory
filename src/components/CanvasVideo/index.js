import React from "react";
import PropTypes from "prop-types";

// import { Canvas } from "./element";

class CanvasVideo extends React.Component {
  static propTypes = {
    frame: PropTypes.number,
    age: PropTypes.string,
    show: PropTypes.bool
  };

  static defaultProps = {
    frame: 0,
    age: "",
    show: false
  };

  componentDidUpdate() {
    this.opacity = 1;
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  render() {
    const { age, frame, show } = this.props;
    return (
      <img
        style={show ? { opacity: 1 } : { opacity: 0 }}
        src={`./assets/frames/${age}/${age}${frame}.jpg`}
        className="background background__canvas"
        alt={age}
      />
    );
  }
}

export default CanvasVideo;
