import React from "react";

import { ButtonAbout, AboutDrawer } from "../index";

class About extends React.Component {
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
      <div id="About">
        <ButtonAbout click={this.handleClick} />
        <AboutDrawer showed={showed} click={this.handleClick} />
      </div>
    );
  }
}

export default About;
