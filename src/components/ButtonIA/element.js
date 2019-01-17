import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform:rotate(0) scale(1) skew(1deg);
  }

  10% {
    transform:rotate(-20deg) scale(1) skew(1deg)
  }

  20% {
    transform:rotate(25deg) scale(1) skew(1deg)
  }

  30% {
    transform:rotate(-20deg) scale(1) skew(1deg)
  }

  40% {
    transform:rotate(25deg) scale(1) skew(1deg)
  }

  50% {
    transform:rotate(0) scale(1) skew(1deg)
  }

  100% {
    transform:rotate(0) scale(1) skew(1deg)
  }
`;

export const ButtonIAWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  width: 45px;
  height: 45px;
  z-index: 4;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 50%;
    height: auto;
    animation: ${rotate} 1s infinite ease-in-out;
    animation-play-state: running;
  }
`;
