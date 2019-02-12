import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";

const rebootCss = reboot();

const GlobalStyle = createGlobalStyle`
  /* ${rebootCss} */
  @font-face {
    font-family: 'GTCinetype';
    font-style: normal;
    font-weight: normal;
    src: url("../assets/fonts/GT-Cinetype-Regular.ttf") format("truetype");
    src: local('GTCinetype'), local('GTCinetype'),
          url('../assets/fonts/GT-Cinetype-Regular.ttf') format('embedded-opentype'), /* IE6-IE8 */
          url('../assets/fonts/GT-Cinetype-Regular.ttf') format('woff2'), /* Super Modern Browsers */
          url('../assets/fonts/GT-Cinetype-Regular.ttf') format('woff'), /* Modern Browsers */
          url('../assets/fonts/GT-Cinetype-Regular.ttf') format('truetype'), /* Safari, Android, iOS */
  }
  html, body{
    font-family: "avenir";
    cursor: none;
    -moz-user-select: none; /* Firefox */
    -webkit-user-select: none; /* Chrome, Safari, Opéra depuis la version 15 */
    -ms-user-select: none; /* Internet explorer depuis la version 10 et Edge */
    user-select: none; /* Propriété standard */
  }
  #root {
    min-height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
  }

  /* WRAPPER DU CANVAS ET DE LA BACKGROUND VIDEO */
  .background__wrapper {
    position: relative;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    box-sizing: border-box; 
  }

  .background {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    /* .noise {
      position: relative;
      width: 100vw;
      height: 100vh;
      z-index: 1;
      background-image: url("./assets/img/noise.gif");
      background-size: 80px;
      opacity: 0.25;
      mix-blend-mode: soft-light;
    } */
  }

  .background__video {
    video {
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;

      @media screen and (max-aspect-ratio: 1920/1080) {
        height: 100%;
      }
      @media screen and (min-aspect-ratio: 1920/1080) {
        width: 100%;
      }
    }
  }

  .interestpoint__show {
    opacity: 1 !important;
  }
  
  .background__canvas {
    img {
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      /* filter: contrast(95%) saturate(105%); */

      @media screen and (max-aspect-ratio: 1920/1080) {
        height: 100%;
      }
      @media screen and (min-aspect-ratio: 1920/1080) {
        width: 100%;
      }
    }

    /* empty div between so the img can't be touched */

    &:after { 
        content:''; 
        display:block; 
        position:absolute; 
        width:100%; 
        height:100%;
        z-index:1; 
        top:0;
      } 
  }

  #globalview--question {
    position: absolute; 
    bottom: 10%;
    z-index: 50;
    text-align: center;
    width: fit-content;
    margin: auto;
    left: 0;
    right: 0;

    h2 {
      font-family: GTCinetype;
      font-size: 2em;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.07;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff; 
    }

    &:after {
      content: '';
      opacity: 0.5;
      position: absolute; 
      background: white;
      height: 1px;
      width: 30%;
      margin-left: auto;
      margin-right: auto;
      top: -10px;
      left: 0;
      right: 0;
    }
  }

  .dragndrop--hide {
    visibility: hidden; 
    opacity: 0 !important;
  }
  
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px white;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #1C1E33;
    border-radius: 10px;
  }



  .form-control:focus {
    outline: 0 !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
  button:focus {
      outline: 0 !important;
      border: none !important;
        box-shadow: none !important;
  }

button:hover,
button:focus {
    background: #0053ba;
}

button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
}

button:active {
    transform: scale(0.99);
}

  /* normalize */
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */


html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

body {
  overflow: hidden;
  background-color: #1C1E33;
  margin: 0;
  padding: 0; 
}

* {
  margin: 0;
  padding: 0; 
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

button,
input { /* 1 */
  overflow: visible;
}

button,
select { /* 1 */
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

details {
  display: block;
}


summary {
  display: list-item;
}


template {
  display: none;
}


[hidden] {
  display: none;
}
`;

export default GlobalStyle;
