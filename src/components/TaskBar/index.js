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
    unlocked: PropTypes.bool
  };

  static defaultProps = {
    age: "",
    name: "",
    datas: {},
    progress: [],
    unlocked: false
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
              Bonjour, je suis ton assistant personnel. Je suis prêt à démarrer
              la Flirt Factory et à parcourir l'histoire de la séduction au fil
              des époques. J'attends tes instructions.
            </p>
          );
        }
      case "flirtfactory":
        return (
          <p>
            Toutes les machines ont bien été réinitialisées. Tu as bien
            travaillé. En récompense, j'ai entendu que tu étais un séducteur, je
            te propose 8 catchphrases pour séduire ta future conquête.
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
    const { age, name, datas, progress, unlocked } = this.props;

    return (
      <Wrapper className="taskbar">
        {age === "intro" ? (
          <VoiceAi {...this.props} />
        ) : (
          <IndexTag
            isOpen={false}
            title="Assistance I.A."
            name="decroche"
          >
            {this.setAIText(age, unlocked, datas)}
          </IndexTag>
        )}
        {age !== "intro" && age !== "flirtfactory" && (
          <>
            <IndexTag title={datas.name} name={name} isLoggedIn={false}>
              <Markup content={datas.description} />
            </IndexTag>
            <PoseGroup id="HeartCounter">
              {unlocked && (
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
