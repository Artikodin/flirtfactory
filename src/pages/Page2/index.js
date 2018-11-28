import React from "react";
import { hot } from "react-hot-loader";

import { Page, Drawer } from "../../components";

class Page2 extends React.Component {
  state = {
    showed: false
  };

  handleClick = () => {
    const { showed } = this.state;
    this.setState({
      showed: !showed
    });
  };

  render() {
    const { showed } = this.state;
    return (
      <Page backgroundColor="pink">
        <h1>page2</h1>
        <button type="button" onClick={this.handleClick}>
          click
        </button>
        <Drawer showed={showed} />
      </Page>
    );
  }
}

export default hot(module)(Page2);
