import React from "react";

import PropTypes from "prop-types";

import { pictoPath } from "./pictoPath";

/* eslint-disable */

const Picto = ({ color, name, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
      width={width}
      height={height}
      viewBox="0 0 512 512"
    >
      <path fill={color} fillRule="evenodd" d={pictoPath[name]} />
    </svg>
  );
};

/**
 * PropTypes Validation.
 */
const { string, bool } = PropTypes;
Picto.propTypes = {
  name: string.isRequired,
  color: string,
  height: string,
  width: string,
  spin: bool
};

/**
 * Default props.
 */
Picto.defaultProps = {
  color: "white",
  height: "20",
  width: "20",
  spin: false
};

export default Picto;
