import React from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";

const Page1 = () => (
  <React.Fragment>
    <h1>page1</h1>
    <Link to="/page2">to page 2</Link>
  </React.Fragment>
);

export default hot(module)(Page1);
