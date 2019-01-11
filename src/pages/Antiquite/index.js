import React from "react";

import {
  Page,
  ButtonDrawer,
  Drawer,
  DrawerContent,
  BackgroundVideo,
  InterestTag
} from "../../components";

class Antiquite extends React.Component {
  state = {
    drawerShowed: false
  };

  handleClick = () => {
    const { drawerShowed } = this.state;
    this.setState({
      drawerShowed: !drawerShowed
    });
  };

  render() {
    const { drawerShowed } = this.state;
    return (
      <Page>
        <InterestTag title="Les sérénades" xPos="200px" yPos="200px">
          La mode était aux sérénades. Pour déclarer sa flamme, le prétendant, à
          l'image chantait son amour sous le balcon de sa Juliette. Mais
          auparavant, il devait effectuer d’incessants allers-retours dans la
          rue pour attirer son attention. Pas très discret mais efficace…
        </InterestTag>
        <ButtonDrawer click={this.handleClick} />
        <BackgroundVideo path="antiquite" />
        <Drawer showed={drawerShowed}>
          <DrawerContent number={0} />
        </Drawer>
      </Page>
    );
  }
}

export default Antiquite;
