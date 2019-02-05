import styled from "styled-components";

export const HeartCounterContainer = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  z-index: 5;
  opacity: 1;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  box-sizing: border-box;

  p {
    margin-top: 4px;
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: 1px;
    text-align: center;
    color: #ffffff;
  }
  svg {
    display: block;
    width: 20px;
    height: 20px;
  }
`;
