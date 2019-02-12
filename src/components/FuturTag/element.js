import styled from "styled-components";

export const Svg = styled.svg`
  visibility: visible;
  opacity: 1;
  transition: all 1s ease-out;
  position: absolute;
  z-index: 5;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

export const Gear = styled.path`
  transition: fill 0.35s ease-out;
  /* fill={hover ? "#68759f" : "white"} */
`;

export const Circle = styled.circle`
  transition: fill 0.35s ease-out;
`;
// fill={hover ? "white" : "transparent"}
