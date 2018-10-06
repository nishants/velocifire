export const RUNNER_ACTIONS = {
  SAVE_DATA: 'RUNNER/SAVE_DATA',
  SAVE_TEMPLATE: 'RUNNER/SAVE_TEMPLATE',

  LOAD_EDITOR_DATA: 'RUNNER/LOAD_EDITOR_DATA',
  EDITOR_DATA_LOADED: 'RUNNER/EDITOR_DATA_LOADED'
};

export const saveData = payload => ({
  type: RUNNER_ACTIONS.SAVE_DATA,
  payload
});

export const saveTemplate = payload => ({
  type: RUNNER_ACTIONS.SAVE_TEMPLATE,
  payload
});

export const loadEditorData = () => ({type: RUNNER_ACTIONS.LOAD_EDITOR_DATA});

export const editorDataLoaded = (data, template) => ({
  type: RUNNER_ACTIONS.EDITOR_DATA_LOADED,
  payload: {data, template}
});
