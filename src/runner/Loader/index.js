import React from 'react';
import CSSModules from 'react-css-modules';

import style from './index.scss';

const Loader = () => (
  <div styleName='loader'>
    <i className="fa fa-spin fa-spinner"></i>
  </div>
);

export default CSSModules(Loader, style);
