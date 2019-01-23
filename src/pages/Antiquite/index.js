import React from "react";

import {
  Page,
  BackgroundVideo,
  GenericTag,
  // ButtonIA,
  ProgressContext,
  TextContext,
  InteractionDragAndDrop
} from "../../components";

import { Markup } from "interweave";

class Antiquite extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
  }

  state = {
    numberage: 0,
    number: 1,
    loop: true
  };

  // DEBUG & TEST
  addOne = () => {
    this.setState(preState => ({
      number: preState.number + 1
    }));
  };
  // END

  render() {
    const { number, loop, numberage } = this.state;
    return (
      <Page>
        {/* <ButtonIA /> */}
        <TextContext.Consumer>
        {value => (
          <ProgressContext.Consumer>
            {({ ages, selectAges }) => (
              <>
                <GenericTag title={value.epoques[numberage].name} xPos="200px" yPos="200px" index>
                  <Markup content={value.epoques[numberage].description} />
                </GenericTag>
                {ages.antiquite && (
                  <GenericTag title={value.epoques[numberage].symbols[0].name} xPos="500px" yPos="200px">
                    <Markup content={value.epoques[numberage].symbols[0].description} />
                  </GenericTag>
                )}
                <div className="background__wrapper">
                  <BackgroundVideo path="antiquite" number={number} loop={loop} />
                  <InteractionDragAndDrop
                    className="drag_and_drop"
                    unlockAge={() => selectAges("antiquite")}
                    age="antiquite"
                    frameTotal={167}
                  />
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

export default Antiquite;
