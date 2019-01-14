import React from "react";

import {
  Page,
  // ButtonDrawer,
  // Drawer,
  // DrawerContent,
  // DragAndDrop
  BackgroundVideo,
  InterestTag
} from "../../components";

class Antiquite extends React.Component {
  state = {
    // drawerShowed: false,
    // number: 1,
    // loop: true
  };

  handleClick = () => {
    const { drawerShowed } = this.state;
    this.setState({
      drawerShowed: !drawerShowed
    });
  };

  handleEndDrag = () => {
    this.setState({
      // number: 2,
      // loop: false
    });
  };

  render() {
    // const { drawerShowed } = this.state;
    return (
      <Page>
        <InterestTag title="Les sérénades" xPos="200px" yPos="200px">
          La mode était aux sérénades. Pour déclarer sa flamme, le prétendant, à
          l'image chantait son amour sous le balcon de sa Juliette. Mais
          auparavant, il devait effectuer d’incessants allers-retours dans la
          rue pour attirer son attention. Pas très discret mais efficace…
        </InterestTag>
        <BackgroundVideo path="antiquite" />
        {/* <ButtonDrawer click={this.handleClick} /> */}
        {/* <Drawer showed={drawerShowed}>
          <DrawerContent number={0} />
        </Drawer> */}
      </Page>
    );
  }
}

export default Antiquite;
