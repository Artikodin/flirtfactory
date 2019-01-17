import React from "react";
import posed from "react-pose";
import PropTypes from "prop-types";

// import PropTypes from "prop-types";

import { DragAndDropContainer, Round } from "./element";

class SyncDragAndDrop extends React.Component {
  static propTypes = {
    frame: PropTypes.number,
    frameTotal: PropTypes.number,
    switchRaf: PropTypes.func,
    updateFrame: PropTypes.func
  };

  static defaultProps = {
    frame: 0,
    frameTotal: 0,
    switchRaf: () => {},
    updateFrame: () => {}
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
    const { switchRaf } = this.props;
    switchRaf();
  };

  onDragEnd = () => {
    const { switchRaf } = this.props;
    this.drag.current.transform = "translateX(0)";
    switchRaf();
  };

  endDragAndDrop = () => {
    this.dragend = true;
  };

  onDrag = x => {
    const { frame, frameTotal, updateFrame } = this.props;
    updateFrame(Math.round((frameTotal / 400) * x));
    if (this.mounted) {
      if (this.prevFrame !== frame) {
        if (x === 400) {
          this.endDragAndDrop();
        }
        this.prevFrame = frame;
      }
    }
  };

  render() {
    return (
      <DragAndDropContainer>
        <DraggableRound
          style={{ display: this.dragend ? "none" : "block" }}
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
