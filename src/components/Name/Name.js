import React from 'react';
import PropTypes from 'prop-types';

const Name = ({ first }) => (
  <h4>Firstname = {first}</h4>
);

Name.propTypes = {
  /** Description of prop called first */
  first: PropTypes.string.isRequired
};

export default Name;