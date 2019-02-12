import styled from "styled-components";

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

export const Container = styled.div`
  height: auto;
  transform-origin: top center;
  position: absolute;
  top: 94%;
  left: 0;
  right: 0;
  text-align: left;
  line-height: 1.5;
  border: solid 1px white;
  border-top: none;
  background: rgba(255, 255, 255, 1);
  /* background: red; */
  overflow: hidden;
  -webkit-clip-path: polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px);
  clip-path: polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px);

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
  color: #1C1E33;
  font-size: 14px;
  padding: 15px 15px;
  line-height: 1.8em;
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
`;

export const Icon = styled.img`
  height: 60%;
`;
