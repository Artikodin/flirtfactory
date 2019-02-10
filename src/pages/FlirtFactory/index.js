import React from "react";

import {
  Page,
  BackgroundVideo,
  Catchphrase,
  TaskBar,
  FlirtFactoryTag
} from "../../components";

class FlirtFactory extends React.Component {
  constructor(props) {
    super(props);
    this.catchphrase = {};
  }

  state = {
    ageCatchphrase: 0,
    showed: false,
    forward: true
  };

  updateAgeCatchphrase = next => {
    const { ageCatchphrase } = this.state;
    if (next) {
      if (ageCatchphrase === 7) {
        this.setState({
          ageCatchphrase: 0,
          forward: true
        });
      } else {
        this.setState({
          ageCatchphrase: ageCatchphrase + 1,
          forward: true
        });
      }
    } else {
      if (ageCatchphrase === 0) {
        this.setState({
          ageCatchphrase: 7,
          forward: false
        });
      } else {
        this.setState({
          ageCatchphrase: ageCatchphrase - 1,
          forward: false
        });
      }
    }
  };

  handleClick = ageNb => {
    const { showed } = this.state;
    this.setState({
      ageCatchphrase: ageNb,
      showed: !showed
    });
  };

  render() {
    const { ageCatchphrase, showed, forward } = this.state;
    return (
      <Page navbar={false}>
        <TaskBar age="flirtfactory" />
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
          ageCatchphrase={ageCatchphrase}
          handleClick={this.handleClick}
          updateAgeCatchphrase={this.updateAgeCatchphrase}
        />
      </Page>
    );
  }
}

export default FlirtFactory;
