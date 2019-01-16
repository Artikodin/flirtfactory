import React from "react";

import AboutDrawer from "../AboutDrawer";
import ButtonAbout from "../ButtonAbout";

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
        <AboutDrawer showed={showed} />
      </div>
    );
  }
}

export default About;
