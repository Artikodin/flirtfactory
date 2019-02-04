import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";

import { CanvasVideo, SyncDragAndDrop } from "..";

class InteractionDragAndDrop extends React.Component {
  static propTypes = {
    age: PropTypes.string,
    display: PropTypes.bool,
    frameTotal: PropTypes.number,
    increaseVideo: PropTypes.func,
    left: PropTypes.string,
    pathDraw: PropTypes.string,
    top: PropTypes.string,
    unlockAge: PropTypes.func,
    waitFor: PropTypes.number
  };

  static defaultProps = {
    age: "",
    display: true,
    frameTotal: 0,
    increaseVideo: () => {},
    left: "",
    top: "",
    pathDraw: "",
    unlockAge: () => {},
    waitFor: 0
  };

  state = {
    show: false,
    frame: 0,
    waited: true
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

  componentWillMount = () => {
    const { waitFor } = this.props;
    setTimeout(() => {
      this.setState({
        waited: false
      });
    }, waitFor);
  };

  render() {
    const { show, frame, waited } = this.state;
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
          frame={frame}
          frameTotal={frameTotal}
          increaseVideo={increaseVideo}
          unlockAge={unlockAge}
          display={display}
          waited={waited}
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
