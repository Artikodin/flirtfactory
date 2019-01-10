import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const CircularLetter = styled.span`
  text-align: center;
  font-size: 9px;
  height: 35px;
  width: 10px;
  position: absolute;
  transform: ${({ rotate }) => `rotate(${rotate}deg) translate3d(-50%, 0, 0)`};
  z-index: 100;
  color: #fff;
  bottom: 50%;
  left: 50%;
  transform-origin: 0 100%;
`;

export const Rotation = styled.span`
  position: absolute;
  height: 8px;
  width: 8px;
  animation: ${rotation} 13s linear infinite;
`;

export const Wrapper = styled.span`
  position: absolute;
  height: 8px;
  width: 8px;
`;
