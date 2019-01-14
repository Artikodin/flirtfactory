import styled from "styled-components";

export const DrawerNav = styled.nav`
  height: 6.5vh;
  width: 100%;
  background-color: #121c2f;
  display: flex;
  align-items: center;

  ul {
    display: flex;

    li {
      list-style-type: none;
      font-family: GTCinetype;
      font-size: 21px;
      font-weight: bold;
      color: #ffffff;
      margin-left: 40px;
      opacity: 0.3;
    }
    .active {
      opacity: 1;
    }
  }
`;
