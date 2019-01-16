import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.li`
  flex: 1 1 0;
  transform: translate3d(0, 0, 0);
  font-weight: 200;
  width: 100%;
  max-width: 215px;
  margin-right: -1px;
  transition: all 0.4s ease;
  &:hover img {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
    margin-right: 1px;
  }
  &:hover span {
    opacity: 1;
  }
`;

export const TextContainer = styled.span`
  border: 1px solid #fff;
  height: 50px;
  text-align: center;
  padding: 4px;
  font-size: 14px;
  z-index: 12;
  opacity: 0.45;
  transition: all 0.25s ease;
  transform: translate3d(0, 0, 0);
`;

export const ImgContainer = styled.img`
  z-index: 11;
  display: block;
  width: 100%;
  bottom: 45px;
  border: 1px solid #fff;
  margin-bottom: -1px;
  transform: translate3d(0, 0, 0) scale(0);
  opacity: 0;
  transition: all 0.25s ease;
  transform-origin: bottom center;
`;

export const StyledLink = styled(Link)`
  cursor: none;
  display: flex;
  flex-direction: column;
  text-decoration: none !important;
  color: #fff !important;
  white-space: nowrap;
  position: relative;
`;
