import styled from "styled-components";

export const ButtonDrawerWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  padding: 30px;
  width: auto;
  height: auto;
  z-index: 4;
  img {
    width: 100%;
    height: auto;
    &:hover {
      cursor: pointer;
    }
  }
`;
