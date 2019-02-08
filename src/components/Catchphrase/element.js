import styled from "styled-components";

export const CatchphraseWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 1);
  width: 100%;
  height: 100%;
  z-index: 50;
  display: flex;
  flex-direction: row;
`;

export const CatchphraseContainer = styled.div`
  flex-grow: 1;
  position: relative;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10%;

  #catchphrase--close {
    position: absolute;
    left: 0;
    top: 0;
    background: none;
    border: none;
  }

  #catchphrase--container {
    text-align: left;
    height: 60%;
    position: relative;

    .catchphrase--catchphrase {
      position: relative;
      font-family: GTCinetype;
      font-size: 2rem;
      font-weight: normal;
      font-style: italic;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #516081;

      &:before {
        height: auto;
        position: absolute;
        display: block;
        left: -30px;
        top: -30px;
        transform: rotate(180deg);
        content: url("./assets/ui/guillemets.png");
      }
      &:after {
        height: auto;
        position: absolute;
        display: block;
        right: -30px;
        bottom: -30px;
        content: url("./assets/ui/guillemets.png");
      }
    }

    .catchphrase--title {
      position: relative;
      margin-top: 5vh;
      display: flex;
      align-items: center;
      justify-content: space-around;

      h1 {
        font-family: GTCinetype;
        font-size: 26px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #516081;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      .catchphrase--line {
        position: relative;
        margin: 0 5%;
        width: 100%;
        height: 1px;
        background: #516081;
      }
    }

    .catchphrase--summary {
      opacity: 0.61;
      font-family: GTCinetype;
      font-size: 14px;
      font-weight: normal;
      /* font-style: italic; */
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #516081;
    }

    .catchphrase--nav {
      position: absolute;
      bottom: 0;
      margin-top: 10vh;

      .catchphrase--btn {
        display: inline-block;
        background: none;
        border: none;

        .rect {
          transition: all 0.2s ease-out;
        }
        .polyline {
          transition: all 0.2s ease-out;
        }

        &:hover {
          .rect {
            transition: all 0.2s ease-in;
            fill: #516081;
          }
          .polyline {
            transition: all 0.2s ease-in;
            stroke: white;
          }
        }
      }
    }
  }
`;

export const CatchphraseVideoContainer = styled.div`
  width: 100vh;
  height: 100vh;
  position: relative;
  box-sizing: border-box;

  video {
    height: 100%;
  }
`;
