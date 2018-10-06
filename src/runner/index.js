import React from 'react';
import CSSModules from 'react-css-modules';

import ConsoleBar from './ConsoleBar';
import Editor     from './Editor';
import Previewer  from './Previewer';

import style from './index.scss';

const Runner = () => {
  return (
    <div id="runner-app">
      <ConsoleBar/>
      <Editor/>
      <Previewer html={'<h1>This is the doc</h1>'}/>
    </div>
  );
};

export default CSSModules(Runner, style);
