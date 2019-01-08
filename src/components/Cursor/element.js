import styled from "styled-components";

export const Pointer = styled.div`
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const OutsideCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: solid 2px white;
  background-color: rgba(255, 255, 255, 0.2);
  margin: auto;
  position: absolute;
`;

export const InnerDot = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: white;
  margin: auto;
  z-index: 1;
  position: absolute;
  /* &::before {
    content: "";
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    transform: scale(2);
    opacity: 0.4;
    z-index: -1;
  } */
`;
