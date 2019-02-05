import React from "react";
import PropTypes from "prop-types";

import { ButtonIA, IndexTag, HeartCounter } from "..";

import { Markup } from "interweave";

/* eslint-disable */

import { TaskBarWrapper, TaskBarContainer } from "./element";

class TaskBar extends React.Component {
  static propTypes = {
    age: PropTypes.string,
    datas: PropTypes.object
  };

  static defaultProps = {
    age: "",
    datas: {}
  };

  state = {};

  render() {
    const { age, datas } = this.props;
    return (
      <TaskBarWrapper>
        <TaskBarContainer>
          <ButtonIA />
          <IndexTag title={datas.name} age={age}>
            <Markup content={datas.description} />
          </IndexTag>
          <HeartCounter />
        </TaskBarContainer>
      </TaskBarWrapper>
    );
  }
}

export default TaskBar;
