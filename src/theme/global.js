import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";

const rebootCss = reboot();

const GlobalStyle = createGlobalStyle`
  ${rebootCss}
  canvas {
    top:0;
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;
