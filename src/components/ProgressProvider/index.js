import React from "react";
import PropTypes from "prop-types";

const ages = {
  antiquite: false,
  moyenage: false,
  renaissance: false,
  lumiere: false,
  belleepoque: false,
  moderne: false,
  erenumerique: false,
  futur: false
};

const agesvid = {
  antiquite: 1,
  moyenage: 1,
  renaissance: 1,
  lumiere: 1,
  belleepoque: 1,
  moderne: 1,
  erenumerique: 1,
  futur: 1
};

export const ProgressContext = React.createContext({
  ages,
  agesvid,
  selectAges: () => {},
  updateVideo: () => {}
});

class ProgressProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  /* eslint-disable */
  selectAges = age => {
    this.setState(prevState => ({
      ages: {
        ...prevState.ages,
        [age]: true
      }
    }));
  };

  updateVideo = age => {
    this.setState(prevState => ({
      agesvid: {
        ...prevState.agesvid,
        [age]: this.state.agesvid[age] + 1
      }
    }));
  };

  state = {
    ages: ages,
    agesvid: agesvid,
    selectAges: this.selectAges,
    updateVideo: this.updateVideo
  };
  /* eslint-enable */

  render() {
    const { children } = this.props;
    return (
      <ProgressContext.Provider value={this.state}>
        {children}
      </ProgressContext.Provider>
    );
  }
}

export default ProgressProvider;
