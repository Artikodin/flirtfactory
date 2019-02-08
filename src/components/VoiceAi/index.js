import React from "react";
import PropTypes from "prop-types";

import DragSwitch from "./DragSwitch";
import PhoneCube from "./PhoneCube";
import { Wrapper } from "./element";

import { IndexTag } from "..";

/* eslint-disable */

class VoiceAi extends React.Component {
  testDiv = React.createRef();

  state = {
    isAnswered: false,
    isHangedUp: false
  };

  static propTypes = {
    datas: PropTypes.object,
    unlocked: PropTypes.bool,
    age: PropTypes.string
  };

  static defaultProps = {
    datas: {},
    unlocked: false,
    age: ""
  };

  handleHangUp = () => {
    setTimeout(() => this.setState({ isHangedUp: true }), 250);
  };

  handleAnswer = () => {
    setTimeout(() => this.setState({ isAnswered: true }), 250);
  };

  setAIText = (age, unlocked, datas) => {
    switch (age) {
      case "intro":
        if (unlocked) {
          return (
              <p>
                Quelque chose a mal fonctionné. 0 sur 8 parties fonctionnent
                correctement. J'enclenche la réinitialisation du système.
              </p>
          );
        } else {
          return (
              <p>
                Bonjour, je suis ton assistant personnel. Je suis prêt à
                démarrer la Flirt Factory et à parcourir l'histoire de la
                séduction au fil des époques. J'attends tes instructions.
              </p>
          );
        }
      case "flirtfactory":
        return (
            <p>
              Toutes les machines ont bien été réinitialisées. Tu as bien
              travaillé. En récompense, j'ai entendu que tu étais un séducteur,
              je te propose 8 catchphrases pour séduire ta future conquête.
            </p>
        );
      default:
        if (unlocked) {
          return <p>{datas.reinitialisation}</p>;
        } else {
          return <p>{datas.interaction}</p>;
        }
    }
  };

  render() {
    const { isAnswered, isHangedUp } = this.state;
    const { age, unlocked, datas } = this.props;

    return (
      <Wrapper>
        <DragSwitch onHangUp={this.handleHangUp} onAnswer={this.handleAnswer} />
        {isHangedUp && <PhoneCube name="raccroche" />}
        {isAnswered && (
          <IndexTag title="Assistance I.A." name="decroche">
            {this.setAIText(age, unlocked, datas)}
          </IndexTag>
        )}
      </Wrapper>
    );
  }
}

export default VoiceAi;
