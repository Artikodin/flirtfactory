import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.li`
  position: relative;
  padding: 5px 16px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  transition: all 0.4s ease;
  transform: translate3d(0, 0, 0);
  &:hover {
    padding: 5px 80px;
    font-weight: bold;
    font-size: 24px;
  }
  &:hover img {
    transform: translate3d(-50%, 0, 0) scale(1);
    opacity: 1;
    transition: all 0.35s ease;
  }
`;

export const ImgContainer = styled.img`
  z-index: 11;
  display: block;
  width: 250px;
  height: 140px;
  border-radius: 6px;
  background-color: white;
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, 90px, 0) scale(0.1);
  bottom: 45px;
  opacity: 0;
  transition: all 0.1s ease;
  border: 2px solid #fff;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  white-space: nowrap;
  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;
