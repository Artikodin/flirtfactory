import React from "react";
import { ProgressContext } from "..";

const EndingButton = () => (
  <ProgressContext.Consumer>
    {({ ages }) => {
      let show = true;
      /* eslint-disable */
      for (const i in ages) {
        if (ages[i] === false) {
          show = false;
          break;
        }
      }
      /* eslint-disable */

      return (
        show && (
          <button
            type="button"
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              zIndex: "10000"
            }}
          >
            Access to the last page
          </button>
        )
      );
    }}
  </ProgressContext.Consumer>
);

export default EndingButton;
