import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../StyleguideRenderer/scss/';

class Wrapper extends Component {
  render() {
    return this.props.children
  }
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper;
