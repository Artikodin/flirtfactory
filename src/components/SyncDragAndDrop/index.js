import React from "react";
// import posed from "react-pose";
import PropTypes from "prop-types";

// import PropTypes from "prop-types";

import { DragNDrop } from "..";

// import { DragAndDropContainer, Round } from "./element";

class SyncDragAndDrop extends React.Component {
  static propTypes = {
    age: PropTypes.string,
    frame: PropTypes.number,
    frameTotal: PropTypes.number,
    switchCanvas: PropTypes.func,
    updateFrame: PropTypes.func,
    unlockAge: PropTypes.func,
    increaseVideo: PropTypes.func
  };

  static defaultProps = {
    age: "",
    frame: 0,
    frameTotal: 0,
    switchCanvas: () => {},
    updateFrame: () => {},
    unlockAge: () => {},
    increaseVideo: () => {}
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
    const { switchCanvas } = this.props;
    switchCanvas();
  };

  onDragEnd = () => {
    const { switchCanvas, updateFrame } = this.props;
    updateFrame(0);
    // ici remettre la position du drag and drop à zéro
    if (this.locked) {
      switchCanvas();
    }
  };

  next = () => {
    const { unlockAge, increaseVideo, switchCanvas, age } = this.props;
    switchCanvas();
    increaseVideo();
    unlockAge();
    const sound = new Audio(`./assets/sound/${age}2.jpg`);
    sound.oncanplay = () => {
      sound.play();
    };
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
    return (
      <>
        <DragNDrop
          pathDraw="M 70 400 Q 40 220 200 250 "
          handleDragStart={this.onDragStart}
          handleDrag={this.onDrag}
          handleDragEnd={this.onDragEnd}
          top="57%"
          left="45%"
        />
        {/* <DragAndDropContainer className="drag_and_drop">
          <DraggableRound
            ref={this.drag}
            onDragStart={this.onDragStart}
            onDragEnd={this.onDragEnd}
            onValueChange={{ x: this.onDrag }}
          />
        </DragAndDropContainer> */}
      </>
    );
  }
}

// const DraggableRound = posed(Round)({
//   draggable: "x",
//   dragBounds: { left: 0, right: 400 }
// });
export default SyncDragAndDrop;
