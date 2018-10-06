import React from 'react';

import MonacoEditor from 'react-monaco-editor';

const DataEditor = (props)=> (
  <MonacoEditor
    language="json"
    value={props.value}
    options={props.options}
    onChange={props.onChange}
    editorDidMount={props.editorDidMount}
  />
);

export default DataEditor;
