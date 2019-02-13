import styled from "styled-components";

export const DrawerLayout = styled.div`
  height: -webkit-fill-available;
  height: fill-available;
  width: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  #marquee {
    position: absolute;
    margin-left: 0%;
    /* left: 100vw; */
    /* width: 200vw; */
    z-index: 0;
    text-align: left;
    font-family: GTCinetype;
    font-size: 200px;
    color: white;
    z-index: 0;
    opacity: 0.1;
    width: 10000%;
    -webkit-animation: linear marqueelike 20s infinite;
    -moz-animation: linear marqueelike 20s infinite;
    -o-animation: linear marqueelike 20s infinite;
    -ms-animation: linear marqueelike 20s infinite;
    animation: linear marqueelike 20s infinite;

    @-webkit-keyframes marqueelike {
      0%,
      100% {
        margin-left: 0;
      }
      99.99% {
        margin-left: -100%;
      }
    }
    @-moz-keyframes marqueelike {
      0%,
      100% {
        margin-left: 0;
      }
      99.99% {
        margin-left: -100%;
      }
    }
    @-o-keyframes marqueelike {
      0%,
      100% {
        margin-left: 0;
      }
      99.99% {
        margin-left: -100%;
      }
    }
    @-ms-keyframes marqueelike {
      0%,
      100% {
        margin-left: 0;
      }
      99.99% {
        margin-left: -100%;
      }
    }
    @keyframes marqueelike {
      0%,
      100% {
        margin-left: 0;
      }
      99.99% {
        margin-left: -100%;
      }
    }
  }

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
