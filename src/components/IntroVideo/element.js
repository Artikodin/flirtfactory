import styled from "styled-components";

export const IntroVideoWrapper = styled.div`
  position: absolute;
  z-index: 100;
  height: 100vh;
  width: 100vw;

  .intro--startscreen {
    z-index: 1;
    height: 100%;
    width: 100%;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      width: 100%;

      > div {
        max-width: 5vw;
        height: auto;
      }

      #start {
        background: none;
        border: none;
        z-index: 0;
        display: block;
        margin: 0 auto;
        left: 0;
        right: 0;
      }
    }
  }

  #skip {
    position: absolute;
    background: none;
    border: none;
    z-index: 5;
    right: 30px;
    bottom: 30px;
  }

  video {
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
`;

export const VideoWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
`;
