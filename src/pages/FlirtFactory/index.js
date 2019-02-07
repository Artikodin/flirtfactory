import React from "react";

import { Page, BackgroundVideo, Catchphrase } from "../../components";

class FlirtFactory extends React.Component {
  state = {
    age: "flirtfactory",
    number: 1,
    json: 0,
    showed: false
  };

  displayCatchphrase = param => {
    const { showed } = this.state;
    this.setState({
      showed: !showed,
      json: param
    });
  };

  render() {
    const { age, number, showed, json } = this.state;
    return (
      <Page navbar={false}>
        <div id="globalview--question">
          <h2>A quelle époque aurais-tu voulu séduire ?</h2>
        </div>
        <div className="background__wrapper">
          <BackgroundVideo path={age} number={number} />
          <Catchphrase showed={showed} json={json} />
        </div>
      </Page>
    );
  }
}

export default FlirtFactory;
