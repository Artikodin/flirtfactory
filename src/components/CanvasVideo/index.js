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

  render() {
    const { age, frame, show } = this.props;
    return (
      <div className="background background__canvas">
        {/* <div style={ { backgroundImage: `url(./assets/frames/${age}/${age}${frame}.jpg)` } }> */}
        <img
          style={show ? { opacity: 1 } : { opacity: 0 }}
          src={`./assets/frames/${age}/${age}${frame}.jpg`}
          alt={age}
        />
      </div>
    );
  }
}

export default CanvasVideo;
