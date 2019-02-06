import styled from "styled-components";

export const BackgroundVideoWrapper = styled.div`
  perspective: 40px;
  div {
    transition: transform 0.5s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    img {
      z-index: 50;
    }
  }
`;
