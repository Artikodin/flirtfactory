import React from "react";
import { ProgressContext } from "..";
/* eslint-disable */

const TestClick = () => (
  <ProgressContext.Consumer>
    {({ ages, selectAges }) => {
      console.log("ages", ages);
      return (
        <button
          onClick={() => selectAges("futur")}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex: "10000"
          }}
        >
          click me
        </button>
      );
    }}
  </ProgressContext.Consumer>
);

export default TestClick;
