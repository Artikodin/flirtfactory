import styled from "styled-components";

export const IntroVideoWrapper = styled.div`
  video {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;

    @media screen and (max-aspect-ratio: 1920/1080) {
      height: 100%;
    }
    @media screen and (min-aspect-ratio: 1920/1080) {
      width: 100%;
    }
  }
`;
