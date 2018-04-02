import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
	type: RECEIVE_CURRENT_USER,
	currentUser
});

export const receiveErrors = errors => ({
	type: RECEIVE_SESSION_ERRORS,
	errors
});

export const signup = formUser => dispatch => {
	return APIUtil.signup(formUser).then(
		user => dispatch(receiveCurrentUser(user)),
		err => dispatch(receiveErrors(err.responseJSON))
	);
};

export const login = formUser => dispatch => {
	return APIUtil.login(formUser).then(
		user => dispatch(receiveCurrentUser(user)),
		err => dispatch(receiveErrors(err.responseJSON))
	);
};

// export const login = function (formUser) {
//   return function (dispatch) {
//     return APIUtil.login(formUser).then(user => (
//       dispatch(receiveCurrentUser(user))
//     )).catch(err => receiveErrors(err.responseJSON));
//   }
// }
//
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

export const logout = () => dispatch => {
	return APIUtil.logout().then(
		user => dispatch(receiveCurrentUser(null)),
		err => dispatch(receiveErrors(err.responseJSON))
	);
};
