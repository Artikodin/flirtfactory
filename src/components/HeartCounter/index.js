import React from "react";

import { HeartCounterContainer } from "./element";

/* eslint-disable */

class HeartCounter extends React.Component {
  render() {
    return (
      <HeartCounterContainer>
        <svg viewBox="0 0 25 25">
          <path
            d="M11.608,21.997c-22.647-12.354-6.268-27.713,0-17.369C17.877-5.716,34.257,9.643,11.608,21.997z"
            fill="#FFFFFF"
          />
        </svg>
        <p>
          1 / 3
        </p>
      </HeartCounterContainer>
    );
  }
}

export default HeartCounter;
