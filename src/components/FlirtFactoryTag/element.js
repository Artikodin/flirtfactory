import styled from "styled-components";

export const Picto = styled.img`
  width: 60px;
  height: auto;
  position: absolute;
  z-index: 20;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

export const Svg = styled.svg`
  position: absolute;
  z-index: 20;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

export const Path = styled.path`
  transition: fill 0.25s ease-out;
`;
