import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";

import { CanvasVideo, SyncDragAndDrop } from "..";

class InteractionDragAndDrop extends React.Component {
  static propTypes = {
    age: PropTypes.string,
    frameTotal: PropTypes.number,
    unlockAge: PropTypes.func,
    increaseVideo: PropTypes.func
  };

  static defaultProps = {
    age: "",
    frameTotal: 0,
    unlockAge: () => {},
    increaseVideo: () => {}
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
    const { age, frameTotal, unlockAge, increaseVideo } = this.props;
    return (
      <div>
        <CanvasVideo frame={frame} show={show} age={age} />
        <SyncDragAndDrop
          age={age}
          frame={frame}
          frameTotal={frameTotal}
          increaseVideo={increaseVideo}
          unlockAge={unlockAge}
          switchCanvas={this.switchCanvas}
          updateFrame={this.updateFrame}
        />
      </div>
    );
  }
}

export default InteractionDragAndDrop;
