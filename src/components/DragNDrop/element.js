import styled from "styled-components";

export const Svg = styled.svg`
  visibility: visible;
  opacity: 1;
  transition: all 1s ease-out;
  position: absolute;
  z-index: 10;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

export const Circle = styled.circle`
  transition: fill 0.35s ease-out;
`;

export const Gear = styled.path`
  transition: fill 0.35s ease-out;
`;
