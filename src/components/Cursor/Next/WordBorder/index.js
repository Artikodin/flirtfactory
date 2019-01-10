/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Rotation, CircularLetter } from "./element";

const WordBorder = React.forwardRef(({ children }, ref) => {
  const circularLetter = children.split("").map((letter, index) => (
    <CircularLetter key={index} rotate={(index * 360) / (children.length + 1)}>
      {letter}
    </CircularLetter>
  ));
  return (
    <Wrapper ref={ref}>
      <Rotation>{circularLetter}</Rotation>
    </Wrapper>
  );
});

WordBorder.propTypes = {
  children: PropTypes.string,
  ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
};

WordBorder.defaultProps = {
  children: "",
  ref: null
};

export default React.memo(WordBorder);
