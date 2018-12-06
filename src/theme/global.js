import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";

const rebootCss = reboot();

const GlobalStyle = createGlobalStyle`
  ${rebootCss}
  @font-face {
    font-family: "avenir";
    src: url("./fonts/avenir-book.woff") format("woff");
  }
  canvas {
    top:0;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  body{
    font-family: "avenir";
  }
`;

export default GlobalStyle;
