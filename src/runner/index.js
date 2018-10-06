import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CSSModules from 'react-css-modules';

import Loader     from './Loader';
import ConsoleBar from './ConsoleBar';
import Editor     from './Editor';
import Previewer  from './Previewer';

import style from './index.scss';
import {saveData, compileTemplate, saveTemplate, loadEditorData} from './actions';

class Runner extends React.Component{
  constructor(props){
    super(props);
    props.dispatch(loadEditorData());
  }

  compileTemplate() {
    this.props.dispatch(compileTemplate({
      data: this.props.runner.data,
      template: this.props.runner.template,
    }));
  }

  onDataChange(data) {
    this.props.dispatch(saveData(data));
  }

  onTemplateChange(data) {
    this.props.dispatch(saveTemplate(data));
  }

  render(){
    const
      savedData = {
        data: this.props.runner.data,
        template: this.props.runner.template,
      },
      compiledHTML = this.props.runner.compiledHTML,
      content = <div id="runner-app">
        <ConsoleBar onRun={() => this.compileTemplate()}/>
        <Editor
          savedData={savedData}
          onTemplateChange={(data) => this.onTemplateChange(data)}
          onDataChange={(data) => this.onDataChange(data)}
        />
        <Previewer html={compiledHTML}/>
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
