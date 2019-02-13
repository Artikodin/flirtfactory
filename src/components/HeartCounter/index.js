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

  hearth = React.createRef();

  state = {
    progression: 0
  };

  getProgression = (total, progression) => {
    switch (progression) {
      case 0:
        return (
          <path
            fill="none"
            stroke="white"
            strokeWidth="30"
            strokeMiterlimit="10"
            d="M256.6,473.51c-468.98-255.83-129.8-573.88,0-359.68C386.42-100.37,725.61,217.68,256.6,473.51z"
          />
        );
      case 1:
        switch (total) {
          case 2:
            return (
              <>
                <path d="M256.6,473.51c-468.98-255.83-129.8-573.88,0-359.68C386.42-100.37,725.61,217.68,256.6,473.51z" />
                <polygon
                  fill="white"
                  points="253.1,469.34 102,367.31 39,268 483,268 409,364.31 "
                />
              </>
            );
            break;
          case 3:
            return (
              <>
                <path d="M256.6,473.51c-468.98-255.83-129.8-573.88,0-359.68C386.42-100.37,725.61,217.68,256.6,473.51z" />
                <polygon
                  fill="white"
                  points="253.1,469.34 113,373.02 391.02,373.02 "
                />
              </>
            );
            break;
          case 4:
            return (
              <>
                <path d="M256.6,473.51c-468.98-255.83-129.8-573.88,0-359.68C386.42-100.37,725.61,217.68,256.6,473.51z" />
                <polygon
                  fill="white"
                  points="253.1,469.34 165.46,413.86 350.19,413.86 "
                />
              </>
            );
            break;
          default:
            return null;
        }
        break;
      case 2:
        switch (total) {
          case 2:
            return (
              <>
                <path
                  fill="white"
                  d="M256.6,473.51c-468.98-255.83-129.8-573.88,0-359.68C386.42-100.37,725.61,217.68,256.6,473.51z"
                />
              </>
            );
            break;
          case 3:
            return (
              <>
                <path d="M256.6,473.51c-468.98-255.83-129.8-573.88,0-359.68C386.42-100.37,725.61,217.68,256.6,473.51z" />
                <polygon
                  fill="white"
                  points="253.1,469.34 102,367.31 29,262 17,189 498,189 483,261 409,364.31 "
                />
              </>
            );
            break;
          case 4:
            return (
              <>
                <path d="M256.6,473.51c-468.98-255.83-129.8-573.88,0-359.68C386.42-100.37,725.61,217.68,256.6,473.51z" />
                <polygon
                  fill="white"
                  points="253.1,469.34 102,367.31 39,268 483,268 409,364.31 "
                />
              </>
            );
            break;
          default:
            return null;
        }
      case 3:
        switch (total) {
          case 3:
            return (
              <>
                <path
                  fill="white"
                  d="M256.6,473.51c-468.98-255.83-129.8-573.88,0-359.68C386.42-100.37,725.61,217.68,256.6,473.51z"
                />
              </>
            );
            break;
          case 4:
            return (
              <>
                <path d="M256.6,473.51c-468.98-255.83-129.8-573.88,0-359.68C386.42-100.37,725.61,217.68,256.6,473.51z" />
                <polygon
                  fill="white"
                  points="253.1,469.34 102,367.31 29,262 17,166.6 46,98 473,98 497,174.24 483,261 409,364.31 "
                />
              </>
            );
            break;
          default:
            return null;
        }
      case 4:
        switch (total) {
          case 4:
            return (
              <>
                <path
                  fill="white"
                  d="M256.6,473.51c-468.98-255.83-129.8-573.88,0-359.68C386.42-100.37,725.61,217.68,256.6,473.51z"
                />
              </>
            );
            break;
          default:
            return null;
        }
      default:
        return null;
    }
  };

  render() {
    let { progression } = this.state;
    const { progress } = this.props;
    console.log("progress", progress);
    progress.forEach(function(point) {
      if (point) {
        progression = progression + 1;
      }
    });
    return (
      <HeartCounterContainer>
        <svg
          ref={this.hearth}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="26px"
          height="24px"
          viewBox="0 0 512 512"
          fill="none"
          stroke="white"
          strokeWidth="30"
          strokeMiterlimit="10"
        >
          {this.getProgression(progress.length, progression)}
        </svg>

        <p>
          {progression} / {progress.length}
        </p>
      </HeartCounterContainer>
    );
  }
}

export default HeartCounter;
