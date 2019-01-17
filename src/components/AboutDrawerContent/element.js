import styled from "styled-components";

export const DrawerLayout = styled.div`
  height: -webkit-fill-available;
  height: fill-available;
  width: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .line {
    opacity: 0.1;
    position: absolute;
    background: white;
  }

  .line__top {
    top: 5vh;
    left: 0;
    width: 100vw;
    height: 1px;
  }
  .line__bottom {
    bottom: 5vh;
    left: 0;
    width: 100vw;
    height: 1px;
  }
  .line__left {
    left: 5vh;
    width: 1px;
    height: 100vh;
  }
  .line__right {
    right: 5vh;
    width: 1px;
    height: 100vh;
  }
  marquee {
    position: absolute;
    z-index: 0;
    font-family: GTCinetype;
    font-size: 200px;
    color: white;
    z-index: 0;
    opacity: 0.1;
  }
`;

export const AboutLayout = styled.div`
  position: relative;
  z-index: 5;
  height: 100%;
  width: 50%;
  margin: 0 auto;
`;

export const About = styled.div`
  height: auto;
  font-family: GTCinetype;
  color: #ffffff;
  text-align: center;
  font-weight: lighter;
  font-style: normal;
  font-stretch: normal;

  #About-title {
    font-size: 50px;
    line-height: 0.4;
  }

  #About-text {
    margin-top: 7vh;
    font-size: 14px;
    p {
      font-size: 14px;
      line-height: 2.07;
      letter-spacing: normal;
    }
  }
`;
