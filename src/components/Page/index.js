import React from "react";
import PropTypes from "prop-types";
// import posed from "react-pose";
import { Transition } from "react-transition-group";

import { Wrapper } from "./element";

import { About, NavBar, ProgressContext, Loader } from "..";

class Page extends React.Component {
  state = {
    showed: false
  };

  static propTypes = {
    children: PropTypes.node,
    backgroundColor: PropTypes.string,
    navbar: PropTypes.bool
  };

  static defaultProps = {
    children: "",
    backgroundColor: "",
    navbar: true
  };

  componentDidMount() {
    this.setState({ showed: true });
  }

  render() {
    const { globalSound } = this.state;
    const { children, backgroundColor, navbar } = this.props;
    const { showed } = this.state;
    return (
      <Wrapper backgroundColor={backgroundColor} id="wrapper">
        <Transition in={showed} timeout={10000} unmountOnExit>
          {state => {
            switch (state) {
              case "entering":
                console.log("Entering…");
                return null;
              case "entered":
                console.log("Entered!");
                return null;
              case "exiting":
                console.log("Exiting…");
                return null;
              case "exited":
                console.log("Exited!");
                return null;
              default:
                console.log("default!");
                return null;
            }
          }}
        </Transition>
        {children}
        {/* <GlobalSound playing={globalSound} /> */}
        <ProgressContext.Consumer>
          {({ ages }) => (
            <>
              {navbar && (
                <>
                  <NavBar>
                    <NavBar.NavItem
                      imgSrc={
                        ages.antiquite.lock
                          ? "./assets/nav/antiquiteon.gif"
                          : "./assets/nav/antiquiteoff.gif"
                      }
                      pathTo="/antiquite"
                    >
                      antiquité
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      imgSrc={
                        ages.moyenage.lock
                          ? "./assets/nav/moyenageon.gif"
                          : "./assets/nav/moyenageoff.gif"
                      }
                      pathTo="/moyen-age"
                    >
                      moyen-âge
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      imgSrc={
                        ages.renaissance.lock
                          ? "./assets/nav/renaissanceon.gif"
                          : "./assets/nav/renaissanceoff.gif"
                      }
                      pathTo="/renaissance"
                    >
                      renaissance
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      imgSrc={
                        ages.lumieres.lock
                          ? "./assets/nav/lumiereson.gif"
                          : "./assets/nav/lumieresoff.gif"
                      }
                      pathTo="/lumieres"
                    >
                      lumières
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      imgSrc={
                        ages.belleepoque.lock
                          ? "./assets/nav/belleepoqueon.gif"
                          : "./assets/nav/belleepoqueoff.gif"
                      }
                      pathTo="/belle-epoque"
                    >
                      belle-époque
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      imgSrc={
                        ages.moderne.lock
                          ? "./assets/nav/moderneon.gif"
                          : "./assets/nav/moderneoff.gif"
                      }
                      pathTo="/moderne"
                    >
                      moderne
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      imgSrc={
                        ages.contemporain.lock
                          ? "./assets/nav/contemporainon.gif"
                          : "./assets/nav/contemporainoff.gif"
                      }
                      pathTo="/contemporain"
                    >
                      contemporain
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      imgSrc="./assets/img/noise.gif"
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
  }
}

// const TransitionLayerAnimated = posed(TransitionLayer)({
//   enter: { opacity: 1 },
//   exit: { opacity: 0, delay: 2000 }
// });

export default Page;
