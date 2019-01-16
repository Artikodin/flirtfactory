import React from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";

import { Page, CanvasVideo, SyncDragAndDrop } from "../../components";

class Intro extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

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
    return (
      <Page backgroundColor="#c4e6f1">
        {/* <BackgroundImage> */}
        <h1>Bonjour tu es sur la Flirt Factory</h1>
        <CanvasVideo frame={frame} raf={raf} />
        <SyncDragAndDrop
          frameTotal={frameTotal}
          switchRaf={this.switchRaf}
          updateFrame={{ x: this.updateFrame }}
        />
        {/* </BackgroundImage> */}
      </Page>
    );
  }
}

export default Intro;
