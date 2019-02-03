import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";

import { CanvasVideo, SyncDragAndDrop } from "..";

class InteractionDragAndDrop extends React.Component {
  static propTypes = {
    age: PropTypes.string,
    display: PropTypes.bool,
    frameTotal: PropTypes.number,
    unlockAge: PropTypes.func,
    increaseVideo: PropTypes.func,
    pathDraw: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string
  };

  static defaultProps = {
    age: "",
    display: true,
    frameTotal: 0,
    unlockAge: () => {},
    increaseVideo: () => {},
    pathDraw: "",
    top: "",
    left: ""
  };

  state = {
    show: false,
    frame: 0
  };

  switchCanvas = () => {
    const { show } = this.state;
    this.setState({
      show: !show
    });
  };

  updateFrame = x => {
    this.setState({
      frame: x
    });
  };

  render() {
    const { show, frame } = this.state;
    const {
      display,
      age,
      frameTotal,
      unlockAge,
      increaseVideo,
      pathDraw,
      top,
      left
    } = this.props;
    return (
      <div>
        <CanvasVideo frame={frame} show={show} age={age} />
        <SyncDragAndDrop
          age={age}
          frame={frame}
          frameTotal={frameTotal}
          increaseVideo={increaseVideo}
          unlockAge={unlockAge}
          display={display}
          switchCanvas={this.switchCanvas}
          updateFrame={this.updateFrame}
          pathDraw={pathDraw}
          top={top}
          left={left}
        />
      </div>
    );
  }
}

export default InteractionDragAndDrop;
