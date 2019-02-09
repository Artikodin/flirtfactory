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
          name="renaissance"
          agenb={2}
          left="50vw"
          top="20vh"
          handleClick={this.handleClick}
        />
        <FlirtFactoryTag
          name="antiquite"
          agenb={0}
          left="80vw"
          top="10vh"
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
