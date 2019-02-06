import React from "react";
import PropTypes from "prop-types";

import DragSwitch from "./DragSwitch";
import PhoneCube from "./PhoneCube";
import { Wrapper } from "./element";

import { IndexTag } from "..";

import { Markup } from "interweave";

class VoiceAi extends React.Component {
  testDiv = React.createRef();

  state = {
    isAnswered: false,
    isHangedUp: false
  };

  static propTypes = {
    age: PropTypes.string,
    datas: PropTypes.object
  };

  static defaultProps = {
    age: "",
    datas: {}
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
    const { age, datas } = this.props;
    return (
      <Wrapper>
        <DragSwitch onHangUp={this.handleHangUp} onAnswer={this.handleAnswer} />
        {isHangedUp && <PhoneCube icon="raccroche" />}
        {isAnswered && (
          <IndexTag title="Assistance I.A." age={age}>
            <Markup content={datas.description} />
          </IndexTag>
        )}
      </Wrapper>
    );
  }
}

export default VoiceAi;
