import styled from "styled-components";

export const DragAndDropContainer = styled.div`
  /* position: absolute; */
  /* right: 10vw; */
  top: 0;
  /* width: 453px; */
  /* height: 10vh; */
  height: auto;
  z-index: 50;
  margin: 0 auto;

  canvas {
    position: relative;
    width: 100vw;
    height: 100vh;
    border: 2px solid red;
  }

  >video {
    display: none;
  }
`;

export const Round = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid white;
  border-radius: 50%;
`;
