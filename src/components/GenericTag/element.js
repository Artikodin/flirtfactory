import styled from "styled-components";

/* GENERIC TAG */

export const GlobalContainer = styled.div`
  display: inline-block;

  position: absolute;
  z-index: 5;
  top: ${({ yPos }) => yPos};
  left: ${({ xPos }) => xPos};
  opacity: ${({ unlocked }) => (unlocked ? "1" : "0.1")};
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

export const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: solid 1px white;
  height: 45px;
  min-width: 45px;
  transition: all 0.5s ease-in;
  box-sizing: border-box;

  &:hover {
    border: solid 1px white;
  }
`;

export const Title = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  position: absolute;
  width: 255px;
  border: solid 1px white;
  border-left: none;
  height: 45px;
  line-height: 45px;
  padding-left: 10px;
  left: 45px;
  transform-origin: center left;
  box-sizing: border-box;
`;

export const Container = styled.div`
  height: auto;
  transform-origin: top center;
  position: absolute;
  top: 99%;
  left: 0;
  right: 0;
  text-align: left;
  line-height: 1.5;
  border: solid 1px white;
  border-top: none;
  background: rgba(255, 255, 255, 1);
  overflow: hidden;
  -webkit-clip-path: polygon(
    100% 0,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    0 100%,
    0 0
  );
  clip-path: polygon(
    100% 0,
    100% calc(100% - 30px),
    calc(100% - 30px) 100%,
    0 100%,
    0 0
  );
`;

export const Paragraph = styled.div`
  color: #1c1e33;
  font-size: 14px;
  padding: 15px 15px;
  line-height: 1.8em;
  max-height: 260px;
  overflow: auto;
  padding: 5%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  p {
    margin-bottom: 10px;
  }
`;

export const Icon = styled.img`
  height: 60%;
`;
