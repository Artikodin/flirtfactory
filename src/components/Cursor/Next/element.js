import styled, { keyframes } from "styled-components";

const breath = keyframes`
  0% { transform: translate3d(-50%, -50%, 0) scale(0.3); }
  50% { transform: translate3d(-50%, -50%, 0) scale(0.4); }
`;

export const OutsideCircle = styled.div`
  height: 45px;
  position: absolute;
  transform: rotate(0deg);
  transform-origin: 0 100%;
`;

export const InnerDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: white;
  margin: auto;
  z-index: 1;
  position: absolute;
`;

export const InnerBackground = styled.div`
  width: 50px;
  height: 50px;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.4);
  transform: translate3d(-50%, -50%, 0) scale(0.3);
  animation: ${breath} 2s infinite ease-in-out;
  animation-play-state: running;
`;
