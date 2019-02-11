import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100vw;
  height: 100vh;
  /* top: 0; */
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 60;
  overflow: hidden;

  video {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    @media screen and (max-aspect-ratio: 1920/1080) {
      /* height: 100%; */
    }
    @media screen and (min-aspect-ratio: 1920/1080) {
      /* width: 100%; */
    }
  }
`;
