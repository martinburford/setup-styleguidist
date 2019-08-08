import React from 'react';
import PropTypes from 'prop-types';
import MarkDown from 'react-md-file';

/**
 * A HOC for rendering markdown files
 * @param {object} props - properties pass to and used by the component, @see propTypes
 * @param {string} props.text - The markdown as a string
 * @returns {object} - A react compatible component
 */
const MarkdownRenderer = ({ text }) => {
  const string = text.substring(text.indexOf('## ')).replace(/^#.+/g, '');

  if (!string){
    return <div />;
  }

  return <MarkDown markdown={string} nested />;
};

MarkdownRenderer.defaultProps = {
  text: '',
};

MarkdownRenderer.propTypes = {
  /** The markdown as a string */
  text: PropTypes.string,
};

export default MarkdownRenderer;
