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

  static = {
    frames: []
  };

  componentDidMount() {
    const { age } = this.props;
    for (let i = 0; i < 40; i++) {
      new Image().src = `./assets/frames/${age}/${age}${i}.jpg`;
    }
  }

  render() {
    const { age, frame, show } = this.props;
    return (
      <div className="background background__canvas">
        <img
          style={show ? { opacity: 1 } : { opacity: 0 }}
          src={`./assets/frames/${age}/${age}${frame}.jpg`}
          alt={age}
        />
        <div className="noise" />
      </div>
    );
  }
}

export default CanvasVideo;
