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
  transition: all 0.4s ease;
  opacity: 0.45;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    padding-top: 4px;
  }
`;
