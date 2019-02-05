import React from "react";
// import posed from "react-pose";
import PropTypes from "prop-types";

// import PropTypes from "prop-types";

import { DragNDrop } from "..";

// import { DragAndDropContainer, Round } from "./element";

class SyncDragAndDrop extends React.Component {
  static propTypes = {
    display: PropTypes.bool,
    waited: PropTypes.bool,
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
    display: true,
    waited: true,
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
    this.nextFrame = 0;
    this.ctx = null;
    this.dragend = false;
    this.locked = true;
  }

  componentDidMount() {
    this.mounted = true;
  }

  onDragStart = () => {
    const { switchCanvas } = this.props;
    switchCanvas();
  };

  onDragEnd = () => {
    const { switchCanvas, updateFrame } = this.props;
    updateFrame(0);
    if (this.locked) {
      switchCanvas();
    }
  };

  next = () => {
    const { unlockAge, increaseVideo, switchCanvas } = this.props;
    switchCanvas();
    increaseVideo();
    unlockAge();
  };

  onDrag = x => {
    const xPos = x * 400;
    const { frame, frameTotal, updateFrame } = this.props;
    if (this.mounted) {
      this.nextFrame = Math.round((frameTotal / 400) * xPos);
      if (this.nextFrame !== frame) {
        updateFrame(this.nextFrame);
        if (xPos === 400 && this.locked) {
          this.next();
          this.locked = false;
        }
      }
    }
  };

  render() {
    const { pathDraw, top, left, display, waited } = this.props;
    return (
      <>
        <DragNDrop
          display={display}
          waited={waited}
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
