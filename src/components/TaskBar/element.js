import styled from "styled-components";

export const TaskBarWrapper = styled.div`
  width: 400px;
  position: absolute;
  width: fit-content;
  height: auto;
  padding: 30px;
  top: 0;
  right: 0;
  z-index: 4;
`;

export const TaskBarContainer = styled.div`
  position: relative;
  display: flex;
  text-align: right;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
