import React from 'react';
import CSSModules from 'react-css-modules';

import style from './index.scss';
import DataEditor from './DataEditor';
import TemplateEditor from './TemplateEditor';
import editorConfig from './edito-config';

const Editor = () => (
  <div styleName="editor-section">
    <div styleName="data-editor">
      <DataEditor
        value={''}
        options={editorConfig}
        onChange={(code)=> console.log('data edited ', code)}
        editorDidMount={()=> console.log('data editor loaded')}
      />
    </div>
    <div styleName="template-editor">
      <TemplateEditor
        value={''}
        options={editorConfig}
        onChange={(code)=> console.log('template edited ', code)}
        editorDidMount={()=> console.log('template editor loaded')}
      />
    </div>
  </div>
);

export default CSSModules(Editor, style);
