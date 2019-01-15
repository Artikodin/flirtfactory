import React from "react";
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
    this.canvas = React.createRef();
    this.mounted = false;
    this.progressionVideo = 0;
    this.progressionDrag = 0;
  }

  componentDidMount() {
    this.mounted = true;
    this.initCanvas();
  }

  initCanvas() {
    this.ctx = this.canvas.current.getContext("2d");
    this.updateCanvas(this.ctx);
  }

  updateCanvas (ctx) {
    ctx.drawImage(this.videoElement.current, 0, 0, 720, 560);
    window.requestAnimationFrame( this.updateCanvas(ctx) )
    // setTimeout(this.updateCanvas.bind(this), 0);
  }

  handleClick = x => {
    console.log(x);
  };

  onDrag = x => {
    if (this.mounted) {
      this.progressionDrag = x / 400;
      this.progressionVideo =
        this.videoElement.current.currentTime /
        this.videoElement.current.duration;
      this.frame = this.videoElement.current.duration / 400;
      // console.log(this.progressionVideo, "% video")
      // console.log(this.progressionDrag, "% drag")
      this.videoElement.current.currentTime += 0.01;
    }
  };

  shouldComponentUpdate() {
    console.log("should");
  }

  componentDidUpdate() {
    console.log("compoennt update");
  }

  render() {
    console.log("render");
    return (
      <DragAndDropContainer>
        <canvas ref={this.canvas} />
        <video
          ref={this.videoElement}
          src="./assets/videos/antiquite/antiquite6.mp4"
          type="video/mp4"
          // autoPlay
          // playsInline
          // loop
          muted
        />
        <DraggableRound
          // onDragStart={{ x: this.handleClick }}
          // onDragEnd={{ x: dragEnd }}
          // onMouseDown={mouseDown}
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
