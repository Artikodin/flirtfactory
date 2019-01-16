import styled from "styled-components";

export const DragAndDropContainer = styled.div`
  border: 2px solid green;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 50;
  margin: 0 auto;

  canvas {
    /* display: none; */
    position: absolute;
    border: 2px solid red;
  }

  > video {
    display: block;
    z-index: -50;
    position: absolute;
  }
`;

export const Round = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid white;
  border-radius: 50%;
  position: absolute;
`;
