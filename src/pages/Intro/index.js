import React from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";

import { InteractionDragAndDrop } from  "../../components";

class Intro extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    raf: false,
    frame: 0,
    frameTotal: 167
  };

  render() {
    const { raf, frame, frameTotal } = this.state;
    return (
      <div>
        <InteractionDragAndDrop age={"antiquite"} />
        bienvenue sur la Flirt Factory 

      </div>
    );
  }
}

export default Intro;
