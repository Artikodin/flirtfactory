/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

import { Page, ButtonDrawer, Drawer, DrawerContent } from "../../components";

class MoyenAge extends React.Component {
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
        <ButtonDrawer click={this.handleClick} />
        <Drawer showed={drawerShowed}>
          <DrawerContent number={1} />
        </Drawer>
      </Page>
    );
  }
}

export default MoyenAge;
