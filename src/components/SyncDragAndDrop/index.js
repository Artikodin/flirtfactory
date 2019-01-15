import React from "react";
import ReactDOM from "react-dom";
import posed from "react-pose";

// import PropTypes from "prop-types";

/* eslint-disable */

import { DragAndDropContainer, Round } from "./element";

class SyncDragAndDrop extends React.Component {
  // static propTypes = {
  // };

  // static defaultProps = {
  // };

  constructor(props) {
    super(props);
    this.videoElement = React.createRef();
    this.mounted = false;
    this.progressionVideo = 0;
    this.progressionDrag = 0;
    this.raf = false;
    this.prevx = 0;
    this.targetTime = 0;
    this.currentTime = 0;
  }

  // CANVAS

  componentDidMount() {
    this.mounted = true;
  }

  videoLoaded = () => {
    // this.initCanvas();
  };

  // DRAG AND DROP

  onDragStart = () => {
    this.raf = true;
    this.update();
  };

  onDragEnd = () => {
    this.raf = false;
    // this.videoElement.current.pause();
  };

  onDrag = x => {
    this.raf = true;
    if (this.mounted) {
      if (x > this.prevx) {
        // console.log(this.videoElement.current.currentTime);
        this.targetTime = (this.videoElement.current.duration / 400) * x;
      } else {
        // this.videoElement.current.currentTime += -0.1;
      }
      // this.frameTotal = this.videoElement.current.duration * 25;
      // console.log("nombre de frames : ", this.frameTotal)
      // this.frame = Math.round((this.frameTotal / 400) * x)
      // console.log("frames a afficher : ", this.frame)
      // this.progressionDrag = x / 400;
      // this.progressionVideo = this.videoElement.current.currentTime;
      // console.log(this.videoElement.current.duration)
      // this.frame = this.videoElement.current.duration / 400;
      // console.log(this.progressionVideo, "% video");
      // console.log(this.progressionDrag, "% drag");
      // this.frameVideo();
      // this.prevx = x
    }
  };

  componentDidUpdate = () => {
    const node = ReactDOM.findDOMNode(this.videoElement.current);
    console.log(node);
    node.scrollTop = node.scrollHeight;
  };

  update() {
    this.currentTime += (this.targetTime - this.currentTime) * 0.1;
    ReactDOM.findDOMNode(this.videoElement.current).currentTime =
      Math.floor(this.currentTime * 1000) / 1000;
    if (this.raf) {
      requestAnimationFrame(this.update.bind(this));
    }
  }

  onMouseMove(e) {
    // this.videoElement.current.currentTime = 0.5;
    // console.log((window.innerHeight / 400) * e.screenX);
  }

  render() {
    return (
      <DragAndDropContainer onMouseMove={this.onMouseMove.bind(this)}>
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
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
          // onMouseDown={this.onMouseDown}
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
