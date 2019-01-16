import React from "react";
import PropTypes from "prop-types";

import { Canvas } from "./element";

class CanvasVideo extends React.Component {
  static propTypes = {
    raf: PropTypes.bool,
    frame: PropTypes.number
  };

  static defaultProps = {
    raf: false,
    frame: 0
  };

  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.mounted = false;
    this.image = new Image();
    this.ctx = null;
  }

  componentDidMount() {
    this.mounted = true;
    this.image.onload = this.init();
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
    console.log("raf");
    const { raf, frame } = this.props;
    this.image.src = `./assets/frames/antiquite/antiquite${frame}.jpg`;
    this.ctx.drawImage(this.image, 0, 0);
    if (raf) {
      requestAnimationFrame(this.update.bind(this));
    }
  };

  render() {
    return <Canvas ref={this.canvas} onClick={this.update} />;
  }
}

export default CanvasVideo;
