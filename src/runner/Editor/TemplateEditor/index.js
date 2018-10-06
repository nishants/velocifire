import React from 'react';
import PropTypes from 'prop-types';

import MonacoEditor from 'react-monaco-editor';

const TempalteEditor = (props)=> (
  <MonacoEditor
    language="html"
    value={props.value}
    options={props.options}
    onChange={props.onChange}
  />
);

TempalteEditor.propTypes = {
  value: PropTypes.string,
  options  : PropTypes.object,
  onChange  : PropTypes.func,
};


export default TempalteEditor;
