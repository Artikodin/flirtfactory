import React from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";

import { Page } from "../../components";

const Page1 = () => (
  <Page backgroundColor="purple">
    <img src="assets/img/dice.png" alt="" />
    <h1>page1</h1>
    <Link to="/page2">to page 2</Link>
  </Page>
);

export default hot(module)(Page1);
