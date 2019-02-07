import React from "react";
import PropTypes from "prop-types";

import { VoiceAi, IndexTag, HeartCounter } from "..";

import { Markup } from "interweave";

/* eslint-disable */

import { Wrapper } from "./element";

class TaskBar extends React.Component {
  static propTypes = {
    age: PropTypes.string,
    datas: PropTypes.object,
    progress: PropTypes.array,
    unlocked: PropTypes.bool
  };

  static defaultProps = {
    age: "",
    datas: {},
    progress: [],
    unlocked: false
  };

  state = {};

  render() {
    const { age, datas, progress } = this.props;
    let index;
    let heart;

    if (age === "intro") {
      console.log("intro");
      index = null;
      heart = null;
    } else {
      index = (
        <>
          <IndexTag title={datas.name} age={age} isLoggedIn={false}>
            <Markup content={datas.description} />
          </IndexTag>
        </>
      );

      heart = <HeartCounter progress={progress} />;
    }
    return (
      <Wrapper className="taskbar">
        <VoiceAi {...this.props} />
        { index }
        { heart }
        {/* <IndexTag title={datas.name} age={age} isLoggedIn={false}>
          <Markup content={datas.description} />
        </IndexTag> */}
      </Wrapper>
    );
  }
}

export default TaskBar;
