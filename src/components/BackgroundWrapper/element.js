import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  img {
    z-index: 50;
  }
  video {
    /* position: fixed;
    min-width: 100%;
    min-height: 100vh; */
    /* right: 0;
    bottom: 0;
    width: 100%;
    min-width: 100%;
    min-height: 100vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 0%); */

    @media (max-width: 1200px) {
      height: 100%;
      width: auto;
    }
  }
`;
