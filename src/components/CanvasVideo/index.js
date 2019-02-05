import React from "react";
import PropTypes from "prop-types";

// import { Canvas } from "./element";

const CanvasVideo = ({ age, frame, show }) => (
  <div className="background background__canvas">
    <img
      style={show ? { opacity: 1 } : { opacity: 0 }}
      src={`./assets/frames/${age}/${age}${frame}.jpg`}
      alt={age}
    />
  </div>
);

CanvasVideo.propTypes = {
  frame: PropTypes.number,
  age: PropTypes.string,
  show: PropTypes.bool
};

CanvasVideo.defaultProps = {
  frame: 0,
  age: "",
  show: false
};

export default CanvasVideo;
