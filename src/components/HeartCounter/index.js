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

  renderPath(progression) {
    switch (progression) {
      case 0:
        return (
          <>
            <path
              d="M11.608,20.997 C-11.039,8.643 5.34,-6.716 11.608,3.628 C17.877,-6.716 34.257,8.643 11.608,20.997 Z"
              fill="none"
              stroke="#FFFFFF"
              stroke-width="2"
            />
          </>
        );
      case 1:
        return (
          <>
            <path
              d="M11.608,20.997 C-11.039,8.643 5.34,-6.716 11.608,3.628 C17.877,-6.716 34.257,8.643 11.608,20.997 Z"
              fill="none"
              stroke="#FFFFFF"
              stroke-width="2"
            />
            <polygon
              fill="#FFFFFF"
              points="11.6088821 20.7401246 2.75612655 13.9281622 21.0170855 13.9281622 15.20211 19.2051277"
            />
          </>
        );
      case 2:
        return (
          <>
            <path
              d="M11.608,20.997 C-11.039,8.643 5.34,-6.716 11.608,3.628 C17.877,-6.716 34.257,8.643 11.608,20.997 Z"
              fill="none"
              stroke="#FFFFFF"
              stroke-width="2"
            />
            <polygon
              id="Path-6"
              fill="#FFFFFF"
              points="11.7214222 21.1625794 2.44396401 13.9217537 1.49129191 11.7823096 0.157186012 7.94738486 23.065076 7.94738486 21.6009573 12.4860887 18.657881 16"
            />
          </>
        );
      case 3:
        return (
          <>
            <path
              d="M197.245685,85.7766447 C174.598685,73.4226447 190.977685,58.0636447 197.245685,68.4076447 C203.514685,58.0636447 219.894685,73.4226447 197.245685,85.7766447 Z"
              fill="none"
            />
          </>
        );
      default:
        console.log(progression);
    }
  }

  render() {
    let { progression } = this.state;
    const { progress } = this.props;
    progress.forEach(function(point) {
      if (point) {
        progression = progression + 1;
      }
    });
    console.log(progression)
    return (
      <HeartCounterContainer>
        {/* <svg viewBox="0 0 35 35" preserveAspectRatio="none">{this.renderPath(progression)}</svg> */}
        <svg>{this.renderPath(progression)}</svg>
        <p>{progression} / 3</p>
      </HeartCounterContainer>
    );
  }
}

export default HeartCounter;
