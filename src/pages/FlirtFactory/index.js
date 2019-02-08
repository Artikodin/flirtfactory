import React from "react";

import { Page, BackgroundVideo, Catchphrase, TaskBar } from "../../components";

class FlirtFactory extends React.Component {
  constructor(props) {
    super(props);
    this.catchphrase = {};
  }

  state = {
    ageCatchphrase: 0,
    showed: true
  };

  /* eslint-disable */

  updateAgeCatchphrase = next => {
    let { ageCatchphrase } = this.state;
    if (next) {
      if (ageCatchphrase === 7) {
        this.setState({
          ageCatchphrase: 0
        });
      } else {
        this.setState({
          ageCatchphrase: ageCatchphrase + 1
        });
      }
    } else {
      if (ageCatchphrase === 0) {
        this.setState({
          ageCatchphrase: 7
        });
      } else {
        this.setState({
          ageCatchphrase: ageCatchphrase - 1
        });
      }
    }
  };

  handleClick = () => {
    const { showed } = this.state;
    this.setState({
      showed: !showed
    });
  };

  render() {
    const { ageCatchphrase, showed } = this.state;
    return (
      <Page navbar={false}>
        <TaskBar age="flirtfactory" />
        <div className="globalview background__wrapper">
          <BackgroundVideo path="flirtfactory" number={1} />
        </div>
        <Catchphrase
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
