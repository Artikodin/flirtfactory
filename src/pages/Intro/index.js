import React from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";

import { InteractionDragAndDrop, ButtonIA } from "../../components";

/* eslint-disable */

class Intro extends React.Component {
  render() {
    return (
      <div>
        <InteractionDragAndDrop age={"antiquite"} />
        bienvenue sur la Flirt Factory 
        <ButtonIA></ButtonIA>
      </div>
    );
  }
}

export default Intro;
