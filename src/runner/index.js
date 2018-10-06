import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CSSModules from 'react-css-modules';

import Loader     from './Loader';
import ConsoleBar from './ConsoleBar';
import Editor     from './Editor';
import Previewer  from './Previewer';

import style from './index.scss';
import {saveData, loadEditorData} from './actions';

class Runner extends React.Component{
  constructor(props){
    super(props);
    props.dispatch(loadEditorData());
  }

  onDataChange(data) {
    this.props.dispatch(saveData(data));
  }

  render(){
    let content = <div id="runner-app">
      <ConsoleBar/>
      <Editor
        onDataChange={(data)=> this.onDataChange(data)}
      />
      <Previewer html={'<h1>This is the doc</h1>'}/>
    </div>;
    return this.props.runner.ready ? content : <Loader/>;
  }
}

Runner.propTypes = {
  dispatch: PropTypes.func,
  runner  : PropTypes.object,
};

const mapStateToProps = state => ({runner: state.runner});

const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Runner, style));
