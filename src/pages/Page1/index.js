/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";


import { Page, Cursor } from "../../components";

const Page1 = ({ history }) => {
  // const pushInHistory = () => {
  //   history.push("/page2");
  // };

  return (
    <Page backgroundColor="#c4e6f1">
      <Cursor/>
      {/* <TextContext.Consumer>
        {value => (
          <React.Fragment>
            <h1>{value.epoques[0].name}</h1>
            <p>{value.epoques[0].description}</p>
            <button type="button" onClick={pushInHistory}>
              to page 2
            </button>
          </React.Fragment>
        )}
      </TextContext.Consumer> */}
    </Page>
  );
};

Page1.propTypes = {
  history: PropTypes.object.isRequired
};

export default Page1;