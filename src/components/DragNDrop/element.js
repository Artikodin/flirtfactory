import styled from "styled-components";

export const Svg = styled.svg`
  visibility: visible;
  opacity: 1;
  transition: all 1s ease-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 10;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

export const Circle = styled.circle`
  &:hover {
    transition: all 200ms ease-in;
    fill: white;
  }
`;
