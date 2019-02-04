import React from "react";

import {
  Page,
  BackgroundVideo,
  ButtonIA,
  GenericTag,
  Catchphrase
} from "../../components";

class FlirtFactory extends React.Component {
  state = {
    age: "flirtfactory",
    number: 1,
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
    const { age, number, showed, json } = this.state;
    return (
      <Page>
        <ButtonIA />
        <div id="globalview--question">
          <h2>A quelle époque aurais-tu voulu séduire ?</h2>
        </div>
        <div className="background__wrapper">
          <BackgroundVideo path={age} number={number} />
          <GenericTag
            catchphrase={() => this.displayCatchphrase(0)}
            title="antiquité"
            xPos="200px"
            yPos="200px"
            global
          />
          <GenericTag
            catchphrase={() => this.displayCatchphrase(1)}
            title="moyen-âge"
            xPos="100px"
            yPos="400px"
            global
          />
          <Catchphrase showed={showed} json={json} />
        </div>
      </Page>
    );
  }
}

export default FlirtFactory;
