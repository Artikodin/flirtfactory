import styled from "styled-components";

export const TutorialWrapper = styled.div`
  background: black;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 50;

  video {
    position: absolute;
    width: 100%;
    mix-blend-mode: screen;
  }
`;
