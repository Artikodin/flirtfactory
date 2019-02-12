import styled from "styled-components";

export const Wrapper = styled.div`
  /* z-index: 1; */
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

export const TransitionLayer = styled.div`
  z-index: 100000;
  height: 10vh;
  width: 100vw;
  position: absolute;
  background-color: red;
`;
