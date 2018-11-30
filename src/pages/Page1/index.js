import React from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";

import { Page } from "../../components";

const Page1 = () => (
  <Page backgroundColor="purple">
    <h1>page1</h1>
    <img src="./assets/dice.png" alt="" />
    <Link to="/page2">to page 2</Link>
  </Page>
);

export default hot(module)(Page1);
