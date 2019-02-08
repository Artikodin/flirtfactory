import React from "react";

import { Page, BackgroundVideo, Catchphrase, TaskBar } from "../../components";

class FlirtFactory extends React.Component {
  constructor(props) {
    super(props);
    this.catchphrase = {};
  }

  state = {
    ageCatchphrase: 1,
    showed: true
  };

  updateAgeCatchphrase = next => {
    console.log("updateAgeCatchphrase");
    if (next) {
      console.log("next");
    } else {
      console.log("prev");
    }
  };

  handleClick = () => {
    console.log("handle click");
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
