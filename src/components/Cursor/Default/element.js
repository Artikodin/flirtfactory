import styled from "styled-components";

export const OutsideCircle = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: solid 1px white;
  background-color: rgba(255, 255, 255, 0.1);
  margin: auto;
  position: absolute;
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
