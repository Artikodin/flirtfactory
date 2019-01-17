import styled from "styled-components";

export const GlobalContainer = styled.div`
  display: inline-block;

  position: absolute;
  z-index: 5;
  top: ${({ yPos }) => yPos};
  left: ${({ xPos }) => xPos};
`;

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Container = styled.div`
  height: auto;
  transform-origin: top center;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  text-align: justify;
  line-height: 1.5;
  border: solid 1px white;
  border-top: none;

  &:after {
    content: "";
    background-image: url("./assets/img/noise.gif");
    opacity: 0.1;
    background-size: 80px;
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
  position: absolute;
  width: 242px;
  border: solid 1px white;
  border-left: none;
  height: 45px;
  line-height: 45px;
  padding-left: 10px;
  left: 47px;
  transform-origin: center left;
`;

export const Paragraph = styled.div`
  color: #fff;
  font-size: 14px;
  padding: 25px 40px;
  max-height: 260px;
  overflow: auto;

  p {
    margin-bottom: 10px;
  }
`;

export const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 45px;
  min-width: 45px;

  border: solid 1px white;
`;

export const Icon = styled.img``;
