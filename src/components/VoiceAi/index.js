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
    age: PropTypes.string,
    datas: PropTypes.object,
    unlocked: PropTypes.bool
  };

  static defaultProps = {
    age: "",
    datas: {},
    unlocked: false
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
      console.log("intro");
    }

    if (unlocked) {
      console.log(unlocked)
      aiText = <p>{datas.reinitialisation}</p>;
    } else {
      aiText = <p>{datas.interaction}</p>;
    }
    return (
      <Wrapper>
        <DragSwitch onHangUp={this.handleHangUp} onAnswer={this.handleAnswer} />
        {isHangedUp && <PhoneCube icon="raccroche" />}
        {isAnswered && (
          <IndexTag title="Assistance I.A." age={age}>
            {aiText}
          </IndexTag>
        )}
      </Wrapper>
    );
  }
}

export default VoiceAi;
