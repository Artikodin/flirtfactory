/* eslint-disable */

import React, { Component } from "react";
import styled from "styled-components";

export default class DisplayTest extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    showText: false
  };

  handleClick = () => {
    const { showText } = this.state;
    this.setState({
      showText: !showText
    });
  };

  render() {
    const { showText } = this.state;
    const text_stimentos =
      "Le « Stimentos » est une pilule aphrodisiaque, mélange d’huile d’olive et de sueur de gladiateur récupérée juste après leur entraînement. Elle était utilisée par les Romaines pour séduire (on ne doute pas de son efficacité)";
    const text_cupidon =
      "Dans la mythologie romaine, Cupidon fils de Vénus, possède le moyen de séduction ultime. Dôté d'un arc et d'un carquois, il envoyait des flèches en or dans le cœur des dieux et des hommes et quiconque était touché tombait amoureux de la première personne qu’elle voyait après avoir été touchée.";

    return (
      <WrapperAbsolute>
        <Point onClick={this.handleClick}>●</Point>
        {showText && <p>{text_stimentos}</p>}
      </WrapperAbsolute>
    );
  }
}

const WrapperAbsolute = styled.div`
  position: absolute;
  width: 30vw;
  top: 10vh;
  left: 40vw;
  z-index: 50;
`;

const Point = styled.h1`
  color: white;
  :hover {
    cursor: pointer;
  }
`;
