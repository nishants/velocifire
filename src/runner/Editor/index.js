import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import style from './index.scss';
import DataEditor from './DataEditor';
import TemplateEditor from './TemplateEditor';
import editorConfig from './edito-config';

const Editor = ({onDataChange, onTemplateChange, savedData}) => (
  <div styleName="editor-section">
    <div styleName="data-editor">
      <DataEditor
        value={savedData.data}
        options={editorConfig}
        onChange={onDataChange}
      />
    </div>
    <div styleName="template-editor">
      <TemplateEditor
        value={savedData.template}
        options={editorConfig}
        onChange={onTemplateChange}
      />
    </div>
  </div>
);

Editor.propTypes = {
  onDataChange: PropTypes.func,
  onTemplateChange: PropTypes.func,
  savedData: PropTypes.object
};

export default CSSModules(Editor, style);
