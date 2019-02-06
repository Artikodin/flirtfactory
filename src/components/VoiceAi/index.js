import React from "react";

import DragSwitch from "./DragSwitch";
import PhoneCube from "./PhoneCube";
import { Wrapper } from "./element";

class VoiceAi extends React.Component {
  testDiv = React.createRef();

  state = {
    isAnswered: false,
    isHangedUp: false
  };

  handleHangUp = () => {
    console.log("handleHangUp");
    setTimeout(() => this.setState({ isHangedUp: true }), 250);
  };

  handleAnswer = () => {
    console.log("handleAnswer");
    setTimeout(() => this.setState({ isAnswered: true }), 250);
  };

  render() {
    const { isAnswered, isHangedUp } = this.state;
    return (
      <Wrapper>
        <DragSwitch onHangUp={this.handleHangUp} onAnswer={this.handleAnswer} />
        {isAnswered && <PhoneCube icon="decroche" />}
        {isHangedUp && <PhoneCube icon="raccroche" />}
      </Wrapper>
    );
  }
}

export default VoiceAi;
