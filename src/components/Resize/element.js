import styled from "styled-components";

export const ResizeWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 999;
  display: none;

  img {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-aspect-ratio: 1920/1080) {
      height: 100%;
    }
    @media screen and (min-aspect-ratio: 1920/1080) {
      width: 100%;
    }
  }
  @media (max-width: 640px) {
    display: block;
  }
`;
