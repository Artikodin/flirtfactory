import React from "react";
import PropTypes from "prop-types";

import posed, { PoseGroup } from "react-pose";
import { easing } from "popmotion";

import { VoiceAi, IndexTag, HeartCounter } from "..";

import { Markup } from "interweave";

/* eslint-disable */

import { Wrapper, HeartCounterToAnimate } from "./element";

class TaskBar extends React.Component {
  static propTypes = {
    age: PropTypes.string,
    name: PropTypes.string,
    datas: PropTypes.object,
    progress: PropTypes.array,
    unlocked: PropTypes.bool,
    isOpen: PropTypes.bool,
    stayOpen: PropTypes.bool,
    onAnswer: PropTypes.func
  };

  static defaultProps = {
    age: "",
    name: "",
    datas: {},
    progress: [],
    unlocked: false,
    isOpen: false,
    stayOpen: false,
    onAnswer: () => {}
  };

  setAIText = (age, unlocked, datas) => {
    if (age === "flirtfactory") {
      return `Toutes les machines ont bien été réinitialisées. Tu as bien travaillé.
          En récompense, j'ai entendu que tu étais un séducteur, je te propose 8
          catchphrases pour séduire ta future conquête.`;
    }
    if (unlocked) {
      return datas.reinitialisation;
    } else {
      return datas.interaction;
    }
  };

  render() {
    const {
      age,
      name,
      datas,
      progress,
      unlocked,
      isOpen,
      onAnswer,
      stayOpen
    } = this.props;

    return (
      <Wrapper className="taskbar">
        {age === "intro" ? (
          <VoiceAi stayOpen={stayOpen} onAnswer={onAnswer} {...this.props} />
        ) : (
          <IndexTag animated isOpen={isOpen} title="Assistance I.A." name="decroche">
            {this.setAIText(age, unlocked, datas)}
          </IndexTag>
        )}
        {age !== "intro" && age !== "flirtfactory" && (
          <>
            <IndexTag title={datas.name} name={name} isLoggedIn={false}>
              <Markup content={datas.description} />
            </IndexTag>
            <PoseGroup id="HeartCounter">
              {age !== "futur" && unlocked && (
                <AnimatedHeartCounter key="heart-wrapper">
                  <HeartCounter progress={progress} />
                </AnimatedHeartCounter>
              )}
            </PoseGroup>
          </>
        )}
      </Wrapper>
    );
  }
}

const AnimatedHeartCounter = posed(HeartCounterToAnimate)({
  enter: {
    opacity: 1,
    transition: {
      duration: 2000,
      ease: easing.backOut
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 2000,
      ease: easing.easeIn
    }
  }
});

export default TaskBar;
