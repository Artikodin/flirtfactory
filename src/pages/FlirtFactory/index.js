import React from "react";

import { Page, BackgroundVideo, Catchphrase } from "../../components";

class FlirtFactory extends React.Component {
  state = {
    age: "flirtfactory",
    json: 0,
    showed: true
  };

  displayCatchphrase = param => {
    const { showed } = this.state;
    this.setState({
      showed: !showed,
      json: param
    });
  };

  render() {
    const { age, showed, json } = this.state;
    return (
      <Page navbar={false}>
        <div id="globalview--question">
          <h2>A quelle époque aurais-tu voulu séduire ?</h2>
        </div>
        <div className="globalview background__wrapper">
          <BackgroundVideo path={age} number={1} />
        </div>
        <Catchphrase showed={showed} json={json} />
      </Page>
    );
  }
}

export default FlirtFactory;
