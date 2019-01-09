import styled from "styled-components";

export const OutsideCircle = styled.div`
  height: 45px;
  position: absolute;
  transform: rotate(0deg);
  transform-origin: 0 100%;
`;

export const InnerDot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: white;
  margin: auto;
  z-index: 1;
  position: absolute;
`;
