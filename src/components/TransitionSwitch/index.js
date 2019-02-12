import React from "react";
import PropTypes from "prop-types";

import { Switch } from "react-router-dom";

class TransitionSwitch extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    rest: PropTypes.any,
    onChangeRoute: PropTypes.func
  };

  static defaultProps = {
    children: "",
    rest: {},
    onChangeRoute: () => {}
  };

  state = {
    showed: false
  };

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ showed: true });
      console.log("this.props", location);
      console.log("prevProps", prevProps.location);
    }
  }

  render() {
    const { children, ...rest } = this.props;
    const { showed } = this.state;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { showed })
    );
    return <Switch {...rest}>{childrenWithProps}</Switch>;
  }
}

export default TransitionSwitch;
