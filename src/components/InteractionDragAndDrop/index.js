import React from "react";
import PropTypes from "prop-types";

import { CanvasVideo, SyncDragAndDrop } from "..";

class InteractionDragAndDrop extends React.Component {
  static propTypes = {
    age: PropTypes.string,
    display: PropTypes.bool,
    increaseVideo: PropTypes.func,
    left: PropTypes.string,
    pathDraw: PropTypes.string,
    top: PropTypes.string,
    unlockAge: PropTypes.func
  };

  static defaultProps = {
    age: "",
    display: true,
    increaseVideo: () => {},
    left: "",
    top: "",
    pathDraw: "",
    unlockAge: () => {}
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

  componentWillMount = () => {
    // const { waitFor } = this.props;
    // setTimeout(() => {
    //   this.setState({
    //     waited: false
    //   });
    // }, waitFor);
  };

  render() {
    const { show, frame } = this.state;
    const {
      display,
      age,
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
