import merge from 'lodash/merge';

import {
  RECEIVE_BENCHES, START_LOADING_ALL_BENCHES
} from '../actions/bench_actions';

const initialState = {
  indexLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BENCHES:
      return merge({}, state, { indexLoading: false });
    case START_LOADING_ALL_BENCHES:
      return merge({}, state, { indexLoading: true });
    default:
      return state;
  }
};

export default loadingReducer;
