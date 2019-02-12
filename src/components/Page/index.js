import React from "react";
import PropTypes from "prop-types";
// import posed from "react-pose";
// import { Transition } from "react-transition-group";

import { Wrapper } from "./element";

import { About, NavBar, ProgressContext, Loader } from "..";

class Page extends React.Component {
  state = { showed: true };

  static propTypes = {
    children: PropTypes.node,
    backgroundColor: PropTypes.string,
    navbar: PropTypes.bool,
    transition: PropTypes.bool
  };

  static defaultProps = {
    children: "",
    backgroundColor: "",
    navbar: true,
    transition: false
  };

  componentDidMount() {
    const { transition } = this.props;
    if (transition) this.setState({ showed: false });
  }

  componentDidUpdate() {
    const { showed } = this.state;
    if (!showed) {
      this.showedTimeout = setTimeout(() => {
        this.setState(() => ({ showed: true }));
      }, 1000);
    }
  }

  render() {
    // const { globalSound } = this.state;
    const { children, backgroundColor, navbar, transition } = this.props;
    const { showed } = this.state;
    return (
      <Wrapper backgroundColor={backgroundColor} id="wrapper">
        {transition && <Loader />}
        {showed && children}
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
                      pathTo="/moyenage"
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
                      pathTo="/belleepoque"
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
