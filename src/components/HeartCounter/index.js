import React from "react";
import PropTypes from "prop-types";

import { HeartCounterContainer } from "./element";

/* eslint-disable */

class HeartCounter extends React.Component {
  static propTypes = {
    progress: PropTypes.array
  };

  static defaultProps = {
    progress: []
  };

  state = {
    progression: 0
  };

  render() {
    let { progression } = this.state;
    const { progress } = this.props;
    progress.forEach(function(point) {
      if (point) {
        progression = progression+1
      }
    });
    return (
      <HeartCounterContainer>
        <svg viewBox="0 0 25 25">
          <path
            d="M11.608,21.997c-22.647-12.354-6.268-27.713,0-17.369C17.877-5.716,34.257,9.643,11.608,21.997z"
            fill="#FFFFFF"
          />
        </svg>
        <p>
          {progression} / 3
        </p>
      </HeartCounterContainer>
    );
  }
}

export default HeartCounter;
