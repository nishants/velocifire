import {loadApp} from './actions';

const reducer = (state = {loaded: false}, action) => {
  switch (action.type) {
  case  loadApp :
    return {
      loaded: true,
      ...state
    };
  default:
    return state;
  }
};

export default reducer;
