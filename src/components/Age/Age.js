import React from 'react';
import PropTypes from 'prop-types';

const Age = ({ age }) => (
  <h4>Age = {age}</h4>
);

Age.propTypes = {
  /** Description of prop called first */
  age: PropTypes.number.isRequired
};

export default Age;