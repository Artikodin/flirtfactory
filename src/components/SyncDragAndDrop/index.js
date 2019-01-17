import React from "react";
import posed from "react-pose";
import PropTypes from "prop-types";

// import PropTypes from "prop-types";

import { DragAndDropContainer, Round } from "./element";

class SyncDragAndDrop extends React.Component {
  static propTypes = {
    frame: PropTypes.number,
    frameTotal: PropTypes.number,
    switchCanvas: PropTypes.func,
    updateFrame: PropTypes.func,
    unlockAge: PropTypes.func
  };

  static defaultProps = {
    frame: 0,
    frameTotal: 0,
    switchCanvas: () => {},
    updateFrame: () => {},
    unlockAge: () => {}
  };

  constructor(props) {
    super(props);
    this.drag = React.createRef();
    this.mounted = false;
    this.prevFrame = 0;
    this.ctx = null;
    this.dragend = false;
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
    const { switchCanvas } = this.props;
    let { frame } = this.props;
    this.drag.current.transform = "translateX(0)";
    switchCanvas();
    do {
      frame -= 1;
    } while (frame > 0);
  };

  next = () => {
    const { unlockAge } = this.props;
    unlockAge();
    const sound = new Audio("./assets/sound/antiquite2.wav");
    sound.oncanplay = () => {
      sound.play();
    };
  };

  onDrag = x => {
    const { frame, frameTotal, updateFrame } = this.props;
    updateFrame(Math.round((frameTotal / 400) * x));
    if (this.mounted) {
      if (this.prevFrame !== frame) {
        if (x === 400) {
          this.next();
        }
        this.prevFrame = frame;
      }
    }
  };

  render() {
    return (
      <DragAndDropContainer>
        <DraggableRound
          ref={this.drag}
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
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
