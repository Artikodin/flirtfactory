import styled from "styled-components";

export const GlobalContainer = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  z-index: 5;
  opacity: 1;
`;

export const Wrapper = styled.div`
  /* display: inline-flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: flex-start; */
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

export const Container = styled.div`
  display: inline-block;
  height: auto;
  transform-origin: top center;
  position: relative;
  width: 300px;
  box-sizing: border-box;
  text-align: justify;
  line-height: 1.5;
  border: solid 1px white;
  border-top: none;
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
`;

export const Paragraph = styled.div`
  color: white;
  flex-shrink: 0;
  font-size: 14px;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #ffffff;
  padding: 5%;
  box-sizing: border-box;
  /* padding: 25px 40px; */
  max-height: 260px;
  width: 100%;
  overflow: auto;

  p {
    margin-bottom: 10px;
  }
`;
