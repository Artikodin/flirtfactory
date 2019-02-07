import styled from "styled-components";

export const CatchphraseWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background: #516081;
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
  border: 1px solid red;
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
