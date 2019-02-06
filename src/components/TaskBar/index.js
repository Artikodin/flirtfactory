import React from "react";
import PropTypes from "prop-types";

import { ButtonIA, VoiceAi, IndexTag, HeartCounter } from "..";

import { Markup } from "interweave";

/* eslint-disable */

import { Wrapper } from "./element";

class TaskBar extends React.Component {
  static propTypes = {
    age: PropTypes.string,
    datas: PropTypes.object,
    progress: PropTypes.array
  };

  static defaultProps = {
    age: "",
    datas: {},
    progress: []
  };

  state = {};

  render() {
    const { age, datas, progress } = this.props;
    return (
      <Wrapper>
        <VoiceAi {...this.props} />
        {/* <ButtonIA /> */}
        <IndexTag title={datas.name} age={age}>
          <Markup content={datas.description} />
        </IndexTag>
        <HeartCounter progress={progress} />
      </Wrapper>
    );
  }
}

export default TaskBar;
