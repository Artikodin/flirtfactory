import styled from "styled-components";

export const Picto = styled.img`
  width: 60px;
  height: auto;
  position: absolute;
  z-index: 5;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transition: all 0.4s ease;
  animation: bounce 0.6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;

  &:hover {
    transform-origin: bottom center;
    transform: scale(1.1);
    opacity: 0.8;
  }

  @keyframes bounce {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, 5px, 0);
    }
  }
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
