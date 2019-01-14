import React from "react";

import {
  Page,
  // ButtonDrawer,
  // Drawer,
  // DrawerContent,
  DragAndDrop,
  BackgroundVideo,
  InterestTag
} from "../../components";

class Antiquite extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
  }

  state = {
    number: 1,
    loop: true
  };

  handleClick = () => {
    this.setState({
      number: 2,
      loop: false
    });
  };

  handleEndDrag = () => {
    this.setState({
      // number: 2,
      // loop: false
    });
  };

  addOne = () => {
    this.setState(preState => {
      return {
        number: preState.number + 1
      };
    });
  }


  render() {
    const { number, loop } = this.state;
    return (
      <Page>
        <DragAndDrop />
        <InterestTag title="Les sérénades" xPos="200px" yPos="200px">
          La mode était aux sérénades. Pour déclarer sa flamme, le prétendant, à
          l'image chantait son amour sous le balcon de sa Juliette. Mais
          auparavant, il devait effectuer d’incessants allers-retours dans la
          rue pour attirer son attention. Pas très discret mais efficace…
        </InterestTag>
        <BackgroundVideo path="antiquite" number={number} loop={loop} />
        <button type="button" onClick={this.addOne}>
          {number}
        </button>
      </Page>
    );
  }
}

export default Antiquite;
