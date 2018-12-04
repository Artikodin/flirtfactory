import React from "react";
import PropTypes from "prop-types";

import { Page, TextProvider, TextContext } from "../../components";

const Page1 = ({ history }) => {
  const pushInHistory = () => {
    history.push("/page2");
  };

  return (
    <Page backgroundColor="purple">
      <TextProvider>
        <h1>
          <TextContext.Consumer>
            {value => value.epoques[0].name}
          </TextContext.Consumer>
        </h1>
        <p>
          <TextContext.Consumer>
            {value => value.epoques[0].description}
          </TextContext.Consumer>
        </p>
        <button type="button" onClick={pushInHistory}>
          to page 2
        </button>
      </TextProvider>
    </Page>
  );
};

Page1.propTypes = {
  history: PropTypes.object.isRequired
};

export default Page1;
