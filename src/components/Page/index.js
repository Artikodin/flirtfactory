import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./element";

import { About, NavBar, ProgressContext, Loader, Cursor } from "..";

import AntiquiteOn from "../../assets/nav/antiquiteon.gif";
import AntiquiteOff from "../../assets/nav/antiquiteoff.gif";
import MoyenAgeOn from "../../assets/nav/moyenageon.gif";
import MoyenAgeOff from "../../assets/nav/moyenageoff.gif";
import RenaissanceOn from "../../assets/nav/renaissanceon.gif";
import RenaissanceOff from "../../assets/nav/renaissanceoff.gif";
import LumieresOn from "../../assets/nav/lumiereson.gif";
import LumieresOff from "../../assets/nav/lumieresoff.gif";
import BelleEpoqueOn from "../../assets/nav/belleepoqueon.gif";
import BelleEpoqueOff from "../../assets/nav/belleepoqueoff.gif";
import ModerneOn from "../../assets/nav/moderneon.gif";
import ModerneOff from "../../assets/nav/moderneoff.gif";
import ContemporainOn from "../../assets/nav/contemporainon.gif";
import ContemporainOff from "../../assets/nav/contemporainoff.gif";
import FuturOn from "../../assets/nav/futuron.gif";
import FuturOff from "../../assets/nav/futuroff.gif";

class Page extends React.Component {
  state = { showed: true };

  static propTypes = {
    children: PropTypes.node,
    backgroundColor: PropTypes.string,
    history: PropTypes.object,
    periode: PropTypes.string,
    pathTo: PropTypes.string,
    navbar: PropTypes.bool,
    transition: PropTypes.bool
  };

  static defaultProps = {
    children: "",
    backgroundColor: "",
    pathTo: "",
    history: {},
    periode: "",
    navbar: true,
    transition: true
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
      }, 2300);
    }
  }

  render() {
    const {
      children,
      backgroundColor,
      navbar,
      transition,
      periode,
      history,
      pathTo
    } = this.props;
    const { showed } = this.state;
    return (
      <Wrapper backgroundColor={backgroundColor} id="wrapper">
        <Cursor periode={periode} history={history} pathTo={pathTo} />
        {transition && <Loader />}
        {showed && children}
        <ProgressContext.Consumer>
          {({ ages }) => (
            <>
              {navbar && (
                <>
                  <NavBar>
                    <NavBar.NavItem
                      active={history.location.pathname === "/antiquite"}
                      imgSrc={ages.antiquite.lock ? AntiquiteOn : AntiquiteOff}
                      pathTo="/antiquite"
                    >
                      antiquité
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      active={history.location.pathname === "/moyenage"}
                      imgSrc={ages.moyenage.lock ? MoyenAgeOn : MoyenAgeOff}
                      pathTo="/moyenage"
                    >
                      moyen-âge
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      active={history.location.pathname === "/renaissance"}
                      imgSrc={
                        ages.renaissance.lock ? RenaissanceOn : RenaissanceOff
                      }
                      pathTo="/renaissance"
                    >
                      renaissance
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      active={history.location.pathname === "/lumieres"}
                      imgSrc={ages.lumieres.lock ? LumieresOn : LumieresOff}
                      pathTo="/lumieres"
                    >
                      lumières
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      active={history.location.pathname === "/belleepoque"}
                      imgSrc={
                        ages.belleepoque.lock ? BelleEpoqueOn : BelleEpoqueOff
                      }
                      pathTo="/belleepoque"
                    >
                      belle-époque
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      active={history.location.pathname === "/moderne"}
                      imgSrc={ages.moderne.lock ? ModerneOn : ModerneOff}
                      pathTo="/moderne"
                    >
                      moderne
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      active={history.location.pathname === "/contemporain"}
                      imgSrc={
                        ages.contemporain.lock
                          ? ContemporainOn
                          : ContemporainOff
                      }
                      pathTo="/contemporain"
                    >
                      contemporain
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      active={history.location.pathname === "/futur"}
                      imgSrc={ages.futur.lock ? FuturOn : FuturOff}
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
