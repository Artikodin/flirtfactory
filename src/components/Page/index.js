import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./element";

import { About, NavBar, ProgressContext } from "..";

const Page = ({ children, backgroundColor, navbar }) => (
  <Wrapper backgroundColor={backgroundColor} id="wrapper">
    {children}
    <ProgressContext.Consumer>
      {({ ages }) => (
        <>
          {navbar && (
            <>
              <NavBar>
                <NavBar.NavItem
                  imgSrc={
                    ages.antiquite
                      ? "./assets/img/img1.jpeg"
                      : "./assets/img/img2.jpeg"
                  }
                  pathTo="/antiquite"
                >
                  antiquité
                </NavBar.NavItem>
                <NavBar.NavItem
                  imgSrc={
                    ages.moyenage
                      ? "./assets/img/img1.jpeg"
                      : "./assets/img/img2.jpeg"
                  }
                  pathTo="/moyen-age"
                >
                  moyen-âge
                </NavBar.NavItem>
                <NavBar.NavItem
                  imgSrc={
                    ages.renaissance
                      ? "./assets/img/img1.jpeg"
                      : "./assets/img/img2.jpeg"
                  }
                  pathTo="/renaissance"
                >
                  renaissance
                </NavBar.NavItem>
                <NavBar.NavItem
                  imgSrc={
                    ages.lumieres
                      ? "./assets/img/img1.jpeg"
                      : "./assets/img/img2.jpeg"
                  }
                  pathTo="/lumieres"
                >
                  lumière
                </NavBar.NavItem>
                <NavBar.NavItem
                  imgSrc={
                    ages.belleepoque
                      ? "./assets/img/img1.jpeg"
                      : "./assets/img/img2.jpeg"
                  }
                  pathTo="/belle-epoque"
                >
                  belle-époque
                </NavBar.NavItem>
                <NavBar.NavItem
                  imgSrc={
                    ages.moderne
                      ? "./assets/img/img1.jpeg"
                      : "./assets/img/img2.jpeg"
                  }
                  pathTo="/moderne"
                >
                  moderne
                </NavBar.NavItem>
                <NavBar.NavItem
                  imgSrc={
                    ages.erenumerique
                      ? "./assets/img/img1.jpeg"
                      : "./assets/img/img2.jpeg"
                  }
                  pathTo="/ere-numerique"
                >
                  ère-numérique
                </NavBar.NavItem>
                <NavBar.NavItem
                  imgSrc={
                    ages.futur
                      ? "./assets/img/img1.jpeg"
                      : "./assets/img/img2.jpeg"
                  }
                  pathTo="/futur"
                >
                  futur
                </NavBar.NavItem>
              </NavBar>
              <About />
            </>
          )}
        </>
      )}
    </ProgressContext.Consumer>
  </Wrapper>
);

Page.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  navbar: PropTypes.bool
};

Page.defaultProps = {
  children: "",
  backgroundColor: "white",
  navbar: true
};

export default Page;
