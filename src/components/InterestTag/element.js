import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 999;
  top: ${({ yPos }) => yPos};
  left: ${({ xPos }) => xPos};

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
  background: rgba(255, 255, 255, 0.1);
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
