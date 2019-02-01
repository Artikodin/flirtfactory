import React from "react";

import { Page, BackgroundVideo, ButtonIA } from "../../components";

class FlirtFactory extends React.Component {
  state = {
    age: "flirtfactory",
    number: 1
  };

  render() {
    const { age, number } = this.state;
    return (
      <Page>
        <ButtonIA />
        <div className="background__wrapper">
          <BackgroundVideo path={age} number={number} />
        </div>
      </Page>
    );
  }
}

export default FlirtFactory;
