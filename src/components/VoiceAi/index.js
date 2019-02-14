import React from "react";
import PropTypes from "prop-types";
import posed from "react-pose";
import { Howl } from "howler";

import DragSwitch from "./DragSwitch";
import PhoneCube from "./PhoneCube";
import { Wrapper } from "./element";

import { IndexTag } from "..";

class VoiceAi extends React.Component {
  testDiv = React.createRef();

  state = {
    isVisible: true,
    isAnswered: false,
    isHangedUp: false,
    phonePlayed: true
  };

  static propTypes = {
    unlocked: PropTypes.bool,
    stayOpen: PropTypes.bool,
    phoneRing: PropTypes.bool,
    onAnswer: PropTypes.func
  };

  static defaultProps = {
    unlocked: false,
    stayOpen: true,
    phoneRing: false,
    onAnswer: () => {}
  };

  soundPhone = new Howl({
    src: "./assets/sound/phone.mp3",
    loop: true,
    preload: true,
    html5: true,
    volume: 1,
    playing: false
  });

  playSound = () => {
    const { phonePlayed } = this.state;
    if (phonePlayed) {
      this.soundPhone.play();
      this.setState({
        phonePlayed: false
      });
    }
  };

  stopSound = () => {
    this.soundPhone.stop();
  };

  handleHangUp = () => {
    this.setState({ isVisible: false });
    setTimeout(() => this.setState({ isHangedUp: true }), 200);
    this.reCall();
  };

  reCall = () => {
    setTimeout(() => {
      this.setState({ isVisible: true });
      this.setState({ isHangedUp: false });
    }, 2000);
  };

  handleAnswer = () => {
    this.stopSound();
    const { onAnswer } = this.props;
    onAnswer();
    this.setState({ isVisible: false });
    setTimeout(() => this.setState({ isAnswered: true }), 200);
  };

  setAIText = unlocked => {
    if (unlocked) {
      return `Quelque chose a mal fonctionné lors de l'initialisation de l'usine. 0
          sur 8 parties fonctionnent correctement, tu vas devoir les réparer.
          J'enclenche la réinitialisation du système.`;
    }
    return `Bonjour, je suis ton assistant personnel. Je suis prêt à démarrer la
        Flirt Factory et à parcourir l'histoire de la séduction au fil des
        époques. J'attends tes instructions.`;
  };

  render() {
    const { isAnswered, isHangedUp, isVisible } = this.state;
    // eslint-disable-next-line no-unused-vars
    const { unlocked, stayOpen, phoneRing } = this.props;
    if (phoneRing) {
      this.playSound();
    }
    return (
      <WrapperAnimated pose={isVisible ? "visible" : "hidden"}>
        <DragSwitch
          isVisible={isVisible}
          onHangUp={this.handleHangUp}
          onAnswer={this.handleAnswer}
        />
        {isHangedUp && <PhoneCube name="raccroche" />}
        {isAnswered && (
          <IndexTag
            ai
            animated
            stayOpen={stayOpen}
            isOpen
            title="Assistance I.A."
            name="decroche"
          >
            {this.setAIText(unlocked)}
          </IndexTag>
        )}
      </WrapperAnimated>
    );
  }
}

const WrapperAnimated = posed(Wrapper)({
  visible: {
    applyAtStart: { height: "43px", border: "solid 1px white" },
    // opacity: 1,
    width: 298,
    transition: {
      // opacity: { ease: "easeOut", duration: 250, delay: 250 },
      width: { ease: "easeOut", duration: 250 }
    }
  },
  hidden: {
    // opacity: 0,
    width: 43,
    transition: {
      // opacity: { ease: "easeOut", duration: 250, delay: 250 },
      width: { ease: "easeOut", duration: 250 }
    },
    applyAtEnd: { width: "auto", height: "auto", border: "none" }
  }
});

export default VoiceAi;
