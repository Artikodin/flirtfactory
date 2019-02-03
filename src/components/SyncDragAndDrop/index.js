import React from "react";
// import posed from "react-pose";
import PropTypes from "prop-types";

// import PropTypes from "prop-types";

import { DragNDrop } from "..";

// import { DragAndDropContainer, Round } from "./element";

class SyncDragAndDrop extends React.Component {
  static propTypes = {
    age: PropTypes.string,
    display: PropTypes.bool,
    frame: PropTypes.number,
    frameTotal: PropTypes.number,
    switchCanvas: PropTypes.func,
    updateFrame: PropTypes.func,
    unlockAge: PropTypes.func,
    increaseVideo: PropTypes.func,
    pathDraw: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string
  };

  static defaultProps = {
    age: "",
    display: true,
    frame: 0,
    frameTotal: 0,
    switchCanvas: () => {},
    updateFrame: () => {},
    unlockAge: () => {},
    increaseVideo: () => {},
    pathDraw: "",
    top: "",
    left: ""
  };

  constructor(props) {
    super(props);
    this.drag = React.createRef();
    this.mounted = false;
    this.prevFrame = 0;
    this.ctx = null;
    this.dragend = false;
    this.locked = true;
  }

  componentDidMount() {
    this.mounted = true;
  }

  // DRAG AND DROP

  onDragStart = () => {
    console.log("drag start switch canvas");
    const { switchCanvas } = this.props;
    switchCanvas();
  };

  onDragEnd = () => {
    const { switchCanvas, updateFrame } = this.props;
    updateFrame(0);
    if (this.locked) {
      console.log("drag end switch canvas");
      switchCanvas();
    }
  };

  next = () => {
    const { unlockAge, increaseVideo, switchCanvas, age } = this.props;
    switchCanvas();
    increaseVideo();
    unlockAge();
    console.log(age);
    // const sound = new Audio(`./assets/sound/${age}2.jpg`);
    // sound.oncanplay = () => {
    //   sound.play();
    // };
  };

  onDrag = x => {
    const xPos = x * 400;
    const { frame, frameTotal, updateFrame } = this.props;
    if (this.mounted) {
      updateFrame(Math.round((frameTotal / 400) * xPos));
      if (this.prevFrame !== frame) {
        if (xPos === 400 && this.locked) {
          this.next();
          this.locked = false;
        }
        this.prevFrame = frame;
      }
    }
  };

  render() {
    const { pathDraw, top, left, display } = this.props;
    return (
      <>
        <DragNDrop
          display={display}
          pathDraw={pathDraw}
          handleDragStart={this.onDragStart}
          handleDrag={this.onDrag}
          handleDragEnd={this.onDragEnd}
          top={top}
          left={left}
        />
      </>
    );
  }
}

export default SyncDragAndDrop;
