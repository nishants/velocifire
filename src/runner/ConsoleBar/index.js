import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import style from './index.scss';

const ConsoleBar = ({onRun}) => (
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
      <button onClick={onRun}>Run</button>
    </div>
  </div>
);

ConsoleBar.propTypes = {
  onRun: PropTypes.func
};

export default CSSModules(ConsoleBar, style);
