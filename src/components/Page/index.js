import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./element";

import { About, NavBar, ProgressContext, GlobalSound } from "..";

class Page extends React.Component {
  state = {
    globalSound: true
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

  // componentDidMount = () => {
  //   this.setState({
  //     globalSound: true
  //   });
  // };

  // componentWillUnmount = () => {
  //   this.setState({
  //     globalSound: false
  //   });
  // };

  render() {
    const { globalSound } = this.state;
    const { children, backgroundColor, navbar } = this.props;
    return (
      <Wrapper backgroundColor={backgroundColor} id="wrapper">
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

export default Page;
