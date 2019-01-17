import React from "react";
import PropTypes from "prop-types";

import { Canvas } from "./element";

class CanvasVideo extends React.Component {
  static propTypes = {
    raf: PropTypes.bool,
    frame: PropTypes.number,
    age: PropTypes.string
  };

  static defaultProps = {
    raf: false,
    frame: 0,
    age: ""
  };

  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.image = new Image();
    this.ctx = null;
  }

  componentDidMount() {
    this.image.onload = this.init();
  }

  componentDidUpdate() {
    const { frame, age } = this.props;
    this.image.src = `./assets/frames/${age}/${age}${frame}.jpg`;
    this.update()
  }

  init = () => {
    const canvas = this.canvas.current;
    this.ctx = canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
    this.ctx.drawImage(this.image, 0, 0);
  };

  update = () => {
    const { raf } = this.props;
    if (this.image.complete && this.image.naturalHeight !== 0) {
      this.ctx.drawImage(this.image, 0, 0);
    }
    if (raf) {
      requestAnimationFrame(this.update.bind(this));
    }
  };

  render() {
    return <Canvas ref={this.canvas} onClick={this.update} />;
  }
}

export default CanvasVideo;
