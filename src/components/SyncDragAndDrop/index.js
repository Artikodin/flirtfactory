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
    this.mounted = false;
    this.progressionVideo = 0;
    this.progressionDrag = 0;
  }

  componentDidMount() {
    this.mounted = true;
  }

  handleClick = x => {
    console.log(x);
  };

  onDrag = x => {
    if (this.mounted) {
      this.progressionDrag = (x / 400);
      this.progressionVideo = (this.videoElement.current.currentTime / this.videoElement.current.duration);
      // console.log(this.progressionVideo, "%")
      this.videoElement.current.currentTime += 0.2;
    }
  };

  render() {
    return (
      <div>
        <video
          ref={this.videoElement}
          src="./assets/videos/antiquite/antiquite5.mp4"
          type="video/mp4"
          // autoPlay
          // playsInline
          // loop
          muted
        />
        <DragAndDropContainer>
          <DraggableRound
            // onDragStart={{ x: this.handleClick }}
            // onDragEnd={{ x: dragEnd }}
            // onMouseDown={mouseDown}
            // onMouseUp={mouseUp}
            onValueChange={{ x: this.onDrag }}
          />
        </DragAndDropContainer>
      </div>
    );
  }
}

const DraggableRound = posed(Round)({
  draggable: "x",
  dragBounds: { left: 0, right: 400 }
});

export default SyncDragAndDrop;
