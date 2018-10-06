import React from 'react';
import CSSModules from 'react-css-modules';

import style from './index.scss';

const Runner = ()=> {
  return (
    <div styleName='console-bar'>
      <div styleName='left-options'>
        <button>Output HTML</button>
        <button>Send Mail</button>
      </div>

      <div styleName='right-options'>
        <span styleName='auto-run-button'>
          <span styleName="auto-run-checkbox">
            <i className="fa fa-check"></i>
          </span>
          <label>Auto</label>
        </span>
        <button>Run</button>
      </div>
    </div>
  );
};

export default CSSModules(Runner, style);
