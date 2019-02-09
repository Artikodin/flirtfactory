import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 4;
  display: flex;
  text-align: right;
  flex-direction: column;
  align-items: flex-end;
  & > div:not(:first-of-type) {
    margin-top: 15px;
  }
`;

export const HeartCounterToAnimate = styled.div``;
