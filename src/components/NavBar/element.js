import styled from "styled-components";

export const Wrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  display: flex;
  align-items: flex-end;
  max-width: 1100px;
  width: calc(100% - 80px);
  z-index: 1;

  .active a span {
    opacity: 1;
  }

  @media screen and (max-width: 1250px) {
    max-width: 1200px;
    width: calc(100% - 60px);
  }
`;
