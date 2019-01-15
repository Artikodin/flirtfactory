import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 999;
  top: ${({ yPos }) => yPos};
  left: ${({ xPos }) => xPos};
  /* mix-blend-mode: soft-light; */

  height: 45px;
  width: 45px;

  border: solid 1px white;
`;

export const Container = styled.div`
  height: auto;
  transform-origin: top center;
  position: absolute;
  top: 100%;
  left: -1px;
  right: -1px;
  text-align: justify;
  padding: 25px 40px;
  border: solid 1px white;
  &:after {
    content: "";
    background-image: url("./assets/img/noise.gif");
    background-size: 80px;
    opacity: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

export const Title = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding-bottom: 10px;
`;

export const Paragraph = styled.div`
  color: #fff;
  font-size: 14px;
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  left: 23px;
`;
