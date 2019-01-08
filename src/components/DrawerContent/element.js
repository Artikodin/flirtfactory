import styled from "styled-components";

export const DrawerLayout = styled.div`
  height: -webkit-fill-available;
  height: fill-available;
  width: 100%;
  overflow: auto;
`;

export const MainContentLayout = styled.div`
  height: 100%;
  width: 60%;
  margin: 0 auto;
`;

export const MainContent = styled.div`
  height: auto;
  width: 100%;
  margin-top: 10vh;

  #MainContent-date {
    font-family: GTCinetype;
    font-size: 14px;
    letter-spacing: 1.9px;
    text-align: center;
    color: #ffffff;
  }

  #MainContent-title {
    font-family: GTCinetype;
    font-size: 72px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.4;
    color: #ffffff;
    text-align: center;
  }

  #MainContent-text {
    margin-top: 7vh;
    p {
      font-family: GTCinetype;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 2.07;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
      margin-bottom: 2.5vh;
    }
  }

  #MainContent-gallery {
    margin-top: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .ContentImg {
      max-width: 45%;
      img {
        width: 100%;
        height: auto;
      }
      figcaption {
        font-family: GTCinetype;
        font-size: 14px;
        font-style: italic;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 1.9px;
        text-align: right;
        color: #ffffff;
      }
    }
  }
`;
