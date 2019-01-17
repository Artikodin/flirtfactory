/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

import { Page, BackgroundVideo } from "../../components";

class Moderne extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    number: 1,
    loop: true
  };

  render() {
    const { number, loop } = this.state;
    return (
      <Page>
        <BackgroundVideo path="moderne" number={number} loop={loop} />
      </Page>
    );
  }
}

Moderne.propTypes = {
  history: PropTypes.object.isRequired
};

export default Moderne;
