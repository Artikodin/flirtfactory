import React from "react";
import posed from "react-pose";
import PropTypes from "prop-types";

// import PropTypes from "prop-types";

import { DragAndDropContainer, Round } from "./element";

class SyncDragAndDrop extends React.Component {
  static propTypes = {
    // frameTotal: PropTypes.number,
    // switchRaf: PropTypes.function,
    // updateFrame: PropTypes.function
  };

  static defaultProps = {
    // frameTotal: 0,
    // switchRaf: () => {},
    // updateFrame: () => {}
  };

  constructor(props) {
    super(props);
    this.mounted = false;
    this.prevFrame = 0;
    this.ctx = null;
  }

  // DRAG AND DROP

  onDragStart = () => {
    this.raf = true;
    this.update();
  };

  onDragEnd = () => {
    if (this.frame === this.frameTotal) {
      alert("tu as bien drag");
    } else {
      console.log(this);
    }
    this.raf = false;
  };

  onDrag = x => {
    this.frame = Math.round((this.frameTotal / 400) * x);
    if (this.mounted) {
      if (this.prevFrame !== this.frame) {
        this.image.src = `./assets/frames/antiquite/antiquite${this.frame}.jpg`;
        if (this.image.complete && this.image.naturalHeight !== 0) {
          this.update();
          this.prevFrame = this.frame;
        }
      }
    }
  };

  render() {
    return (
      <DragAndDropContainer>
        <DraggableRound
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
