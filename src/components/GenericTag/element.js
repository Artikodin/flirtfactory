import styled from "styled-components";

export const GlobalContainer = styled.div`
  display: inline-block;

  position: absolute;
  z-index: 5;
  top: ${({ yPos }) => yPos};
  left: ${({ xPos }) => xPos};
  opacity: 0.1;
  transition: opacity 0.5s ease;
`;

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  justify-content: flex-start;

  .hide {
    display: none;
  }
`;

export const Container = styled.div`
  height: auto;
  transform-origin: top center;
  position: absolute;
  top: 94%;
  left: 0;
  right: 0;
  text-align: justify;
  line-height: 1.5;
  border: solid 1px white;
  border-top: none;
  background: rgba(255, 255, 255, 1);

  &:after {
    content: "";
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
  color: #000;
  font-size: 14px;
  padding: 15px 15px;
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
  border: solid 1px white;
  height: 45px;
  min-width: 45px;
  transition: all 0.5s ease-in;

  &:hover {
    border: solid 1px white;
  }
  color: #000;
`;

export const Icon = styled.img`
  color: #000;
  height: 60%;
`;
