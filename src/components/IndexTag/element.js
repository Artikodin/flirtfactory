import styled from "styled-components";

/* INDEX TAG */

export const GlobalContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  z-index: 6;
  opacity: 1;
  transition: opacity 0.5s ease;
`;

export const Wrapper = styled.div`
  height: 45px;
`;

export const Wave = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: solid 1px white;
  height: 45px;
  width: 45px;
  box-sizing: border-box;
  transition: all 0.2s ease-in;
`;

export const Title = styled.div`
  display: inline-block;
  text-align: left;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  position: absolute;
  width: 255px;
  border: solid 1px white;
  border-right: none;
  height: 45px;
  line-height: 45px;
  box-sizing: border-box;
  padding-left: 10px;
  right: 45px;
  transform-origin: center right;
  user-select: none;
`;

export const Container = styled.div`
  display: inline-block;
  height: auto;
  transform-origin: top center;
  position: relative;
  width: 300px;
  box-sizing: border-box;
  text-align: left;
  line-height: 1.5;
  border: solid 1px white;
  box-sizing: border-box;
  border-top: none;
  background: rgba(255, 255, 255, 1);
`;

export const Paragraph = styled.div`
  flex-shrink: 0;
  color: #1c1e33;
  font-size: 14px;
  /* padding: 15px 15px; */
  line-height: 1.8em;
  max-height: 260px;
  overflow: auto;
  padding: 5%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: 100%;
  overflow: auto;
  user-select: none;

  p {
    margin-bottom: 10px;
  }
`;
