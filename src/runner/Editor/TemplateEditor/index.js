import React from 'react';

import MonacoEditor from 'react-monaco-editor';

const DataEditor = (props)=> (
  <MonacoEditor
    language="html"
    value={props.code}
    options={props.options}
    onChange={props.onChange}
    editorDidMount={props.editorDidMount}
  />
);

export default DataEditor;