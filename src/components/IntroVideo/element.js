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
        background: rgba(255, 255, 255, 0.15);
        text-transform: uppercase;
        border-radius: 30px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        padding: 12px;
        z-index: 0;
        display: block;
        margin: 5vh auto 0 auto;
        left: 0;
        right: 0;
        font-family: GTCinetype;
        font-size: 13px;
        letter-spacing: 1px;
        color: #ffffff;
        transition: all 0.4s ease;

        &:hover {
          transition: all 0.4s ease;
          background: rgba(255, 255, 255, 0.3);
        }
      }
    }
  }

  #skip {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
    margin: 0 auto;
    width: 200px;
    z-index: 0;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 30px;
    padding: 12px;
    font-family: GTCinetype;
    font-size: 12px;
    font-style: italic;
    letter-spacing: 1px;
    color: #ffffff;
    transition: all 0.4s ease;

    &:hover {
      transition: all 0.4s ease;
      background: rgba(255, 255, 255, 0.3);
    }
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
