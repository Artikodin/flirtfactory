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
    this.mounted = false;
    this.prevFrame = 0;
    this.ctx = null;
  }

  componentDidMount() {
    this.mounted = true;
  }

  // DRAG AND DROP

  onDragStart = () => {
    const { switchRaf } = this.props;
    switchRaf();
    // update
  };

  onDragEnd = () => {
    const { switchRaf } = this.props;
    // if x = 400
    // alert("tu as bien drag");
    switchRaf();
  };

  onDrag = x => {
    let { frame, frameTotal, updateFrame } = this.props;
    updateFrame(Math.round((frameTotal / 400) * x));
    if (this.mounted) {
      if (this.prevFrame !== frame) {
        this.prevFrame = frame;
        // update
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
