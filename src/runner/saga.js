import {takeLatest, put} from 'redux-saga/effects';
import {RUNNER_ACTIONS, editorDataLoaded} from './actions';

const STORAGE_KEYS = {
  SAVE_DATA: 'editor/saved-data',
  SAVE_TEMPLATE: 'editor/saved-data'
};

function* saveData({payload}){
  localStorage.setItem(STORAGE_KEYS.SAVE_DATA, payload);
  yield [];
}

function* readEditorDataFromStorage({payload}){
  const
    data = localStorage.getItem(STORAGE_KEYS.SAVE_DATA, payload),
    template = localStorage.getItem(STORAGE_KEYS.SAVE_TEMPLATE, payload);

  yield put(editorDataLoaded(data, template));
}

export default function*  missionsSagas(){
  yield takeLatest(RUNNER_ACTIONS.SAVE_DATA, saveData);
  yield takeLatest(RUNNER_ACTIONS.LOAD_EDITOR_DATA, readEditorDataFromStorage);
}
