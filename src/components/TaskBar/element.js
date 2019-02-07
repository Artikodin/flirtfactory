import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 4;
  display: flex;
  text-align: right;
  flex-direction: column;
  align-items: flex-end;
  & > div:not(:first-of-type) {
    margin-top: 15px;
  }
`;