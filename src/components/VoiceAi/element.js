import styled from "styled-components";

export const Wrapper = styled.div`
  visibility: visible;
  opacity: 1;
  transition: all 1s ease-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 10;
  border: solid 1px white;
  height: 45px;
  width: 300px;
`;
