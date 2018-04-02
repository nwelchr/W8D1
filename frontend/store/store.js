import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

// const thunk = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//
//       if (typeof action === 'function') {
//         return action(dispatch, getState);
//       }
//       return next(action);
//     }
//   }
// };

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
