import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.li`
  /* flex: 1 1 0; */
  justify-content: center;
  transform: translate3d(0, 0, 0);
  font-weight: 200;
  width: 100%;
  max-width: 215px;
  box-sizing: border-box;
  transition: all 0.4s ease;
  margin-left: -1px;
  &:hover img {
    box-sizing: border-box;
    transform: translate3d(0, 0, 0) scale(0.99);
    height: auto;
    visibility: visible;
    opacity: 1;
  }
  &:hover span {
    opacity: 1;
  }
`;

export const TextContainer = styled.span`
  max-height: 30px;
  border: 1px solid #fff;
  text-align: center;
  padding: 10px 0;
  font-size: 1rem;
  z-index: 12;
  opacity: 0.45;
  transition: all 0.25s ease;
`;

export const ImgContainer = styled.img`
  box-sizing: border-box;
  border: 1px solid white;
  margin-bottom: -1px;
  visibility: hidden;
  z-index: 13;
  height: 0;
  width: 100%;
  bottom: 40px;
  transform: translate3d(0, 0px, 0) scale(0.5);
  opacity: 0;
  transition: all 0.25s ease;
  transform-origin: bottom center;
`;

export const StyledLink = styled(Link)`
  box-sizing: border-box;
  cursor: none;
  display: flex;
  flex-direction: column;
  text-decoration: none !important;
  color: #fff !important;
  white-space: nowrap;
  position: relative;
`;
