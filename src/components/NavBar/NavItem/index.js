import React from "react";
import PropTypes from "prop-types";

import { Wrapper, ImgContainer, StyledLink } from "./element";

/**
 * NavItem
 *
 * This component is in charge of displaying
 * a navigation item
 *
 * @return {jsx}
 */

const NavItem = ({ pathTo, imgSrc, children }) => (
  <Wrapper>
    <StyledLink to={pathTo}>
      <ImgContainer src={imgSrc} alt="" />
      {children}
    </StyledLink>
  </Wrapper>
);

/**
 * Display Name
 */
NavItem.displayName = "NavBar.NavItem";

/**
 * PropTypes Validation
 */
const { node, string } = PropTypes;
NavItem.propTypes = {
  children: node,
  pathTo: string.isRequired,
  imgSrc: string.isRequired
};

/**
 * Default Props
 */
NavItem.defaultProps = {
  children: null
};

export default NavItem;
