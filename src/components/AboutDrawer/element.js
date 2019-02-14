import styled from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  background-color: #060717;
  height: 100vh;
  width: 100vw;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 51;

  &:after {
    content: "";
    background-image: url("./assets/img/noise.gif");
    background-size: 80px;
    opacity: 0.12;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

export const ButtonAboutClose = styled.button`
  position: absolute;
  padding: 4px;
  background: none;
  border: none;
  width: 25px;
  height: 25px;
  margin: 3.5vh auto 0 auto;
  left: 0;
  right: 0;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover,
  &:focus {
    background: none;
    cursor: pointer;

    &:after {
      transition: height 0.2s ease-out;
      height: 80%;
    }
  }

  &:after {
    content: "";
    transition: height 0.2s ease-in;
    position: absolute;
    margin: 0 auto;
    top: -30px;
    left: 0;
    right: 0;
    width: 1px;
    background: white;
    height: 0%;
  }
`;
