import {takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';

import CONFIG from '../config';
import {RUNNER_ACTIONS, editorDataLoaded, templateCompiled} from './actions';

const
  STORAGE_KEYS = {
    SAVE_DATA: 'editor/saved-data',
    SAVE_TEMPLATE: 'editor/saved-template'
  },
  {remote, remoteHeaders} = CONFIG;

function* compileTemplate({payload}){
  const
    requestBody = {
      data: JSON.parse(payload.data),
      template: payload.template
    },
    response = yield call(axios.put, `${remote}/compile`, requestBody, {headers: remoteHeaders});

  yield put(templateCompiled(response.data));
}

function* saveData({payload}){
  localStorage.setItem(STORAGE_KEYS.SAVE_DATA, payload);
  yield [];
}

function* saveTempalateToStorage({payload}){
  localStorage.setItem(STORAGE_KEYS.SAVE_TEMPLATE, payload);
  yield [];
}

function* readEditorDataFromStorage({payload}){
  const
    data = localStorage.getItem(STORAGE_KEYS.SAVE_DATA, payload),
    template = localStorage.getItem(STORAGE_KEYS.SAVE_TEMPLATE, payload);

  yield put(editorDataLoaded(data, template));
}

export default function*  missionsSagas(){
  yield takeLatest(RUNNER_ACTIONS.COMPILE_TEMPLATE, compileTemplate);
  yield takeLatest(RUNNER_ACTIONS.SAVE_DATA, saveData);
  yield takeLatest(RUNNER_ACTIONS.SAVE_TEMPLATE, saveTempalateToStorage);
  yield takeLatest(RUNNER_ACTIONS.LOAD_EDITOR_DATA, readEditorDataFromStorage);
}
