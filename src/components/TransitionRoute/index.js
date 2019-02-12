import React from "react";
import PropTypes from "prop-types";

import { Route } from "react-router-dom";

import { Transition } from "..";

class TransitionRoute extends React.Component {
  static propTypes = {
    component: PropTypes.any,
    rest: PropTypes.any,
    onChangeRoute: PropTypes.func
  };

  static defaultProps = {
    component: "",
    rest: {},
    onChangeRoute: () => {}
  };

  state = {
    showed: false
  };

  componentDidMount() {
    this.setState({ showed: true });
  }

  componentDidUpdate() {
    const { showed } = this.state;
    if (showed) {
      this.showedimeout = setTimeout(() => {
        this.setState(() => ({ showed: false }));
      }, 2000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.showedimeout);
  }

  render() {
    const { component: Component, ...rest } = this.props;
    const { showed } = this.state;
    return (
      <Route
        {...rest}
        render={props => (
          <>{showed ? <Transition /> : <Component {...props} />}</>
        )}
      />
    );
  }
}

export default TransitionRoute;
