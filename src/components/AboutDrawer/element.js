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
  z-index: 10;

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
  right: 0;
  top: 0;
  margin: 30px;
  padding: 4px;
  /* border: 1px solid white; */
  background: none;
  border: none;
  width: 30px;
  height: 30px;
  margin-right: 30px;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  /* div {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.45;
    color: white;
    font-size: 22px;
  } */
`;
