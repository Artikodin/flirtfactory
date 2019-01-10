/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

import { Page, Cursor, ButtonDrawer, Drawer, DrawerContent } from "../../components";

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
      <Page backgroundColor="#c4e6f1">
        <Cursor />
        <ButtonDrawer click={this.handleClick} />
        <Drawer showed={drawerShowed}>
          <DrawerContent />
        </Drawer>
      </Page>
    );
  }
}

export default Antiquite;
