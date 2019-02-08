import React from "react";
import PropTypes from "prop-types";

import { VoiceAi, IndexTag, HeartCounter } from "..";

import { Markup } from "interweave";

/* eslint-disable */

import { Wrapper } from "./element";

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

  render() {
    const { age, name, datas, progress } = this.props;

    return (
      <Wrapper className="taskbar">
        <VoiceAi {...this.props} />
        {(age !== "intro" && age !== "flirtfactory") && (
          <>
            <IndexTag title={datas.name} name={name} isLoggedIn={false}>
              <Markup content={datas.description} />
            </IndexTag>
            <HeartCounter progress={progress} />
          </>
        )}
      </Wrapper>
    );
  }
}

export default TaskBar;
