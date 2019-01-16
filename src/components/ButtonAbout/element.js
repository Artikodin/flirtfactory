import styled from "styled-components";

export const ButtonAboutWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 30px;
  padding: 4px;
  border: 1px solid white;
  width: 30px;
  height: 30px;
  margin-right: 30px;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.45;
    color: white;
    font-size: 22px;
  }
`;
