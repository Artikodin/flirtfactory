import styled from "styled-components";

export const Svg = styled.svg`
  border-radius: 50%;
  padding: 15px;
  border: 1px solid white;
  visibility: visible;
  opacity: 1;
  transition: all 1s ease-out;
  position: absolute;
  z-index: 5;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transition: fill 0.35s ease-in;

  &:hover {
    background-color: white;
    transition: fill 0.35s ease-out;

    path {
      fill: #68759f;
      transition: fill 0.35s ease-out;
    }
  }
`;

export const Gear = styled.path`
  transition: fill 0.35s ease-in;
  fill: white;
`;
