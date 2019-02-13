import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
`;

export const Video = styled.video`
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-aspect-ratio: 1920/1080) {
    height: 100%;
  }
  @media screen and (min-aspect-ratio: 1920/1080) {
    width: 100%;
  }
`;

export const ColoredLayer = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const LoaderCount = styled.span`
  color: #ffffff;
  position: absolute;
  z-index: 10;
  font-weight: 500;
  font-size: 130px;
  & > span {
    font-size: 40px;
  }
`;
