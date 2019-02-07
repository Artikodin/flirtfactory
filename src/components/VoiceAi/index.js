import React from "react";
import PropTypes from "prop-types";

import DragSwitch from "./DragSwitch";
import PhoneCube from "./PhoneCube";
import { Wrapper } from "./element";

import { IndexTag } from "..";

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

  StateInteraction = () => {
    const { unlocked, datas } = this.props;
    if (unlocked) {
      return <p>{datas.reinitialisation}</p>;
    }
    return <p>{datas.interaction}</p>;
  };

  render() {
    const { isAnswered, isHangedUp } = this.state;
    const { age, unlocked, datas } = this.props;
    let aiText;

    if (age === "intro") {
      if (unlocked) {
        aiText = (
          <p>
            Quelque chose a mal fonctionné. 0 sur 8 parties fonctionnent
            correctement. J'enclenche la réinitialisation du système.
          </p>
        );
      } else {
        aiText = (
          <p>
            Bonjour, je suis ton assistant personnel. Je suis prêt à démarrer la
            Flirt Factory. J'attends tes instructions.
          </p>
        );
      }
    } else {
      if (unlocked) {
        aiText = <p>{datas.reinitialisation}</p>;
      }
      aiText = <p>{datas.interaction}</p>;
    }

    return (
      <Wrapper>
        <DragSwitch onHangUp={this.handleHangUp} onAnswer={this.handleAnswer} />
        {isHangedUp && <PhoneCube name="raccroche" />}
        {isAnswered && (
          <IndexTag title="Assistance I.A." name="decroche">
            {aiText}
          </IndexTag>
        )}
      </Wrapper>
    );
  }
}

export default VoiceAi;
