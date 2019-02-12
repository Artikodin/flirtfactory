import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./element";

class LoaderCount extends React.Component {
  state = {
    currentTimer: 0
  };

  static propTypes = {
    duration: PropTypes.number
  };

  static defaultProps = {
    duration: 3000
  };

  componentDidMount() {
    const { duration } = this.props;
    this.animateValue(duration - 500);
  }

  animateValue = duration => {
    let { currentTimer } = this.state;
    const stepTime = Math.abs(Math.floor(duration / 100));
    const timer = setInterval(() => {
      this.setState({ currentTimer: (currentTimer += 1) });
      if (currentTimer === 100) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  render() {
    const { currentTimer } = this.state;
    return (
      <Wrapper>
        {`${currentTimer}`}
        <span>%</span>
      </Wrapper>
    );
  }
}

export default LoaderCount;
