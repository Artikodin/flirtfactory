import React from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";

import { InteractionDragAndDrop } from  "../../components";

class Intro extends React.Component {
  render() {
    return (
      <div>
        <InteractionDragAndDrop age={"antiquite"} />
        bienvenue sur la Flirt Factory 

      </div>
    );
  }
}

export default Intro;
