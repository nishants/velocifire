import {RUNNER_ACTIONS} from './actions';

const INITIAL_STATE = {
  data: JSON.stringify({customer: {name: 'mira'}}),
  template: '<h1>hello $customer.name</h1>',
  autoUpdate: false,
  ready: false,
  compiledHTML: ''
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RUNNER_ACTIONS.EDITOR_DATA_LOADED:
    return {
      ...state,
      data: action.payload.data,
      template: action.payload.template,
      ready: true,
    };
  case RUNNER_ACTIONS.TEMPLATE_COMPILED:
    return {
      ...state,
      compiledHTML: action.payload,
    };
  case RUNNER_ACTIONS.SAVE_TEMPLATE:
    return {
      ...state,
      template: action.payload,
    };
  case RUNNER_ACTIONS.SAVE_DATA:
    return {
      ...state,
      data: action.payload,
    };

  default:
    return state;
  }
};

export default reducer;
