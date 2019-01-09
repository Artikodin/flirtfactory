import styled from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  background-color: rgb(18, 28, 47, 1);
  height: 100vh;
  width: 70vw;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 4;

  &:after {
    content: "";
    background-image: url("./assets/img/noise.gif");
    opacity: 0.05;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;
