import React from 'react';
import CSSModules from 'react-css-modules';

import style from './index.scss';

const Previewer = (props) => (
  <div styleName='previewer'>
    <iframe src={`data:text/html;charset=utf-8,${encodeURI(props.html)}`} height="100%" width="100%">

    </iframe>
  </div>
);

export default CSSModules(Previewer, style);
