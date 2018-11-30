import React from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";

import { Page, Drawer } from "../../components";

class Page2 extends React.Component {
  state = {
    showed: false
  };

  handleClick = () => {
    const { showed } = this.state;
    // const showed = this.state.showed;
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
        <Link to="/page3">to page 3</Link>
      </Page>
    );
  }
}

export default hot(module)(Page2);
