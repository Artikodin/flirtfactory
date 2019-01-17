import styled from "styled-components";

export const DragAndDropContainer = styled.div`
  position: absolute;
  top: 10vh;
  right: 30vw;
  width: 455px;
  z-index: 50;
  margin: 0 auto;
`;

export const Round = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid white;
  border-radius: 50%;
  .hide {
    display: none;
  }
`;
