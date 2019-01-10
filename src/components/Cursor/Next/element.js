import styled from "styled-components";

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
  width: 8px;
  height: 8px;
  top: 0;
  left: 0;
  border-radius: 50%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.4);
  transform: scale(2);
`;
