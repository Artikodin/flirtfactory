import React from "react";

import { Page, BackgroundVideo, ButtonIA, GenericTag } from "../../components";

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
        <div id="globalview--question">
          <h2>A quelle époque aurais-tu voulu séduire ?</h2>
        </div>
        <div className="background__wrapper">
          <BackgroundVideo path={age} number={number} />
          <GenericTag
            title="antiquité"
            xPos="200px"
            yPos="200px"
            global
            index
          />
          <GenericTag
            title="moyen-âge"
            xPos="100px"
            yPos="400px"
            global
            index
          />
          <GenericTag
            title="antiquité"
            xPos="200px"
            yPos="200px"
            global
            index
          />
          <GenericTag
            title="antiquité"
            xPos="200px"
            yPos="200px"
            global
            index
          />
          <GenericTag
            title="antiquité"
            xPos="200px"
            yPos="200px"
            global
            index
          />
        </div>
      </Page>
    );
  }
}

export default FlirtFactory;
