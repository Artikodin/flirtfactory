import React from "react";
import PropTypes from "prop-types";

import posed, { PoseGroup } from "react-pose";

import { DragNDrop } from "..";

class SyncDragAndDrop extends React.Component {
  static propTypes = {
    display: PropTypes.bool,
    frame: PropTypes.number,
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
    frame: 0,
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
    const { frame, updateFrame } = this.props;
    if (this.mounted) {
      this.nextFrame = Math.round((40 / 400) * xPos);
      if (this.nextFrame !== frame) {
        updateFrame(this.nextFrame);
        if (xPos > 390 && this.locked) {
          this.next();
          this.locked = false;
        }
      }
    }
  };

  render() {
    const { pathDraw, top, left, display } = this.props;
    return (
      <PoseGroup>
        {display === false && (
          <AnimatedDiv key="animatedDiv">
            <DragNDrop
              display={display}
              pathDraw={pathDraw}
              handleDragStart={this.onDragStart}
              handleDrag={this.onDrag}
              handleDragEnd={this.onDragEnd}
              top={top}
              left={left}
            />
          </AnimatedDiv>
        )}
      </PoseGroup>
    );
  }
}

const AnimatedDiv = posed.div({
  enter: {
    opacity: 1,
    transition: {
      duration: 1500,
      ease: "easeIn",
      delay: 5000
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1000,
      ease: "easeOut"
    }
  }
});

export default SyncDragAndDrop;
