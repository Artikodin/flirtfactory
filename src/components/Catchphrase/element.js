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
  padding: 0 8%;

  #catchphrase--container {
    text-align: left;
    height: 60%;
    position: relative;

    .catchphrase--catchphrase {
      position: relative;
      font-family: GTCinetype;
      font-size: 1.7rem;
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

    .catchphrase--author {
      display: block;
      position: relative;
      font-size: 0.7rem;
      font-style: normal;
      margin-top: 15px;
    }

    .catchphrase--title {
      position: relative;
      margin-top: 5vh;
      align-items: center;
      display: flex;

      h1 {
        font-family: GTCinetype;
        font-size: 1.2rem;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #516081;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-left: 10px;
      }
    }

    .catchphrase--summary {
      border-left: 1px solid #516081;
      padding-left: 5%;
      font-family: GTCinetype;
      font-size: 14px;
      font-weight: normal;
      /* font-style: italic; */
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #959EB2;
    }

    .catchphrase--link {
      display: block;
      font-family: GTCinetype;
      font-size: 14px;
      opacity: 1;
      color: #516081;
      text-decoration: underline;
      font-weight: normal;
      font-style: italic;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #516081;
      padding-top: 10px;
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

  #catchphrase--close {
    box-sizing: border-box;
    position: absolute;
    width: 50px;
    height: 50px;
    padding: 0px;
    background: white;
    border: none;
    right: 30px;
    top: 30px;
    transition: all 0.2s ease-in;

    &:hover {
      transition: all 0.2s ease-out;
      background: #516081;
      svg {
        fill: white;
      }
    }
  }

  video {
    height: 100%;
  }
`;
