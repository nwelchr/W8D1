import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';

import { fetchBenches } from './actions/bench_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


	// TESTING START
	window.getState = store.getState;
	window.dispatch = store.dispatch;
  window.fetchBenches = fetchBenches;
	// TESTING END

	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store} />, root);
});
