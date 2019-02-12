import React from "react";

import PropTypes from "prop-types";
import posed, { PoseGroup } from "react-pose";

import { Svg, Gear } from "./element";

/* eslint-disable */

const FuturTag = ({
  color,
  name,
  agenb,
  width,
  height,
  top,
  left,
  handleClick
}) => {
  return (
    <AnimatedSvg
      version="1.1"
      baseProfile="full"
      width={height}
      height={width}
      xmlns="http://www.w3.org/2000/svg"
      left={left}
      top={top}
      onClick={() => handleClick(agenb)}
      viewBox="0 0 512 512"
    >
      <Gear
        d="M144.61,255c0-61.12,49.65-110.67,110.89-110.67S366.39,193.88,366.39,255S316.74,365.67,255.5,365.67
        c-29.41,0-57.61-11.66-78.41-32.41C156.29,312.5,144.61,284.35,144.61,255z M211.91,500.13c28.83,5.16,58.35,5.16,87.19,0
        l15.59-57.27c11.02-3.47,21.72-7.9,31.96-13.26l51.67,29.53c24.03-16.78,44.92-37.64,61.73-61.62l-29.59-51.57
        c5.36-10.22,9.81-20.89,13.29-31.88l57.39-15.56c5.17-28.77,5.17-58.24,0-87.01l-57.39-15.56c-3.48-11-7.92-21.68-13.28-31.9
        l29.59-51.57c-16.81-23.98-37.71-44.83-61.74-61.6L346.63,80.4c-10.24-5.35-20.93-9.79-31.95-13.26L299.09,9.87
        c-28.83-5.16-58.35-5.16-87.19,0l-15.59,57.27c-11.02,3.47-21.72,7.9-31.96,13.25l-51.67-29.53C88.66,67.64,67.77,88.5,50.96,112.48
        l29.59,51.57c-5.36,10.22-9.81,20.89-13.29,31.88L9.87,211.49c-5.17,28.77-5.17,58.24,0,87.01l57.39,15.57
        c3.48,11,7.92,21.68,13.28,31.9l-29.59,51.57c16.81,23.98,37.71,44.83,61.74,61.6l51.67-29.53c10.24,5.35,20.93,9.79,31.95,13.26
        L211.91,500.13z"
        />
    </AnimatedSvg>
  );
};

/**
 * PropTypes Validation.
 */
const { string, func, number } = PropTypes;
FuturTag.propTypes = {
  name: string.isRequired,
  agenb: number.isRequired,
  handleClick: func,
  color: string,
  height: string,
  width: string,
  top: string,
  left: string,
};

/**
 * Default props.
 */
FuturTag.defaultProps = {
  color: "white",
  height: "20",
  width: "20",
  top: "0",
  left: "0",
  handleClick: () => {}
};

const AnimatedSvg = posed(Svg)({
  exit: { scaleY: 0, opacity: 0 },
  enter: { scaleY: 1, opacity: 1, delay: 280 }
});

export default FuturTag;
