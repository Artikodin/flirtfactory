import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

import { ButtonIA } from "../../components";

/* eslint-disable */

class Intro extends React.Component {
  playSound = () => {
    const audio2 = new Audio("./assets/sound/intro2.wav");
    audio2.play();
  };

  render() {
    return (
      <div>
        <IntroWrapper>
          <ButtonIA />
          <button type="button" onClick={this.playSound}>
             Démarrer la Flirt Factory
          </button>
        </IntroWrapper>
      </div>
    );
  }
}

export default Intro;

export const IntroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-image: url("./assets/img/start.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;
