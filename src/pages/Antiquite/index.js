import React from "react";

import {
  Page,
  BackgroundVideo,
  GenericTag,
  // ButtonIA,
  ProgressContext,
  TextContext,
  InteractionDragAndDrop,
  CanvasVideo
} from "../../components";

import { Markup } from "interweave";

class Antiquite extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
  }

  state = {
    age: "antiquite",
    numberage: 0, // antiquite
    number: 1,
    loop: true,
    frame: 1
  };

  componentDidMount = () => {
    // requestAnimationFrame(this.loop);
  }

  loop = () => {
    const { frame } = this.state;
    if (frame < 168) {
      this.setState({
        frame: frame+1
       });
    } else {
      this.setState({
        frame: 0
       });
    }
   
    requestAnimationFrame(this.loop);
  }

  // DEBUG & TEST
  addOne = () => {
    this.setState(preState => ({
      number: preState.number + 1
    }));
  };
  // END

  render() {
    const { age, number, loop, frame, numberage } = this.state;
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
                  <BackgroundVideo path={age} number={number} loop={loop} />
                  {/* <CanvasVideo frame={frame} show={true} age={age} /> */}
                  <InteractionDragAndDrop
                    className="drag_and_drop"
                    unlockAge={() => selectAges(age)}
                    age={age}
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
