import types from '../actions/types';

const DEFAULT_STATE = {
	auth: false
};

export default (state=DEFAULT_STATE, action) => {
	switch (action.type) {
		// case types.CHANGE_AUTH:
		case types.SIGN_UP:
		case types.SIGN_IN:
			return {...state, auth: true};
		case types.SIGN_OUT:
			return {auth: false};
		case types.GET_QUOTE:
			return {...state, quote: action.payload}
		default:
			return state;
	}
};