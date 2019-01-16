import styled from "styled-components";

export const ButtonIAWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 30px;
  width: 30px;
  height: 30px;
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
