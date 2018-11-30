import React from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";
import dice from "../../assets/dice.png";

import { Page } from "../../components";

console.log(dice);
const Page1 = () => (
  <Page backgroundColor="purple">
    <h1>page1</h1>
    <img src={dice} alt="" />
    <Link to="/page2">to page 2</Link>
  </Page>
);

export default hot(module)(Page1);
