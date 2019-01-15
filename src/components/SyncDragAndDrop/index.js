import React from "react";
import posed from "react-pose";
// import PropTypes from "prop-types";

import { DragAndDropContainer, Round } from "./element";

/* eslint-disable */

class SyncDragAndDrop extends React.Component {
  // static propTypes = {
  // };

  // static defaultProps = {
  // };

  constructor(props) {
    super(props);
    this.videoElement = React.createRef();
    this.canvas = React.createRef();
    this.mounted = false;
    this.progressionVideo = 0;
    this.progressionDrag = 0;
    this.raf = false;
    this.prevx = 0;
  }

  // CANVAS

  componentDidMount() {
    this.mounted = true;
    // this.initCanvas();
  }

  videoLoaded = () => {
    this.initCanvas();
  };

  initCanvas() {
    this.ctx = this.canvas.current.getContext("2d");
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.drawImage(this.videoElement.current, 0, 0);
  }

  frameVideo() {
    this.ctx.drawImage(this.videoElement.current, 0, 0);
    if (this.raf) {
      requestAnimationFrame(this.frameVideo.bind(this));
    }
  }

  // DRAG AND DROP

  handleClick = x => {
    // console.log(x);
  };

  onDrag = x => {
    if (this.mounted) {
      this.frameTotal = this.videoElement.current.duration * 25;
      console.log("nombre de frames : ", this.frameTotal)
      this.frame = Math.round((this.frameTotal / 400) * x)
      console.log("frames a afficher : ", this.frame)
      if (x > this.prevx) {
        // this.videoElement.current.currentTime = Math.round((this.frameTotal / 400) * x);
        this.videoElement.current.play();
      } else {
        // this.videoElement.current.currentTime += -0.1;
      }
      this.raf = true;
      // this.progressionDrag = x / 400;
      // this.progressionVideo = this.videoElement.current.currentTime;
      // console.log(this.videoElement.current.duration)
      // this.frame = this.videoElement.current.duration / 400;
      // console.log(this.progressionVideo, "% video");
      // console.log(this.progressionDrag, "% drag");
      this.frameVideo();
      this.prevx = x
    }
  };

  onDragEnd = x => {
    this.videoElement.current.pause();
    this.raf = false;
  };

  render() {
    return (
      <DragAndDropContainer>
        <canvas ref={this.canvas} />
        <video
          ref={this.videoElement}
          src="./assets/videos/antiquite/antiquite6.mp4"
          type="video/mp4"
          onCanPlay={this.videoLoaded}
          // autoPlay
          // playsInline
          // loop
          muted
        />
        <DraggableRound
          // onDragStart={{ x: this.handleClick }}
          onDragEnd={this.onDragEnd}
          onMouseDown={this.onMouseDown}
          // onMouseUp={mouseUp}
          onValueChange={{ x: this.onDrag }}
        />
      </DragAndDropContainer>
    );
  }
}

const DraggableRound = posed(Round)({
  draggable: "x",
  dragBounds: { left: 0, right: 400 }
});

export default SyncDragAndDrop;
