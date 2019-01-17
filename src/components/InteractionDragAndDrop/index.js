import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";

import { CanvasVideo, SyncDragAndDrop } from "..";

class InteractionDragAndDrop extends React.Component {
  static propTypes = {
    age: PropTypes.string
  };

  static defaultProps = {
    age: ""
  };

  constructor(props) {
    super(props);
  }

  state = {
    raf: false,
    frame: 0,
    frameTotal: 167
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
    const { raf, frame, frameTotal } = this.state;
    const { age } = this.props;
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
