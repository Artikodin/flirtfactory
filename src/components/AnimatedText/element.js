import styled, { keyframes } from "styled-components";

const blink = keyframes`
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
`;

export const Wrapper = styled.span`
  position: relative;
  &::after {
    content: " ";
    position: absolute;
    width: 2px;
    height: 14px;
    background-color: #1c1e33;
    right: 0;
    bottom: 0;
    transform: translate3d(100%, -40%, 0);
    animation: ${blink} 0.7s infinite ease-in-out;
  }
`;
