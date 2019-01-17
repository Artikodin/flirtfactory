import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";

import { CanvasVideo, SyncDragAndDrop } from "..";

class InteractionDragAndDrop extends React.Component {
  static propTypes = {
    age: PropTypes.string,
    frameTotal: PropTypes.number
  };

  static defaultProps = {
    age: "",
    frameTotal: 0
  };

  state = {
    raf: false,
    frame: 0
  };

  switchRaf = () => {
    const { raf } = this.state;
    this.setState({
      raf: !raf
    });
  };

  updateFrame = x => {
    this.setState({
      frame: x
    });
  };

  render() {
    const { raf, frame } = this.state;
    const { age, frameTotal } = this.props;
    return (
      <div>
        <CanvasVideo frame={frame} raf={raf} age={age} />
        <SyncDragAndDrop
          frame={frame}
          frameTotal={frameTotal}
          switchRaf={this.switchRaf}
          updateFrame={this.updateFrame}
        />
      </div>
    );
  }
}

export default InteractionDragAndDrop;
