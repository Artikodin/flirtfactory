import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 9998;
  top: 50%;
  left: 50%;

  height: 45px;
  width: 45px;

  background-color: blue;
  transform-origin: center;
  &:hover {
    background-color: red;
  }
`;
