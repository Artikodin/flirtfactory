import styled from "styled-components";

export const GlobalContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  z-index: 5;
  opacity: 1;
`;

export const Wrapper = styled.div`
  height: 45px;
`;

export const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: solid 1px white;
  height: 45px;
  width: 45px;
  box-sizing: border-box;
  transition: all 0.5s ease-in;
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
`;

export const Paragraph = styled.div`
  color: white;
  flex-shrink: 0;
  font-size: 14px;
  font-style: normal;
  font-stretch: normal;
  line-height: 2em;
  letter-spacing: normal;
  color: #ffffff;
  padding: 5%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  /* padding: 25px 40px; */
  max-height: 260px;
  width: 100%;
  overflow: auto;
  user-select: none;

  p {
    margin-bottom: 10px;
  }
`;
