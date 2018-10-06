import React from 'react';
import PropTypes from 'prop-types';

import MonacoEditor from 'react-monaco-editor';

const DataEditor = (props)=> (
  <MonacoEditor
    language="javascript"
    value={props.value}
    options={props.options}
    onChange={props.onChange}
  />
);

DataEditor.propTypes = {
  value: PropTypes.string,
  options  : PropTypes.object,
  onChange  : PropTypes.func,
};


export default DataEditor;
