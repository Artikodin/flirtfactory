import React from "react";
import PropTypes from "prop-types";

import {
  Page,
  BackgroundVideo,
  Catchphrase,
  TaskBar,
  FlirtFactoryTag,
  GlobalSound
} from "../../components";

class FlirtFactory extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.catchphrase = {};
  }

  state = {
    nbCatchphrase: 0,
    showed: false,
    forward: true,
    arrayAges: [
      "antiquite",
      "moyenage",
      "renaissance",
      "lumieres",
      "belleepoque",
      "moderne",
      "contemporain",
      "futur"
    ]
  };

  updateAgeCatchphrase = next => {
    const { nbCatchphrase } = this.state;
    if (next) {
      if (nbCatchphrase === 7) {
        this.setState({
          nbCatchphrase: 0,
          forward: true
        });
      } else {
        this.setState({
          nbCatchphrase: nbCatchphrase + 1,
          forward: true
        });
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (nbCatchphrase === 0) {
        this.setState({
          nbCatchphrase: 7,
          forward: false
        });
      } else {
        this.setState({
          nbCatchphrase: nbCatchphrase - 1,
          forward: false
        });
      }
    }
  };

  handleClick = ageNb => {
    const { showed } = this.state;
    this.setState({
      nbCatchphrase: ageNb,
      showed: !showed
    });
  };

  render() {
    const { nbCatchphrase, showed, forward, arrayAges, agestr } = this.state;
    const { history } = this.props;
    return (
      <Page navbar={false} periode={agestr} history={history}>
        <TaskBar isOpen age="flirtfactory" />
        <GlobalSound playing age="flirtfactory" volume={0} />
        <div className="globalview background__wrapper">
          <BackgroundVideo path="flirtfactory" number={1} />
        </div>
        <FlirtFactoryTag
          name="antiquite"
          agenb={0}
          left="85vw"
          top="25vh"
          handleClick={this.handleClick}
        />
        <FlirtFactoryTag
          name="moyenage"
          agenb={1}
          left="32vw"
          top="40vh"
          handleClick={this.handleClick}
        />
        <FlirtFactoryTag
          name="renaissance"
          agenb={2}
          left="60vw"
          top="15vh"
          handleClick={this.handleClick}
        />
        <FlirtFactoryTag
          name="lumieres"
          agenb={3}
          left="75vw"
          top="50vh"
          handleClick={this.handleClick}
        />
        <FlirtFactoryTag
          name="belleepoque"
          agenb={4}
          left="25vw"
          top="60vh"
          handleClick={this.handleClick}
        />
        <FlirtFactoryTag
          name="moderne"
          agenb={5}
          left="15vw"
          top="25vh"
          handleClick={this.handleClick}
        />
        <FlirtFactoryTag
          name="contemporain"
          agenb={6}
          left="45vw"
          top="75vh"
          handleClick={this.handleClick}
        />
        <FlirtFactoryTag
          name="futur"
          agenb={7}
          left="45vw"
          top="15vh"
          handleClick={this.handleClick}
        />
        <Catchphrase
          forward={forward}
          showed={showed}
          ageCatchphrase={arrayAges[nbCatchphrase]}
          nbCatchphrase={nbCatchphrase}
          handleClick={this.handleClick}
          updateAgeCatchphrase={this.updateAgeCatchphrase}
        />
      </Page>
    );
  }
}

export default FlirtFactory;
