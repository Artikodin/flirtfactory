import styled from "styled-components";

export const CatchphraseWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  border: 1px solid white;
  width: 100%;
  height: 100%;
  z-index: 50;
`;

export const CatchphraseContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 70%;
  border: 1px solid red;

  .catchphrase--title {
    font-family: GTCinetype;
    font-size: 4em;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -1.2px;
    text-align: center;
    color: #ffffff;
  }

  .catchphrase--img {
    img {
      max-height: 200px;
      height: 100%;
      border-radius: 50%;
    }
  }

  .catchphrase--catchphrase {
    font-family: GTCinetype;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.5px;
    color: #ffffff;
  }

  .catchphrase--catchphrase {
    font-family: GTCinetype;
    font-size: 40px;
    font-weight: normal;
    font-style: italic;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.5px;
    color: #ffffff;
  }
`;
