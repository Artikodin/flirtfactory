import React from "react";

import PropTypes from "prop-types";

import { Picto } from "./element";

/* eslint-disable */

const FlirtFactoryTag = ({
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
    <Picto
      src={`./assets/ui/flirtfactory/${name}.svg`}
      left={left}
      top={top}
      onClick={() => handleClick(agenb)}
    />
  );
};

/**
 * PropTypes Validation.
 */
const { string, bool, func, number } = PropTypes;
FlirtFactoryTag.propTypes = {
  name: string.isRequired,
  agenb: number.isRequired,
  handleClick: func,
  color: string,
  height: string,
  width: string,
  top: string,
  left: string,
  spin: bool
};

/**
 * Default props.
 */
FlirtFactoryTag.defaultProps = {
  color: "white",
  height: "20",
  width: "20",
  top: "0",
  left: "0",
  handleClick: () => {},
  spin: false
};

export default FlirtFactoryTag;
