import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./element";

const Page = ({ children, backgroundColor }) => (
  <Wrapper backgroundColor={backgroundColor}>{children}</Wrapper>
);

Page.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string
};

Page.defaultProps = {
  children: "",
  backgroundColor: "white"
};

export default Page;
