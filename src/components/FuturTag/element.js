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
  animation: bounce 0.6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  background-color: white;

  &:hover {
    background: none;
    transition: fill 0.35s ease-out;

    path {
      fill: white;
      transition: fill 0.35s ease-out;
    }
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

export const Gear = styled.path`
  transition: fill 0.35s ease-in;
  fill: #68759f;
`;
