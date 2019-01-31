import React from "react";

import {
  Page,
  BackgroundVideo,
  ButtonIA,
  ProgressContext,
  TextContext,
} from "../../components";

class FlirtFactory extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    age: "flirtfactory",
    number: 1
  };

  render() {
    const { age, number } = this.state;
    return (
      <Page>
        <ButtonIA />
        <TextContext.Consumer>
        {value => (
          <ProgressContext.Consumer>
            {({ ages, selectAges }) => (
              <>
                <div className="background__wrapper">
                  <BackgroundVideo path={age} number={number} />
                </div>
              </>
            )}
          </ProgressContext.Consumer>
        )}
        </TextContext.Consumer>
      </Page>
    );
  }
}

export default FlirtFactory;
