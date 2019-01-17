import React from "react";
import PropTypes from "prop-types";

const ages = {
  antiquite: false,
  moyenAge: false,
  renaissance: false,
  lumiere: false,
  belleEpoque: false,
  moderne: false,
  ereNumerique: false,
  futur: false
};

export const ProgressContext = React.createContext({
  ages,
  selectAges: () => {}
});

class ProgressProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  /* eslint-disable */
  selectAges = (age) => {
    this.setState(prevState => ({
      ages: {
        ...prevState.ages,
        [age]: true
      }
    }));
  };

  state = {
    ages: ages,
    selectAges: this.selectAges
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
